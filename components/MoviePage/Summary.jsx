import React from 'react'

export default function Summary({ overview }) {
  return (
    <p className="max-w-4xl m-auto text-base p-8 text-slate-500">{overview}</p>
  )
}
