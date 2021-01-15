export default function Skill() {
  return (
    <section className="h-screen flex flex-col justify-center" id="skill">
      <h2 className="font-bold text-lg md:text-2xl tracking-tighter text-black dark:text-white text-center">
        My Skills
      </h2>
      <p className="font-normal text-base text-gray-400 dark:text-gray-100 mb-5 md:mb-44 text-center">
        Some of skills that i have learned and still continuing to learn more
        deeply.
      </p>
      <ul className="grid px-0 md:px-4 gap-2 md:gap-4 grid-cols-2 md:grid-cols-4 md:grid-rows-2 text-gray-500 dark:text-white">
        <li>HTML & Css</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Styled-Components</li>
        <li>Git</li>
        <li>Tailwind</li>
        <li>Next JS</li>
      </ul>
    </section>
  );
}
