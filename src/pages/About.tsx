import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import SkeletonLoader from '../components/SkeletonLoader';
import { heads, employees } from '../data/content';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;

  return (
    <main className="gradient-sheen min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-28">
        <Reveal>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">About Us</p>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              Building the future of integrated technology
            </h1>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 space-y-6 text-lg text-gray-300">
            <p>
              Headquartered in the Philippines, we are a leading consultancy firm with a strong presence across Asia, specializing in IT, IoT, Security, ELV, Audio-Visual, and Acoustics.
            </p>
            <p>
              Our mission is simple: turn our clients' ambitions into reality. By combining technical expertise with innovative thinking, we create smart, future-ready solutions that elevate the way people work, connect, and experience their environments.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Section Leaders */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="mb-10 space-y-3">
              <h2 className="font-heading text-3xl">Our Leadership</h2>
              <p className="max-w-3xl text-gray-300">
                Our section leaders are multi-disciplinary experts who guide each project with precision and passion. Beyond their technical roles, they take pride in seeing their work come alive—creating systems that enhance comfort, performance, and everyday experiences.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {heads.map((head, index) => (
              <Reveal key={head.id} delay={index * 80}>
                <div className="section-card p-6">
                  <div className="mb-4 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-accent/30 via-secondary to-primary">
                    <img 
                      src={head.image} 
                      alt={head.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-sm text-gray-400">Photo placeholder</span>';
                      }}
                    />
                  </div>
                  <h3 className="font-heading text-xl">{head.name}</h3>
                  <p className="text-accent text-sm font-semibold">{head.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="mb-10 space-y-3">
            <h2 className="font-heading text-3xl">The Team That Makes Our Work Possible</h2>
            <p className="max-w-3xl text-gray-300">
              Dedicated professionals bringing expertise and passion to every project.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee, index) => (
            <Reveal key={employee.id} delay={index * 60}>
              <div className="section-card p-6">
                <div className="mb-4 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-primary">
                  <img 
                    src={employee.image} 
                    alt={employee.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-sm text-gray-400">Photo placeholder</span>';
                    }}
                  />
                </div>
                <h3 className="font-heading text-lg">{employee.name}</h3>
                <p className="text-accent text-sm font-semibold">{employee.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
