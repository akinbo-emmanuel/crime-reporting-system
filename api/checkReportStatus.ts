import { doc, getDoc } from "firebase/firestore";
import { useToast } from "@/components/ui/use-toast";
import { db } from "@/firebase/firebase";
import { generalStore } from "@/store/store";

const checkStatus = () => {
    const { toast } = useToast();
    const updateState = generalStore((state: any) => state.updateState);

    const checkReportStatus = async (reportId: string) => {
        console.log("Checking report status");

        try {
            updateState({ loading: true });
            const docRef = doc(db, "reports", reportId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const reportData = docSnap.data();
                updateState({ reportStatus: reportData.status });
                console.log("Report Data:", reportData);

                toast({
                    title: "Report Status Retrieved",
                    description: `The status of your report (ID: ${reportId}) is: ${reportData.status}`,
                });
            } else {
                console.log("No such document!");
                toast({
                    variant: "destructive",
                    title: "Report Not Found",
                    description: `No report found with ID: ${reportId}`,
                });
            }
        } catch (error: any) {
            console.log("Error checking report status");
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: error.response?.message || error.message,
            });
        }

        updateState({ loading: false });
    };

    return checkReportStatus;
}



export default checkStatus