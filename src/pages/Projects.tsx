import Reveal from '../components/Reveal';

const Projects = () => {
  const projects = Array.from({ length: 14 }).map((_, index) => ({
    title: `Project ${index + 1}`,
    type: index % 2 === 0 ? 'Hospitality' : 'Commercial',
    summary: 'Placeholder for project description and hero visuals.',
  }));

  return (
    <main className="gradient-sheen min-h-screen px-6 pb-16 pt-28">
      <div className="mx-auto max-w-6xl space-y-10">
        <Reveal>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Projects</p>
            <h1 className="font-heading text-4xl leading-tight">Showcasing fourteen luminous journeys.</h1>
            <p className="max-w-2xl text-gray-300">
              Each space begins with a narrative; here are placeholders for fourteen case studies ready to be illuminated.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 40}>
              <article className="section-card flex h-full flex-col gap-4 p-6">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-sm text-gray-200">
                  Visual placeholder
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-accent">{project.type}</div>
                  <h2 className="font-heading text-xl">{project.title}</h2>
                  <p className="text-sm text-gray-300">{project.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
