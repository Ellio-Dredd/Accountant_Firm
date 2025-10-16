"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Blog } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";

export default function BlogHome() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(20);
      if (!error && data) setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-primary">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 pt-20">
      {/* ===============================
          Section 1: Blog Preview
      =============================== */}
      <section className="py-10 sm:py-14 border-b border-base-300">
        <div className="container mx-auto px-4 sm:px-6 lg:max-w-screen-xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">
            Latest Blog Highlights
          </h1>

          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-2 sm:mx-0">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`#post-${blog.id}`}
                scroll={true}
                className="bg-white w-64 sm:w-72 flex-shrink-0 mx-2 sm:mr-6 rounded-2xl shadow-course-shadow hover:shadow-xl transition-shadow snap-start"
              >
                {blog.image_url && (
                  <Image
                    src={blog.image_url}
                    alt={blog.title}
                    width={300}
                    height={180}
                    className="rounded-t-2xl object-cover h-40 sm:h-44 w-full"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-black line-clamp-2 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {blog.summary}
                  </p>
                  <button className="mt-4 btn btn-primary btn-sm w-full text-black">
                    Read Post
                  </button>
                </div>
              </Link>
            ))}
            <div className="w-4 sm:w-6 flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* ===============================
          Section 2: Full Blog Posts
      =============================== */}
      <section className="py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:max-w-screen-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-white">
            All Blog Posts
          </h2>

          {blogs.map((blog) => (
            <article
              key={blog.id}
              id={`post-${blog.id}`}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-course-shadow mb-10 sm:mb-14 p-5 sm:p-8 scroll-mt-24"
            >
              {blog.image_url && (
                <Image
                  src={blog.image_url}
                  alt={blog.title}
                  width={900}
                  height={400}
                  className="rounded-2xl mb-4 sm:mb-6 w-full object-cover max-h-60 sm:max-h-96"
                />
              )}
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary">
                {blog.title}
              </h2>
              <div className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
                Published {new Date(blog.created_at || "").toLocaleDateString()}
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
