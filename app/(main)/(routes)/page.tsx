import { InitialProfile } from "@/lib/initial-profile";
import MovieModalPreview from "@/components/movie-modal-preview";
import MovieCard from "@/components/movie-card";
import CoverMovieTrailer from "@/components/cover-movie-trailer";
import { MovieType } from "@/types";

async function getData(genre: string) {
  const res = await fetch(`http://localhost:3000/api/films?genre=${genre}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const initalProfile = await InitialProfile();

  if (!initalProfile) return null;

  const movies: MovieType[] = await getData("all");

  return (
    <main className="min-h-[100vh] w-[100vw] ">
      <CoverMovieTrailer />
      <div className="pl-10 pr-5 overflow-y-hidden">
        <div className="mt-5 pb-5">
          <h1 className="text-[25px] font-medium mb-4">Trending movies</h1>
          <div className="flex gap-5  items-center">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </div>
        <div className="mt-5 pb-5">
          <h1 className="text-[25px] font-medium mb-4">Trending series</h1>
          <div className="flex gap-5  items-center">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </div>
        <MovieModalPreview />
      </div>
    </main>
  );
}
