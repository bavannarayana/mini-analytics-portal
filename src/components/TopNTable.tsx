import { memo } from "react";
import { exportToCSV } from "../utils/csvExports";

type Props = {
  data: {
    name: string;
    count: number;
  }[];
};

function TopNTable({ data }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg">Top Breakdown Results</h2>

        <button
          onClick={() => exportToCSV(data)}
          className="bg-green-600 text-white px-3 py-1 rounded cursor-pointer hover:bg-green-700"
        >
          Export CSV
        </button>
      </div>

      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Count</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border p-2">{row.name}</td>
              <td className="border p-2">{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(TopNTable);
