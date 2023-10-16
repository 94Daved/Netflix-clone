import { redirectToSignIn, currentUser } from "@clerk/nextjs";
import db from "./db";

export const InitialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const profile = await db.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.user.create({
    data: {
      name: `${user.firstName} ${user.lastName}`,
      favoriteIds: [],
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
};
