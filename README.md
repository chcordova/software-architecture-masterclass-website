# 🏛️ Software Architecture Masterclass

![Astro](https://img.shields.io/badge/Astro-4.16-FF5D01?style=flat-square&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![DevContainers](https://img.shields.io/badge/DevContainers-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)

Una plataforma educativa interactiva tipo _Learning Path_ diseñada para dominar el diseño de sistemas de alto nivel, desde arquitecturas monolíticas en capas hasta sistemas distribuidos y arquitecturas hexagonales.

## ✨ Características Principales

- **Contenido Dinámico con MDX:** Lecciones teóricas y prácticas escritas en MDX, permitiendo la inyección de componentes interactivos de React directamente en la documentación.
- **Visualización de Código Avanzada (CodeTabs):** Comparativa lado a lado de implementaciones reales (ej. Capas vs. Hexagonal) usando `prism-react-renderer`.
- **Evaluaciones Interactivas:** Cuestionarios dinámicos con _feedback_ formativo instantáneo construidos con React y Tailwind.
- **Entorno Estandarizado:** Configuración 100% reproducible utilizando **VS Code DevContainers** sobre Docker/WSL, eliminando el problema de "funciona en mi máquina".
- **Diseño Responsivo y Minimalista:** Construido con Tailwind CSS y el plugin de tipografía (`@tailwindcss/typography`) para garantizar una legibilidad perfecta.

## 🛠️ Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) (SSG para máximo rendimiento)
- **UI Library:** [React](https://reactjs.org/) (Para componentes interactivos aislados usando la arquitectura de "Islas")
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Modo Estricto)
- **Iconografía:** [Lucide React](https://lucide.dev/)

## 🚀 Empezando (Desarrollo Local)

El proyecto está preparado para ejecutarse dentro de un contenedor de desarrollo, garantizando que el entorno de Node.js sea idéntico para cualquier contribuidor.

### Requisitos Previos

- **Docker** instalado y ejecutándose.
- **Visual Studio Code** con la extensión **Dev Containers** (`ms-vscode-remote.remote-containers`).

### Instalación y Ejecución

1. **Clonar el repositorio y abrir en VS Code:**
   Al abrir la carpeta raíz en VS Code, el editor detectará la configuración de `.devcontainer/` y te sugerirá "Reabrir en contenedor" (_Reopen in Container_). Acepta para que se construya el entorno.

2. **Instalar dependencias:**
   Una vez dentro de la terminal integrada del DevContainer, ejecuta:

   ```bash
   npm install
   ```

3. **Levantar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321/`.

> **Nota sobre el entorno:** Los scripts de inicio en el `package.json` incluyen la bandera `--host` (`astro dev --host`) para asegurar que los puertos se expongan correctamente a través de la red de Docker/WSL hacia el navegador de tu máquina host.

## 📂 Estructura del Proyecto

```text
/
├── .devcontainer/       # Configuración del entorno de Docker y VS Code
├── public/              # Archivos estáticos (favicon, fuentes, imágenes de contenido)
├── src/
│   ├── components/      # Componentes interactivos de React (Quiz.tsx, CodeTabs.tsx, Callout.tsx)
│   ├── layouts/         # Plantilla base estructural (Layout.astro) con Sidebar y Navbar
│   └── pages/
│       ├── index.astro  # Landing page y dashboard principal (Ruta de aprendizaje)
│       └── modulos/     # Contenido educacional escrito en archivos .mdx
├── astro.config.mjs     # Configuración oficial de integraciones de Astro (React, Tailwind, MDX)
├── tailwind.config.mjs  # Configuración del diseño, plugins y tokens de Tailwind CSS
└── package.json         # Registro de dependencias y comandos del sistema
```

## 📦 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo local con recarga en caliente (HMR).
- `npm run check`: Ejecuta el verificador de tipos y sintaxis de Astro.
- `npm run build`: Construye la versión estática hiper-optimizada para producción en el directorio `/dist/`.
- `npm run preview`: Levanta un servidor local simulando el build de producción generado.

## 📜 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Eres libre de utilizar y modificar el código base para crear tus propias plataformas educativas o laboratorios de desarrollo.
