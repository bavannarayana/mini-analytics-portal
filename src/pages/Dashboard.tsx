import Header from "../components/Header";
import { useURLFilters } from "../hooks/useURLFilters";
import { useQuery } from "@tanstack/react-query";

import ChartPanel from "../components/ChartPanel";
import { fetchAnalytics } from "../services/analyticService";
import TopNTable from "../components/TopNTable";

export default function Dashboard() {
  const { filters, setFilters } = useURLFilters();

  const { data, isLoading, error } = useQuery({
    queryKey: ["analytics", filters],
    queryFn: () => fetchAnalytics(filters),
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-4 space-y-4">
        {/* FILTERS */}
        <div className="bg-white p-4 rounded shadow flex flex-wrap gap-4 items-end">
          {/* Project */}
          <div className="flex flex-col w-40">
            <label className="text-xs text-gray-500 mb-1">Project</label>
            <select
              value={filters.projectId}
              onChange={(e) => setFilters({ projectId: e.target.value })}
              className="border p-2 rounded"
            >
              <option value="1">Project 1</option>
              <option value="2">Project 2</option>
            </select>
          </div>

          {/* From */}
          <div className="flex flex-col w-40">
            <label className="text-xs text-gray-500 mb-1">From</label>
            <input
              type="date"
              value={filters.from}
              onChange={(e) => setFilters({ from: e.target.value })}
              className="border p-2 rounded"
            />
          </div>

          {/* To */}
          <div className="flex flex-col w-40">
            <label className="text-xs text-gray-500 mb-1">To</label>
            <input
              type="date"
              value={filters.to}
              onChange={(e) => setFilters({ to: e.target.value })}
              className="border p-2 rounded"
            />
          </div>

          {/* Event */}
          <div className="flex flex-col w-40">
            <label className="text-xs text-gray-500 mb-1">Event</label>
            <select
              value={filters.event}
              onChange={(e) => setFilters({ event: e.target.value })}
              className="border p-2 rounded"
            >
              <option value="app_open">App Open</option>
              <option value="purchase">Purchase</option>
              <option value="signup">Signup</option>
            </select>
          </div>

          {/* Breakdown */}
          <div className="flex flex-col w-40">
            <label className="text-xs text-gray-500 mb-1">Breakdown</label>
            <select
              value={filters.breakdown}
              onChange={(e) => setFilters({ breakdown: e.target.value })}
              className="border p-2 rounded"
            >
              <option value="city">City</option>
              <option value="state">State</option>
              <option value="device">Device</option>
            </select>
          </div>
        </div>

        {/* LOADING */}
        {isLoading && (
          <div className="bg-white p-6 rounded shadow flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent" />
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="bg-white p-4 rounded shadow text-red-500">
            Failed to load data
          </div>
        )}

        {/* DATA */}
        {data && (
          <>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-semibold mb-2">Event Trend</h2>

              <ChartPanel data={data.timeseries} />
            </div>

            <div className="bg-white p-4 rounded shadow">
              <TopNTable data={data.topN} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
