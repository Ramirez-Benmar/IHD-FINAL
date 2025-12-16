import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SkeletonLoader from '../components/SkeletonLoader';
import { projectImages } from '../data/projectImages';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;

  return (
    <main className="gradient-sheen min-h-screen px-6 pb-16 pt-28">
      <div className="mx-auto max-w-6xl space-y-10">
        <Reveal>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Projects</p>
            <h1 className="font-heading text-4xl leading-tight">Our Portfolio of Excellence</h1>
            <p className="max-w-2xl text-gray-300">
              Discover our comprehensive range of integrated technology solutions delivered across various sectors.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectImages.map((project, index) => (
            <Reveal key={project.slug} delay={index * 40}>
              <button
                onClick={() => navigate(`/projects/${project.slug}`)}
                className="section-card group flex h-full w-full flex-col gap-4 p-6 text-left transition-all hover:border-accent/50 hover:shadow-[0_10px_50px_rgba(123,5,186,0.3)]"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="font-heading text-xl text-white group-hover:text-accent transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-400">{project.location}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
