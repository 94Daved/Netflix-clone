"use client";

import { Search, ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const PageNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const title = (str: string) => {
    let name = str.charAt(0).toUpperCase() + str.slice(1);
    return name;
  };

  if (pathname === "/") return null;
  return (
    <div className="flex px-5 py-4 items-center">
      <ArrowLeft
        className="h-[30px] w-[30px] mr-5 cursor-pointer"
        onClick={() => router.back()}
      />
      <span className="text-[30px]"> {title(pathname.split("/")[1])}</span>
      <div className="flex gap-[25px] justify-between items-center ml-[30px] ">
        <Search className="cursor-pointer h-[30px] w-[30px]" />
      </div>
    </div>
  );
};

export default PageNavbar;
