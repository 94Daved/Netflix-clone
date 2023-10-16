import React from "react";
import CoverDetail from "./cover-detail";
import { MovieType } from "@/types";

async function getData(genre: string) {
  const res = await fetch(`http://localhost:3000/api/films?genre=${genre}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CoverMovieTrailer = async () => {
  const data: MovieType = await getData("random");

  return (
    <div className="relative  h-[56.25vw] w-full mb-[20px]">
      <video
        className=" h-[56.25vw] w-full object-cover brightness-[60%]"
        src={data.videoUrl}
        muted
        autoPlay
        loop
        poster={data.thumbnailUrl}
      />
      <div className="absolute top-[30%] left-10">
        <CoverDetail
          title={data.title}
          description={data.description}
          movieDetails={data}
          filmId={data.id}
        />
      </div>
    </div>
  );
};

export default CoverMovieTrailer;
