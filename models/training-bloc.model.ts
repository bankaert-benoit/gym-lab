import { DocumentReference } from "firebase/firestore";
import { Exercise } from "./exercise.model";
import { User } from "./user.model";

export type TrainingBloc = {
  id: number;
  title: string;
  weeks: TrainingWeek[];
  user: DocumentReference<User>;
};

export type TrainingWeek = {
  id: number;
  title: string;
  days: TrainingDay[];
};

export type TrainingDay = {
  id: number;
  workloads: TrainingExercise[];
  done: boolean;
  completionDate?: Date;
};

export type TrainingExercise = {
  exerciceId: DocumentReference<Exercise>;
  exercice?: Exercise;
  numberOfSets: number;
  numberOfReps: number;
  intensity: number;
  weight: number;
};