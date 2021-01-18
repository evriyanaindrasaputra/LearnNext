import Container from "../../components/Container";
import Head from "next/head";
import { getAllPortfolioName, getPortfolioData } from "../../lib/portfolios";

export default function Portolio({ portfolioData }) {
  return (
    <Container>
      <Head>
        <title>{portfolioData.title}</title>
      </Head>
      <article>
        <div className="my-5">
          <h1>{portfolioData.title}</h1>
        </div>
        <div
          className="text-black dark:text-white text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: portfolioData.contentHtml }}
        />
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllPortfolioName();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolioData = await getPortfolioData(params.name);
  return {
    props: {
      portfolioData,
    },
  };
}
