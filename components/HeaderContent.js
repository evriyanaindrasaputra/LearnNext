import Image from "next/image";
import Link from "next/link";
export default function HeaderContent({ src, title, subtitile, demo }) {
  return (
    <section className="w-full rounded-md flex flex-col overflow-hidden mt-4 mb-3">
      <div className=" w-full md:h-80 h-44 relative">
        <Image
          //   src="/images/expense.png"
          src={src}
          alt={src}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col bg-gray-100 dark:bg-gray-700 p-4 md:p-5">
        <h1 className="font-bold text-xl md:text-2xl text-black dark:text-white mb-1 md:mb-3">
          {title}
        </h1>
        <p className="text-black dark:text-white text-sm md:text-base">
          {subtitile}
        </p>
        <Link href={demo}>
          <button className="bg-gray-300 dark:bg-gray-400 w-2/6 md:w-1/5 rounded-md p-1 mt-3">
            <a className=" text-black dark:text-white text-xs md:text-sm">
              View Project
            </a>
          </button>
        </Link>
      </div>
    </section>
  );
}
