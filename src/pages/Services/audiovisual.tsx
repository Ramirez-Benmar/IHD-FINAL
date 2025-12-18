import { Link, useNavigate } from 'react-router-dom';
import Reveal from '../../components/Reveal';

const services = [
  { name: 'Acoustics', route: '/services/acoustics' },
  { name: 'Audio-Visual & Multimedia', route: '/services/audio-visual' },
  { name: 'Security Systems', route: '/services/security' },
  { name: 'Information Technology', route: '/services/infotech' },
  { name: 'IoT', route: '/services/iot' },
  { name: 'GRMS', route: '/services/grms' }
];

export const AudioVisual = () => {
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
                            service.route === '/services/audio-visual'
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
              <h1 className="font-heading text-4xl leading-tight mb-6">Audio-Visual & Multimedia</h1>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  We design and integrate cutting-edge audio-visual systems that elevate presentations, collaboration, and entertainment experiences. Our solutions blend technical excellence with user-friendly operation.
                </p>

                <p>
                  From corporate boardrooms to auditoriums and public venues, we deliver immersive AV environments that enhance communication and engagement through expertly crafted multimedia systems.
                </p>

                <div className="section-card p-8 mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Core Specializations</h2>
                  <ul className='space-y-3'>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Lighting Design & Control:</strong> Dynamic lighting systems for performances, events, and architectural enhancement
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Audio Systems:</strong> Professional sound reinforcement, conference audio, and immersive audio experiences
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">3D Modeling & Simulation:</strong> Pre-visualization and system modeling for complex installations
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Signal Distribution:</strong> High-performance AV over IP, matrix switching, and signal processing
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Display Technologies:</strong> LED walls, projection systems, video walls, and interactive displays
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Entertainment Systems:</strong> Broadcast, streaming, and media server solutions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Interactive Experiences:</strong> Touch interfaces, gesture control, and immersive environments
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      <div>
                        <strong className="text-white">Networked AV:</strong> Enterprise-wide AV distribution and control platforms
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="font-heading text-2xl mb-4 text-white">Our Approach</h2>
                  <p>
                    We partner with clients from concept through commissioning, ensuring every AV system delivers exceptional performance while remaining intuitive to operate. Our designs prioritize scalability, reliability, and future-proofing.
                  </p>
                  <p className="mt-4">
                    Through detailed system documentation, comprehensive training, and ongoing support, we ensure your AV investment continues to deliver value throughout its lifecycle.
                  </p>
                  <p className="mt-4">
                    Our team stays current with emerging technologies and industry best practices, bringing innovative solutions to every project while maintaining practical focus on user needs and operational requirements.
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
