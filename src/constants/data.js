export const PROFILE = {
  name: "Franco Gonzalez",
  initials: "FG",
  status: {
    text: "Disponible para trabajar",
    isOnline: true
  },
  roles: {
    first: "Desarrollador Web",
    connector: "&",
    second: "Analista de Datos"
  },
  description: "Estudiante de Ingeniería de Sistemas (7mo Ciclo). Combino la lógica del análisis de datos con la creatividad del desarrollo Frontend para construir soluciones digitales seguras y funcionales.",
  socials: {
    github: "https://github.com/Franco1811",
    linkedin: "https://www.linkedin.com/in/franco-gonzalez-a17243213/",
    email: "francogonzalezpoma18@gmail.com",
    whatsapp: "51955866054",
    cv: "/tu-cv.pdf" // Asegurate de que el archivo se llame así en public
  }
};

export const PROJECTS = [
  {
    id: 1,
    title: "Financial Dashboard Pro",
    category: "frontend",
    description: "Dashboard interactivo para visualización de finanzas personales con gráficos en tiempo real y modo oscuro.",
    stack: ["React", "Tailwind", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Data Analysis Pipeline",
    category: "data",
    description: "Script de automatización en Python para limpieza de datasets masivos y generación de reportes automáticos.",
    stack: ["Python", "Pandas", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "Secure Auth API",
    category: "backend",
    description: "API RESTful con autenticación JWT, protección contra inyección SQL y rate limiting.",
    stack: ["Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", 
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 4,
    title: "Proyecto fino",
    category: "frontend",
    description: "API RESTful con autenticación JWT, protección contra inyección SQL y rate limiting.",
    stack: ["Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", 
    demoLink: "#",
    repoLink: "#"
  }
];

export const STACK = [
  {
    category: "Frontend & Diseño",
    items: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Figma", icon: "figma" },
    ]
  },
  {
    category: "Data & Análisis",
    items: [
      { name: "Python", icon: "python" },
      { name: "SQL (MySQL)", icon: "mysql" },
      { 
        name: "Power BI", 
        icon: "https://img.icons8.com/?size=100&id=XZfQhFwZm1qP&format=png&color=FD7E14" 
      }, 
      { 
        name: "Excel", 
        icon: "https://img.icons8.com/?size=100&id=11594&format=png&color=FD7E14" 
      },
    ]
  },
  {
    category: "Backend (Spring/.NET)", 
    items: [
      { name: "Spring Boot", icon: "springboot" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: ".NET", icon: "dotnet" },
      { name: "Git", icon: "git" },
    ]
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Google Data Analytics",
    issuer: "Google",
    date: "2024",
    link: "#", 
    icon: "google"
  },
  {
    id: 2,
    title: "Cybersecurity Essentials",
    issuer: "Cisco",
    date: "2023",
    link: "#",
    icon: "cisco"
  },
  {
    id: 3,
    title: "Desarrollo Web",
    issuer: "Udemy",
    date: "2023",
    link: "#",
    icon: "udemy"
  }
];

export const LANGUAGES = [
  { 
    code: "ES", 
    language: "Español", 
    level: "Nativo", 
    percentage: 100, 
    color: "bg-orange-500" 
  },
  { 
    code: "EN", 
    language: "Inglés", 
    level: "Intermedio (B2)", 
    percentage: 65, 
    color: "bg-blue-500" 
  },
];

