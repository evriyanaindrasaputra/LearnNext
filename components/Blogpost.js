import Link from "next/link";
export default function Blogpost({ title, date, id }) {
  return (
    <div className="p-5 my-1 w-custom50">
      <Link className="my-4" href={`/blog/${id}`}>
        <a className=" mb-5">
          <div className="w-full flex flex-col">
            <h2 className="text-xl md:text-3xl font-semibold text-black dark:text-white">
              {title}
            </h2>
            <p className="text-black dark:text-white text-sm md:text-lg my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque vel velit eum perspiciatis debitis rerum, quod dolores modi distinctio totam.
            </p>
            <span className="text-black dark:text-white font-light text-sm">
              {date}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}
