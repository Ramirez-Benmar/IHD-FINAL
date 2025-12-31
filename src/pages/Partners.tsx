import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import SkeletonLoader from '../components/SkeletonLoader';
import { partners } from '../data/content';

const Partners = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;

  return (
    <main className="min-h-screen bg-primary gradient-sheen pt-20">
      <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
        <Reveal>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Partners</p>
            <h1 className="font-heading text-4xl md:text-5xl">Companies we've worked with</h1>
            <p className="max-w-3xl text-lg text-gray-300">
              Over the years, we've had the privilege of collaborating with forward-thinking organizations across 
              various industries. These partnerships have enabled us to deliver innovative solutions and create 
              lasting impact through cutting-edge technology and expert consultation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="section-card p-8">
            <h2 className="font-heading text-2xl mb-6">Our Trusted Partners</h2>
            <p className="text-gray-300 mb-8">
              We work alongside industry leaders and innovative companies to deliver exceptional results. 
              These partnerships enable us to provide comprehensive solutions tailored to each client's unique needs.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {partners.map((partner, index) => (
                <Reveal key={partner.name} delay={index * 40}>
                  <div className="flex h-32 items-center justify-center rounded-2xl border border-secondary/60 bg-primary/50 p-6 transition hover:border-accent hover:bg-primary/70">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="h-full w-full object-contain mix-blend-lighten"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="section-card p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-heading text-xl mb-4">Industry Expertise</h3>
                <p className="text-gray-300 mb-4">
                  Our partnerships span across multiple sectors including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Commercial & Corporate Facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Educational Institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Healthcare & Medical Centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Government & Infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Hospitality & Entertainment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-xl mb-4">Partnership Benefits</h3>
                <p className="text-gray-300 mb-4">
                  Working with IHD Philippines means gaining access to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Multi-disciplinary expertise across all service areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Cutting-edge technology solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Proven track record of successful implementations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Comprehensive support throughout project lifecycle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Long-term maintenance and optimization services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="section-card flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-2xl">Interested in partnering with us?</h3>
              <p className="max-w-xl text-gray-300">
                Let's discuss how we can work together to achieve your technology goals.
              </p>
            </div>
            <a
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Partners;
