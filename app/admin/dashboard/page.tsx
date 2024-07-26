import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getReports } from "@/lib/firestore";
import { Report } from "@/types/report";

const AdminDashboardPage = async () => {
  const reports: Report[] = await getReports();

  return (
    <main className="pt-36 pb-20 min-h-screen px-1.5 md:px-10 lg:px-20 xl:px-40">
      <div className="bg-white p-5 md:py-10 xl:py-20 md:px-10 shadow-2xl rounded-lg text-sm overflow-x-auto">
        <Table className="min-w-full divide-y divide-gray-200">
          <TableCaption className="text-lg font-medium text-gray-900 mb-4">
            A list of recent reports.
          </TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead scope="col" className="w-[100px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</TableHead>
              <TableHead scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</TableHead>
              <TableHead scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</TableHead>
              <TableHead scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</TableHead>
              <TableHead scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crime Type</TableHead>
              <TableHead scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {reports.slice(0, 10).map((report) => (
              <TableRow key={report.id}>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.id}</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.fullName}</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.dateTime.toDate().toLocaleString()}</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.location}</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.crimeType}</TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default AdminDashboardPage;
