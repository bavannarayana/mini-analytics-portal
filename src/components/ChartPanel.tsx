import { memo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Data = {
  date: string;
  count: number;
};

type Props = {
  data: Data[];
};

function ChartPanel({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#2563eb"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default memo(ChartPanel);
