export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm opacity-80">
              © {currentYear} Civil Engineering Portfolio
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="text-sm opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-sm opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
