import { currentProfile } from "@/lib/current-profile";
import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Authorised", { status: 401 });
    }
    // console.log(user.emailAddresses[0].emailAddress);

    const profile = await db.user.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.log("[MOVIE_GET]: Internal Error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
