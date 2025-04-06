import CommitsChart from "@/components/manual/Charts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCommitActivity } from "@/lib/http/getCommits";
import { getProfile } from "@/lib/http/getProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState(0);
  const [commits, setCommits] = useState<{ date: string; commits: number }[]>(
    []
  );

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (username: string) => getProfile({ username }),
    onSuccess: async (data, variables) => {
      setRepos(data.public_repos);
      const coms = await getCommitActivity(variables);
      setCommits(coms);
      queryClient.invalidateQueries({ queryKey: ["getProfile"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    mutate(search);
  };

  return (
    <main className="min-h-screen w-full bg-gray-100 px-4 py-8 flex flex-col items-center gap-10 font-sans">
      <section className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-4">
        <Input
          placeholder="Enter GitHub username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-white shadow-md border border-gray-300"
        />
        <Button
          onClick={handleSubmit}
          disabled={isPending}
          className="w-full sm:w-auto"
        >
          {isPending ? "Fetching..." : "Search"}
        </Button>
      </section>

      {repos > 0 && (
        <div className="text-xl sm:text-2xl text-gray-800 font-semibold text-center">
          🔍 Public Repositories:{" "}
          <span className="text-blue-600">{repos}</span>
        </div>
      )}

      {commits.length > 0 && (
        <section className="w-full max-w-4xl p-4 bg-white rounded-2xl shadow-md">
          <h2 className="text-lg font-medium mb-4 text-gray-700">
            📊 Commit Activity (Last 7 Days)
          </h2>
          <CommitsChart data={commits} />
        </section>
      )}
    </main>
  );
};

export default Home;
