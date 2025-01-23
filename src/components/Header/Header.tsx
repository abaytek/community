import { ModeToggle } from "../Theme/ThemeToggler";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 w-full bg-white dark:bg-gray-900  z-50">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-4 py-3 ">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Community
        </div>

        <nav className="md:flex hidden space-x-6 text-gray-700 dark:text-gray-300">
          <a
            href="#home"
            className="text-sm font-medium border-b-2 border-indigo-600 dark:border-indigo-400 "
          >
            Home
          </a>
          <a
            href="#posts"
            className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Posts
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            About
          </a>
        </nav>

       <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
