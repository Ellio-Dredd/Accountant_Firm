"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section id="AboutUs" className="bg-deepSlate py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 space-y-8">
        
        {/* About Us */}
        <div className="card w-full bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl font-bold text-primary">
              About Us
            </h2>
            <p className="text-left text-base leading-relaxed">
              Probity Accounts was founded by "ape client" in 2005 to provide
              accounting and tax services to small and medium-sized businesses.
              Over the years, we have grown to become one of the leading Something. and now providing a wide range of services to clients across various industries, to help maintain their financial health and compliance.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="card w-full bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl font-bold text-primary">
              Our Mission
            </h2>
            <p className="text-left text-base leading-relaxed">
              In line with our core values of integrity, professionalism, and client-centricity, our mission is to provide high-quality accounting and tax services that help our clients achieve their financial goals. We are committed to building long-term relationships with our clients based on trust, transparency, and mutual respect.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="card w-full bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl font-bold text-primary">
              Our Vision
            </h2>
            <p className="text-left text-base leading-relaxed">
            Our vision is to be the most trusted and respected accounting and tax services provider in the region, known for our expertise, innovation, and commitment to excellence. We aim to continuously improve our services and processes to meet the evolving needs of our clients and the industry.
            We envision a future where Probity Accounts is recognized as a leader in the accounting profession, setting the standard for quality and integrity.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
