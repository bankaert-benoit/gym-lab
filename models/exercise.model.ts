import { DocumentReference } from "firebase/firestore";
import { Muscle } from "./muscle.model";

export type Exercise = {
  id: string;
  name: string;
  musclesId: DocumentReference<Muscle>[];
  muscles?: Muscle[];
  description: string;
}