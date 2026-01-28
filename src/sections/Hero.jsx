import { Github, Linkedin, Download, ShieldCheck } from 'lucide-react';
import { PROFILE } from '../constants/data';
import SocialButton from '../components/SocialButton';

/**
 * Seccion Hero (Sobre mí).
 * 
 * Primera vista que recibe al usuario ("Above the fold").
 * Diseñado para captar la atención inmediatamente con una jerarquía visual clara:
 * 1. Fondo técnico y moderno (patrón de grilla CSS puro para performance).
 * 2. Presentación clara del rol y nombre.
 * 3. Call to Actions (CTAs) directos: CV y Contacto.
 * 
 * Utiliza un diseño responsive que pasa de 1 columna en móvil a 2 columnas (Texto + Imagen) en desktop.
 * Mantiene consistencia de datos consumiendo el objeto global `PROFILE`.
 */
const Hero = () => {
  return (
    <section id="sobre-mí" className="relative w-full px-4 md:px-8 pt-20 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* FONDO DE CUADRÍCULA (GRID)
          Implementación puramente CSS usando gradientes lineales para crear eefecto de papel milimetrado.
          Más performante que usar una imagen SVG de fondo. */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-[#0a0a0a] 
      bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] 
      dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] 
      bg-[size:40px_40px]"></div>

      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#0a0a0a_100%)]"></div>

      {/* CONTENEDOR PRINCIPAL (Texto + Foto) */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* === COLUMNA IZQUIERDA: TEXTO === */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left z-10">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-500 text-sm font-bold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              {PROFILE.status.text}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
              Desarrollador <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Web</span>
              <br />
              <span className="text-3xl md:text-6xl font-bold text-gray-400 dark:text-gray-600">{PROFILE.roles.connector} </span>
              Analista de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Datos</span>
            </h1>

            <p className="text-gray-700 dark:text-gray-400 text-lg md:text-2xl leading-relaxed mb-10 max-w-3xl font-medium">
              {PROFILE.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a 
                href={PROFILE.socials.cv} 
                download 
                className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95"
              >
                <Download size={24} />
                <span>Descargar CV</span>
              </a>
              
              <div className="flex gap-3">
                <SocialButton 
                  href={PROFILE.socials.github} 
                  icon={Github} 
                  label="GitHub" 
                  variant="primary" 
                />
                <SocialButton 
                  href={PROFILE.socials.linkedin} 
                  icon={Linkedin} 
                  label="LinkedIn" 
                  variant="linkedin" 
                />
              </div>
            </div>
        </div>

        {/* === COLUMNA DERECHA: FOTO === */}
        <div className="col-span-1 lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-br from-orange-500/20 to-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
             
             <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px] rounded-full bg-[#1a1a1a] border-[3px] border-[#333] flex items-center justify-center shadow-2xl z-10 overflow-hidden group">
                {PROFILE.image ? (
                  <img 
                    src={PROFILE.image} 
                    alt={PROFILE.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-9xl lg:text-[12rem] font-bold text-gray-800 group-hover:text-white transition-colors">
                    {PROFILE.initials}
                  </span>
                )}
             </div>

             <div className="absolute bottom-4 right-4 lg:bottom-10 lg:-right-6 bg-white/80 dark:bg-[#0f0f0f]/90 backdrop-blur-xl border border-gray-200 dark:border-[#333] p-4 pr-8 rounded-2xl flex items-center gap-5 shadow-2xl z-20 animate-bounce-slow">
                <div className="bg-orange-500/10 p-3 rounded-xl text-orange-500">
                  <ShieldCheck size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider leading-none mb-1">Status</span>
                  <span className="text-lg font-bold text-green-500 dark:text-green-400 leading-none">
                    {PROFILE.status.isOnline ? "Online" : "Offline"}
                  </span>
                </div>
             </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;