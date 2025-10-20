import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/util";

const Hero = () => {
  return (
    <section id="home-section" className="bg-slateGray">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center">
          {/* LEFT SIDE */}
          <div className="col-span-6 flex flex-col gap-8">
            <div className="flex gap-2 mx-auto lg:mx-0"></div>

            <h1 className="text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0">
              Empowering your business through smarter accounting
            </h1>

            <h3 className="text-black/70 text-lg pt-5 lg:pt-0">
              Master accounting with guidance from industry experts.
            </h3>

            {/* Experience Tag */}
            <div className="relative rounded-full pt-5 lg:pt-0">
              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 shadow-lg rounded-3xl px-6 py-4 w-full max-w-lg border border-blue-200 hover:shadow-blue-300/50 transition-all duration-300">
                <div className="flex items-center justify-center bg-white/20 rounded-full p-3">
                  <Icon icon="mdi:briefcase-check" className="text-white text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-lg">
                    10+ Years Experience
                  </span>
                  <p className="text-blue-100 text-sm">
                    Helping businesses with tax, audit and accounting since 2015.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Labels */}
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-5 pt-10 lg:pt-4">
              {["Accurate", "Trustworthy", "Professional"].map((label, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Image
                    src={`${getImagePrefix()}images/banner/check-circle.svg`}
                    alt="check-icon"
                    width={30}
                    height={30}
                    className="smallImage"
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-span-6 flex justify-center mt-10 lg:mt-0 lg:ml-16">
            <Image
              src={`${getImagePrefix()}images/banner/accountImage.png`}
              alt="accounting-image"
              width={600}
              height={605}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
