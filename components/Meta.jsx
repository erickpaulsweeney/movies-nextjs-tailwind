import React from "react";
import Head from "next/head";

export default function Meta({ title }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, Tailwind" />
      <meta
        name="description"
        content="NextJS & Tailwind Movies Website with TMBD API"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
}
