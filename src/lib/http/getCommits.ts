export const getCommitActivity = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}/events/public`)
    if (!res.ok) throw new Error("Failed to fetch events")
  
    const events = await res.json()
  
    const commitsPerDay: Record<string, number> = {}
  
    events.forEach(event => {
      if (event.type === "PushEvent") {
        const date = event.created_at.split("T")[0]
        commitsPerDay[date] = (commitsPerDay[date] || 0) + event.payload.commits.length
      }
    })

    console.log("commitsPerDay",commitsPerDay);
    
  
    // Convert to array for chart
    return Object.entries(commitsPerDay).map(([date, count]) => ({
      date,
      commits: count,
    }))
  }