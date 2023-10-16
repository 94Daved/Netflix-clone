"use client";

import {
  ChevronDownCircle,
  MinusCircle,
  PlayCircle,
  PlusCircle,
} from "lucide-react";

import { useModalPreview } from "@/hooks/use-preview-modal";
import { cn } from "@/lib/utils";
import { MovieType } from "@/types";
import FavoriteButton from "./favorite-button";

interface CardPreviewProps {
  className: string;
  movieDetail: MovieType;
}

const CardPreview = ({ className, movieDetail }: CardPreviewProps) => {
  const { close } = useModalPreview();

  return (
    <div
      className={cn(
        "flex flex-col h-full w-full  opacity-0 transition-all duration-1000 ease-in-out rounded-[3px] overflow-hidden",
        className
      )}
    >
      <div className={cn("hidden bg-gray-500 h-full w-full", className)}>
        <img
          src={movieDetail.thumbnailUrl}
          alt=""
          className="object-cover h-full w-full brightness-[60%]"
        />
      </div>
      <div
        className={cn("hidden h-full w-full p-[10px] bg-[#141414] ", className)}
      >
        <div className="w-full h-full">
          <div className="flex justify-between  mb-2">
            <div className="flex gap-1">
              <PlayCircle
                size={28}
                strokeWidth={1.2}
                className="cursor-pointer"
              />

              <FavoriteButton movieId={movieDetail.id} />
            </div>
            <div className="">
              <ChevronDownCircle
                size={28}
                strokeWidth={1.2}
                className="cursor-pointer"
                onClick={() => close(movieDetail)}
              />
            </div>
          </div>
          <div className="flex space-y-1 flex-col text-[12px]">
            <span className="text-green-400 font-semibold">NEW</span>
            <span className="">{movieDetail.duration}</span>
            <span className="">{movieDetail.genre}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
