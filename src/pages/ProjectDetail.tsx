import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SkeletonLoader from '../components/SkeletonLoader';
import { projectImages } from '../data/projectImages';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;

  const project = projectImages.find((p: { slug: string }) => p.slug === slug);

  if (!project) {
    return (
      <main className="gradient-sheen min-h-screen px-6 pb-16 pt-28">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-heading text-4xl mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Back to Projects
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="gradient-sheen min-h-screen px-6 pb-16 pt-28">
      <div className="mx-auto max-w-6xl space-y-10">
        <Reveal>
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-accent"
          >
            ← Back to Projects
          </button>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">{project.projectNumber}</p>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">{project.name}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <span className="text-accent">📍</span>
                {project.location}, {project.country}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative h-[60vh] w-full overflow-hidden rounded-3xl">
            <img 
              src={project.image} 
              alt={project.name}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal delay={200}>
            <div className="section-card p-8 space-y-4">
              <h2 className="font-heading text-2xl">Project Overview</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="section-card p-8 space-y-6">
              <div>
                <h3 className="font-heading text-xl mb-3">Disciplines</h3>
                <div className="flex flex-wrap gap-2">
                  {project.disciplines.map((discipline: string) => (
                    <span 
                      key={discipline}
                      className="rounded-full bg-accent/20 border border-accent/50 px-3 py-1 text-sm text-accent"
                    >
                      {discipline}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl mb-3">Project Type</h3>
                <div className="flex flex-wrap gap-2">
                  {project.types.map((type: string) => (
                    <span 
                      key={type}
                      className="rounded-full bg-secondary border border-secondary/70 px-3 py-1 text-sm text-gray-300"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="space-y-6">
            <h2 className="font-heading text-3xl">Similar Projects</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {projectImages
                .filter(p => 
                  p.slug !== project.slug && 
                  (p.types.some((t: string) => project.types.includes(t)) || 
                   p.disciplines.some((d: string) => project.disciplines.includes(d)))
                )
                .slice(0, 3)
                .map((similarProject) => (
                  <button
                    key={similarProject.slug}
                    onClick={() => {
                      navigate(`/projects/${similarProject.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="section-card group flex h-full flex-col gap-4 p-6 text-left transition-all hover:border-accent/50 hover:shadow-[0_10px_50px_rgba(123,5,186,0.3)]"
                  >
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl">
                      <img 
                        src={similarProject.image} 
                        alt={similarProject.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-lg text-white group-hover:text-accent transition-colors">
                        {similarProject.name}
                      </h3>
                      <p className="text-sm text-gray-400">{similarProject.location}</p>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default ProjectDetail;
