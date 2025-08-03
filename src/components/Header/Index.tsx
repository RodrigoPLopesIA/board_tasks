import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header() {
  const { data: session, status } = useSession();

  const router = useRouter()
  return (
    <header className="h-[76px] w-full bg-[#0f0f0f] flex justify-center items-center">
      <section className="max-w-5xl w-full flex px-4 items-center justify-between">
        <nav className="flex items-center justify-between gap-4">
          <Link href={"/"}>
            <h1 className="text-white text-xl font-bold">Board Tasks</h1>
          </Link>
          {session && (
            <Link href={"/dashboard"}>
              <button className="text-white border-white border-[1px] py-1 px-5 rounded-2xl hover:bg-white hover:text-[#0f0f0f] transition-all duration-300">
                My Panel
              </button>
            </Link>
          )}
          {session && (
            <Link href={"/profile"}>
              <button className="text-white border-white border-[1px] py-1 px-5 rounded-2xl hover:bg-white hover:text-[#0f0f0f] transition-all duration-300">
                Profile
              </button>
            </Link>
          )}
        </nav>
        {status === "loading" ? (
          <></>
        ) : session ? (
          <button
            className="text-white border-white border-[1px] py-1 px-5 rounded-2xl hover:bg-white hover:text-[#0f0f0f] transition-all duration-300"
            onClick={(e) => signOut()}
          >
            Welcome, {session.user?.name}
          </button>
        ) : (
          <nav className="flex justify-center gap-2">
            <button
              className="text-gray-300 border-gray-300 border-[1px] py-1 px-5 rounded-2xl hover:bg-white hover:text-[#0f0f0f] transition-all duration-300"
              onClick={(e) => router.push("login")}
            >
              Already have an account? Login
            </button>
            <button
              className="text-gray-300 border-gray-300 border-[1px] py-1 px-5 rounded-2xl hover:bg-white hover:text-[#0f0f0f] transition-all duration-300"
              onClick={(e) => router.push("register")}
            >
             Don't have an account? Register
            </button>
          </nav>
        )}
      </section>
    </header>
  );
}
