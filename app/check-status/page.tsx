"use client"

import checkStatus from "@/api/checkReportStatus";
import { useToast } from "@/components/ui/use-toast";
import { generalStore } from "@/store/store";
import { useEffect, useState } from "react";

const CheckStatusPage = () => {
  const [reportID, setReportID] = useState("");
  const reportStatus = generalStore((state: any) => state.reportStatus);
  const updateState = generalStore((state: any) => state.updateState);
  const reportId = generalStore((state: any) => state.reportId);
  const { toast } = useToast();
  const checkReportStatus = checkStatus();

  useEffect(() => {
    setReportID('');
    updateState({ reportStatus: '' });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await checkReportStatus(reportID);
      // Handle success, for example, display a success message
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Report Not Found",
        description: `No report found with ID: ${reportID}`,
    });
    }
  };

  return (
    <div className="pt-36 pb-20 min-h-screen px-1.5 md:px-10 lg:px-20 xl:px-40 flex justify-center items-center">
      <div className="bg-white md:w-[55vw] lg:w-[45vw] xl:w-[31rem] p-5 md:py-10 xl:py-20 md:px-10 shadow-2xl rounded-lg flex flex-col justify-center text-sm">
        <div>
          <h1 className="font-bold text-2xl">Check Status</h1>
          <p className="mt-4 text-gray-600">
            Please provide your report ID to check the status of your report.
          </p>
        </div>

        <div className="flex flex-col items-center mt-12 w-full">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              value={reportID}
              onChange={(e) => setReportID(e.target.value)}
              placeholder="Enter your report ID"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#022444]"
            />
            <button className="mt-4 w-full px-4 py-2 text-white bg-[#022444] rounded-md hover:bg-[#022444]/[90%]">
              Check Status
            </button>
            {reportStatus && (
              <p className="mt-2">The status of your report ID: {reportId} is: {reportStatus}</p>
            )}
          </form>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            For security reasons, we will not store your report ID. If you
            forget your report ID, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckStatusPage;
