import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { PROFILE } from '../constants/data';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  // Función para copiar correo
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-white dark:bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Línea divisoria superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* === COLUMNA IZQUIERDA: INFORMACIÓN === */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Hablemos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed">
              ¿Tienes un proyecto en mente o buscas un perfil que combine datos y desarrollo web? 
              Estoy disponible para nuevas oportunidades.
            </p>

            {/* GRID DE TARJETAS DE CONTACTO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* 1. GMAIL */}
              <div className="group relative bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-[#262626] p-5 rounded-2xl hover:border-red-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm">
                    <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Gmail" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">Correo</h4>
                    <p className="text-xs text-gray-500 font-mono">Respuesta rápida</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-2 mt-2">
                  <a href={`mailto:${PROFILE.socials.email}`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-500 truncate transition-colors">
                    {PROFILE.socials.email}
                  </a>
                  <button onClick={handleCopyEmail} className="text-gray-400 hover:text-white transition-colors" title="Copiar correo">
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              {/* 2. LINKEDIN (ICONO ARREGLADO) */}
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="group bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-[#262626] p-5 rounded-2xl hover:border-[#0077b5]/50 transition-colors flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm">
                    {/* Usamos SimpleIcons para asegurar el mismo tamaño que los demás */}
                    <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">LinkedIn</h4>
                    <p className="text-xs text-gray-500">Conectemos</p>
                  </div>
                  <ArrowUpRight size={18} className="ml-auto text-gray-500 group-hover:text-[#0077b5] transition-colors" />
                </div>
              </a>

              {/* 3. GITHUB */}
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer"
                 className="group bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-[#262626] p-5 rounded-2xl hover:border-gray-500/50 transition-colors flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm">
                     <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="w-6 h-6 dark:invert" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">GitHub</h4>
                    <p className="text-xs text-gray-500">Ver código</p>
                  </div>
                  <ArrowUpRight size={18} className="ml-auto text-gray-500 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* 4. WHATSAPP */}
              <a href={`https://wa.me/${PROFILE.socials.whatsapp}`} target="_blank" rel="noopener noreferrer"
                 className="group bg-gray-50 dark:bg-[#0f0f0f] border border-gray-200 dark:border-[#262626] p-5 rounded-2xl hover:border-[#25D366]/50 transition-colors flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm">
                    <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">WhatsApp</h4>
                    <p className="text-xs text-gray-500">Chat directo</p>
                  </div>
                  <ArrowUpRight size={18} className="ml-auto text-gray-500 group-hover:text-[#25D366] transition-colors" />
                </div>
              </a>

            </div>
          </div>

          {/* === COLUMNA DERECHA: QR GIGANTE FUNCIONAL === */}
          <div className="relative h-full min-h-[400px]">
            {/* ENLACE GIGANTE PARA CELULARES */}
            <a 
              href={`https://wa.me/${PROFILE.socials.whatsapp}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block h-full w-full bg-orange-500 rounded-[2rem] p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-2xl shadow-orange-500/20"
            >
                {/* Decoración */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    
                    {/* QR GENERADO CON TU NÚMERO */}
                    <div className="bg-white p-4 rounded-3xl shadow-xl mb-8 transform group-hover:rotate-2 transition-transform duration-500">
                        <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/${PROFILE.socials.whatsapp}&color=000000&bgcolor=ffffff`} 
                            alt="WhatsApp QR" 
                            className="w-40 h-40 md:w-48 md:h-48"
                        />
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">Escanea para chatear</h3>
                    <p className="text-orange-100 text-sm font-medium mb-6">
                        (O haz click aquí para abrir WhatsApp)
                    </p>

                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                        </span>
                        <span className="text-white font-bold text-sm">Respuesta rápida</span>
                    </div>

                </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;