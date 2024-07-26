import { getReports } from "@/lib/firestore";


const AdminDashboardPage = async () => {
  const reports = await getReports();

  return (
    <main className="pt-36 pb-20 min-h-screen px-1.5 md:px-10 lg:px-20 xl:px-40 flex justify-center items-center ">
      <div className="flex flex-col gap-7 bg-white p-5 md:py-10 xl:py-20 md:px-10 shadow-2xl rounded-lg items-center justify-center text-sm">
        {reports.map(report => (
          <li key={report.id}>{JSON.stringify(report)}</li>
        ))}
      </div>
    </main>
  );
};

export default AdminDashboardPage;
