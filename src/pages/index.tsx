import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] w-full h-[calc(100vh-76px)] flex items-center justify-center flex-col">
      <Head>
        <title>BoardTasks</title>
      </Head>

      <main>
        <div className="flex flex-col justify-center items-center">
          <Image
            objectFit="contain"
            width={500}
            height={500}
            alt="Logo Tarefas"
            priority
            src={"/assets/hero.png"}
          />
        </div>
        <div>
          <h1 className="text-white text-xl sm:text-2xl m-7 text-center leading-7 font-bold font">
            System designed to help you organize <br /> your studies and tasks.
          </h1>
        </div>
        <div className="flex gap-2 flex-col sm:flex-row justify-around items-center">
          <section className="bg-white  text-center w-[80%] py-3.5 px-12 sm:w-auto sm:py-3.5 sm:px-12 rounded-2xl text-black hover:scale-125 transition-transform duration-150">
            <span>+ 7000 Posts</span>
          </section>
          <section className="bg-white text-center w-[80%] py-3.5 px-12 sm:w-auto sm:py-3.5 sm:px-12 rounded-2xl text-black hover:scale-125 transition-transform duration-150">
            <span>+ 7000 Comments</span>
          </section>
        </div>
      </main>
    </div>
  );
}

