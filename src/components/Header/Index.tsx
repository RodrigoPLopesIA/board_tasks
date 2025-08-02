import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="h-[76px] w-full bg-[#0f0f0f] flex justify-center items-center">
      <section className="max-w-5xl w-full flex items-center justify-between">
        <nav>
          <Link href={"/"}>
            <h1 className="text-white font-bold">Board Tasks</h1>
          </Link>
        </nav>
        <button className="text-white border-white border-[1px] py-1 px-5 rounded-2xl hover:bg-white hover:text-[#0f0f0f] transition-all duration-300">
            Login
        </button>
      </section>
    </header>
  );
}
