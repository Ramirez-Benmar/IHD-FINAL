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

export const BMSEPMS = () => {
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
                            service.route === '/services/bmsepms'
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
              <h1 className="font-heading text-4xl leading-tight mb-6">BMS / EPMS</h1>
              <h2 className="text-2xl text-gray-300 mb-6">Building & Energy Performance Management Systems</h2>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Intelligent building management systems that orchestrate HVAC, lighting, and mechanical operations for optimal performance. We create centralized control platforms that reduce energy consumption while enhancing occupant comfort.
                </p>

                <p>
                  Our BMS/EPMS solutions provide real-time monitoring, automated control, and deep analytics that transform building operations from reactive to predictive, delivering substantial cost savings and sustainability improvements.
                </p>

                <div className="section-card p-8 mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Core Specializations</h2>
                  <ul className='space-y-3'>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">HVAC Control & Optimization:</strong> Advanced temperature control, VAV systems, and energy-efficient scheduling
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Lighting Control Systems:</strong> Daylight harvesting, occupancy-based control, and circadian lighting
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Energy Monitoring & Analytics:</strong> Real-time consumption tracking and performance benchmarking
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Demand Response Integration:</strong> Load shedding and utility coordination for cost optimization
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Fault Detection & Diagnostics:</strong> Automated anomaly detection and maintenance alerting
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Integration Platforms:</strong> BACnet, Modbus, and open protocol system integration
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Sustainability Reporting:</strong> Carbon tracking and ESG compliance documentation
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Our Approach</h2>
                  <p>
                    We conduct detailed energy audits and operational assessments to establish baseline performance before designing BMS strategies. Our solutions target measurable energy savings typically ranging from 20-40% while maintaining or improving comfort levels.
                  </p>
                  <p className="mt-4">
                    System integration is central to our approach—connecting HVAC, lighting, security, and fire systems into unified management platforms that enable coordinated responses and holistic building intelligence.
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
