import Head from "next/head";
import { motion } from "framer-motion";
import { getSortedPostsData } from "../lib/posts";
import Container from "../components/Container";
import Skill from "../components/Skill";
import Portfolios from "../components/Portfolios";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  const motionH1 = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
        delay: 1,
      },
    },
  };
  const motionButton = {
    hidden: {
      y: -40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 2.3,
      },
    },
  };
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto">
        <section className="h-90vh flex items-center justify-center flex-col">
          <motion.h1
            className="font-bold text-3xl md:text-6xl mb-4 tracking-tight text-black dark:text-white text-center align-middle"
            variants={motionH1}
            initial="hidden"
            animate="visible"
          >
            Hey, I'm Evriyana Indra Saputra
          </motion.h1>
          <motion.button
            className="p-2 md:p-4 font-semibold bg-black dark:bg-gray-800 text-white dark:text-white rounded-lg my-4"
            variants={motionButton}
            initial="hidden"
            animate="visible"
            href="#skill"
          >
            <a href="#skill">More About Me</a>
          </motion.button>
        </section>
        <Skill />
        <Portfolios />
      </div>
    </Container>
  );
}
