import CommitsChart from "@/components/manual/Charts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getCommitActivity } from "@/lib/http/getCommits"
import { getProfile } from "@/lib/http/getProfile"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"


const Home = () => {
    const [search, setSearch] = useState("")
    const [repos, setRepos] = useState(0)
    const [commits, setCommits]  = useState<{ date: string; commits: number }[]>([])

    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationFn: (username: string)=>getProfile({username}),
        onSuccess: async (data,variables) => {
          // Invalidate and refetch
          console.log("success",data);
          setRepos(data.public_repos)
          const coms = await getCommitActivity(variables)
          setCommits(coms)
          console.log("commits",coms);
          
          
          queryClient.invalidateQueries({ queryKey: ['getProfile'] })
        },
      })
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("search",search)
        mutate(search)
        console.log(commits);
        

    }

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100 p-4 gap-8">
        <div className="w-[40%] flex gap-2 justify-start items-center">
        <Input value={search} onChange={(e)=>setSearch(e.target.value)} className="bg-sky-600/50 "></Input>
        <Button onClick={handleSubmit}>Search</Button>
        </div>

        {repos && <div className=" text-black font-[gilroy] font-bold text-2xl">Total Public Repositories : {repos}</div>}

        <CommitsChart data={commits}></CommitsChart>
       
    </div>
  )
}

export default Home