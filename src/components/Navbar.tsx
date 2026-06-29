import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../constants";
import { useAuth } from "../utils/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signIn, signOut } = useAuth();

  return (
    <header className="relative">
      <main className="flex items-center justify-between px-8 py-4 lg:px-32 xl:px-40">
        {/* Logo */}
        <section className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-bold text-primary">Reclaim</h1>
        </section>

        {/* Desktop Navigation */}
        <nav className="hidden gap-3 lg:gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="p-2 font-semibold transition hover:text-primary hover:border-b-4 hover:border-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <section className="authentication-section max-md:hidden">
          {user ? (
            <button
              className="px-8 py-3 border-2 rounded-full text-primary border-primary hover:bg-primary/90 hover:text-white text-semibold"
              onClick={signOut}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="px-8 py-3 text-white rounded-full bg-primary text-semibold"
              onClick={signIn}
            >
              Sign In
            </button>
          )}
        </section>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </main>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 z-50 flex flex-col w-full bg-white shadow-lg md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="px-8 py-4 border-b hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <button
              className="px-8 py-2 border-2 rounded-full text-primary border-primary hover:bg-primary/90 hover:text-white text-semibold"
              onClick={signOut}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="px-8 py-2 text-white rounded-full bg-primary text-semibold"
              onClick={signIn}
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
