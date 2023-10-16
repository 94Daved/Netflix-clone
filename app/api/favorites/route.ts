import { currentProfile } from "@/lib/current-profile";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const profile = await currentProfile();

    const favoriteMovies = await db.movie.findMany({
      where: {
        id: {
          in: profile?.favoriteIds,
        },
      },
    });

    return NextResponse.json(favoriteMovies);
  } catch (error) {
    console.log("[MOVIE_GET]: Internal Error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  const { id } = await req.json();
  const user = await currentProfile();

  try {
    if (!id) return new NextResponse("No ID specified", { status: 400 });

    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const existingMovie = await db.movie.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const updatedUser = await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        favoriteIds: [...user.favoriteIds, id],
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log("[FAVORITES_POST]: Internal Error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const user = await currentProfile();

  try {
    if (!id) return new NextResponse("No ID specified", { status: 400 });

    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const existingMovie = await db.movie.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const updatedFavoritedIds = user.favoriteIds.filter(
      (faveId) => faveId !== id
    );

    console.log(updatedFavoritedIds);
    const updatedUser = await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        favoriteIds: updatedFavoritedIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log("[FAVORITES_DELETE]: Internal Error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
