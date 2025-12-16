export const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Projects', target: 'projects' },
  { label: 'Sponsors', target: 'sponsors' },
  { label: 'Contact', target: 'contact' }
];

export const people = Array.from({ length: 6 }).map((_, index) => ({
  name: `Team Member ${index + 1}`,
  role: 'Technology Consultant',
  bio: 'Architects seamless, secure, and scalable systems that keep buildings and teams connected.',
  id: `person-${index + 1}`
}));

export const projectHighlights = [
  {
    title: 'Connected Campus',
    type: 'Commercial',
    summary: 'Enterprise network backbone with converged security and smart systems.',
  },
  {
    title: 'Adaptive Workspace',
    type: 'Corporate',
    summary: 'IoT-driven space management with intuitive AV and collaboration layers.',
  },
  {
    title: 'Resilient Data Hall',
    type: 'Infrastructure',
    summary: 'Critical environment with redundant systems and active monitoring.',
  },
];

export const sponsors = Array.from({ length: 10 }).map((_, index) => ({
  name: `Sponsor ${index + 1}`,
}));
