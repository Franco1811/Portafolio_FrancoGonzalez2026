# Portafolio 2026 - Franco González

Bienvenido al repositorio de mi portafolio profesional. Este proyecto es una Single Page Application (SPA) moderna, rápida y responsiva, diseñada para mostrar mis habilidades como **Desarrollador Web** y **Analista de Datos**.

## Tecnologías Utilizadas

Este proyecto fue construido siguiendo las mejores prácticas de desarrollo moderno:

-   **Framework:** [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
-   **Iconos:** [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/)
-   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
-   **Fuentes:** Inter & JetBrains Mono

## Estructura del Proyecto

El código ha sido refactorizado para ser modular y escalable:

```bash
src/
├── components/      # Componentes UI reutilizables (Navbar, SocialButton, etc.)
├── constants/       # Datos centralizados (Perfil, Proyectos, Stack)
├── context/         # Lógica global (ThemeContext para Dark Mode)
├── sections/        # Secciones principales de la Landing Page
└── App.jsx          # Punto de entrada principal
```

## Instalación y Uso

Si deseas ejecutar este proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Franco1811/portfolio-2026.git
    cd portfolio-2026
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## Características Destacadas

-   **Modo Oscuro/Claro:** Implementado con Context API y persistencia local.
-   **Clean Code:** Separación estricta entre lógica, vista y datos.
-   **Datos Centralizados:** Todo el contenido es editable desde `src/constants/data.js`.
-   **Responsive Design:** Optimizado para móviles, tablets y escritorio.

---

Desarrollado con ❤️ por **Franco González**.
