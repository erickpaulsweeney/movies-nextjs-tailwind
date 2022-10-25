import React from 'react';

export default function Poster({ url, title }) {
  return (
    <img src={`https://image.tmdb.org/t/p/original${url}`} alt={title} className="w-10/12 lg:w-1/2 rounded-md mx-auto my-10" />
  )
}
