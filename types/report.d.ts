// types/report.d.ts
import { Timestamp } from "firebase/firestore";

export interface Evidence {
  url: string;
  name: string;
  createdAt: Timestamp;
}

export interface Report {
  id: string;
  crimeType: string;
  dateTime: Timestamp;
  description: string;
  email: string;
  evidence: Evidence[];
  fullName: string;
  location: string;
  otherCrimeType: string;
  status: string;
  suspectInfo: string;
  tel: string;
  witnessInfo: string;
}
