import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ setTheme, theme }) {
  const [mounted, setMounted] = useState(false);
  const variantNav = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  useEffect(() => setMounted(true), []);
  return (
    <motion.nav
      className="flex justify-between items-center bg-white dark:bg-black max-w-4xl w-full p-4 h-10vh mx-auto my-0 sticky-nav"
      variants={variantNav}
      initial="hidden"
      animate="visible"
    >
      <button
        aria-label="Toggle dark mode"
        type="button"
        className="bg-gray-200  dark:bg-gray-800 rounded p-3 h-10 w-10"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="h-4 w-4 text-gray-800 dark:text-gray-200"
          >
            {theme === "dark" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>
      <div>
        <Link href="/">
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
        </Link>
        <Link href="/blog">
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Blog</a>
        </Link>
        <Link href="/portfolio">
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
            Portfolio
          </a>
        </Link>
      </div>
    </motion.nav>
  );
}
