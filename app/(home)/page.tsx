import Movie from "../../components/movie";

export const metadata = {
  title: "Movies",
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
