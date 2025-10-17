import { HeaderItem } from "@/types/menu";
import Link from "next/link";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Mentor", href: "/#mentor" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonial", href: "/#testimonial" },
  { label: "Contact", href: "/#contactus" },
  // { label: "Services", href: "/#services" },
  { label: "Services", href: "/Services" },
  { label: "Team", href: "/team"} 
];
