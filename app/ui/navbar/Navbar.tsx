"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileIcon from "../icons/profile-icon";
import EllipsisIcon from "../icons/ellipsis-icon";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Dictionary", href: "/dictionary" },
  { name: "Training", href: "/training" },
  { name: "Settings", href: "/settings", icon: <EllipsisIcon /> },
  { name: "Profile", href: "/profile", icon: <ProfileIcon /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="container flex justify-end mx-auto p-5 shadow-sm">
      <div className="flex space-x-4">
        {navigation.map(({ name, href, icon }) => (
          <Link
            key={name}
            href={href}
            className={`transition duration-300 ${pathname === href ? "text-blue" : ""} hover:text-blue `}
          >
            {icon || name}
          </Link>
        ))}
      </div>
    </div>
  );
}
