"use client";

import { useCallback, useMemo } from "react";
import { PlusCircle, CheckCircle } from "lucide-react";

import useCurrentUser from "@/hooks/use-current-user";
import useFaveMovies from "@/hooks/use-fave-movies";
import {
  addFavortiesMovie,
  deleteFavortiesMovie,
} from "@/lib/favorite-movies-api";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  movieId: string;
  className?: string;
}

const FavoriteButton = ({ movieId, className }: FavoriteButtonProps) => {
  const { mutate: mutateFavorites } = useFaveMovies();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await deleteFavortiesMovie(movieId);
    } else {
      response = await addFavortiesMovie(movieId);
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? CheckCircle : PlusCircle;

  return (
    <div className={cn("", className)} onClick={toggleFavorites}>
      <Icon size={28} strokeWidth={1.2} className="cursor-pointer" />
    </div>
  );
};

export default FavoriteButton;
