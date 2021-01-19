import Container from "../../components/Container";
import Head from "next/head";
import { getAllPortfolioName, getPortfolioData } from "../../lib/portfolios";
import HeaderContent from "../../components/HeaderContent";

export default function Portolio({ portfolioData }) {
  return (
    <Container>
      <Head>
        <title>{portfolioData.title}</title>
      </Head>
      <HeaderContent
        src={portfolioData.image}
        title={portfolioData.title}
        subtitile={portfolioData.subtitle}
        demo={portfolioData.demo}
      />
      <article>
        <div
          className="text-black dark:text-white text-sm md:text-base mt-2 mb-5"
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
