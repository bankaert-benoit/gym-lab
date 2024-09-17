import { DocumentReference } from "firebase/firestore";
import { Exercise } from "./exercise.model";
import { User } from "./user.model";

export type GainData = {
  id: number,
  title: string,
  exerciseId: DocumentReference<Exercise>,
  exercise?: Exercise,
  data: number,
  user?: DocumentReference<User>, // TODO: Remove the optional
}

export type PersonalRecord = {
  id: number,
  exerciseId: DocumentReference<Exercise>,
  exercise?: Exercise,
  weight: number,
  user?: DocumentReference<User>, // TODO: Remove the optional
}