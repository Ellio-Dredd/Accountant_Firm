import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const AdminBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    slug: "",
    image_url: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) navigate("/admin/login");
    };
    checkUser();
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("id", { ascending: false });
    if (!error) setBlogs(data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("blogs").insert([form]);
    if (error) alert(error.message);
    else {
      setForm({ title: "", summary: "", content: "", slug: "", image_url: "" });
      fetchBlogs();
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setForm({ ...blog });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("blogs").update(form).eq("id", editingBlog.id);
    if (!error) {
      setEditingBlog(null);
      setForm({ title: "", summary: "", content: "", slug: "", image_url: "" });
      fetchBlogs();
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await supabase.from("blogs").delete().eq("id", id);
    fetchBlogs();
  };

  const handleCancel = () => {
    setEditingBlog(null);
    setForm({ title: "", summary: "", content: "", slug: "", image_url: "" });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">🛠 Admin Blog Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Form Card */}
      <form
        onSubmit={editingBlog ? handleUpdate : handleAdd}
        className="bg-white rounded-2xl shadow-md p-6 max-w-4xl mx-auto mb-10"
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          {editingBlog ? "✏️ Edit Blog" : "➕ Add New Blog"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <input
            type="text"
            name="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <input
          type="text"
          name="summary"
          value={form.summary}
          onChange={handleChange}
          placeholder="Summary"
          className="border rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />

        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          className="border rounded-lg p-3 w-full mb-4 h-28 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="text"
          name="image_url"
          value={form.image_url}
          onChange={handleChange}
          placeholder="Image URL"
          className="border rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className={`px-5 py-2 rounded-lg shadow text-white transition ${
              editingBlog ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {editingBlog ? "Update Blog" : "Add Blog"}
          </button>
          {editingBlog && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-5 py-2 rounded-lg shadow text-white bg-gray-400 hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Blog Table */}
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-md divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-gray-600">ID</th>
              <th className="p-3 text-left text-gray-600">Title</th>
              <th className="p-3 text-left text-gray-600">Summary</th>
              <th className="p-3 text-left text-gray-600">Slug</th>
              <th className="p-3 text-left text-gray-600">Image</th>
              <th className="p-3 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {blogs.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No blogs found
                </td>
              </tr>
            )}
            {blogs.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50 transition">
                <td className="p-3 text-gray-700">{b.id}</td>
                <td className="p-3 font-semibold text-gray-800">{b.title}</td>
                <td className="p-3 text-gray-600">{b.summary}</td>
                <td className="p-3 text-gray-500">{b.slug}</td>
                <td className="p-3">
                  {b.image_url ? (
                    <img
                      src={b.image_url}
                      alt="Blog"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  ) : (
                    "—"
                  )}
                </td>
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(b)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(b.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlogPage;
