"use client";
import Button from "./ui/button";
import { Play, X } from "lucide-react";
import Link from "next/link";
import { useModalPreview } from "@/hooks/use-preview-modal";
import FavoriteButton from "./favorite-button";

const MovieModalPreview = () => {
  const { close, isOpen, movieData } = useModalPreview();

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50  flex justify-center items-center z-[1000]">
      <div className="h-[450px] w-[600px] bg-black flex flex-col  rounded-[5px] overflow-hidden">
        <div className="h-[60%] w-full relative">
          <img
            src={movieData.thumbnailUrl}
            alt=""
            className="object-cover h-full w-full brightness-[60%]"
          />
          <div className="absolute right-[10px] top-[10px] text-black  bg-white h-[25px] w-[25px] cursor-pointer flex justify-center items-center rounded-full">
            <X size={20} onClick={() => close()} />
          </div>
          <div className="absolute bottom-[25px] p-[30px] space-y-2">
            <h2 className="text-[30px] font-semibold">{movieData.title}</h2>
            <div className="flex gap-4">
              <Link href={`/films/${movieData.id}`}>
                <Button text="play" onClick={() => close()}>
                  <Play className="text-black" fill="" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[40%] bg-[#141414] p-[30px] space-y-5">
          <div className="flex space-x-3">
            <span className="text-green-400 font-semibold">NEW</span>
            <span className="">{movieData.duration}</span>
            <span className="">{movieData.genre}</span>
            <FavoriteButton movieId={movieData.id} />
          </div>
          <p className=""> {movieData.description.substring(0, 180)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModalPreview;
