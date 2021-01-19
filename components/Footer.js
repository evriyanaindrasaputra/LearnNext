import Link from "next/link";
export default function Footer() {
  return (
    <section className="flex justify-between items-center bg-white dark:bg-black max-w-4xl w-full p-4 h-10vh mx-auto">
      <Link href="/">
        <a className="text-black dark:text-white font-bold text-2xl leading-none">
          ND <br /> RS
        </a>
      </Link>
      <ul className="flex justify-between font-semibold text-black dark:text-white">
        <li className="mx-2">
          <Link href="https://www.github.com/evriyanaindrasaputra">
            <a target="_blank">github</a>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="https://www.instagram.com/eindrasap">
            <a target="_blank">instagram</a>
          </Link>
        </li>
        <li className="mx-2">
          <Link href="https://www.twitter.com/eindrasap">
            <a target="_blank">twitter</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
