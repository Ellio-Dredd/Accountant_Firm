import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import AboutUs from "@/components/Home/AboutUs/index";
import Newsletter from "@/components/Home/Newsletter";
import Testimonial from "@/components/Home/Testimonials/index";
import Service from "@/components/Home/Service";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Probity Accountants",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Companies />
      <Mentor />
      <Testimonial />
    </main>
  );
}