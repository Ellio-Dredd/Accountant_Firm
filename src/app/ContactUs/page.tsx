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

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      const { error } = await res.json();
      setError(error || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="contactus" className="w-full bg-[#f7f7f7] py-16 mt-[70px]">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mt-20 mb-16 text-gray-900">
          Contact Us
        </h1>

        {/* Top Section: Map + Info */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 mb-24">
          {/* Left: Google Map */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126733.83806012355!2d79.907707!3d6.958207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2583cae3e12e3%3A0x4b0b54ae82706a3!2sCity%20EDGE%20Residencies%20-%20CK%20HOMES!5e0!3m2!1sen!2sus!4v1760610485027!5m2!1sen!2sus"
              className="w-full h-full min-h-[350px] md:min-h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right: Contact Details */}
          <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
            <div className="space-y-6 text-gray-800 flex-1">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                <p>No.310, City Edge Residencies, Waragoda Road, Kelaniya</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Number</h3>
                <p>011 299 3549</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/760325720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  +94 760 325 720
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow Us</h3>
                <a
                  href="https://www.facebook.com/share/19jkKFShpe/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:underline"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Working Hours</h3>
                <p>Weekdays: 09:00 – 17:00</p>
                <p>Saturday: 09:00 – 13:00</p>
                <p>Sunday : closed</p>
              </div>
            </div>
          </div>
        </div>


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
