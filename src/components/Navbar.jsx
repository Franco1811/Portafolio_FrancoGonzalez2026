import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Componente Navbar: Barra de navegación responsiva.
 * - En escritorio: Muestra links directos y toggle de tema.
 * - En móvil: Muestra menú hamburguesa desplegable.
 * Utiliza backdrop-blur para efecto de vidrio sobre el contenido.
 */
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              F
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Franco <span className="text-primary">Gonzalez</span>
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Sobre Mí', 'Proyectos', 'Stack', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              
              {/* BOTÓN DE TEMA: Siempre Naranja (text-primary) */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-dark-card text-primary hover:bg-orange-100 dark:hover:bg-gray-800 transition-all shadow-sm"
                aria-label="Cambiar tema"
              >
                {/* El icono hereda el color 'text-primary' del padre */}
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="-mr-2 flex md:hidden gap-4">
            <button onClick={toggleTheme} className="p-2 text-primary">
               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Sobre Mí', 'Proyectos', 'Stack', 'Contacto'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;