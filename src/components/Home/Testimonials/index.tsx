"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TestimonialData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import Link from "next/link";

const Testimonial = () => {
  const slidesToShow = Math.min(3, TestimonialData.length);

  const settings = {
    dots: TestimonialData.length > 1,
    dotsClass: "slick-dots",
    infinite: TestimonialData.length > slidesToShow,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: TestimonialData.length > 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, TestimonialData.length),
          slidesToScroll: 1,
          infinite: TestimonialData.length > 3,
          dots: TestimonialData.length > 3 ? false : true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: Math.min(2, TestimonialData.length),
          slidesToScroll: 1,
          infinite: TestimonialData.length > 2,
          dots: TestimonialData.length > 2 ? false : true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <Icon
              key={`full-${i}`}
              icon="tabler:star-filled"
              className="text-yellow-500 text-xl inline-block"
            />
          ))}
        {halfStars > 0 && (
          <Icon
            icon="tabler:star-half-filled"
            className="text-yellow-500 text-xl inline-block"
          />
        )}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <Icon
              key={`empty-${i}`}
              icon="tabler:star-filled"
              className="text-gray-400 text-xl inline-block"
            />
          ))}
      </>
    );
  };

  return (
    <section id="testimonial">
      <div className="container mx-auto lg:w-30%  md:max-w-screen-md px-4">
        <Slider {...settings}>
          {TestimonialData.map((item, i) => (
            <div key={i}>
              <div
                className={`bg-white rounded-2xl m-4 p-5 my-20 relative hover:bg-slate-100  ${
                  i % 2
                    ? "shadow-testimonial-shadow2"
                    : "shadow-testimonial-shadow1"
                }`}
              >
                <div className="absolute top-[-45px]">
                  <Image
                    src={`${getImagePrefix()}${item.imgSrc}`}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="inline-block"
                  />
                </div>
                <h4 className="text-base font-normal text-darkgray my-4 text-gray-800">
                  {item.comment}
                </h4>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2 text-gray-800">
                      {item.name}
                    </h3>
                    <h3 className="text-sm font-normal text-lightgray pb-2 text-gray-800">
                      {item.profession}
                    </h3>
                  </div>

                  <div className="text-center mt-10">
                    <Link href="/our-team">
                    <button className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-900 hover:via-blue-800 hover:to-blue-700 transition-all duration-300">
                        Meet Our Team
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
