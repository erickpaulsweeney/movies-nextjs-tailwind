import React from 'react'

export default function Genre({ genres }) {
  return (
    <div className="flex gap-4 justify-center my-4">
      {genres.map(genre => <div key={genre.id} className="bg-slate-300 rounded-r-full rounded-l-full py-1 px-3 font-bold">{genre.name}</div>)}
    </div>
  )
}
