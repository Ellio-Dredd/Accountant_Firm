"use client";

import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  closeMenu: () => void;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item, closeMenu }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    // Prevent navigation when toggling submenu
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="relative w-full">
      {/* Main link */}
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : closeMenu}
        className="flex items-center justify-between w-full py-2 text-gray-700 font-medium hover:text-indigo-600 transition"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${
              submenuOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {/* Submenu links */}
      {submenuOpen && item.submenu && (
        <div className="pl-4 w-full border-l border-gray-300">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={closeMenu}
              className="block py-2 text-gray-600 hover:text-indigo-500 transition"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
