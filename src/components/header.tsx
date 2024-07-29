import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="w-full shadow-md dark:navbar-dark-mode bg-white dark:bg-dark-blue">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link
          className="text-lg font-bold text-very-dark-blue-text dark:text-white"
          href="/"
        >
          Where in the World
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
