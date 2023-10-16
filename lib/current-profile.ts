import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import db from "./db";

export const currentProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }
  // console.log(user.emailAddresses[0].emailAddress);

  const profile = await db.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return profile;
};
