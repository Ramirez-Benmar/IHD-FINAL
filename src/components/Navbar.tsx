import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../data/content';
import logo from '/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (target: string) => {
    navigate(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-primary/70 border-b border-secondary/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <img src={logo} alt="IHD Philippines logo" className="h-20 w-auto" />
        </div>

        <button
          className="lg:hidden inline-flex flex-col items-center justify-center w-10 h-10 gap-1.5"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gray-200 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <nav
          className={`${
            isOpen ? 'absolute left-0 top-full w-full bg-primary/95 border-t border-secondary/70' : 'hidden'
          } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className="w-full px-6 py-4 text-center lg:px-0 lg:py-0 text-base lg:text-lg text-gray-200 transition hover:text-accent font-navbar"
                  onClick={() => handleNavClick(item.target)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
