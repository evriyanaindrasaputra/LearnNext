import Portfiolio from "./Portfolio";
export default function Portfolios() {
  return (
    <section className="my-8 md:my-5">
      <h2 className="font-bold text-2xl md:text-5xl tracking-tighter text-black dark:text-white mb-6">
        My Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-5">
        <Portfiolio
          src="/images/expense.png"
          alt="Portfolio-expense"
          title="Expense Tracker"
          subtitle="Application to record your activity income or outcome"
          target="/expense"
        />
        <Portfiolio
          src="/images/expense.png"
          alt="Portfolio-expense"
          title="Expense Tracker"
          subtitle="Application to record your activity income or outcome"
          target="/expense"
        />
        <Portfiolio
          src="/images/expense.png"
          alt="Portfolio-expense"
          title="Expense Tracker"
          subtitle="Application to record your activity income or outcome"
          target="/expense"
        />
        <Portfiolio
          src="/images/expense.png"
          alt="Portfolio-expense"
          title="Expense Tracker"
          subtitle="Application to record your activity income or outcome"
          target="/expense"
        />
      </div>
    </section>
  );
}
