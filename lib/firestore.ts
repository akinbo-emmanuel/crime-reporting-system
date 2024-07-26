// lib/firestore.ts
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const getReports = async () => {
  const reportsCol = collection(db, "reports");
  const reportSnapshot = await getDocs(reportsCol);
  const reportList = reportSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return reportList;
};

export { getReports };
