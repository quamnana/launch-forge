// https://nextjs.org/docs/app/api-reference/config/next-config-js/ppr

import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

export const experimental_ppr = true;

export default async function StartupPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch and render startup page with data from Sanity
  //...
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  return (
    <>
      <h1 className="text-3xl">This is a startup: {post.title}</h1>
    </>
  );
}
