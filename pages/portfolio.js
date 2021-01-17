import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";

export default function portfolio() {
  return (
    <Container>
      <Head>
        <title>Portfolio Eindrasap</title>
      </Head>
      <h1 className="text-2xl md:text-5xl font-bold text-black dark:text-white mb-10">
        Portfolio
      </h1>
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-md flex flex-col mb-5">
        <h2 className="text-lg md:text-2xl font-bold text-black dark:text-white">
          Title Here
        </h2>
        <p className="text-black dark:text-gray-200 font-light text-xs md:text-sm mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          delectus ad minus laboriosam architecto, pariatur ipsa autem atque
          corporis alias!
        </p>
        <Link href="/portfolio/expense">
          <button className="bg-gray-300 dark:bg-gray-400 w-2/6 md:w-1/5 rounded-md p-1">
            <a className=" text-black dark:text-white text-xs md:text-sm">
              View Project
            </a>
          </button>
        </Link>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-md flex flex-col mb-5">
        <h2 className="text-lg md:text-2xl font-bold text-black dark:text-white">
          Title Here
        </h2>
        <p className="text-black dark:text-gray-200 font-light text-xs md:text-sm mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          delectus ad minus laboriosam architecto, pariatur ipsa autem atque
          corporis alias!
        </p>
        <Link href="/portfolio/expense">
          <button className="bg-gray-300 dark:bg-gray-400 w-2/6 md:w-1/5 rounded-md p-1">
            <a className=" text-black dark:text-white text-xs md:text-sm">
              View Project
            </a>
          </button>
        </Link>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-md flex flex-col mb-5">
        <h2 className="text-lg md:text-2xl font-bold text-black dark:text-white">
          Title Here
        </h2>
        <p className="text-black dark:text-gray-200 font-light text-xs md:text-sm mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          delectus ad minus laboriosam architecto, pariatur ipsa autem atque
          corporis alias!
        </p>
        <Link href="/portfolio/expense">
          <button className="bg-gray-300 dark:bg-gray-400 w-2/6 md:w-1/5 rounded-md p-1">
            <a className=" text-black dark:text-white text-xs md:text-sm">
              View Project
            </a>
          </button>
        </Link>
      </div>
    </Container>
  );
}
