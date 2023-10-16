"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MovieType } from "@/types";

interface VideoWatchNavbarProps {
  title: string | undefined;
  movieData: MovieType | undefined;
}

const VideoWatchNavbar = ({ title, movieData }: VideoWatchNavbarProps) => {
  return (
    <div className="flex px-5 py-4 items-center">
      <Link href="/">
        <ArrowLeft className="h-[30px] w-[30px] mr-5 cursor-pointer" />
      </Link>
      <h1 className="text-[30px] mr-[5px] font-semibold">
        You are watching:
        <span className="font-normal text-[25px]"> {title}</span>
      </h1>
    </div>
  );
};

export default VideoWatchNavbar;
