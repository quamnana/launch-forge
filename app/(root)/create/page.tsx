import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";
import React from "react";

export default async function CreatePage() {
  const session = await auth();
  if (!session) redirect("/");
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Share Your Startup</h1>
        <p className="sub-heading">
          Share your idea, get feedback, and build your startup.
        </p>
      </section>

      <StartupForm />
    </>
  );
}
