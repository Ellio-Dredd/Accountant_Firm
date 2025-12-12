
"use client";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Mentor = () => {
  return (
    <section className="bg-blue-400 py-20" id="mentor">
      <div className="container mx-auto px-4 lg:max-w-screen-lg">
        <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center">
          Meet Our Leadership
        </h2>

        {/* Mentor Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {MentorData.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 transition-transform transform hover:scale-105 duration-500"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <div className="relative w-3/4 sm:w-2/3 md:w-full aspect-square rounded-full overflow-hidden">
                    <Image
                      src={`${getImagePrefix()}${mentor.imgSrc}`}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden">
                    <Image
                      src={`${getImagePrefix()}${mentor.imgSrc}`}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div> */}

                {/* Info Section */}
                <div className="md:w-2/3 space-y-4">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    {mentor.name}
                  </h3>
                  <ul className="text-gray-700 text-lg space-y-1">
                    <li>
                      
                      <span className="font-bold">Position:{" "}</span>{mentor.position}
                    </li>
                    <li>
                      <span className="font-bold">Education:</span>
                      {mentor.education}
                    </li>
                    <li>
                      <span className="font-bold">Experience:</span>
                      {mentor.experience}
                    </li>
                  
                    <li>
                      <span className="font-bold">Specialization:</span>
                      {mentor.specialization}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
