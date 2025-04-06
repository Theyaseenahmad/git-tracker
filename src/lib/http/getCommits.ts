export const getCommitActivity = async (username: string) => {
  const res = await fetch(`https://api.github.com/users/${username}/events/public`)
  if (!res.ok) throw new Error("Failed to fetch events")

  const events: any[] = await res.json()

  const commitsPerDay: Record<string, number> = {}

  events.forEach((event) => {
    if (event.type === "PushEvent") {
      const date = event.created_at.split("T")[0]
      commitsPerDay[date] = (commitsPerDay[date] || 0) + event.payload.commits.length
    }
  })

  // Create list of last 7 days including today
  const last7Days: string[] = []
  const today = new Date()

  for (let i = 6; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const dateStr = d.toISOString().split("T")[0]
    last7Days.push(dateStr)
  }

  // Normalize data to make sure all 7 days are present (even if 0 commits)
  const normalized = last7Days.map(date => ({
    date,
    commits: commitsPerDay[date] || 0,
  }))

  console.log("Normalized commits data:", normalized);
  

  return normalized
}
