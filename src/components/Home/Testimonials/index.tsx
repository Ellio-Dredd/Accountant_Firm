"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TestimonialData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                

                <div className="card w-200 bg-base-100 card-lg shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">About us</h2>
                        <p>Probity accounts about us</p>
                    </div>
                </div>

                <div className="card w-200 bg-base-100 card-lg shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Our mission</h2>
                        <p>Probity accounts missipon</p>
                    </div>
                </div>

                <div className="card w-200 bg-base-100 card-lg shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Our Vision</h2>
                        <p>Probity accounts vision</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;
