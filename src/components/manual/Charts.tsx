import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

type CommitData = {
  date: string
  commits: number
}

const CommitsChart = ({ data }: { data: CommitData[] }) => {
  return (
    data.length === 0 ? (
      <div className="w-full h-[300px] bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
        No commits in the last 7 days
      </div>
    ) : (
      <div className="w-full h-[300px] bg-white rounded-xl shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Commits in the last 7 days</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="commits" fill="#60A5FA" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  )
}


export default CommitsChart
