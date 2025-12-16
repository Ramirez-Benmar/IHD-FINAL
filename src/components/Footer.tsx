import { useNavigate } from 'react-router-dom';
import { navItems } from '../data/content';
import logo from '/logo.svg';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (target: string) => {
    if (target === 'home') {
      navigate('/', { replace: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate('/', { state: { scrollTo: target } });
  };

  return (
    <footer className="bg-secondary/60 border-t border-secondary/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <img src={logo} alt="IHD Philippines" className="h-12 w-auto" />
          <p className="text-sm text-gray-300">
            A trusted partner for smart, integrated building solutions across enterprise environments.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg text-white">Navigate</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className="transition hover:text-white"
                  onClick={() => handleNavClick(item.target)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-heading text-lg text-white">Get in touch</h4>
          <p className="text-sm text-gray-300">info@ihd.ph</p>
          <p className="text-sm text-gray-300">+63 (000) 000-0000</p>
          <button
            onClick={() => handleNavClick('contact')}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_4px_rgba(123,5,186,0.25)]"
          >
            Contact us
          </button>
        </div>
      </div>
      <div className="border-t border-secondary/70 bg-primary/60 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} IHD Philippines Ltd. Inc. Integrated technology consultancy.
      </div>
    </footer>
  );
};

export default Footer;
