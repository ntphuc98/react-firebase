import { FieldPath, FieldValue, Timestamp } from "firebase/firestore";
export const fieldPath = FieldPath;
export const fieldValue = FieldValue;
export const firestoreTimeStamp = Timestamp;
export type FirestoreTimeStamp = Timestamp;

export * from "./addFirestoreDocument";
