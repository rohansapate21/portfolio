// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const siteConfig = {
  name: 'Rohan Sapate',
  title: 'Software Engineer & AI/ML Enthusiast',
  description:
    'Final-year Computer Engineering student specializing in AI & Data Science. Building scalable systems and real-world AI solutions.',
  email: 'sapaterohan14@gmail.com', // TODO: replace with real email
  phone: '+919370951272', // TODO: add or remove
  url: 'https://rohansapate.dev', // TODO: update after deployment
  resumeUrl: '/resume/ROHANSAPATE-9370951272.pdf',
  github: 'https://github.com/rohansapate21',
  linkedin: 'https://www.linkedin.com/in/rohan-sapate-28a2b7306/',
  leetcode: 'https://leetcode.com/rohan_sapate21',
  openGraph: {
    image: '/og-image.png',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO DATA
// ─────────────────────────────────────────────────────────────────────────────
export const heroData = {
  greeting: "Hi, I'm",
  name: 'Rohan',
  lastName: 'Sapate',
  typingRoles: [
    'Software Engineer',
    'AI/ML Developer',
    'Full Stack Developer',
    'Problem Solver',
  ],
  tagline:
    'Building scalable systems, real-world AI solutions, and clean user experiences.',
  availabilityBadge: '● Open to SDE, AI/ML & Full Stack roles ✦',
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO STATS
// ─────────────────────────────────────────────────────────────────────────────
export interface HeroStat {
  value: number
  suffix: string
  label: string
  decimals?: number
}

export const heroStats: HeroStat[] = []

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT DATA
// ─────────────────────────────────────────────────────────────────────────────
export const aboutData = {
  avatar: '/avatar.jpg', // Place your photo at portfolio-v2/public/avatar.jpg (or .png)
  bio: `I'm a final-year AI & Data Science student, with a passion for building things that matter. 
  I specialise in full-stack development and AI/ML, with hands-on experience in real-time systems, 
  Data processing workflows, and modern web technologies.`,
  careerObjective: `Seeking a challenging role where I can apply my skills in 
  software engineering and AI/ML to solve real-world problems and grow 
  alongside a talented team.`,
  location: 'Pune, Maharashtra, India',
  currentlyLearning: [
    'Software Design Principles',
    'LLM fine-tuning & RAG pipelines',
    'SQL Data Handling',
  ],
  specializations: [
    'Full Stack Development',
    'AI/ML Engineering',
    'Data Processing',
    'Open Source',
  ],
  education: [
    {
      degree: 'B.Tech Computer Engineering (AI & Data Science)',
      institution: 'CSMSS Chh. Shahu College of Engineering',
      duration: '2023 — 2027',
      grade: '7.5 CGPA',
    },
    {
      degree: 'Higher Secondary (HSC)',
      institution: 'Maharashtra State Board',
      duration: '2020 — 2022',
      grade: '74.0%',
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS DATA v2 (tabbed, no percentage bars)
// ─────────────────────────────────────────────────────────────────────────────
export type SkillTier = 'expert' | 'proficient' | 'learning'

export const skillsDataV2: Record<
  string,
  { label: string; skills: Array<{ name: string; tier: SkillTier; iconKey: string }> }
> = {
  languages: {
    label: 'Languages',
    skills: [
      { name: 'JavaScript', tier: 'expert', iconKey: 'SiJavascript' },
      { name: 'TypeScript', tier: 'expert', iconKey: 'SiTypescript' },
      { name: 'Python', tier: 'expert', iconKey: 'SiPython' },
      { name: 'SQL', tier: 'proficient', iconKey: 'SiMysql' },
      { name: 'C++', tier: 'proficient', iconKey: 'SiCplusplus' },
    ],
  },
  frontend: {
    label: 'Frontend',
    skills: [
      { name: 'React', tier: 'expert', iconKey: 'SiReact' },
      { name: 'Next.js', tier: 'expert', iconKey: 'SiNextdotjs' },
      { name: 'Tailwind CSS', tier: 'expert', iconKey: 'SiTailwindcss' },
      
      { name: 'HTML5', tier: 'expert', iconKey: 'SiHtml5' },
      { name: 'CSS3', tier: 'expert', iconKey: 'SiCss3' },
    ],
  },
  backend: {
    label: 'Backend',
    skills: [
      { name: 'Node.js', tier: 'expert', iconKey: 'SiNodedotjs' },
      { name: 'Express', tier: 'expert', iconKey: 'SiExpress' },
      { name: 'FastAPI', tier: 'proficient', iconKey: 'SiFastapi' },
      { name: 'REST APIs', tier: 'expert', iconKey: 'SiPostman' },
      { name: 'WebSockets', tier: 'proficient', iconKey: 'SiSocketdotio' },
    ],
  },
  databases: {
    label: 'Databases',
    skills: [
      { name: 'MongoDB', tier: 'expert', iconKey: 'SiMongodb' },
      
      { name: 'MySQL', tier: 'proficient', iconKey: 'SiMysql' },
      
    ],
  },
  ai_ml: {
    label: 'AI/ML',
    skills: [
      { name: 'TensorFlow', tier: 'proficient', iconKey: 'SiTensorflow' },
     
      { name: 'Pandas', tier: 'expert', iconKey: 'SiPandas' },
      { name: 'NumPy', tier: 'expert', iconKey: 'SiNumpy' },
    ],
  },
  tools: {
    label: 'Tools',
    skills: [
      { name: 'Git', tier: 'expert', iconKey: 'SiGit' },
      { name: 'Docker', tier: 'proficient', iconKey: 'SiDocker' },
      { name: 'Linux', tier: 'proficient', iconKey: 'SiLinux' },
      { name: 'VS Code', tier: 'expert', iconKey: 'SiVisualstudiocode' },
      
    ],
  },
  cloud: {
    label: 'Cloud',
    skills: [
      { name: 'Vercel', tier: 'expert', iconKey: 'SiVercel' },
      { name: 'Netlify', tier: 'expert', iconKey: 'SiNetlify' },
      { name: 'AWS (basics)', tier: 'learning', iconKey: 'SiAmazon' },
      { name: 'GitHub Actions', tier: 'proficient', iconKey: 'SiGithubactions' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS DATA
// ─────────────────────────────────────────────────────────────────────────────
export interface Project {
  id: string
  title: string
  shortDesc: string
  longDesc: string
  techStack: string[]
  category: string
  featured: boolean
  github: string
  liveUrl?: string
  thumbnail: string
  status: 'completed' | 'in-progress' | 'archived'
  timeline: string
  highlights: string[]
  challenges: string[]
  futureImprovements: string[]
  problem: string
  solution: string
  impact: string
}

export const projectsData: Project[] = [
  {
    id: 'interview-management-system',
    title: 'Interview Management System',
    shortDesc:
      'Full-stack AI-powered video interview platform with real-time proctoring.',
    longDesc:
      'A comprehensive platform for conducting and managing technical interviews with AI-assisted proctoring, real-time code collaboration, and automated evaluation.',
    techStack: ['React', 'Node.js', 'TensorFlow.js', 'WebRTC', 'MongoDB', 'Socket.io'],
    category: 'AI/ML',
    featured: true,
    github: 'https://github.com/rohansapate21/Interview_System',
    liveUrl: '',
    thumbnail: '/projects/interview-system/thumbnail.png',
    status: 'completed',
    timeline: 'Jan 2026 – May 2026',
    highlights: [
      'Real-time AI proctoring using COCO-SSD and BlazeFace models',
      'Collaborative code editor with live sync via WebSockets',
      'Automated candidate scoring and report generation',
    ],
    challenges: [
      'Running ML inference in-browser without degrading video quality',
      'Synchronising code editor state across unstable connections',
    ],
    futureImprovements: [
      'Add GPT-powered interview question generator',
      'Mobile app for candidates',
    ],
    problem: 'Traditional video interviews lack cheating detection and structured evaluation.',
    solution: 'Built an in-browser proctoring system using TensorFlow.js with no server-side video processing.',
    impact: 'Reduced manual review time by ~60% in pilot testing.',
  },
  {
    id: 'peoplepost',
    title: 'PeoplePost',
    shortDesc: 'A social platform for sharing stories and connecting communities.',
    longDesc:
      'A full-stack social media application with real-time feeds, rich text posts, and community features.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    category: 'Full Stack',
    featured: false,
    github: 'https://github.com/rohansapate21/peoplepost',
    liveUrl: '',
    thumbnail: '/projects/peoplepost/thumbnail.png',
    status: 'completed',
    timeline: 'Aug 2025 – Dec 2025',
    highlights: [
      'Real-time notifications and messaging',
      'Optimistic UI updates for instant feedback',
      'Image upload with lazy loading',
    ],
    challenges: ['Designing an efficient feed algorithm', 'Handling concurrent updates'],
    futureImprovements: ['Add video posts', 'Recommendation engine'],
    problem: 'Existing platforms lack community-focused storytelling tools.',
    solution: 'Built a clean, fast social platform with focus on content quality.',
    impact: 'Gained 50+ test users during beta.',
  },
  {
    id: 'code-assistant',
    title: 'AI CodeBase Assistant',
    shortDesc: 'AI powered codebase assistant for your github repo analysis and boost developer productivity.',
    longDesc:
      'An intelligent resume parsing tool using spaCy NLP to extract skills, experience, and education from unstructured PDF resumes.',
    techStack: ['Python', 'RAG', 'React', 'MongoDB Vector', 'Nodejs'],
    category: 'AI/ML',
    featured: false,
    github: 'https://github.com/rohansapate21/AIcodebaseAssistant',
    liveUrl: '',
    thumbnail: '/projects/code-assistant/thumbnail.png',
    status: 'completed',
    timeline: 'Sep 2026',
    highlights: [
      'Answers Natural-language codebase questions ',
      'Interactive Chat & History ',
      'Repository Architecture Summaries',
    ],
    challenges: ['Handling varied repos and analysis', 'Training data collection'],
    futureImprovements: ['Add LLM-based parsing for large codebases.'],
    problem: 'Time consuming for developers to go through large codebases.',
    solution: 'Quick and easy answered queries.',
    impact: 'Reduced analysis time by ~70% in test scenarios.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE DATA
// ─────────────────────────────────────────────────────────────────────────────
export type ExperienceType = 'freelance' | 'hackathon' | 'college' | 'opensource'

export interface Experience {
  id: string
  type: ExperienceType
  role: string
  organisation: string
  duration: string
  location: string
  description: string
  techStack: string[]
}

export const experienceData: Experience[] = [
  {
    id: 'freelance-web',
    type: 'freelance',
    role: 'Freelance Web Developer',
    organisation: 'Self-Employed',
    duration: 'Jan 2024 – Present',
    location: 'Remote',
    description:
      'Built and delivered custom websites for local businesses. Key client: Swaraj Weighing Scale & RO Purifiers — complete business website with product catalogue and contact form.',
    techStack: ['React', 'HTML/CSS', 'JavaScript', 'Vercel'],
  },
  {
    id: 'hackathon-ai',
    type: 'hackathon',
    role: 'Hackathon Participant — AI Track',
    organisation: 'State-Level Hackathon (SPPU)',
    duration: 'Oct 2024',
    location: 'Pune',
    description:
      'Built an AI-powered interview proctoring prototype in 24 hours. Reached the finals out of 120+ teams.',
    techStack: ['Python', 'TensorFlow.js', 'React', 'WebRTC'],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICATIONS DATA
// ─────────────────────────────────────────────────────────────────────────────
export interface Certification {
  id: string
  title: string
  issuer: string
  platform: string
  year: string
  verifyUrl: string
  credentialId: string
  skills: string[]
  iconKey: string
}

export const certificationsData: Certification[] = [
  {
    id: 'agentic-ai',
    title: 'Oracle Agentic AI foundations',
    issuer: 'Oracle',
    platform: 'Oracle MyLearn',
    year: '2026',
    verifyUrl: '#', // TODO: add real verify URL
    credentialId: '',
    skills: ['Langchain', 'LLM tools', 'MCP concepts', 'Oracle AI Database'],
    iconKey: 'SiIbm',
  },
  {
    id: 'Responsive Web Design',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    platform: 'freeCodeCamp',
    year: '2026',
    verifyUrl: '#',
    credentialId: '',
    skills: ['React', 'JavaScript', 'UX Design'],
    iconKey: 'SiMeta',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// ACHIEVEMENTS DATA
// ─────────────────────────────────────────────────────────────────────────────
export interface Achievement {
  id: string
  value: number
  suffix: string
  label: string
  category: string
  description: string
  color: string
  decimals?: number
}

export const achievementsData: Achievement[] = [
  {
    id: 'leetcode',
    value: 150,
    suffix: '+',
    label: 'LeetCode Problems',
    category: 'Competitive Programming',
    description: 'Solved 150+ problems across Easy, Medium, and Hard categories.',
    color: '#f59e0b',
  },
  {
    id: 'cgpa',
    value: 7.5,
    suffix: '',
    label: 'CGPA / 10',
    category: 'Academics',
    description: 'Consistent academic performance throughout engineering.',
    color: '#10b981',
    decimals: 1,
  },
  {
    id: 'hackathon',
    value: 3,
    suffix: '+',
    label: 'Hackathons',
    category: 'Competitions',
    description: 'Participated and reached finals in multiple college hackathons.',
    color: '#8b5cf6',
  },
  
]

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS DATA
// ─────────────────────────────────────────────────────────────────────────────
export type TestimonialSource = 'client' | 'colleague' | 'mentor'

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: string | null
  source: TestimonialSource
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'client-1',
    quote:
      'Rohan built our entire business website in under 2 weeks, exceeded expectations, and communicated proactively throughout.',
    author: 'Client Name', // TODO: replace with real name (with permission)
    role: 'Owner',
    company: 'Swaraj Weighing Scale & RO Purifiers',
    avatar: null,
    source: 'client',
  },
  // TODO: add 2-3 more real testimonials from peers, mentors, hackathon teammates
]
