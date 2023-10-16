import { currentProfile } from "@/lib/current-profile";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const genre = searchParams.get("genre");

    if (genre === null || genre.length === 0) {
      return new NextResponse("No genre specified", { status: 400 });
    }

    if (genre === "random") {
      const movieCount = await db.movie.count();
      const randomIndex = Math.floor(Math.random() * movieCount);

      const randomMovies = await db.movie.findMany({
        take: 1,
        skip: randomIndex,
      });

      return NextResponse.json(randomMovies[0]);
    } else if (genre === "all") {
      const movies = await db.movie.findMany();
      return NextResponse.json(movies);
    }
  } catch (error) {
    console.log("[MOVIE_GET]: Internal Error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
