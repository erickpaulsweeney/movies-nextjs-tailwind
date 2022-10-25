import React from "react";
import Link from "next/link";

export default function Back() {
  return (
    <Link href="/">
      <button className="bg-slate-400 w-12 h-12 fixed bottom-4 left-4 rounded-full hover:scale-110 cursor-pointer transition-transform font-bold text-xl">
        ⇐
      </button>
    </Link>
  );
}
