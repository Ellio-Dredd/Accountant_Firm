// "use client";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React from "react";
// import Image from "next/image";
// import { MentorData } from "@/app/api/data";
// import { getImagePrefix } from "@/utils/util";

// const Mentor = () => {
//   const slidesToShow = Math.min(3, MentorData.length); // show max 3 slides or less if data < 3

//   const settings = {
//     dots: false,
//     infinite: MentorData.length > slidesToShow, // only infinite if enough items
//     slidesToShow,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: MentorData.length > 1, // autoplay only if more than 1 item
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: Math.min(3, MentorData.length),
//         },
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: Math.min(2, MentorData.length),
//         },
//       },
//       {
//         breakpoint: 530,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="bg-deepSlate" id="mentor">
//       <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative">
//         <h2 className="text-midnight_text text-5xl font-semibold">
//           Meet with our <br /> team.
//         </h2>

//         <Slider {...settings}>
//           {MentorData.map((item, i) => (
//             <div key={i}>
//               <div className="m-3 py-14 md:my-10 text-center">
//                 <div className="relative">
//                   <Image
//                     src={`${getImagePrefix()}${item.imgSrc}`}
//                     alt="user-image"
//                     width={306}
//                     height={306}
//                     className="inline-block m-auto"
//                   />
                  
//                 </div>
//                 <div className="-mt-10">
//                   <h3 className="text-2xl font-semibold text-lightblack text-black">{item.name}</h3>
//                   <h4 className="text-lg font-normal text-lightblack pt-2 opacity-50 text-gray-700">
//                     {item.profession}
//                   </h4>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Mentor;


"use client";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Mentor = () => {
  const mentor = MentorData[0]; // Only one mentor

  return (
    <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 py-20" id="mentor">
      <div className="container mx-auto px-4 lg:max-w-screen-lg">
        <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          Meet Our <span className="text-pink-600">Mentor</span>
        </h2>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 transition-transform transform hover:scale-105 duration-500">
          <div className="flex flex-col md:flex-row items-start gap-8">
            
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
              <h3 className="text-3xl font-semibold text-gray-900">{mentor.name}</h3>
              <ul className="text-gray-700 text-lg space-y-1">
                <li>{mentor.age}</li>
                <li>{mentor.education}</li>
                <li>{mentor.experience}</li>
                <li>{mentor.position}</li>
                <li>{mentor.company}</li>
                <li>{mentor.workingPeriod}</li>
                <li>{mentor.specialization}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
