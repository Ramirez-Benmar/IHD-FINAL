import Reveal from '../components/Reveal';

const Services = () => {
  return (
    <main className="gradient-sheen min-h-screen px-6 pb-16 pt-28">
      <div className="mx-auto max-w-5xl space-y-8">
        <Reveal>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Services</p>
            <h1 className="font-heading text-4xl leading-tight">Services overview coming soon.</h1>
            <p className="max-w-2xl text-gray-300">
              This dedicated page will be populated with frameworks, technology stacks, deliverables, and timelines. For now,
              reach out and we will tailor a scope for you.
            </p>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="section-card p-8 text-gray-200">
            Blank canvas reserved for full service descriptions, methodology, and case studies.
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Services;
