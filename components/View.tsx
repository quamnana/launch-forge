import React from "react";
import { after } from "next/server";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { pluralizeString } from "@/lib/utils";
import { writeClient } from "@/sanity/lib/write-client";
import Ping from "./Ping";

export default async function View({ id }: { id: string }) {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // TODO: Update the number of views

  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: totalViews + 1 })
      .commit();
  });

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">
          {pluralizeString(totalViews, "view")}
        </span>
      </p>
    </div>
  );
}
