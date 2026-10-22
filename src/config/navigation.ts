export interface ModuleItem {
  id: string;
  step: string;
  slug: string;
  sidebarName: string;
  paginationTitle: string;
  title: string;
  desc: string;
  tags: string[];
  isAvailable: boolean;
}

export const getBase = (path: string = "") => {
  const base = import.meta.env.BASE_URL;
  const safeBase = base.endsWith("/") ? base : base + "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return safeBase + cleanPath;
};

export const MODULES: ModuleItem[] = [
  {
    id: "01",
    step: "Módulo 1",
    slug: "modulos/01-fundamentos",
    sidebarName: "1. Fundamentos",
    paginationTitle: "Módulo 1: Fundamentos",
    title: "Fundamentos & Atributos de Calidad",
    desc: "Principios de diseño, Ley de Conway, deuda técnica y el equilibrio entre escalabilidad y mantenibilidad.",
    tags: ["Quality Attributes", "Trade-offs", "SOLID"],
    isAvailable: true,
  },
  {
    id: "02",
    step: "Módulo 2",
    slug: "modulos/02-arquitectura-capas",
    sidebarName: "2. Arquitectura en Capas",
    paginationTitle: "Módulo 2: Arquitectura en Capas",
    title: "Arquitectura en Capas & Clean Architecture",
    desc: "Separación de responsabilidades, regla de dependencia, desacoplamiento del framework e inversión de control.",
    tags: ["Clean Arch", "Onion", "Separation of Concerns"],
    isAvailable: true,
  },
  {
    id: "03",
    step: "Módulo 3",
    slug: "modulos/03-arquitectura-hexagonal",
    sidebarName: "3. Arquitectura Hexagonal",
    paginationTitle: "Módulo 3: Arquitectura Hexagonal",
    title: "Arquitectura Hexagonal (Ports & Adapters)",
    desc: "Aislamiento del núcleo del dominio, diseño guiado por el dominio (DDD) y contratos de infraestructura.",
    tags: ["Ports & Adapters", "DDD", "Testability"],
    isAvailable: true,
  },
  {
    id: "04",
    step: "Módulo 4",
    slug: "modulos/04-diseno-avanzado",
    sidebarName: "4. Diseño Avanzado (Práctica)",
    paginationTitle: "Módulo 4: Diseño Avanzado",
    title: "Diseño Avanzado (Práctica)",
    desc: "Barreras de validación, intercepción de errores, y la prueba de fuego de compilación (pom.xml).",
    tags: ["Validation", "Exception Handling", "Dependencies"],
    isAvailable: true,
  },
  {
    id: "05",
    step: "Módulo 5",
    slug: "modulos/05-sistemas-distribuidos",
    sidebarName: "5. Sistemas Distribuidos",
    paginationTitle: "Módulo 5: Sistemas Distribuidos",
    title: "Sistemas Distribuidos & Event-Driven",
    desc: "Acoplamiento estático vs. dinámico, separación de preocupaciones operativas, patrón Sidecar y Service Mesh.",
    tags: ["Coupling", "Sidecar", "Service Mesh"],
    isAvailable: true,
  },
  {
    id: "06",
    step: "Módulo 6",
    slug: "modulos/06-comparativa",
    sidebarName: "6. Matriz Comparativa",
    paginationTitle: "Módulo 6: Matriz Comparativa",
    title: "Matriz Comparativa de Decisiones (Trade-offs)",
    desc: "Evaluación rigurosa de trade-offs entre Arquitectura en Capas y Arquitectura Hexagonal.",
    tags: ["Trade-offs", "Decision Matrix", "Governance"],
    isAvailable: true,
  },
  {
    id: "07",
    step: "Módulo 7",
    slug: "modulos/07-quiz",
    sidebarName: "7. Quiz y Evaluación",
    paginationTitle: "Módulo 7: Quiz y Evaluación",
    title: "Evaluación Práctica & Quizzes",
    desc: "Ponte a prueba con retos de diseño de sistemas reales y cuestionarios diagnósticos interactivos.",
    tags: ["Interactive Quiz", "Case Studies", "Review"],
    isAvailable: true,
  },
];

export function getModuleNavigation(currentPathname: string) {
  const normalizedPath = currentPathname.replace(/\/+$/, "");
  const currentIndex = MODULES.findIndex((mod) =>
    normalizedPath.endsWith(mod.slug),
  );

  if (currentIndex === -1) {
    return { current: undefined, prev: undefined, next: undefined };
  }

  return {
    current: MODULES[currentIndex],
    prev: currentIndex > 0 ? MODULES[currentIndex - 1] : undefined,
    next:
      currentIndex < MODULES.length - 1 ? MODULES[currentIndex + 1] : undefined,
  };
}
