"use client";
import PageNavbar from "@/components/page-navbar";
import Spinner from "@/components/ui/spinner";
import useFaveMovies from "@/hooks/use-fave-movies";
import { MovieType } from "@/types";
import MovieModalPreview from "@/components/movie-modal-preview";
import { useModalPreview } from "@/hooks/use-preview-modal";

const page = () => {
  const { mutate: mutateFavorites, data, isLoading } = useFaveMovies();
  const { close } = useModalPreview();

  console.log(data);
  if (isLoading) return <Spinner />;
  return (
    <div className="overflow-y-hidden">
      <PageNavbar />
      <div className="flex gap-5 pl-10 items-center flex-wrap ">
        {data.map((movie: MovieType) => (
          <div
            className="w-[250px] h-[320px] z-10"
            onClick={() => close(movie)}
          >
            <div className="w-full h-full relative cursor-pointer">
              <img
                src={movie?.thumbnailUrl}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
      <MovieModalPreview />
    </div>
  );
};

export default page;
