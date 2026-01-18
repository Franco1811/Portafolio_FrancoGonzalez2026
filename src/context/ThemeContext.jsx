import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Contexto para manejar el estado del tema (claro/oscuro) en toda la aplicación.
 */
const ThemeContext = createContext();

/**
 * Proveedor del tema que encapsula la lógica de persistencia y cambio de clases CSS.
 * @param {Object} props - Componentes hijos.
 */
export const ThemeProvider = ({ children }) => {
    // Inicialización del estado: verifica localStorage o preferencia del sistema
    const [theme, setTheme] = useState(() => {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Efecto para sincronizar la clase 'dark' en el elemento raíz (html) y actualizar localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Función para alternar entre modos
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personalizado para acceder fácilmente al contexto del tema
export const useTheme = () => useContext(ThemeContext);