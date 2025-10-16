"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";


const contactus = () => {


    return (
        <section id="testimonial">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Contact us via E-mail</legend>

                    <label className="label">First Name</label>
                    <input type="text" className="input" placeholder="First name" />

                    <label className="label">Last Name</label>
                    <input type="text" className="input" placeholder="Last Name" />

                    <label className="label">Email</label>
                    <input type="text" className="input" placeholder="Email" />

                    <label className="label">Phone number</label>
                    <input type="text" className="input" placeholder="Phone number" />

                    <label className="label">Subject</label>
                    <input type="text" className="input" placeholder="Subject" />

                    <label className="label">Message</label>
                    <input type="textarea" className="input" placeholder="Message" />
                </fieldset>
            </div>
        </section>
    );
};

export default contactus;
