"use client";

import Image from "next/image";
import Link from "next/link";
import { serviceData } from "@/app/api/data";

const ServicesPage = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-900">
          Our Services
        </h1>

        {/* Service Blocks */}
        {serviceData.map((service, index) => (
          <div
            key={service.slug}
            className={`flex flex-col md:flex-row items-center justify-between gap-12 mb-24 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={service.imgSrc}
                alt={service.title}
                width={500}
                height={350}
                className="rounded-2xl object-cover shadow-md w-full h-[300px]"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>
              

              {/* See More Button */}
              <Link
                href={`/services/${service.slug}`}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
