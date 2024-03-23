import { auth } from "@clerk/nextjs";

const adminIds = ["user_2dtB9e9ijBdpOSoABBVbr2bK1Na"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
