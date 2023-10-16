import { MovieType } from "@/types";
import CardPreview from "./card-preview";
import Link from "next/link";
interface MovieCardProps {
  movie: MovieType;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="w-[250px] h-[320px]  group hover:scale-[1.4] hover:w-[250px] hover:h-[280px] z-10 hover:mx-12">
      <div className="w-full h-full  group-hover:bg-slate-500 group-hover:hidden ">
        <img
          src={movie?.thumbnailUrl}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <CardPreview
        className="group-hover:flex group-hover:opacity-100"
        movieDetail={movie}
      />
    </div>
  );
}
export default MovieCard;
