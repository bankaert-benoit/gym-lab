import { DocumentReference } from "firebase/firestore";
import { Exercise } from "./exercise.model";

export type Workload = {
  exerciceId: DocumentReference<Exercise>;
  exercice?: Exercise;
  numberOfSets: number;
  numberOfReps: number;
  intensity: number;
  weight: number;
};