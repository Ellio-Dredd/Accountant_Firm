"use client";
import React, { FC, useState } from "react";
import { Facebook } from "lucide-react";

const ContactUs: FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSent(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

  //   const res = await fetch("/api/send-email", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });

  //   if (res.ok) {
  //     setSent(true);
  //     form.reset();
  //   } else {
  //     const { error } = await res.json();
  //     setError(error || "Something went wrong.");
  //   }

  //   setLoading(false);
  // };
 //hello
  try {
    const res = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let result;
    try {
      result = await res.json(); // try to parse JSON
    } catch {
      result = {};
    }

    if (res.ok && result.success) {
      setSent(true);
      form.reset();
    } else {
      setError(result.error || `Failed to send message. Status: ${res.status}`);
    }
  } catch (err: any) {
    console.error(err);
    setError(err.message || "Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contactus" className="w-full bg-[#fffdfd] py-16 mt-[0px]">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mt-20 mb-16 text-gray-900">
          Contact Us
        </h1>

        {/* Bottom Section: Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full border border-gray-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className=" text-gray-900 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-800 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className=" text-gray-900 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-800 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className=" text-gray-900 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-900 block font-medium  mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="text-gray-900 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-800 mb-1">Message</label>
              <textarea
                name="message"
                required
                className="text-gray-900 w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-600 text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-600 text-center mt-2">❌ {error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
