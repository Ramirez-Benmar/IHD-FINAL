export const navItems = [
  { label: 'Home', target: '/' },
  { label: 'About', target: '/about' },
  { label: 'Services', target: '/services' },
  { label: 'Projects', target: '/projects' },
  { label: 'Partners', target: '/partners' },
  { label: 'Contact Us', target: '/contact' }
];

export const heads = [
  {
    name: 'Hadjie Malaluan',
    role: 'Team Head/Sr. Engineer (Security)',
    image: '/team/Hadjie.png',
    id: 'head-hadjie'
  },
  {
    name: 'Almario Ramirez Jr.',
    role: 'Technical Director',
    image: '/team/Ramirez.png',
    id: 'head-ramirez'
  },
  {
    name: 'Judith Paz',
    role: 'Operations Director',
    image: '/team/PazJ.png',
    id: 'head-pazj'
  }
];

export const employees = [
  {
    name: 'Spark Dagami',
    role: 'Sr. Engineer (IT)',
    image: '/team/Spark.png',
    id: 'employee-spark'
  },
  {
    name: 'Miguel Primicias',
    role: 'Acoustic Consultant',
    image: '/team/Primicias.png',
    id: 'employee-primicias'
  },
  {
    name: 'Randel Laureta',
    role: 'Audio Visual Consultant',
    image: '/team/John.png',
    id: 'employee-randel'
  },
  {
    name: 'Florante Paz',
    role: 'BIM/CAD Design Coordinator',
    image: '/team/PazF.png',
    id: 'employee-pazf'
  },
  {
    name: 'Hector Dionisio',
    role: 'Technology Engineer',
    image: '/team/Hector.png',
    id: 'employee-hector'
  },
  {
    name: 'Mark Lazatin',
    role: 'Technology Engineer',
    image: '/team/Mark.png',
    id: 'employee-mark'
  },
  {
    name: 'Shem Mishael Cubal',
    role: 'Jr. Acoustic Designer',
    image: '/team/Shem3.png',
    id: 'employee-shem'
  },
  {
    name: 'Emmanuel Olorvida',
    role: 'Technology Engineer',
    image: '/team/Emman.png',
    id: 'employee-emman'
  },
  {
    name: 'Johnkiel Santos',
    role: 'Technology Engineer',
    image: '/team/John.png',
    id: 'employee-johnkiel'
  }
];

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

export const partners = Array.from({ length: 10 }).map((_, index) => ({
  name: `Partner ${index + 1}`,
}));
