import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Portfolio({ src, alt, title, subtitle, target }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col w-full mx-2 p-5 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-md"
    >
      <Link href={target}>
        <a>
          <Image src={src} alt={alt} width={400} height={200} />
        </a>
      </Link>
      <div className="mt-3">
        <h3 className="text-black dark:text-white font-bold text-xl">
          {title}
        </h3>
        <p className="text-black dark:text-gray-200 font-light text-sm my-3">
          {subtitle}
        </p>
        <Link href={target}>
          <a className=" text-black dark:text-white">View Project</a>
        </Link>
      </div>
    </motion.div>
  );
}
