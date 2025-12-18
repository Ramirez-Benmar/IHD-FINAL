import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { partners } from '../data/content';
import { projectImages } from '../data/projectImages';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Random project selection
  const randomProjects = useMemo(() => {
    const shuffled = [...projectImages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const target = state?.scrollTo;
    if (target) {
      const timer = setTimeout(() => {
        const section = document.getElementById(target);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [location.state]);

  return (
    <main className="gradient-sheen">
      <section 
        id="home" 
        className="relative flex min-h-[80vh] w-full flex-col justify-center overflow-hidden pb-20 pt-28"
      >
        {/* Background Image with Opacity */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/background/Home Background.png')" }}
        />
        
        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300 mb-6">Integrated technology partner</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl mb-8">
              A trusted partner for smart, integrated building solutions.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="max-w-2xl text-lg text-gray-300 mb-10">
              Our mission is to transform the ambitions and visions of our clients through innovative, integrated technology
              solutions—delivering expert and hands-on consultancy for technology systems.
            </p>
          </Reveal>
          <Reveal delay={360}>
          <div className="flex flex-wrap items-center gap-4">
  <button
    onClick={() => navigate('/projects')}
    className="rounded-full border-2 border-secondary/70 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
  >
    Explore projects
  </button>
  <button
    onClick={() => navigate('/services')}
    className="rounded-full border-2 border-secondary/70 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
  >
    View services
  </button>
</div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="bg-secondary/30">
        <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
          <Reveal>
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-300">About us</p>
              <h2 className="font-heading text-3xl">Building the future together</h2>
              <p className="max-w-3xl text-gray-300">
                We are engineers, designers, and consultants who bridge strategy with implementation. From smart building
                systems to converged networks, we orchestrate solutions that keep environments intelligent, efficient, and secure.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="section-card flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-heading text-2xl">Meet our team</h3>
                <p className="max-w-xl text-gray-300">
                  Discover the experts behind our innovative solutions and learn more about our mission.
                </p>
              </div>
              <button
                onClick={() => navigate('/about')}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_10px_rgba(123,5,186,0.25)]"
              >
                About Us
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl space-y-8 px-6 py-16">
        <Reveal>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Services</p>
            <h2 className="font-heading text-3xl">From discovery to deployment.</h2>
            <p className="max-w-2xl text-gray-300">
              Roadmaps, architecture, integration oversight, and lifecycle support. Explore how we align technology with the way
              your people work and your spaces perform.
            </p>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="section-card flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-2xl">Discover our service catalog</h3>
              <p className="max-w-xl text-gray-300">
                The dedicated services page will outline delivery models, partner ecosystems, and timelines. Visit to learn more.
              </p>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_10px_rgba(123,5,186,0.25)]"
            >
              Go to services page
            </button>
          </div>
        </Reveal>
      </section>

      <section id="projects" className="bg-secondary/30">
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
          <Reveal>
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Projects</p>
              <h2 className="font-heading text-3xl">Selected works</h2>
              <p className="max-w-2xl text-gray-300">
                Three highlights for now—discover all fourteen programs on the projects page.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {randomProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <button
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="section-card group flex h-full w-full flex-col gap-4 p-6 text-left transition-all hover:border-accent/50 hover:shadow-[0_10px_50px_rgba(123,5,186,0.3)]"
                >
                  <div className="relative h-36 w-full overflow-hidden rounded-2xl">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-accent">{project.types[0]}</div>
                    <h3 className="font-heading text-xl group-hover:text-accent transition-colors">{project.name}</h3>
                    <p className="text-gray-300 text-sm">{project.location}</p>
                  </div>
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    View
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240}>
            <div className="flex items-center justify-end">
              <button
                onClick={() => navigate('/projects')}
                className="group inline-flex items-center gap-2 rounded-full border border-secondary/70 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:border-accent hover:text-white"
              >
                See all projects
                <span className="text-accent transition group-hover:translate-x-1">➜</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="partners" className="space-y-6 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Partners</p>
              <h2 className="font-heading text-3xl">Companies we've worked with</h2>
              <p className="text-gray-300">Trusted partners and clients who have collaborated with us on innovative projects.</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <div className="w-full overflow-hidden py-6">
            <div className="flex items-center gap-8 marquee-track whitespace-nowrap">
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-20 w-48 flex-shrink-0 items-center justify-center p-4"
                >
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="h-full w-full object-contain mix-blend-lighten"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="bg-secondary/30">
        <div className="mx-auto max-w-6xl space-y-8 px-6 py-16">
          <Reveal>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Contact us</p>
            <h2 className="font-heading text-3xl">Tell us about your next venue.</h2>
            <p className="max-w-2xl text-gray-300">
              Share your vision—whether it is a flagship workplace, campus expansion, or a resilient control center.
            </p>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="section-card grid gap-6 p-8 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="font-heading text-lg">+63 (000) 000-0000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-heading text-lg">info@ihd.ph</p>
                </div>
                <p className="text-sm text-gray-300">We respond within one business day.</p>
              </div>
              <form className="grid gap-4">
                <input
                  className="w-full rounded-xl border border-secondary/70 bg-primary/70 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  placeholder="Name"
                  name="name"
                  type="text"
                />
                <input
                  className="w-full rounded-xl border border-secondary/70 bg-primary/70 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  placeholder="Email"
                  name="email"
                  type="email"
                />
                <textarea
                  className="w-full rounded-xl border border-secondary/70 bg-primary/70 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  placeholder="Project vision"
                  name="message"
                  rows={4}
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
