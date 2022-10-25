import React from "react";
import Banner from "../../../components/Banner";
import Meta from "../../../components/Meta";
import Back from "../../../components/MoviePage/Back";
import Description from "../../../components/MoviePage/Description";
import Genre from "../../../components/MoviePage/Genre";
import MoviePage from "../../../components/MoviePage/MoviePage";
import Poster from "../../../components/MoviePage/Poster";
import Summary from "../../../components/MoviePage/Summary";
import Title from "../../../components/MoviePage/Title";
import { API_KEY, BASE_URL } from "../../../config/constants";
import tmdbAPI from "../../../config/tmdb";

export default function index({ movie }) {
  return (
    <>
      <Meta title={movie.title} />
      {console.log(movie)}
      <MoviePage>
        <Banner />
        <Poster url={movie.backdrop_path} title={movie.title} />
        <Title title={movie.title} />
        <Description tagline={movie.tagline} />
        <Genre genres={movie.genres} />
        <Summary overview={movie.overview} />
        <Back />
      </MoviePage>
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await tmdbAPI.get(
    `${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US&page=1`
  );
  const movie = response.data;
  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const response = await tmdbAPI.get(
    `${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const movies = response.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
