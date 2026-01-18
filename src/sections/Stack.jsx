import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Globe, Cpu, CheckCircle2, ExternalLink, Zap } from 'lucide-react';
import { STACK, CERTIFICATIONS, LANGUAGES } from '../constants/data';

/**
 * Sección de Stack Tecnológico y Habilidades.
 * 
 * Organiza las competencias del desarrollador en 3 pestañas interactivas para reducir la carga cognitiva:
 * 1. Tecnologías: Stack técnico agrupado por área (Frontend, Backend, Tools).
 * 2. Certificaciones: Credenciales académicas y cursos.
 * 3. Idiomas: Nivel de competencia lingüística.
 * 
 * Implementa un sistema de gestión de tabs local y renderizado condicional.
 */
const Stack = () => {
  const [activeTab, setActiveTab] = useState("tech");

  const tabs = [
    { id: "tech", label: "Tecnologías", icon: Cpu },
    { id: "certs", label: "Certificaciones", icon: Award },
    { id: "lang", label: "Idiomas", icon: Globe },
  ];

  /**
   * Helper para resolver la fuente del ícono de tecnología.
   * Soporta URLs directas (para logos custom) o slugs de SimpleIcons (para logos estándar).
   * @param {string} iconString - URL completa o slug de la tecnología
   */
  const getIconSource = (iconString) => {
    if (iconString.startsWith("http")) {
      return iconString; // Es una URL directa (PowerBI/Excel)
    }
    return `https://cdn.simpleicons.org/${iconString}/ea580c`; // Es un slug (React/Spring) -> Color Naranja
  };

  return (
    <section id="stack" className="py-24 px-4 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
        
        {/* LÍNEA DIVISORIA NARANJA */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

        <div className="max-w-5xl mx-auto">
            
            {/* TÍTULO DE SECCIÓN */}
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Arsenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Tecnológico</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Las herramientas y conocimientos que utilizo para construir soluciones.
                </p>
            </div>

            {/* --- NAVEGACIÓN DE PESTAÑAS (TABS) --- */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 dark:border-[#333] pb-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-6 py-3 text-sm font-bold transition-colors flex items-center gap-2
                        ${activeTab === tab.id 
                            ? "text-orange-500" 
                            : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                        
                        {activeTab === tab.id && (
                            <motion.div 
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* --- CONTENIDO DINÁMICO --- */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    
                    {/* VISTA 1: TECNOLOGÍAS */}
                    {activeTab === 'tech' && (
                        <motion.div
                            key="tech"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-12"
                        >
                            {STACK.map((group, idx) => (
                                <div key={idx}>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 pl-1 border-l-4 border-orange-500 ml-1">
                                        {group.category}
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {group.items.map((item) => (
                                            <div key={item.name} className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-[#262626] rounded-2xl hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
                                                
                                                {/* IMAGEN DEL ICONO */}
                                                <div className="w-10 h-10 mb-4 flex items-center justify-center">
                                                    <img 
                                                        src={getIconSource(item.icon)}
                                                        alt={item.name}
                                                        className={`w-full h-full object-contain transition-opacity opacity-80 group-hover:opacity-100 
                                                          ${item.icon.startsWith('http') ? '' : 'dark:filter dark:invert-0'} 
                                                        `} 
                                                        // Nota: Si es URL directa (Excel/PBI), no aplicamos filtro de color naranja para respetar su color original, 
                                                        // o puedes forzarlo si prefieres, pero usualmente se ven mejor en su color oficial.
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'block';
                                                        }}
                                                    />
                                                    {/* Fallback de rayo si todo falla */}
                                                    <Zap className="hidden text-orange-500 w-8 h-8" />
                                                </div>

                                                <span className="font-medium text-gray-700 dark:text-gray-300 text-sm text-center">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* VISTA 2: CERTIFICACIONES */}
                    {activeTab === 'certs' && (
                        <motion.div
                            key="certs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {CERTIFICATIONS.map((cert) => (
                                <div key={cert.id} className="bg-white dark:bg-[#0f0f0f] p-6 rounded-2xl border border-gray-200 dark:border-[#262626] flex items-start gap-4 hover:border-orange-500/50 transition-colors">
                                    <div className="p-3 rounded-xl bg-gray-100 dark:bg-[#1a1a1a]">
                                        <img 
                                            src={`https://cdn.simpleicons.org/${cert.icon}`} 
                                            className="w-6 h-6 dark:invert" 
                                            alt="issuer"
                                            onError={(e) => e.target.src = "https://cdn.simpleicons.org/codepen"}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white leading-tight mb-1">{cert.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{cert.issuer} • {cert.date}</p>
                                        <a href={cert.link} className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 hover:underline">
                                            Ver Credencial <ExternalLink size={12} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* VISTA 3: IDIOMAS */}
                    {activeTab === 'lang' && (
                        <motion.div
                            key="lang"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
                        >
                            {LANGUAGES.map((lang) => (
                                <div key={lang.code} className="bg-white dark:bg-[#0f0f0f] p-8 rounded-3xl border border-gray-200 dark:border-[#262626] flex flex-col items-center text-center relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                                    
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4 shadow-lg ${lang.color} bg-opacity-90`}>
                                        {lang.code}
                                    </div>

                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{lang.language}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-6">{lang.level}</p>

                                    <div className="w-full h-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full overflow-hidden relative">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${lang.percentage}%` }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className={`h-full rounded-full ${lang.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    </section>
  );
};

export default Stack;