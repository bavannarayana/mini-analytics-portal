import dayjs from "dayjs";
import { seededRandom } from "../utils/seededRandom";

type Filters = {
  projectId: string;
  from: string;
  to: string;
  event: string;
  breakdown: string;
};

// Fake Timeseries Generator
function generateTimeseries(filters: Filters) {
  const start = dayjs(filters.from);
  const end = dayjs(filters.to);

  const days = end.diff(start, "day");

  const data = [];

  for (let i = 0; i <= days; i++) {
    const date = start.add(i, "day");

    const seed = i + filters.projectId.length + filters.event.length;

    const count = Math.floor(seededRandom(seed) * 500 + 50);

    data.push({
      date: date.format("YYYY-MM-DD"),
      count,
    });
  }

  return data;
}

// Fake Top N Generator
function generateTopN(filters: Filters) {
  const labels =
    filters.breakdown === "city"
      ? ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune"]
      : filters.breakdown === "state"
        ? ["KA", "MH", "DL", "TN", "TS"]
        : ["Android", "iOS", "Web", "Tablet", "TV"];

  return labels.map((label, index) => {
    const seed = index + filters.projectId.length;

    return {
      name: label,
      count: Math.floor(seededRandom(seed) * 1000 + 100),
    };
  });
}

// MAIN API
export async function fetchAnalytics(filters: Filters) {
  // Simulate error (10%)
  if (Math.random() < 0.1) {
    throw new Error("Simulated API error");
  }

  return {
    timeseries: generateTimeseries(filters),
    topN: generateTopN(filters),
  };
}
