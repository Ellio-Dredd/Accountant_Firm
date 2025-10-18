"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TruestedCompanies } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 700, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="text-center py-10 bg-white">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-midnight_text tracking-wide">
          Our Valued Clients
        </h2>
        <div className="py-10 ">
          <Slider {...settings}>
            {TruestedCompanies.map((item, i) => (
              <div key={i} className="flex justify-center items-center">
                {/* <Image
                  src={`${getImagePrefix()}${item.imgSrc}`}
                  alt={item.imgSrc}
                  width={116}
                  height={36}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                /> */}
                <h1 className="grayscale hover:grayscale-0 transition-all duration-600 text-gray-500">{item.heading}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Companies;
