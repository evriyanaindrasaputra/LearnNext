import { useTheme } from "next-themes";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Container({ children }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navbar setTheme={setTheme} theme={theme} />
      <main className="flex flex-col justify-center bg-white dark:bg-black px-8 flex-1">
        <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
