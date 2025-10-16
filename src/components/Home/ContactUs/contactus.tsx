"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { FC } from "react";
import { Facebook } from "lucide-react";

const ContactUs: FC = () => {
    return (
        <section
            id="contactus"
            className="min-h-screen flex items-center justify-center bg-base-100 py-12"
        >
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Right: Google Map */}
                <div className="flex justify-center lg:justify-end">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126733.83806012355!2d79.907707!3d6.958207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2583cae3e12e3%3A0x4b0b54ae82706a3!2sCity%20EDGE%20Residencies%20-%20CK%20HOMES!5e0!3m2!1sen!2sus!4v1760610485027!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-md"
                    ></iframe>
                </div>

                {/* Left: Contact Form */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 shadow-lg">
                    <legend className="fieldset-legend text-lg font-semibold text-center">
                        Contact Us via E-mail
                    </legend>

                    <label className="label text-base font-semibold text-primary">First Name</label>
                    <input type="text" className="input input-bordered w-full" placeholder="First name" />

                    <label className="label text-base font-semibold text-primary">Last Name</label>
                    <input type="text" className="input input-bordered w-full" placeholder="Last Name" />

                    <label className="label text-base font-semibold text-primary">Email</label>
                    <input type="email" className="input input-bordered w-full" placeholder="Email" />

                    <label className="label text-base font-semibold text-primary">Phone Number</label>
                    <input type="text" className="input input-bordered w-full" placeholder="Phone number" />

                    <label className="label text-base font-semibold text-primary">Subject</label>
                    <input type="text" className="input input-bordered w-full" placeholder="Subject" />

                    <label className="label text-base font-semibold text-primary">Message</label>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>

                    <button className="btn btn-primary mt-4 w-full">Send Message</button>
                </fieldset>

                {/* Probity Contact Details */}
                <div className="card w-full bg-base-100 shadow-sm justify-center">
                    <div className="card-body">
                        <h2 className="card-title text-center text-2xl font-bold text-primary">Address</h2>
                        <p className="text-left text-base leading-relaxed">
                            No.310, City Edge Residencies, Waragoda Road, Kelaniya
                        </p>
                    </div>

                    <div className="card-body">
                        <h2 className="card-title text-center text-2xl font-bold text-primary">
                            Contact Number
                        </h2>
                        <p className="text-left text-base leading-relaxed">011 299 3549</p>
                    </div>

                    <div className="card-body">
                        <h2 className="card-title text-center text-2xl font-bold text-primary">WhatsApp</h2>
                        <a
                            href="https://wa.me/760325720"
                            className="text-left text-base leading-relaxed"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            94 760 325 720
                        </a>
                    </div>

                    <div className="card-body">
                        <h2 className="card-title text-center text-2xl font-bold text-primary">Follow Us</h2>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-start"
                        >
                            <Facebook className="w-6 h-6" style={{ color: "#6556FF" }} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
