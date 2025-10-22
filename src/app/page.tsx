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

// ✅ This automatically adds SEO metadata for this page
export const metadata: Metadata = {
  title: "Probity Accountants | Professional Accounting Services",
  description: "Trusted accounting, auditing, and tax services for businesses and individuals. Empower your financial decisions with expert support.",
  keywords: ["accounting", "bookkeeping", "audit", "finance", "tax services"],
  openGraph: {
    title: "Probity Accountants | Professional Accounting Services",
    description: "Trusted accounting, auditing, and tax services for businesses and individuals.",
    url: "https://probityaccountants.com",
    images: [
      {
        url: "/images/banner/pexels-mikhail-nilov-8296990.jpg",
        width: 1200,
        height: 630,
        alt: "Accounting team discussing reports",
      },
    ],
  },
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
