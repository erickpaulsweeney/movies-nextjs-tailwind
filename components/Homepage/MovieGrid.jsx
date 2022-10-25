import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
    <div className="flex flex-wrap justify-evenly gap-8 max-w-7xl m-auto py-10 px-5">
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} id={movie.id} poster={movie.poster_path} />
      ))}
    </div>
  );
}
