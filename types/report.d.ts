// types/report.d.ts
import { Timestamp } from "firebase/firestore";

export interface Evidence {
  url: string;
  name: string;
  createdAt: Timestamp;
}

export interface Report {
  id: string;
  fullName: string;
  dateTime: Timestamp; // Use Timestamp for date fields
  location: string;
  description: string;
  evidence: Evidence[];
  status: string;
}
