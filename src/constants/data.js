/**
 * ARCHIVO DE DATOS CENTRALIZADO
 * Este archivo actúa como la única fuente de verdad para el contenido del portafolio.
 * Permite actualizar textos, enlaces e imágenes sin modificar los componentes visuales.
 */

export const PROFILE = {
    name: "Franco Gonzalez",
    initials: "FG",
    image: "/FotoFranco.jpeg", 
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
        cv: "/CV-FrancoGonzalez2026.pdf" 
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
        category: "Frontend Ecosystem",
        items: [
            { name: "React", icon: "react" },
            { name: "Vite", icon: "vite" },
            { name: "Tailwind CSS", icon: "tailwindcss" },
            { name: "JavaScript", icon: "javascript" },
            { name: "Figma", icon: "figma" },
        ]
    },
    {
        category: "Data & Analytics",
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
            { name: "Databricks", icon: "databricks" },
            { name: "Google Colab", icon: "googlecolab" },
            { name: "Looker Studio", icon: "looker" },
        ]
    },
    {
        category: "Backend & Core",
        items: [
            // Java es muy importante para backend empresarial
            { name: "Java", icon: "java" }, 
            { name: "Spring Boot", icon: "springboot" },
            { name: "Git", icon: "git" },
            { name: "Node.js", icon: "nodedotjs" },
        ]
    }
];

export const CERTIFICATIONS = [
    {
        id: 1,
        title: "SQL Fundamentals",
        issuer: "DataCamp",
        date: "2026",
        link: "https://www.datacamp.com/statement-of-accomplishment/track/bdb9ea4d45705e20fbca78e1eca607f462ff972a?raw=1",
        icon: "datacamp"
    },
    {
        id: 2,
        title: "Excel Fundamentals",
        issuer: "DataCamp",
        date: "2026",
        link: "https://www.datacamp.com/statement-of-accomplishment/track/e520d29273fd4fa9d4a62387944cb3a2e58a2ae9?raw=1",
        icon: "datacamp"
    },
    {
        id: 3,
        title: "TOEFL ITP (English)",
        issuer: "ETS Global",
        date: "2023",
        link: "https://drive.google.com/file/d/1aPt0PYRqLT01SFNdFre-3Kn3lYsH-ajs/view?usp=sharing",
        icon: "https://img.icons8.com/?size=100&id=6358&format=png&color=FD7E14"
    },
    {
        id: 4,
        title: "Intermediate English Certificate",
        issuer: "ICPNA",
        date: "2024",
        link: "https://drive.google.com/file/d/1UiYb5HAkosgBP7d3yhL5DG2DzZc48el1/view?usp=sharing",
        icon: "https://img.icons8.com/?size=100&id=6358&format=png&color=FD7E14"
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
        level: "Intermedio (B1)",
        percentage: 65,
        color: "bg-blue-500"
    },
];

