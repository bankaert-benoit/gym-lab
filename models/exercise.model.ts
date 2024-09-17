import { Muscle } from "./muscle.model";

export type Exercise = {
  id: string;
  name: string;
  muscles: Muscle[];
  description?: string;
  image?: string; // URL
}