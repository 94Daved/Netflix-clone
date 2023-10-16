"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import VideoWatchNavbar from "@/components/video-watch-navbar";
import { MovieType } from "@/types";
import Spinner from "@/components/ui/spinner";

const page = ({ params }: { params: { filmId: string } }) => {
  const [movie, setMovie] = useState<MovieType>();
  const [loading, isLoading] = useState(false);

  const getMovie = async (id: string) => {
    try {
      isLoading(true);
      const res = await axios.get(`http://localhost:3000/api/films/${id}`);
      if (res.data) {
        setMovie(res.data);
        isLoading(false);
      }
    } catch (error) {
      isLoading(false);
    }
  };

  useEffect(() => {
    getMovie(params.filmId);
  }, [params.filmId]);

  if (loading && !movie) return <Spinner />;

  return (
    <div className="h-screen w-full flex flex-col">
      <VideoWatchNavbar title={movie?.title} movieData={movie} />
      <div className="relative  h-[56.25vw] w-full mb-[20px] flex-1">
        <video
          className=" h-[56.25vw] w-full object-cover brightness-[80%]"
          src={movie?.videoUrl}
          muted
          autoPlay
          loop
          poster={movie?.thumbnailUrl}
          controls
        />
      </div>
    </div>
  );
};

export default page;
