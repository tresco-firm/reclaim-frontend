import { navLinks } from "../constants";

const Navbar = () => (
  <main className="flex flex-row justify-between px-40 py-8">
    <section className="flex flex-row items-center gap-4" id="navbar-header">
      <img src="/public/logo.svg" alt="Logo" className="w-10 h-10" />
      <h1 className="text-4xl font-bold text-primary">Reclaim</h1>
    </section>
    <nav className="flex gap-10">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="p-2 font-semibold transition-all duration-300 hover:border-b-4 hover:border-primary hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </nav>
    <button className="px-6 py-2 text-white transition-all duration-300 rounded-lg bg-primary hover:bg-primary/90">
      Get Started
    </button>
  </main>
);

export default Navbar;
