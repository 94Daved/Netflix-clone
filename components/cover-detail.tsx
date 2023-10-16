"use client";

import Link from "next/link";
import { Play, Info } from "lucide-react";
import Button from "./ui/button";
import { MovieType } from "@/types";
import { useModalPreview } from "@/hooks/use-preview-modal";

interface CoverDetailProps {
  title: string;
  filmId: string;
  description: string;
  movieDetails: MovieType;
}

const CoverDetail = ({
  description,
  title,
  movieDetails,
  filmId,
}: CoverDetailProps) => {
  const { close } = useModalPreview();

  return (
    <article className="w-[550px] space-y-5">
      <h2 className="text-[55px] font-semibold">{title}</h2>
      <p>{description}</p>
      <div className="flex gap-4">
        <Link href={`/films/${filmId}`}>
          <Button text="play">
            <Play className="text-black" fill="" />
          </Button>
        </Link>
        <Button
          text="More info"
          color={true}
          onClick={() => close(movieDetails)}
        >
          <Info className="text-white" />
        </Button>
      </div>
    </article>
  );
};

export default CoverDetail;
