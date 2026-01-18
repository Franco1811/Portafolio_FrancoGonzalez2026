import { useState } from 'react';
import { Github, ExternalLink, Code2, Database, Layout, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants/data';

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const filters = [
    { id: "all", label: "Todos", icon: Layout },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "data", label: "Data & BI", icon: Database },
    { id: "backend", label: "Backend/Sec", icon: Shield },
  ];

  return (
    <section id="proyectos" className="py-24 px-4 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER LIMPIO (Sin etiqueta "Portafolio") */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Destacados</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg text-lg">
              Una selección de trabajos donde aplico  mis conocimientos siempre en busca del mejor resultado.
            </p>
          </div>

          <a 
            href="https://github.com/Franco1811?tab=repositories" 
            target="_blank"
            className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
          >
            <span className="font-medium">Ver repositorio completo</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* BARRA DE FILTROS */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 border
                ${filter === f.id 
                  ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/25' 
                  : 'bg-gray-100 dark:bg-[#1f1f1f] text-gray-600 dark:text-gray-400 border-transparent hover:border-gray-300 dark:hover:border-[#333]'
                }`}
            >
              <f.icon size={18} />
              {f.label}
            </button>
          ))}
        </div>

        {/* GRID DE PROYECTOS */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-[#262626] rounded-3xl overflow-hidden hover:border-orange-500/50 transition-colors shadow-lg hover:shadow-orange-500/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide">
                    {project.category === 'data' ? 'Data Science' : project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-[#262626]">
                    <a 
                      href={project.demoLink}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold hover:opacity-90 transition-opacity text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a 
                      href={project.repoLink}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-100 dark:bg-[#1f1f1f] text-gray-900 dark:text-white border border-gray-200 dark:border-[#333] hover:border-orange-500 dark:hover:border-orange-500 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No hay proyectos en esta categoría por el momento.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;