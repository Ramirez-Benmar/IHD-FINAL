import { Link, useNavigate } from 'react-router-dom';
import Reveal from '../../components/Reveal';

const services = [
  { name: 'Acoustics', route: '/services/acoustics' },
  { name: 'Audio-Visual & Multimedia', route: '/services/audio-visual' },
  { name: 'ELV Systems', route: '/services/elv' },
  { name: 'Security Systems', route: '/services/security' },
  { name: 'Information Technology', route: '/services/infotech' },
  { name: 'IoT', route: '/services/iot' },
  { name: 'BMS / EPMS', route: '/services/bmsepms' },
  { name: 'GRMS', route: '/services/grms' }
];

export const GRMS = () => {
  const navigate = useNavigate();

  return (
    <main className="gradient-sheen min-h-screen px-6 pb-16 pt-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Link
            to='/services'
            className='mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-200 transition hover:text-accent'
          >
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg>
            Back to Services
          </Link>
        </Reveal>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-1/4">
            <Reveal delay={100}>
              <div className="section-card sticky top-24 p-6">
                <h3 className="font-heading text-lg mb-4">Services</h3>
                <nav>
                  <ul className='space-y-2'>
                    {services.map((service) => (
                      <li key={service.route}>
                        <button
                          onClick={() => navigate(service.route)}
                          className={`block w-full text-left border-l-4 py-2 pl-3 text-sm transition ${
                            service.route === '/services/grms'
                              ? 'border-accent text-white font-semibold'
                              : 'border-transparent text-gray-400 hover:border-accent/50 hover:text-gray-200'
                          }`}
                        >
                          {service.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </Reveal>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <Reveal delay={120}>
              <h1 className="font-heading text-4xl leading-tight mb-6">GRMS</h1>
              <h2 className="text-2xl text-gray-300 mb-6">Guest Room Management Systems</h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Comprehensive room automation systems for hospitality environments. We design integrated guest room solutions that enhance comfort, personalization, and operational efficiency while delivering memorable guest experiences.
                </p>

                <p>
                  Our GRMS platforms seamlessly control lighting, climate, entertainment, and services through intuitive interfaces, creating smart rooms that adapt to guest preferences while optimizing energy use and maintenance.
                </p>

                <div className="section-card p-8 mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Core Specializations</h2>
                  <ul className='space-y-3'>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">In-Room Automation:</strong> Integrated control of lighting, HVAC, curtains, and entertainment
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Guest Control Interfaces:</strong> Tablets, mobile apps, voice control, and traditional panels
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Energy Management:</strong> Occupancy-based climate control and automated setback systems
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Entertainment Systems:</strong> Smart TVs, casting capabilities, and content streaming integration
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Door Lock Integration:</strong> Keyless entry, mobile check-in, and security monitoring
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Maintenance Alerting:</strong> Automated fault detection and housekeeping coordination
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">PMS Integration:</strong> Connection with property management and guest services systems
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Our Approach</h2>
                  <p>
                    We design GRMS solutions that balance guest convenience with operational efficiency. Our systems reduce energy costs by up to 30% while enabling personalized experiences that enhance satisfaction and loyalty.
                  </p>
                  <p className="mt-4">
                    Integration with existing hotel systems ensures seamless operations—from reservations through checkout. Our platforms provide valuable analytics on room usage, energy patterns, and maintenance needs for continuous optimization.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
};
