import Head from "next/head";
import Container from "../components/Container";
import Blogpost from "../components/Blogpost";
import { getSortedBlogsData } from "../lib/blogs";

export async function getStaticProps() {
  const allBlogsData = getSortedBlogsData();
  return {
    props: {
      allBlogsData,
    },
  };
}

export default function Blog({ allBlogsData }) {
  return (
    <Container>
      <Head>
        <title>Blog Eindrasap</title>
      </Head>
      <h1 className=" text-2xl md:text-5xl font-bold text-black dark:text-white mb-10">
        Blog
      </h1>
      {allBlogsData.map(({ id, date, title }) => (
        <Blogpost key={id} id={id} date={date} title={title} />
      ))}
    </Container>
  );
}
