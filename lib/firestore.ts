// lib/firestore.ts
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { Report } from "@/types/report";
import { db } from "@/firebase/firebase";

const getReports = async (): Promise<Report[]> => {
  const reportsCol = collection(db, "reports");
  const reportSnapshot = await getDocs(reportsCol);
  const reportList = reportSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      fullName: data.fullName,
      dateTime: data.dateTime instanceof Timestamp ? data.dateTime : Timestamp.fromDate(new Date(data.dateTime)),
      location: data.location,
      description: data.description,
      evidence: data.evidence,
      status: data.status || "Pending",
    };
  });
  return reportList;
};

export { getReports };