import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[#0f0f0f] w-full h-screen flex items-center justify-center flex-col">
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
          <h1 className="text-white text-2xl m-7 text-center leading-7 font-bold font">
            System designed to help you organize <br /> your studies and tasks.
          </h1>
        </div>
      </main>
    </div>
  );
}
