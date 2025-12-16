import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../data/content';
import logo from '/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const scrollToSection = (target: string) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (target: string) => {
    if (target === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (location.pathname === '/') {
      scrollToSection(target);
    } else {
      navigate('/', { state: { scrollTo: target } });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-primary/70 border-b border-secondary/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="PL Light logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <p className="font-heading text-lg tracking-tight">PL Light</p>
            <p className="text-sm text-gray-300">Illuminating experiences</p>
          </div>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-secondary/70 px-3 py-2 text-sm"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          className={`${
            isOpen ? 'absolute left-0 top-full w-full bg-primary/95 border-t border-secondary/70' : 'hidden'
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className="w-full px-6 py-3 text-left md:px-0 md:py-0 md:text-sm text-gray-200 transition hover:text-accent"
                  onClick={() => handleNavClick(item.target)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="md:ml-6">
              <button
                onClick={() => navigate('/projects')}
                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_4px_rgba(123,5,186,0.25)]"
              >
                View Projects
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
