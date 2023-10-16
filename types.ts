export interface CurrentProfileType {
  id: string;
  name?: string;
  email: string;
  favoriteIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MovieType {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}
