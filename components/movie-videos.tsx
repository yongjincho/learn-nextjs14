import { API_URL } from "../app/contants";

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Can't find videos");
}

export default async function MovieVideos({ id } : { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>
}
