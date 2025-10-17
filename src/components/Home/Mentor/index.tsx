"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Mentor = () => {
  const slidesToShow = Math.min(3, MentorData.length); // show max 3 slides or less if data < 3

  const settings = {
    dots: false,
    infinite: MentorData.length > slidesToShow, // only infinite if enough items
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: MentorData.length > 1, // autoplay only if more than 1 item
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, MentorData.length),
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: Math.min(2, MentorData.length),
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-deepSlate" id="mentor">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative">
        <h2 className="text-midnight_text text-5xl font-semibold">
          Meet with our <br /> team.
        </h2>

        <Slider {...settings}>
          {MentorData.map((item, i) => (
            <div key={i}>
              <div className="m-3 py-14 md:my-10 text-center">
                <div className="relative">
                  <Image
                    src={`${item.imgSrc}`}
                    alt="user-image"
                    width={306}
                    height={306}
                    className="inline-block m-auto"
                  />
                  
                </div>
                <div className="-mt-10">
                  <h3 className="text-2xl font-semibold text-lightblack text-black">{item.name}</h3>
                  <h4 className="text-lg font-normal text-lightblack pt-2 opacity-50 text-gray-700">
                    {item.profession}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Mentor;
