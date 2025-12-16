import { useNavigate } from 'react-router-dom';
import { navItems } from '../data/content';
import logo from '/logo.png';
import { LiaFacebook } from 'react-icons/lia';
import { CiLinkedin } from 'react-icons/ci';
import { IoMailOutline } from 'react-icons/io5';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (target: string) => {
    navigate(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/60 border-t border-secondary/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <img src={logo} alt="IHD Philippines" className="h-16 w-auto" />
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
        <div>
          <h4 className="font-heading text-lg text-white mb-2">Get in touch</h4>
          <p className="text-sm text-gray-300 mb-2" >info@ihd.ph</p>
          <p className="text-sm text-gray-300 mb-3">+63 (000) 000-0000</p>
          <button
            onClick={() => handleNavClick('/contact')}
            className="rounded-full bg-accent t-12 px-5 py-2 text-sm font-semibold text-white transition hover:shadow-[0_0_0_4px_rgba(123,5,186,0.25)]"
          >
            Contact us
          </button>
          <div className="flex gap-4 pt-4">
            <a
              href="https://web.facebook.com/ihdltd/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transform transition-transform hover:scale-110"
            >
              <LiaFacebook className="text-gray-300 hover:text-accent transition-colors h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/company/ihd-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transform transition-transform hover:scale-110"
            >
              <CiLinkedin className="text-gray-300 hover:text-accent transition-colors h-7 w-7" />
            </a>
            <a
              href="mailto:ihd@ihd-hk.com"
              aria-label="Email"
              className="transform transition-transform hover:scale-110"
            >
              <IoMailOutline className="text-gray-300 hover:text-accent transition-colors h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary/70 bg-primary/60 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} IHD Philippines Ltd. Inc. Integrated technology consultancy.
      </div>
    </footer>
  );
};

export default Footer;
