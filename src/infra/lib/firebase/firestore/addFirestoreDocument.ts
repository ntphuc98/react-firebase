import { removeUndefinedKeys } from "common";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { getCurrentUser } from "../auth";

/**
 * add single document to firestore DB
 * return document Id
 */
export const addFirestoreDocument = async ({
  docData,
  path,
  createdBy,
  createdAt,
  errorHandler,
}: {
  docData: Record<string, unknown>;
  path: string;
  createdBy?: string; // if not passed, use current user
  createdAt?: Date | number; // if not passed, use current datetime. do not set the value
  errorHandler?: (e: Error) => void;
}) => {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      throw new Error("User not signed in");
    }
    const addData = {
      ...docData,
      deleted: false,
      createdAt: createdAt || Timestamp.now(),
      createdBy: createdBy || currentUser.uid,
    };
    const db = getFirestore();
    const noUndefinedData = removeUndefinedKeys(addData);
    const ref = await addDoc(collection(db, path), noUndefinedData);
    return ref.id;
  } catch (e) {
    if (errorHandler && e instanceof Error) {
      errorHandler(e);
    } else {
      throw e;
    }
  }
};
