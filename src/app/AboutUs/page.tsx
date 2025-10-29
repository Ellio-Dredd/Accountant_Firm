// "use client";
// import React from "react";

// const AboutUs = () => {
//   return (
//     <section id="AboutUs" className="bg-gray-50 py-20 mt-[70px]">
//       <div className="container mx-auto max-w-screen-lg px-4 space-y-12">

//         {/* About Us */}
//         <div className="bg-white shadow-lg rounded-lg p-8">
//           <h2 className="text-3xl font-semibold text-center text-midnight_text mb-4">
//             About Us
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Probity Accounts was founded by "ape client" in 2005 to provide
//             accounting and tax services to small and medium-sized businesses.
//             Over the years, we have grown to become one of the leading firms in the industry,
//             providing a wide range of services to clients across various sectors to help maintain
//             their financial health and compliance.
//           </p>
//         </div>

//         {/* Mission */}
//         <div className="bg-white shadow-lg rounded-lg p-8">
//           <h2 className="text-3xl font-semibold text-center text-midnight_text mb-4">
//             Our Mission
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             In line with our core values of integrity, professionalism, and client-centricity,
//             our mission is to provide high-quality accounting and tax services that help our clients
//             achieve their financial goals. We are committed to building long-term relationships
//             based on trust, transparency, and mutual respect.
//           </p>
//         </div>

//         {/* Vision */}
//         <div className="bg-white shadow-lg rounded-lg p-8">
//           <h2 className="text-3xl font-semibold text-center text-midnight_text mb-4">
//             Our Vision
//           </h2>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Our vision is to be the most trusted and respected accounting and tax services provider
//             in the region, known for our expertise, innovation, and commitment to excellence. We aim
//             to continuously improve our services and processes to meet the evolving needs of our clients
//             and the industry. We envision a future where Probity Accounts is recognized as a leader
//             in the accounting profession, setting the standard for quality and integrity.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutUs;

"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section
      id="AboutUs"
      className="bg-gradient-to-b from-blue-50 to-white py-20"
    >
      <div className="container mx-auto max-w-screen-lg px-4 space-y-16 py-12">
        {/* About Us */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center transition-transform transform hover:scale-[1.02] duration-500">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Probity accountants is an Accounting, Auditing ,Tax Consultation and
            Other Professional Services providing firm in Colombo and Chilaw,
            managed by Professional Chartered Accountants and registered
            auditors who are experts in all aspects of auditing, accounting ,
            taxation and secretariat services. We provide a comprehensive range
            of professional services designed to support your business success.
            We value close, trusted relationships with our clients and are
            guided by our core principle — striving for excellence in everything
            we do.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center transition-transform transform hover:scale-[1.02] duration-500">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-blue-600">Mission</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Our mission is to deliver reliable and value-driven accounting,
            audit, and advisory services founded on the principle of honesty. We
            aim to build lasting relationships with clients by providing
            accurate insights, ethical guidance, and innovative financial
            solutions that support informed decision-making and long-term
            success.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center transition-transform transform hover:scale-[1.02] duration-500">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-blue-600">Vision</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            To be a trusted and leading Chartered Accountancy firm recognized
            for integrity, professionalism, and excellence — empowering
            businesses to achieve sustainable growth through honest and
            transparent financial practices.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-12 pl-30 transition-transform transform hover:scale-[1.02] duration-500 ">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
            Our <span className="text-blue-600">Values</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl ">
            • Strive for excellence in all we do. <br />
            • Highly ethical and professional relationships. <br />
            • Seek out best practices. <br />
            • Honestly and Integrity. <br />
            • Promote positive working relationship and encourage teamwork.{" "}
            <br />
            • Caring for our clients, people and environment. <br />
            • Progressive and Innovative. <br />
            • Respect and Recognition.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
