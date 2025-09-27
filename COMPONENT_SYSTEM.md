# Sistema de Componentes - IdeasCollab

Este proyecto utiliza un sistema de componentes modular y reutilizable que facilita la creación y mantenimiento de la interfaz de usuario.

## Estructura de Carpetas

```
src/
├── components/
│   ├── ui/                 # Componentes base reutilizables
│   │   ├── Button.tsx      # Componente de botón con variantes
│   │   ├── Button.css
│   │   ├── Text.tsx        # Componente de texto con tipografía consistente
│   │   ├── Text.css
│   │   ├── Container.tsx   # Contenedor con tamaños y centrado
│   │   ├── Container.css
│   │   ├── ArrowDown.tsx   # Icono de flecha animada
│   │   ├── ArrowDown.css
│   │   ├── Icon.tsx        # Iconos del proyecto
│   │   ├── Icon.css
│   │   ├── Frame.tsx       # Marco decorativo
│   │   ├── Frame.css
│   │   ├── ScrollContainer.tsx
│   │   ├── ScrollContainer.css
│   │   └── index.ts        # Exportaciones de componentes UI
│   ├── sections/           # Componentes de secciones específicas
│   │   ├── IntroSection.tsx
│   │   ├── IntroSection.css
│   │   ├── MainContent.tsx
│   │   ├── MainContent.css
│   │   └── index.ts        # Exportaciones de secciones
│   └── index.ts            # Exportaciones principales
├── styles/
│   ├── variables.css       # Variables CSS globales
│   └── globals.css         # Estilos globales y utilidades
└── App.tsx                 # Componente principal
```

## Componentes UI Base

### Button

Componente de botón con múltiples variantes y tamaños.

```tsx
import { Button } from './components/ui';

// Uso básico
<Button>Click me</Button>

// Con variantes y tamaños
<Button variant="primary" size="lg">Primary Large</Button>
<Button variant="secondary" size="sm">Secondary Small</Button>
<Button variant="outline">Outline</Button>
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- Todas las props nativas de `button`

### Text

Componente de texto con control completo de tipografía.

```tsx
import { Text } from './components/ui';

// Diferentes elementos HTML
<Text as="h1" size="6xl" weight="bold">Título Principal</Text>
<Text as="p" size="lg">Párrafo grande</Text>
<Text as="span" size="sm" color="muted">Texto pequeño</Text>

// Con alineación
<Text align="center">Texto centrado</Text>
```

**Props:**

- `as`: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- `size`: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
- `weight`: 'normal' | 'medium' | 'semibold' | 'bold' | 'black'
- `color`: 'primary' | 'secondary' | 'muted'
- `align`: 'left' | 'center' | 'right'

### Container

Contenedor responsive con control de ancho y centrado.

```tsx
import { Container } from './components/ui';

// Diferentes tamaños
<Container size="sm">Contenido pequeño</Container>
<Container size="lg" center>Contenido centrado</Container>
<Container size="full" padding={false}>Sin padding</Container>
```

**Props:**

- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `center`: boolean - Centra el contenido
- `padding`: boolean - Aplica padding horizontal

### ArrowDown

Icono de flecha hacia abajo con animación opcional.

```tsx
import { ArrowDown } from './components/ui';

<ArrowDown />
<ArrowDown size={32} animate={false} />
```

### LightBulbIcon

Icono de bombilla para el logo.

```tsx
import { LightBulbIcon } from "./components/ui";

<LightBulbIcon size={180} />;
```

## Variables CSS

El sistema utiliza variables CSS para mantener consistencia en:

- **Colores**: `--text-color`, `--dark-background`, `--light-background`
- **Tipografía**: `--font-primary`, `--font-mono`
- **Tamaños de texto**: `--text-xs` a `--text-6xl`
- **Espaciado**: `--space-1` a `--space-20`
- **Bordes**: `--radius-sm` a `--radius-full`
- **Sombras**: `--shadow-sm` a `--shadow-xl`
- **Transiciones**: `--transition-fast`, `--transition-normal`, `--transition-slow`

## Creando Nuevos Componentes

### 1. Componente UI Base

Para crear un nuevo componente reutilizable:

```tsx
// src/components/ui/NewComponent.tsx
import React from "react";
import "./NewComponent.css";

export interface NewComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "special";
  size?: "sm" | "md" | "lg";
}

export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  (
    { variant = "default", size = "md", className = "", children, ...props },
    ref
  ) => {
    const classes = [
      "new-component",
      `new-component--${variant}`,
      `new-component--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

NewComponent.displayName = "NewComponent";
```

### 2. Estilos CSS

```css
/* src/components/ui/NewComponent.css */
.new-component {
  /* Estilos base usando variables */
  font-family: var(--font-primary);
  padding: var(--space-4);
  border-radius: var(--radius);
  transition: var(--transition-normal);
}

/* Variantes */
.new-component--default {
  background-color: var(--light-background);
  color: var(--text-color);
}

.new-component--special {
  background-color: var(--text-color);
  color: var(--light-background);
}

/* Tamaños */
.new-component--sm {
  font-size: var(--text-sm);
}
.new-component--md {
  font-size: var(--text-base);
}
.new-component--lg {
  font-size: var(--text-lg);
}
```

### 3. Exportar el Componente

Agregar al `src/components/ui/index.ts`:

```tsx
export { NewComponent } from "./NewComponent";
export type { NewComponentProps } from "./NewComponent";
```

## Beneficios del Sistema

1. **Reutilización**: Componentes base que se pueden usar en toda la aplicación
2. **Consistencia**: Variables CSS garantizan un diseño coherente
3. **Mantenibilidad**: Cambios centralizados en variables y componentes base
4. **Tipado**: TypeScript para mejor experiencia de desarrollo
5. **Accesibilidad**: Componentes con soporte para refs y props estándar
6. **Performance**: Componentes optimizados con forwardRef

## Uso en el Proyecto

El App.tsx principal usa estos componentes de manera limpia:

```tsx
import { Frame, ScrollContainer } from "./components/ui";
import { IntroSection, MainContent } from "./components/sections";

function App() {
  return (
    <div className="App">
      <Frame ref={frameRef} />
      <IntroSection {...props} />
      <ScrollContainer ref={scrollContainerRef} />
      <MainContent ref={mainContentRef} />
    </div>
  );
}
```

Este sistema permite una fácil expansión y mantenimiento del proyecto, asegurando que todos los nuevos componentes sigan las mismas convenciones de diseño y código.
