import { navLinks } from "../constants";

const Navbar = () => (
  <main className="flex flex-row justify-between px-40 py-8">
    <section className="flex flex-row items-center gap-4" id="navbar-header">
      <img src="/public/logo.svg" alt="Logo" className="w-10 h-10" />
      <h1 className="text-4xl font-bold text-[#004FD9]">Reclaim</h1>
    </section>
    <nav className="flex gap-10">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="p-2  font-semibold hover:border-b-4 hover:border-[#004FD9] hover:text-[#004FD9] transition-all duration-300"
        >
          {link.label}
        </a>
      ))}
    </nav>
    <button className="bg-[#004FD9] text-white px-6 py-2 rounded-lg hover:bg-[#0033a1] transition-all duration-300">
      Get Started
    </button>
  </main>
);

export default Navbar;
