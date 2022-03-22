import { getAuth } from "firebase/auth";

/**
 * signout from firebase
 */
export const signOutfromService = async () => {
  const auth = getAuth();
  await auth.signOut();
};

/** get Current user */
export const getCurrentUser = () => {
  const auth = getAuth();
  return auth.currentUser;
};
