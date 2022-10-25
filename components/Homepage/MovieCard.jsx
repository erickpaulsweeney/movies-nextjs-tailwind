import React from "react";
import Link from "next/link";

export default function MovieCard({ id, poster }) {
  return (
    <Link href={`movies/${id}`} passHref>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster})`,
        }}
        className="w-52 h-72 bg-center bg-cover rounded-md relative hover:scale-110 cursor-pointer transition-transform"
      ></div>
    </Link>
  );
}
