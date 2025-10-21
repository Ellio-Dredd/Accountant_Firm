import { HeaderItem } from "@/types/menu";
import Link from "next/link";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Tax Calculetor", href: "/#testimonial" },
  { label: "Contact Us", href: "/ContactUs" },
  // { label: "Services", href: "/#services" },
  { label: "Services", href: "/Services" },
  { label: "Team", href: "/team"},
  {label: "About Us", href: "/AboutUs" },
];
