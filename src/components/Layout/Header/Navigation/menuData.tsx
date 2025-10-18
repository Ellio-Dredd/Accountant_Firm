import { HeaderItem } from "@/types/menu";
import Link from "next/link";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#mentor" },
  { label: "Blog", href: "/blog" },
  { label: "Tax Calculetor", href: "/#testimonial" },
  { label: "Contact", href: "/#contactus" },
  // { label: "Services", href: "/#services" },
  { label: "Services", href: "/Services" }, 
];
