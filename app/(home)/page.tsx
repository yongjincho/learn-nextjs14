import Movie from "../../components/movie";
import { API_URL } from "../contants";

export const metadata = {
  title: "Movies",
}


async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Page() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <Movie id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
    </div>
  );
}
