import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white px-4 sm:px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold">MySite</h1>
        <div className="hidden sm:flex space-x-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-200 flex items-center"
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 0010.586 10.586z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.03a1 1 0 010 1.414l-.7.7a1 1 0 11-1.414-1.414l.7-.7a1 1 0 011.414 0zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM14.22 15.97a1 1 0 00-1.414 0l-.7.7a1 1 0 101.414 1.414l.7-.7a1 1 0 000-1.414zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.78 15.97a1 1 0 00-1.414 1.414l.7.7a1 1 0 101.414-1.414l-.7-.7zM4 9a1 1 0 110 2H3a1 1 0 110-2h1zM5.78 4.03a1 1 0 010 1.414l-.7.7A1 1 0 113.65 4.73l.7-.7a1 1 0 011.43 0z" />
            </svg>
          )}
        </button>

        {/* Small screen links */}
        <div className="sm:hidden">
          <Link to="/" className="px-2">Home</Link>
        </div>
      </div>
    </nav>
  );
}