import { MovieType } from "@/types";
import { create } from "zustand";

const initialMovieData: MovieType = {
  id: "",
  title: "",
  description: "",
  videoUrl: "",
  thumbnailUrl: "",
  genre: "",
  duration: "",
};

interface ModalState {
  isOpen: boolean;
  movieData: MovieType;
  close: (data?: MovieType) => void;
}

export const useModalPreview = create<ModalState>((set) => ({
  isOpen: false,
  movieData: initialMovieData,
  close: (data) => set((state) => ({ isOpen: !state.isOpen, movieData: data })),
}));
