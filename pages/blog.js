import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";

export default function Blog() {
  return (
    <Container>
      <Head>
        <title>Blog Eindrasap</title>
      </Head>
      <h1 className=" text-2xl md:text-5xl font-bold text-black dark:text-white mb-10">
        Blog
      </h1>
      <div className="p-5 my-1">
        <Link className="my-4" href="/">
          <a className="w-full mb-5">
            <div className="w-full flex flex-col">
              <h2 className="text-xl md:text-3xl font-semibold text-black dark:text-white">
                Blog title here
              </h2>
              <p className="text-black dark:text-white text-sm md:text-lg my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Soluta, in. Velit repellat quos inventore magnam rerum, modi
                voluptatibus minus dolorum!
              </p>
              <span className="text-black dark:text-white font-light text-sm">
                22 januari 2020
              </span>
            </div>
          </a>
        </Link>
      </div>
      <div className="p-5 my-1">
        <Link className="my-4" href="/">
          <a className="w-full mb-5">
            <div className="w-full flex flex-col">
              <h2 className="text-xl md:text-3xl font-semibold text-black dark:text-white">
                Blog title here
              </h2>
              <p className="text-black dark:text-white text-sm md:text-lg my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Soluta, in. Velit repellat quos inventore magnam rerum, modi
                voluptatibus minus dolorum!
              </p>
              <span className="text-black dark:text-white font-light text-sm">
                22 januari 2020
              </span>
            </div>
          </a>
        </Link>
      </div>
      <div className="p-5 my-1">
        <Link className="my-4" href="/">
          <a className="w-full mb-5">
            <div className="w-full flex flex-col">
              <h2 className="text-xl md:text-3xl font-semibold text-black dark:text-white">
                Blog title here
              </h2>
              <p className="text-black dark:text-white text-sm md:text-lg my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Soluta, in. Velit repellat quos inventore magnam rerum, modi
                voluptatibus minus dolorum!
              </p>
              <span className="text-black dark:text-white font-light text-sm">
                22 januari 2020
              </span>
            </div>
          </a>
        </Link>
      </div>
    </Container>
  );
}
