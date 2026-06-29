import { footerLinks } from "../constants";

const Footer = () => (
  <section className="min-w-screen bg-[#F3F3FE] min-h-fit py-15 px-30 max-lg:py-5 max-lg:px-10 flex flex-row justify-between items-center max-md:flex-col max-md:gap-4">
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-primary">Reclaim</h1>
      <p className="text-lg text-gray-600">
        &copy; 2026 Reclaim. Restoring clarity to the digital age.
      </p>
    </div>
    <div className="flex flex-col items-end gap-5 max-lg:items-start ">
      <div className="flex flex-row justify-center gap-4 max-md:flex-col max-lg:items-start">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-lg text-gray-600 transition-all duration-300 hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="/contact"
        className="justify-end text-lg text-gray-600 transition-all duration-300 hover:text-primary"
      >
        Contact Us
      </a>
    </div>
  </section>
);

export default Footer;
