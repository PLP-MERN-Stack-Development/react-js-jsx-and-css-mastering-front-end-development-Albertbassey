import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-12 py-6 max-w-6xl mx-auto w-full">{children}</main>
      <Footer />
    </div>
  );
}