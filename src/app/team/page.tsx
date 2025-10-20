// "user client"

// export default function Team(){
//     return <h2>Welcome to team page</h2>
// }

// "use client";
// import React from "react";
// import Image from "next/image";
// import { MentorData } from "@/app/api/data";
// import { getImagePrefix } from "@/utils/util";

// export default function Team() {
//   const mentor = MentorData[0]; // Only one mentor

//   return (
//     <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 py-20" id="mentor">
//       <div className="container mx-auto px-4 lg:max-w-screen-lg">
//         <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
//           Meet Our <span className="text-pink-600">Mentor</span>
//         </h2>

//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 transition-transform transform hover:scale-105 duration-500">
//           <div className="flex flex-col md:flex-row items-start gap-8">
            
//             {/* Profile Image */}
//             <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
//               <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
//                 <Image
//                   src={`${getImagePrefix()}${mentor.imgSrc}`}
//                   alt={mentor.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* Info Section */}
//             <div className="md:w-2/3 space-y-4">
//               <h3 className="text-3xl font-semibold text-gray-900">{mentor.name}</h3>
//               <ul className="text-gray-700 text-lg space-y-1">
//                 <li>{mentor.age}</li>
//                 <li>{mentor.education}</li>
//                 <li>{mentor.experience}</li>
//                 <li>{mentor.position}</li>
//                 <li>{mentor.company}</li>
//                 <li>{mentor.workingPeriod}</li>
//                 <li>{mentor.specialization}</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"user client";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

export default function Team() {
  const mentor = MentorData[0]; // Assuming one primary mentor for now

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      {/* <section className="py-15 text-center">
        <div className="container mx-auto px-4 lg:max-w-screen-md py-8">
          <h1 className="text-6xl font-extrabold mb-6">
            Our <span className="text-pink-600">Team</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            At the heart of our success is a team of passionate professionals who believe in growth, learning,
            and making an impact. Meet our experienced mentor who leads with knowledge and inspiration.
          </p>
        </div>
      </section> */}

      {/* Mentor Section */}
      <section id="mentor" className="py-20">
        <div className="container mx-auto px-4 lg:max-w-screen-lg">
          <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center py-10">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>

          <div className="bg-white rounded-3xl  overflow-hidden p-8 md:p-12 transition-transform transform hover:scale-105 duration-500">
            <div className="flex flex-col md:flex-row items-start gap-8">
              
              {/* Profile Image */}
              <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start shadow-none">
                <div className="relative w-72 h-72 rounded-2xl overflow-hidden ">
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
                <h3 className="text-3xl font-semibold text-gray-900">{mentor.name}</h3>
                <ul className="text-gray-700 text-lg space-y-1">
                  <li><strong>Age:</strong> {mentor.age}</li>
                  <li><strong>Education:</strong> {mentor.education}</li>
                  <li><strong>Experience:</strong> {mentor.experience}</li>
                  <li><strong>Current Position:</strong> {mentor.position}</li>
                  <li><strong>Company:</strong> {mentor.company}</li>
                  <li><strong>Working Period:</strong> {mentor.workingPeriod}</li>
                  <li><strong>Specialization:</strong> {mentor.specialization}</li>
                </ul>
              </div>
            </div>

            {/* Description Section */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">About {mentor.name}</h4>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                {mentor.description.map((desc, idx) => {
                  // If the line starts with a bullet, render as a list item
                  if (desc.startsWith("•")) {
                    return (
                      <ul key={idx} className="list-disc list-inside ml-6 space-y-1">
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
      </section>

      {/* Team Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:max-w-screen-lg text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We believe that great mentorship drives innovation and personal growth.  
            Our team is dedicated to guiding individuals through real-world experiences,
            building confidence, and unlocking their full potential.  
            Together, we create an environment where curiosity thrives and success is shared.
          </p>
        </div>
      </section>
    </main>
  );
}
