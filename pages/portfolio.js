import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";
import { getAllPortfolio } from "../lib/portfolios";

export async function getStaticProps() {
  const allPortfolioData = getAllPortfolio();
  return {
    props: {
      allPortfolioData,
    },
  };
}
export default function portfolio({ allPortfolioData }) {
  return (
    <Container>
      <Head>
        <title>Portfolio Eindrasap</title>
      </Head>
      <section className="h-80vh">
        <h1 className="text-2xl md:text-5xl font-bold text-black dark:text-white mb-10">
          Portfolio
        </h1>
        {allPortfolioData.map(({ title, subtitle, name }) => (
          <div
            key={name}
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-md mb-5 w-full"
          >
            <div className="flex flex-col">
              <h2 className="text-lg md:text-2xl font-bold text-black dark:text-white w-full">
                {title}
              </h2>
              <p className="text-black dark:text-gray-200 font-light text-xs md:text-sm mb-3">
                {subtitle}
              </p>
              <Link href={`/portfolio/${name}`}>
                <button className="bg-gray-300 dark:bg-gray-400 w-2/6 md:w-1/5 rounded-md p-1">
                  <a className=" text-black dark:text-white text-xs md:text-sm">
                    View Project
                  </a>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}
