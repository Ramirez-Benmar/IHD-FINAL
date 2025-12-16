import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { people, projectHighlights, sponsors } from '../data/content';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const timer = setTimeout(() => {
        const section = document.getElementById(state.scrollTo);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [location.state]);

  return (
    <main className="gradient-sheen">
      <section id="home" className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-8 px-6 pb-20 pt-28">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Lighting for the bold</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="font-heading text-4xl leading-tight md:text-5xl">
            "Quote placeholder" — a promise to design light that feels tailored, immersive, and unforgettable.
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="max-w-2xl text-lg text-gray-300">
            PL Light is a lighting design studio crafting layered experiences for hospitality, commercial, and residential
            destinations. We choreograph contrast, glow, and atmosphere to make every space memorable.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate('/projects')}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_4px_rgba(123,5,186,0.25)]"
            >
              Explore projects
            </button>
            <button
              onClick={() => navigate('/services')}
              className="rounded-full border border-secondary/80 px-6 py-3 text-sm font-semibold text-gray-200 transition hover:border-accent hover:text-white"
            >
              View services
            </button>
          </div>
        </Reveal>
      </section>

      <section id="about" className="bg-secondary/30">
        <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
          <Reveal>
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-300">About us</p>
              <h2 className="font-heading text-3xl">Designers, technologists, and storytellers.</h2>
              <p className="max-w-3xl text-gray-300">
                We translate brand narratives into luminous moments. From master planning to on-site focus, our team blends technical rigor with artistic vision.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {people.map((person, index) => (
              <Reveal key={person.id} delay={index * 70}>
                <div className="section-card p-6">
                  <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-accent/30 via-secondary to-primary flex items-center justify-center text-sm text-gray-200">
                    Image placeholder
                  </div>
                  <h3 className="font-heading text-xl">{person.name}</h3>
                  <p className="text-accent text-sm font-semibold">{person.role}</p>
                  <p className="mt-2 text-gray-300 text-sm">{person.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl space-y-8 px-6 py-16">
        <Reveal>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Services</p>
            <h2 className="font-heading text-3xl">From concept to commissioning.</h2>
            <p className="max-w-2xl text-gray-300">
              Master planning, narrative development, photometric modeling, and on-site focus. Explore how we illuminate every milestone.
            </p>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="section-card flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-2xl">Discover our service catalog</h3>
              <p className="max-w-xl text-gray-300">
                The dedicated services page outlines process diagrams, timelines, and technology partners. Visit to learn more.
              </p>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_4px_rgba(123,5,186,0.25)]"
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
              <p className="max-w-2xl text-gray-300">Three highlights today, fourteen more waiting on the projects page.</p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {projectHighlights.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <article className="section-card flex h-full flex-col gap-4 p-6">
                  <div className="h-36 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-sm text-gray-200">
                    Project visual placeholder
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-accent">{project.type}</div>
                    <h3 className="font-heading text-xl">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.summary}</p>
                  </div>
                  <button
                    onClick={() => navigate('/projects')}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                  >
                    View full case study
                    <span aria-hidden>→</span>
                  </button>
                </article>
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

      <section id="sponsors" className="mx-auto max-w-6xl space-y-6 px-6 py-16">
        <Reveal>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Sponsors</p>
            <h2 className="font-heading text-3xl">Partners who power the glow</h2>
            <p className="text-gray-300">Animated banner with rotating sponsor placeholders.</p>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="overflow-hidden rounded-3xl border border-secondary/60 bg-secondary/40 py-6">
            <div className="flex items-center gap-8 marquee-track">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={`${sponsor.name}-${index}`}
                  className="flex h-16 w-40 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-gray-200 border border-secondary/60"
                >
                  {sponsor.name}
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
                Share your vision—whether it is a hospitality flagship, an immersive lounge, or a landscape reimagined.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="section-card grid gap-6 p-8 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="font-heading text-lg">+1 (000) 000-0000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-heading text-lg">info@pl-light.com</p>
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
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:shadow-[0_0_0_4px_rgba(123,5,186,0.25)]"
                >
                  Send message
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
