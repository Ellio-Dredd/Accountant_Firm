import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Team from "@/components/Home/Team";
import AboutUs from "@/components/Home/AboutUs/index";
import Newsletter from "@/components/Home/Newsletter";
import Blogs from "@/components/Home/Blogs/index";
import Service from "@/components/Home/Service";
import ContactUs from "@/components/Home/ContactUs/page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Probity Accountants",
  description: "Trusted accounting, auditing, and tax services for businesses and individuals. Empower your financial decisions with expert support.",
  keywords: ["accounting", "bookkeeping", "audit", "finance", "tax services"], 
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Companies />
      <Team />
      <AboutUs />
      <Blogs />
      <ContactUs />
    </main>
  );
}
