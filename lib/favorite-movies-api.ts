import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const addFavortiesMovie = async (id: string) => {
  console.log("adding movies");

  const res = await axios.post(`${BASE_URL}/api/favorites`, {
    id,
  });
  const addedMovie = res.data;
  console.log(addedMovie);

  return addedMovie;
};

export const deleteFavortiesMovie = async (id: string) => {
  console.log("deleting movies");

  const res = await axios.delete(`${BASE_URL}/api/favorites`, { data: { id } });

  const deletedMovie = res.data;
  console.log(deletedMovie);

  return deletedMovie;
};
