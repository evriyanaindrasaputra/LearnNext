import Container from "../../components/Container";
import Head from "next/head";
import { getBlogData, getAllBlogIds } from "../../lib/blogs";
export default function Blog({ blogData }) {
  return (
    <Container>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <article className="h-80vh">
        <div className="my-5">
          <h1 className="text-xl md:text-3xl font-bold text-black dark:text-white">
            {blogData.title}
          </h1>
          <span
            className="text-black dark:text-white text-xs
         font-light italic"
          >
            {blogData.date}
          </span>
        </div>
        <div
          className="text-black dark:text-white text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: blogData.contentHtml }}
        />
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);
  return {
    props: {
      blogData,
    },
  };
}
