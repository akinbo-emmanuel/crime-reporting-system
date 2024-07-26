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
      crimeType: data.crimeType,
      dateTime: data.dateTime instanceof Timestamp ? data.dateTime : Timestamp.fromDate(new Date(data.dateTime)),
      description: data.description,
      email: data.email,
      evidence: Array.isArray(data.evidence) ? data.evidence.map((evidence: any) => ({
        url: evidence.url,
        name: evidence.name,
        createdAt: evidence.createdAt instanceof Timestamp ? evidence.createdAt : Timestamp.fromDate(new Date(evidence.createdAt)),
      })) : [],
      fullName: data.fullName,
      location: data.location,
      otherCrimeType: data.otherCrimeType,
      status: data.status? data.status : "N/A",
      suspectInfo: data.suspectInfo,
      tel: data.tel,
      witnessInfo: data.witnessInfo,
    };
  });
  return reportList;
};

export { getReports };
