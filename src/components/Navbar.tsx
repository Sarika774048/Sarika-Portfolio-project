import { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';

type Page = 'home' | 'experience' | 'projects' | 'contact';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Experience', page: 'experience' },
  { label: 'Projects', page: 'projects' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SarikaNJavaDev.pdf';
    link.download = 'Sarika_N_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center glow">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-syne font-bold text-white text-lg tracking-tight">
            Sarika<span className="gradient-text">N</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              className={`nav-link text-sm font-medium transition-colors ${
                currentPage === item.page
                  ? 'text-blue-300 active'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={downloadResume}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium glass text-slate-300 hover:text-white border border-white/10 hover:border-blue-400/30 transition-all hover:bg-blue-500/10"
          >
            <Download size={16} />
            Resume
          </button>
          <button
            onClick={() => navigate('contact')}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:opacity-90 transition-opacity"
          >
            Hire Me
          </button>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              className={`text-left text-sm font-medium transition-colors ${
                currentPage === item.page ? 'text-blue-300' : 'text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
