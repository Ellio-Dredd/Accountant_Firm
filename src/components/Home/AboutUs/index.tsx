"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section id="AboutUs" className="bg-white py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 space-y-8">
        {/* About Us */}
        <div className="card w-full bg-base-100 bg-white shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="text-left text-base leading-relaxed text-gray-600">
              Probity accountants is an Accounting, Auditing ,Tax Consultation
              and Other Professional Services providing firm in Sri Lanka,
              managed by Professional Chartered Accountants and registered
              auditors who are experts in all aspects of auditing, accounting ,
              taxation and secretariat services. We provide a comprehensive
              range of professional services designed to support your business
              success. We value close, trusted relationships with our clients
              and are guided by our core principle — striving for excellence in
              everything we do.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="card w-full bg-base-100 bg-white shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-left text-base leading-relaxed text-gray-600">
              Our mission is to deliver reliable and value-driven accounting,
              audit, and advisory services founded on the principle of honesty.
              We aim to build lasting relationships with clients by providing
              accurate insights, ethical guidance, and innovative financial
              solutions that support informed decision-making and long-term
              success.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="card w-full bg-base-100 bg-white shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="text-left text-base leading-relaxed text-gray-600">
              To be a trusted and leading Chartered Accountancy firm recognized
              for integrity, professionalism, and excellence — empowering
              businesses to achieve sustainable growth through honest and
              transparent financial practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
