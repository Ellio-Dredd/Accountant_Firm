import React, { useState, useEffect } from "react";

const BlogForm = ({ onSubmit, editingBlog }) => {
  const [form, setForm] = useState({ header: "", description: "" });

  useEffect(() => {
    if (editingBlog) setForm(editingBlog);
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.header && form.description) {
      onSubmit(form);
      setForm({ header: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
      <input
        type="text"
        placeholder="Header"
        value={form.header}
        onChange={(e) => setForm({ ...form, header: e.target.value })}
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border p-2 rounded"
      />
      <button className="bg-blue-500 text-white p-2 rounded">
        {editingBlog ? "Update" : "Add"} Blog
      </button>
    </form>
  );
};

export default BlogForm;
