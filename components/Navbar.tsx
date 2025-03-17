import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default async function Navbar() {
  const session = await auth();
  return (
    <header className="bg-white py-3 px-5 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <button
                onClick={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <span className="max-sm:hidden">Logout</span>
                <LogOut className="size-6 sm:hidden text-red-500" />
              </button>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>LF</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={async () => {
                  "use server";

                  await signIn("github");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
