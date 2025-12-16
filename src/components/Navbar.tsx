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
        <div className="flex items-center">
          <img src={logo} alt="IHD Philippines logo" className="h-16 w-auto" />
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-lg border border-secondary/70 px-3 py-2 text-sm"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? 'Close' : 'Menu'}
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
                  className="w-full px-6 py-4 text-center lg:px-0 lg:py-0 lg:text-sm text-gray-200 transition hover:text-accent"
                  onClick={() => handleNavClick(item.target)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="px-6 pb-4 lg:pb-0 lg:px-0 lg:ml-6">
              <button
                onClick={() => navigate('/projects')}
                className="w-full lg:w-auto rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_4px_rgba(123,5,186,0.25)]"
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
