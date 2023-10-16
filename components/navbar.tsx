"use client";

import Link from "next/link";
import { Search } from "lucide-react";

import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/series",
    name: "Series",
  },
  {
    href: "/films",
    name: "Films",
  },
  {
    href: "/new-popular",
    name: "New & Popular",
  },
  {
    href: "/mylist",
    name: "My List",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    window.scrollY > 100 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname !== "/") return null;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 h-[70px]  top-0 flex px-10 py-3 justify-between items-center ",
        active && "bg-black"
      )}
    >
      <div className="flex space-x-7">
        <img
          src="/images/logo.png"
          alt=""
          className="w-[100px] h-[30px] object-contain"
        />
        <div className="flex space-x-6">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-[25px] justify-between items-center mr-5 ">
        <Search className="cursor-pointer" />
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Navbar;
