import Banner from "../components/Banner";
import Meta from "../components/Meta";
import HomePage from "../components/Homepage/HomePage";
import tmdbAPI from "../config/tmdb";
import { API_KEY, BASE_URL } from "../config/constants";
import MovieGrid from "../components/Homepage/MovieGrid";

export default function Home({ movies }) {
  return (
    <>
      <Meta title={"Next Movies"} />
      <HomePage>
        <Banner />
        <MovieGrid movies={movies} />
      </HomePage>
    </>
  );
}

export async function getStaticProps() {
  const response = await tmdbAPI.get(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`);
  const movies = response.data;

  return {
    props: { movies }
  }
}