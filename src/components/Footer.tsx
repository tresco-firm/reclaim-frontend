import { footerLinks } from "../constants";

const Footer = () => (
  <section className="min-w-screen bg-[#F3F3FE] min-h-fit py-15 px-30 flex flex-row justify-between items-center max-md:flex-col max-md:gap-4">
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-[#004FD9]">Reclaim</h1>
      <p className="text-lg text-gray-600">
        &copy; 2026 Reclaim. Restoring clarity to the digital age.
      </p>
    </div>
    <div className="flex flex-col">
      <div className="flex flex-row justify-center gap-4 max-md:flex-col">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-lg text-gray-600 hover:text-[#004FD9] transition-all duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="/contact"
        className="text-lg text-gray-600 hover:text-[#004FD9] transition-all duration-300 justify-end"
      >
        Contact Us
      </a>
    </div>
  </section>
);

export default Footer;
