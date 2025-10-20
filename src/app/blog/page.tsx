"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Blog } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 -right-5 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20 cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <Icon
          icon="solar:arrow-right-linear"
          className="text-2xl text-primary"
        />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 -left-5 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-20 cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <Icon
          icon="solar:arrow-left-linear"
          className="text-2xl text-primary"
        />
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex bg-white justify-center items-center h-screen text-lg font-semibold text-gray-700">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* ===============================
          Section 1: Blog Highlights (Slider)
      =============================== */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <h1 className="flex items-center justify-center font-semibold text-3xl mb-10 text-gray-900">
            Blog Highlights
          </h1>

          <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center transform -translate-y-1/2 md:hidden z-10 pointer-events-none">
            <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-90">
              <Icon
                icon="solar:arrow-left-linear"
                className="text-primary text-2xl"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-90">
              <Icon
                icon="solar:arrow-right-linear"
                className="text-primary text-2xl"
              />
            </div>
          </div>

          <Slider {...sliderSettings}>
            {blogs.map((blog) => (
              <div key={blog.id} className="px-3 pb-10">
                <div
                  className="bg-white rounded-2xl shadow-course-shadow hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between"
                  style={{ height: "520px" }}
                >
                  <div className="relative h-48 flex items-center justify-center overflow-hidden">
                    {blog.image_url ? (
                      <Image
                        src={blog.image_url}
                        alt={blog.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                        <Icon
                          icon="solar:document-text-linear"
                          className="text-white text-5xl"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {blog.summary ||
                          blog.content?.substring(0, 150) + "..."}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        Published{" "}
                        {new Date(blog.created_at || "").toLocaleDateString()}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={`#post-${blog.id}`}
                        scroll={true}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 text-sm"
                      >
                        Read Full Post
                        <Icon
                          icon="solar:arrow-right-linear"
                          className="text-lg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ===============================
          Section 2: All Blog Posts (Full view)
      =============================== */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:max-w-screen-lg">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            All Blog Posts
          </h2>

          {blogs.map((blog) => (
            <article
              key={blog.id}
              id={`post-${blog.id}`}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md mb-12 p-6 transition-all duration-300 scroll-mt-24"
            >
              {blog.image_url && (
                <Image
                  src={blog.image_url}
                  alt={blog.title}
                  width={900}
                  height={400}
                  className="rounded-xl mb-5 w-full object-cover max-h-96"
                />
              )}
              <h2 className="text-2xl font-semibold mb-3 text-primary">
                {blog.title}
              </h2>
              <div className="text-gray-500 text-sm mb-5">
                Published {new Date(blog.created_at || "").toLocaleDateString()}
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                {blog.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
