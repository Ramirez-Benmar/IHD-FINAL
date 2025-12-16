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

export const Security = () => {
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
                            service.route === '/services/security'
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
              <h1 className="font-heading text-4xl leading-tight mb-6">Security Systems</h1>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Comprehensive security solutions that protect people, assets, and operations. We design integrated security ecosystems combining surveillance, access control, and intrusion detection for complete facility protection.
                </p>

                <p>
                  Our security systems provide layered defense strategies with centralized monitoring and management, enabling proactive threat detection and rapid incident response across enterprise environments.
                </p>

                <div className="section-card p-8 mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Core Specializations</h2>
                  <ul className='space-y-3'>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">CCTV & Video Surveillance:</strong> IP cameras, video analytics, and intelligent monitoring systems
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Access Control Systems:</strong> Card readers, biometrics, and credential management platforms
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Intrusion Detection:</strong> Perimeter security, motion sensors, and alarm management
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Visitor Management:</strong> Registration, tracking, and badging systems
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Security Command Centers:</strong> Centralized monitoring, control rooms, and SOC design
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Integrated Security Platforms:</strong> PSIM and unified security management systems
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Cybersecurity for Physical Systems:</strong> Network segmentation and endpoint protection for security devices
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Our Approach</h2>
                  <p>
                    Security design begins with thorough risk assessment and operational requirements analysis. We develop multi-layered strategies that balance security effectiveness with user convenience and regulatory compliance.
                  </p>
                  <p className="mt-4">
                    Our systems integrate seamlessly with fire safety, building management, and emergency response protocols, creating coordinated security operations that protect what matters most.
                  </p>
                  <p className="mt-4">
                    We prioritize scalability and future-proofing, ensuring security infrastructure can adapt to evolving threats and organizational growth while maintaining robust performance and reliability.
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
