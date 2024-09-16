import { User } from "./user.model";
import { Workload } from "./workload.model";
import { DocumentReference } from "firebase/firestore";

export type Worklab = {
  id: number;
  title: string;
  date: Date;
  workloads: Workload[];
  userId: DocumentReference<User>;
};  