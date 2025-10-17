"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serviceDataHome } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Services = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    };

    return (
        <section id="services">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                {/* Header */}
                <div className="sm:flex justify-between items-center mb-20">
                    <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">
                        Our Services
                    </h2>
                    <Link
                        href="/Services"
                        className="text-primary text-lg font-medium hover:tracking-widest duration-500"
                    >
                        Explore services&nbsp;&gt;&nbsp;
                    </Link>
                </div>

                {/* Slider */}
                <Slider {...settings}>
                    {serviceDataHome.map((service, i) => (
                        <div key={i}>
                            <div className="bg-white m-3 mb-12 px-3 pt-3 pb-6 shadow-course-shadow rounded-2xl min-h-[520px] flex flex-col">
                                
                                {/* Image */}
                                <div className="relative rounded-3xl overflow-hidden">
                                    <Image
                                        src={`${getImagePrefix()}${service.imgSrc}`}
                                        alt={service.title}
                                        width={389}
                                        height={262}
                                        className="m-auto object-cover w-full h-[220px] rounded-2xl"
                                    />
                                </div>

                                {/* Content */}
                                <div className="px-3 pt-6 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-black mb-4">
                                        {service.title}
                                    </h3>

                                    {/* Fixed description area */}
                                    <p className="text-base font-normal text-black/75 mb-6 flex-1 line-clamp-3">
                                        {service.description}
                                    </p>

                                    {/* Button pinned to bottom */}
                                    <button className="bg-primary text-white px-6 py-3 rounded-full text-base font-medium hover:bg-primary/90 transition mt-auto">
                                        See More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Services;