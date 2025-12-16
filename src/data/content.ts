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
  role: 'Lighting Specialist',
  bio: 'Expert in tailored illumination with a passion for immersive environments.',
  id: `person-${index + 1}`
}));

export const projectHighlights = [
  {
    title: 'Radiant Atrium',
    type: 'Commercial',
    summary: 'Layered lighting and dynamic scenes tailored for modern lobbies.',
  },
  {
    title: 'Skyline Lounge',
    type: 'Hospitality',
    summary: 'Warm, cinematic moods that evolve from dusk to dawn.',
  },
  {
    title: 'Garden Glow',
    type: 'Residential',
    summary: 'Subtle exterior paths with immersive planting highlights.',
  },
];

export const sponsors = Array.from({ length: 10 }).map((_, index) => ({
  name: `Sponsor ${index + 1}`,
}));
