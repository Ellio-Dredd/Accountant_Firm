"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section id="AboutUs" className="bg-gray-50 py-20 mt-[70px]">
      <div className="container mx-auto max-w-screen-lg px-4 space-y-12">

        {/* About Us */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Probity Accounts was founded by "ape client" in 2005 to provide
            accounting and tax services to small and medium-sized businesses.
            Over the years, we have grown to become one of the leading firms in the industry,
            providing a wide range of services to clients across various sectors to help maintain
            their financial health and compliance.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            In line with our core values of integrity, professionalism, and client-centricity,
            our mission is to provide high-quality accounting and tax services that help our clients
            achieve their financial goals. We are committed to building long-term relationships
            based on trust, transparency, and mutual respect.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our vision is to be the most trusted and respected accounting and tax services provider
            in the region, known for our expertise, innovation, and commitment to excellence. We aim
            to continuously improve our services and processes to meet the evolving needs of our clients
            and the industry. We envision a future where Probity Accounts is recognized as a leader
            in the accounting profession, setting the standard for quality and integrity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
