import { useToast } from "@/components/ui/use-toast";
import { db, storage } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export type Evidence = {
  url: string;
  name: string;
  createdAt: Date;
};

export const SubmitReportWithEvidence = async (
  file: File,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setEvidence: React.Dispatch<React.SetStateAction<Evidence | null>>,
  formData: Object
) => {
  const { toast } = useToast();
  const [progress, setProgress] = useState(0);

  if (!file) return;

  setLoading(true);

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
      setLoading(false);
    }
  );
};

export const SubmitReportWithoutEvidence = async (
  formData: Object,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { toast } = useToast();

  setLoading(true);

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

  setLoading(false);
};
