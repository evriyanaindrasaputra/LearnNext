import Link from "next/link";
export default function Portfolio() {
  return (
    <section>
      <h2 className="font-bold text-2xl md:text-5xl tracking-tighter text-black dark:text-white mb-5">
        My Portfolio
      </h2>
      <div className="flex justify-between items-center px-0 md:px-4">
        <div className="flex flex-col w-6/12 p-5 bg-white dark:bg-black text-black dark:text-white shadow-md rounded-md">
          <img src="/images/expense.png" />
          <div>
            <h3 className="text-black dark:text-white font-bold text-xl">
              Expense Tracker
            </h3>
            <p className="text-gray-400 font-normal">
              Application to record your activity income or outcome
            </p>
            <Link href="/project">
              <a>View Project</a>
            </Link>
          </div>
        </div>
        {/* below just dummy item */}
        <div className="flex flex-col w-6/12 p-5 bg-white dark:bg-black text-black dark:text-white">
          <img src="/images/expense.png" />
          <div>
            <h3 className="text-black dark:text-white font-bold text-xl">
              Expense Tracker
            </h3>
            <p className="text-gray-400 font-normal">
              Application to record your activity income or outcome
            </p>
            <Link href="/project">
              <a>View Project</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
