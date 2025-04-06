import axios from "axios";

export async function getProfile({username}:{username:string}) {
  const res = await axios.get(`https://api.github.com/users/${username}`);
  if (!res.data) {
    throw new Error("Failed to fetch data");
  }
  console.log(res.data);
  
  return res.data;
}