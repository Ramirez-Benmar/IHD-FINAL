import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import SkeletonLoader from '../components/SkeletonLoader';

const Services = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;

  const services = [
    {
      name: 'Acoustics',
      route: '/services/acoustics',
      logo: '/serviceslogos/acoustics.png',
      bgImage: '/servicesbg/Acoustics.jpeg',
      description: 'Architectural and environmental acoustics consulting'
    },
    {
      name: 'Audio-Visual & Multimedia',
      route: '/services/audio-visual',
      logo: '/serviceslogos/audiovisual.png',
      bgImage: '/servicesbg/Audio Visual.jpeg',
      description: 'Integrated AV systems and multimedia solutions'
    },
    {
      name: 'ELV Systems',
      route: '/services/elv',
      logo: '/serviceslogos/elv.png',
      bgImage: '/servicesbg/IT.jpeg',
      description: 'Extra Low Voltage systems integration'
    },
    {
      name: 'Security Systems',
      route: '/services/security',
      logo: '/serviceslogos/security.png',
      bgImage: '/servicesbg/Security.jpeg',
      description: 'Comprehensive security and surveillance solutions'
    },
    {
      name: 'Information Technology',
      route: '/services/infotech',
      logo: '/serviceslogos/infotech.png',
      bgImage: '/servicesbg/IT.jpeg',
      description: 'Network infrastructure and IT systems'
    },
    {
      name: 'IoT',
      route: '/services/iot',
      logo: '/serviceslogos/internet-of-things.png',
      bgImage: '/servicesbg/IT.jpeg',
      description: 'Internet of Things and smart building solutions'
    },
    {
      name: 'GRMS',
      route: '/services/grms',
      logo: '/serviceslogos/electrical.png',
      bgImage: '/servicesbg/IT.jpeg',
      description: 'Guest room management systems'
    }
  ];

  return (
    <main className="gradient-sheen min-h-screen px-6 pb-16 pt-28">
      <div className="mx-auto max-w-6xl space-y-10">
        <Reveal>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Services</p>
            <h1 className="font-heading text-4xl leading-tight">Technology solutions for integrated environments</h1>
            <p className="max-w-2xl text-gray-300">
              From discovery to deployment, we deliver comprehensive consulting across all technology systems for smart buildings.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={index * 60}>
              <button
                onClick={() => navigate(service.route)}
                className="section-card group relative flex h-full w-full flex-col gap-4 p-6 text-left transition-all hover:border-accent/50 hover:shadow-[0_10px_50px_rgba(123,5,186,0.3)] overflow-hidden"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30"
                  style={{ backgroundImage: `url('${service.bgImage}')` }}
                />
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/50 p-4">
                  <img 
                    src={service.logo} 
                    alt={`${service.name} icon`}
                    className="h-full w-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="relative z-10 flex-1 space-y-2">
                  <h2 className="font-heading text-xl text-white group-hover:text-accent transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-sm text-gray-300">
                    {service.description}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
