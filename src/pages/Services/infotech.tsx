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

export const InfoTech = () => {
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
                            service.route === '/services/infotech'
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
              <h1 className="font-heading text-4xl leading-tight mb-6">Information Technology</h1>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Enterprise IT infrastructure that powers modern business operations. We design resilient, scalable networks and data center solutions that support mission-critical applications and enable digital transformation.
                </p>

                <p>
                  From backbone networking to cloud integration, our IT solutions deliver the performance, security, and reliability that organizations need to thrive in an increasingly connected world.
                </p>

                <div className="section-card p-8 mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Core Specializations</h2>
                  <ul className='space-y-3'>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Network Architecture:</strong> LAN, WAN, and wireless network design for enterprise environments
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Data Center Design:</strong> Server rooms, colocation facilities, and compute infrastructure
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Cloud Infrastructure:</strong> Hybrid cloud strategy, migration planning, and integration
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Unified Communications:</strong> VoIP, video conferencing, and collaboration platforms
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Network Security:</strong> Firewalls, VPNs, and intrusion prevention systems
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Wireless Solutions:</strong> Enterprise Wi-Fi, private LTE/5G, and mobile device management
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Storage Systems:</strong> SAN, NAS, and data backup/recovery solutions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">IT Infrastructure Monitoring:</strong> Network management systems and performance monitoring
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Our Approach</h2>
                  <p>
                    We begin with understanding your business processes and technology roadmap, then design IT infrastructure that aligns with operational goals and growth trajectories. Our solutions balance performance requirements with budget realities.
                  </p>
                  <p className="mt-4">
                    Security and redundancy are built into every layer of our designs. We implement defense-in-depth strategies and failover mechanisms that ensure continuous operations even during component failures or security incidents.
                  </p>
                  <p className="mt-4">
                    Our documentation and knowledge transfer processes ensure your IT team can effectively manage and maintain systems long after implementation, with clear upgrade paths for evolving technology needs.
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
