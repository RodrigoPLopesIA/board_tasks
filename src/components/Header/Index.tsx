import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="h-[76px] w-full bg-[#0f0f0f] flex justify-center items-center">
      <section className="max-w-5xl w-full flex px-4 items-center justify-between">
        <nav className="flex items-center justify-between gap-4">
          <Link href={"/"}>
            <h1 className="text-white text-xl font-bold">Board Tasks</h1>
          </Link>
          <Link href={"/dashoboard"}>
            <button className="text-white border-white border-[1px] py-1 px-5 rounded-2xl hover:bg-white hover:text-[#0f0f0f] transition-all duration-300">
              My Panel
            </button>
          </Link>
        </nav>
        <button className="text-white border-white border-[1px] py-1 px-5 rounded-2xl hover:bg-white hover:text-[#0f0f0f] transition-all duration-300">
          Login
        </button>
      </section>
    </header>
  );
}
