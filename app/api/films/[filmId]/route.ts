import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { filmId: string } }
) {
  try {
    const film = await db.movie.findUnique({
      where: { id: params.filmId },
    });

    if (!film) return new NextResponse("Movie not found", { status: 404 });

    return NextResponse.json(film);
  } catch (error) {
    console.log("[FILM_ID_GET]: Internal Error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
