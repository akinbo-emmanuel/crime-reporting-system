// app/admin/dashboard/page.tsx
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getReports } from "@/lib/firestore";
import { Report } from "@/types/report";

const AdminDashboardPage = async () => {
  const reports: Report[] = await getReports();

  return (
    <main className="pt-36 pb-20 min-h-screen px-1.5 md:px-10 lg:px-20 xl:px-40 flex justify-center items-center ">
      <div className="flex flex-col gap-7 bg-white p-5 md:py-10 xl:py-20 md:px-10 shadow-2xl rounded-lg items-center justify-center text-sm">
        <Table>
          <TableCaption>A list of recent reports.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Crime Description</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.slice(0, 10).map(report => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.id}</TableCell>
                <TableCell>{report.fullName}</TableCell>
                <TableCell>{report.dateTime.toDate().toLocaleString()}</TableCell>
                <TableCell>{report.location}</TableCell>
                <TableCell>{report.description}</TableCell>
                <TableCell>{report.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default AdminDashboardPage;
