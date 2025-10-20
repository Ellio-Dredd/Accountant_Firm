"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { FC } from "react";
import { Facebook } from "lucide-react";

const ContactUs: FC = () => {
    return (
        <section
            id="contactus"
            className="min-h-screen bg-white py-16 mt-[70px]"
        >
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl font-bold text-center text-midnight_text mb-12">
                    Contact Us
                </h2>

                {/* TOP: Map + Contact Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* LEFT: Google Map */}
                    <div className="rounded-lg shadow-lg overflow-hidden w-full h-[300px] sm:h-[400px] lg:h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126733.83806012355!2d79.907707!3d6.958207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2583cae3e12e3%3A0x4b0b54ae82706a3!2sCity%20EDGE%20Residencies%20-%20CK%20HOMES!5e0!3m2!1sen!2sus!4v1760610485027!5m2!1sen!2sus"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* RIGHT: Contact Details */}
                    <div className="bg-base-100 shadow-lg rounded-lg p-6 flex flex-col justify-center">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-primary mb-2">Address</h3>
                            <p>No.310, City Edge Residencies, Waragoda Road, Kelaniya</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-primary mb-2">Contact Number</h3>
                            <p>011 299 3549</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-primary mb-2">WhatsApp</h3>
                            <a
                                href="https://wa.me/760325720"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline break-all"
                            >
                                94 760 325 720
                            </a>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-primary mb-2">Follow Us</h3>
                            <a
                                href="https://www.facebook.com/share/19jkKFShpe/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2  hover:underline"
                            >
                                <Facebook className="w-5 h-5" />
                                Facebook
                            </a>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-primary mb-2">Wroking hours</h3>
                            <p>WeekDays :- 09:00 - 17:00</p>
                            <p>Saturday :- 09:00 - 13:00</p>
                            <p>Sunday :- Closed</p>
                        </div>
                    </div>
                </div>

                {/* BOTTOM: Contact Form */}
                <form className="bg-base-200 border border-base-300 rounded-lg shadow-lg p-6 space-y-4 w-full max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold text-center text-primary mb-4">
                        Send us a Message
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label font-semibold text-primary">First Name</label>
                            <input type="text" className="input input-bordered w-full" placeholder="First name" />
                        </div>
                        <div>
                            <label className="label font-semibold text-primary">Last Name</label>
                            <input type="text" className="input input-bordered w-full" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label font-semibold text-primary">Email</label>
                            <input type="email" className="input input-bordered w-full" placeholder="Email" />
                        </div>
                        <div>
                            <label className="label font-semibold text-primary">Phone Number</label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                className="input input-bordered w-full"
                                placeholder="e.g., 1234567890"
                                pattern="[0-9]{10}"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="label font-semibold text-primary">Subject</label>
                        <input type="text" className="input input-bordered w-full" placeholder="Subject" />
                    </div>

                    <div>
                        <label className="label font-semibold text-primary">Message</label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                    </div>

                    <button className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
