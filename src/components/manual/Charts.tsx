import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type CommitData = {
  date: string;
  commits: number;
};

const CommitsChart = ({ data }: { data: CommitData[] }) => {
  return data.length === 0 ? (
    <div className="w-full h-[300px] bg-white rounded-xl shadow-md p-6 flex items-center justify-center text-gray-500">
      No commits in the last 7 days
    </div>
  ) : (
    <div className="w-full h-[360px] bg-white rounded-xl shadow-md px-6 py-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">
        📅 Commits in the Last 7 Days
      </h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="commits" fill="#3B82F6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CommitsChart;
