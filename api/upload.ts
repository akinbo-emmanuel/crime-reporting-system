import { useToast } from "@/components/ui/use-toast";
import { db, storage } from "@/firebase/firebase";
import { generalStore } from "@/store/store";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export type Evidence = {
  url: string;
  name: string;
  createdAt: Date;
};

const SubmitReport = () => {
  const updateLoading = generalStore((state: any) => state.updateLoading);
  const { toast } = useToast();
  const [progress, setProgress] = useState(0);

  const submitReportWithEvidence = async (
    file: File,
    setEvidence: React.Dispatch<React.SetStateAction<Evidence | null>>,
    formData: Object
  ) => {
    if (!file) return;

    updateLoading(true);

    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log(progress);
      },
      (error: any) => {
        toast({
          variant: "destructive",
          title: "Upload Failed!",
          description: error,
        });

        //   console.error("Upload failed", error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        setEvidence({
          url: downloadURL,
          name: file.name,
          createdAt: new Date(),
        });

        try {
          await addDoc(collection(db, "reports"), formData);
          toast({
            title: "Report Successfully Submitted",
            description:
              "Your Report has been successfully submitted. Security Agencies would contact you shortly",
          });
        } catch (error: any) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: error.response.message,
          });
        }

        setProgress(100);
        updateLoading(false);
      }
    );
  }

  const submitReportWithoutEvidence = async (
    formData: Object
  ) => {

    updateLoading(true);

    try {
      await addDoc(collection(db, "reports"), formData);
      toast({
        title: "Report Successfully Submitted",
        description:
          "Your Report has been successfully submitted. Security Agencies would contact you shortly",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response.message,
      });
    }

    updateLoading(false);
  }

  return { submitReportWithEvidence, submitReportWithoutEvidence };
}

export default SubmitReport;



