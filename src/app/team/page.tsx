"use client";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import AboutUs from "@/app/AboutUs/page"; // <-- make sure this path is correct

export default function Team() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* --- Add About Us Section --- */}
      <AboutUs />

      {/* Hero Section */}
      <section className="py-16 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:max-w-screen-md py-1">
          <h1 className="text-6xl font-extrabold mb-6">
            Our <span className="text-blue-600">Team</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            At the heart of our success is a team of passionate professionals who believe in growth,
            learning, and making an impact. Meet our mentors who lead with knowledge and inspiration.
          </p>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentor" className="py-20">
        <div className="container mx-auto px-4 lg:max-w-screen-lg">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">
            Meet Our <span className="text-blue-600">Team Members</span>
          </h2>

          <div className="flex flex-col space-y-20">
            {MentorData.map((mentor, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 transition-transform transform hover:scale-[1.02] duration-500 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } flex flex-col md:flex-row items-start gap-8`}
              >
                {/* Profile Image */}
                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={`${getImagePrefix()}${mentor.imgSrc}`}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Info Section */}
                <div className="md:w-2/3 space-y-4">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    {mentor.name}
                  </h3>
                  <ul className="text-gray-700 text-lg space-y-1">
                    {/* {mentor.age && (
                      <li>
                        <strong>Age:</strong> {mentor.age}
                      </li>
                    )} */}
                    <li>
                      <strong>Current Position:</strong> {mentor.position}
                    </li>
                    <li>
                      <strong>Education:</strong> {mentor.education}
                    </li>
                    <li>
                      <strong>Experience:</strong> {mentor.experience}
                    </li>
                    
                    {/* <li>
                      <strong>Company:</strong> {mentor.company}
                    </li> */}
                    <li>
                      <strong>Working Period:</strong> {mentor.workingPeriod}
                    </li>
                    <li>
                      <strong>Specialization:</strong> {mentor.specialization}
                    </li>
                  </ul>

                  {/* Description */}
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                      About {mentor.name}
                    </h4>
                    <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                      {mentor.description.map((desc, idx) => {
                        if (desc.startsWith("•")) {
                          return (
                            <ul
                              key={idx}
                              className="list-disc list-inside ml-6 space-y-1"
                            >
                              <li>{desc.replace("•", "").trim()}</li>
                            </ul>
                          );
                        }
                        return <p key={idx}>{desc}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";
// import { MentorData } from "@/app/api/data";
// import { getImagePrefix } from "@/utils/util";
// import AboutUs from "@/app/AboutUs/page";

// export default function Team() {
//   return (
//     <main className="min-h-screen bg-white text-gray-900">
//       {/* About Us Section */}
//       <AboutUs />

//       {/* Hero Section */}
//       <section className="py-16 text-center bg-gradient-to-b from-blue-50 to-white">
//         <div className="container mx-auto px-4 lg:max-w-screen-md">
//           <h1 className="text-6xl font-extrabold mb-6">
//             Our <span className="text-blue-600">Team</span>
//           </h1>
//           <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
//             At the heart of our success is a team of passionate professionals who believe in growth,
//             learning, and making an impact. Meet our mentors who lead with knowledge and inspiration.
//           </p>
//         </div>
//       </section>

//       {/* Mentors Section */}
//       <section id="mentor" className="py-20">
//         <div className="container mx-auto px-4 lg:max-w-screen-lg">
//           <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">
//             Meet Our <span className="text-blue-600">Team Members</span>
//           </h2>

//           <div className="flex flex-col space-y-20">
//             {MentorData.map((mentor, index) => (
//               <div
//                 key={index}
//                 className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.02] duration-500 flex flex-col md:flex-row gap-8 ${
//                   index % 2 === 1 ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Profile Image */}
//                 <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
//                   <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-inner">
//                     <Image
//                       src={`${getImagePrefix()}${mentor.imgSrc}`}
//                       alt={mentor.name}
//                       fill
//                       className="object-cover"
//                     />
//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
//                   </div>
//                 </div>

//                 {/* Info Section */}
//                 <div className="md:w-2/3 flex flex-col justify-start space-y-4 p-4 md:p-6">
//                   <h3 className="text-3xl font-semibold text-gray-900">
//                     {mentor.name}
//                   </h3>
//                   <ul className="text-gray-700 text-lg space-y-1">
//                     {/* {mentor.age && (
//                       <li>
//                         <strong>Age:</strong> {mentor.age}
//                       </li>
//                     )} */}
//                     <li>
//                       <strong>Position:</strong> {mentor.position}
//                     </li>
//                     <li>
//                       <strong>Education:</strong> {mentor.education}
//                     </li>
//                     <li>
//                       <strong>Experience:</strong> {mentor.experience}
//                     </li>
                  
//                     {/* <li>
//                       <strong>Company:</strong> {mentor.company}
//                     </li> */}
//                     <li>
//                       <strong>Working Period:</strong> {mentor.workingPeriod}
//                     </li>
//                     <li>
//                       <strong>Specialization:</strong> {mentor.specialization}
//                     </li>
//                   </ul>

//                   {/* Description */}
//                   <div className="mt-4 border-t border-gray-200 pt-4">
//                     <h4 className="text-2xl font-semibold text-gray-900 mb-3">
//                       About {mentor.name}
//                     </h4>
//                     <div className="space-y-4 text-gray-700 text-base leading-relaxed">
//                       {mentor.description.map((desc, idx) => {
//                         if (desc.startsWith("•")) {
//                           return (
//                             <ul
//                               key={idx}
//                               className="list-disc list-inside ml-6 space-y-1"
//                             >
//                               <li>{desc.replace("•", "").trim()}</li>
//                             </ul>
//                           );
//                         }
//                         return <p key={idx}>{desc}</p>;
//                       })}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
