export const profile = {
  name: "Mohamed Arif Asharf",
  title: "Software Developer",
  tagline: "I build AI-driven and full-stack web experiences.",
  location: "Thiruvananthapuram, Kerala, India",
  email: "arifmohammedashraf@gmail.com",
  phone: "+91 9995982349",
  socials: {
    github: "https://github.com/ultraereon",
    linkedin: "https://www.linkedin.com/in/aryfx",
  },
}

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
] as const

export const stats = [
  { value: "1st", label: "Best Dept Project 2025" },
  { value: "5+", label: "Programming Languages" },
  { value: "2", label: "Apps in Production" },
] as const

export const about = [
  "I'm a highly motivated IT graduate with a relentless drive to innovate and build software that makes a difference. My favorite work lives at the intersection of artificial intelligence and thoughtful product engineering — creating tools that feel genuinely useful.",
  "I recently completed my Bachelor of Technology in Information Technology at Amal Jyothi College of Engineering, where my final-year AI-powered mock interview platform was recognized as the Best Department Project of 2025.",
  "I'm a quick learner committed to continuous growth, comfortable across the full stack — from React and Tailwind front-ends to Python, Node, and Django back-ends. I'm now looking for a challenging role where I can keep shipping impactful software.",
]

export type Project = {
  title: string
  badge?: string
  period: string
  description: string
  tech: string[]
  github?: string
  link?: string
}

export const projects: Project[] = [
  {
    title: "AI-Powered Mock Interview Platform",
    badge: "Best Department Project 2025",
    period: "Jun 2024 — May 2025",
    description:
      "An AI-driven interview preparation tool integrating Speech Emotion Recognition (SER) and Facial Emotion Recognition (FER). Used OpenAI Whisper Large V3 and EmotiEffLib to analyze real-time emotional cues from speech and facial expressions. Built an NLP-based resume parser to match candidates with job requirements, generated tailored interview questions with the Gemini model, and delivered personalized feedback rating clarity, emotion, and relevance.",
    tech: ["Python", "OpenAI Whisper", "EmotiEffLib", "Gemini", "NLP", "React"],
  },
  {
    title: "PrintConnect",
    period: "Feb 2024 — Apr 2024",
    description:
      "A web app that streamlines and automates print jobs across multiple print locations and branches. Deployed in production at a local print shop in Kanjirappally Town, Kottayam, across two of their locations.",
    tech: ["React", "Tailwind CSS", "Python", "Flask", "Express", "SQLite3"],
  },
  {
    title: "SmartSpense Expense Tracker",
    period: "2024",
    description:
      "A smart expense tracking application designed to help users monitor their finances effectively, categorize expenses, and gain actionable insights into their daily spending habits.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/ultraereon/smartspense",
  },
]

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "C", "JavaScript"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "Django", "Flask", "Tailwind CSS"],
  },
  {
    label: "Web & Data",
    items: ["HTML", "CSS", "MySQL", "SQLite3", "Figma"],
  },
  {
    label: "Tools & Practices",
    items: ["Git / GitHub", "ADB / AOSP", "Documentation", "Touch Typing"],
  },
]

export type EducationItem = {
  degree: string
  school: string
  board: string
  location: string
  year: string
  score?: string
}

export const education: EducationItem[] = [
  {
    degree: "B.Tech in Information Technology",
    school: "Amal Jyothi College of Engineering (Autonomous)",
    board: "APJ Abdul Kalam Technological University",
    location: "Kanjirappally, Kottayam, Kerala",
    year: "2025",
  },
  {
    degree: "Higher Secondary",
    school: "KTCT EM HSS, Varkala",
    board: "DHSE Kerala",
    location: "Thiruvananthapuram, India",
    year: "2021",
  },
  {
    degree: "Secondary School",
    school: "Love Dale Residential School, Attingal",
    board: "CBSE New Delhi",
    location: "Thiruvananthapuram, India",
    year: "2019",
  },
]

export const certifications = [
  {
    title: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
  },
]
