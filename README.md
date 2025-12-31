# Curso de Ascenso - React + Vite

Esta es la versión migrada a React + Vite de la aplicación de quiz para el curso de ascenso de la Policía de la Ciudad.

## Estructura del Proyecto

```
curso-react/
├── src/
│   ├── assets/
│   │   └── images/          # Imágenes del proyecto
│   ├── components/
│   │   └── Header.jsx       # Componente de cabecera reutilizable
│   ├── data/
│   │   ├── cppnQuestions.js # Preguntas de CPPN
│   │   └── index.js         # Mapeo de topics a preguntas
│   ├── pages/
│   │   ├── Home.jsx         # Página principal con menú
│   │   └── Quiz.jsx         # Componente de quiz reutilizable
│   ├── styles/              # Archivos CSS migrados
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globales
│   └── main.jsx             # Punto de entrada
├── index.html               # HTML principal
├── package.json
└── vite.config.js          # Configuración de Vite
```

## Características

- ✅ Migración completa de HTML a componentes React
- ✅ React Router para navegación entre páginas
- ✅ Bootstrap 5 para estilos
- ✅ **Header Moderno Fijo** - Diseño profesional con:
  - 🎨 Gradiente moderno (azul/morado)
  - 📍 Posición fija en la parte superior
  - ✨ Efectos glassmorphism y sombras
  - 🎭 4 temas de color predefinidos
  - 🔤 Tipografía moderna (Inter/Segoe UI)
  - Ver [HEADER_GUIDE.md](HEADER_GUIDE.md) para personalización
- ✅ Componente Quiz reutilizable para todos los temas
- ✅ Sistema de preguntas modulares
- ✅ Estilos CSS migrados y optimizados
- ✅ **Diseño 100% Responsive** optimizado para todos los dispositivos:
  - 📱 Móviles pequeños (320px+)
  - 📱 Móviles medianos vertical y horizontal
  - 📱 Tablets vertical y horizontal (768px - 1024px)
  - 💻 Laptops y tablets grandes (1025px - 1366px)
  - 🖥️ Pantallas grandes (1367px+)
- ✅ Mobile First approach
- ✅ Touch-friendly buttons (tamaños adecuados para toques)
- ✅ Tipografía responsive y legible
- ✅ Sin scroll horizontal en ningún dispositivo

## Instalación y Ejecución

### Opción 1: Instalación completa desde cero

Si hay problemas con las dependencias, es mejor reinstalar todo:

```bash
cd curso-react

# Eliminar instalación previa
rm -rf node_modules package-lock.json

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### Opción 2: Usar npx directamente

```bash
cd curso-react
npx vite
```

### Opción 3: Reinstalar Vite globalmente

```bash
npm install -g vite
cd curso-react
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Migración de Datos de Preguntas

Actualmente solo se han migrado algunas preguntas de ejemplo en `src/data/cppnQuestions.js`.

Para migrar todas las preguntas de los archivos originales:

1. Copia el contenido de cada archivo `.js` del directorio `public/src/scripts/`
2. Crea un nuevo archivo en `src/data/` para cada tema (ej: `inimputabilidad.js`, `criminalistica.js`, etc.)
3. Exporta el array de preguntas con `export const nombreQuestions = [...]`
4. Importa las preguntas en `src/data/index.js` y agrégalas al mapeo `questionsByTopic`

Ejemplo para criminalística:

```javascript
// src/data/criminalisticaQuestions.js
export const criminalisticaQuestions = [
  {
    question: "...",
    options: ["...", "..."],
    correctAnswer: "..."
  },
  // ... más preguntas
];

// src/data/index.js
import { cppnQuestions } from './cppnQuestions';
import { criminalisticaQuestions } from './criminalisticaQuestions';

export const questionsByTopic = {
  cppn: cppnQuestions,
  criminalistica: criminalisticaQuestions,
  // ... más temas
};
```

## Diferencias con la Versión Original

### Ventajas de la versión React:

1. **Componentes Reutilizables**: Un solo componente Quiz para todos los temas
2. **Mejor Organización**: Código modular y fácil de mantener
3. **Navegación Moderna**: React Router para SPA
4. **Hot Module Replacement**: Cambios en tiempo real durante el desarrollo
5. **Build Optimizado**: Vite genera builds muy rápidos y optimizados
6. **TypeScript Ready**: Fácil migración a TypeScript si se necesita

### Cambios Realizados:

- Eliminado `server.js` (ahora es una Single Page Application)
- Todas las páginas HTML convertidas a componentes React
- Navegación con `<Link>` en lugar de `<a href>`
- Estado gestionado con React hooks (`useState`, `useEffect`)
- CSS organizado en carpeta `styles/`

## Próximos Pasos

1. Completar la migración de todas las preguntas
2. Agregar más funcionalidades:
   - Guardar progreso en localStorage
   - Estadísticas de desempeño
   - Modo de estudio (ver todas las preguntas sin penalización)
   - Sistema de categorías y dificultad
3. Considerar agregar un backend con Express si se necesita:
   - Guardar resultados en base de datos
   - Sistema de usuarios
   - Rankings

## Tecnologías Utilizadas

- React 19.2.0
- React Router DOM 7.10.1
- Vite 7.2.7
- Bootstrap 5.3.8
- Google Fonts (Bungee Spice, Kalam, Chicle)
- Font Awesome 6.5.2

## Diseño Responsive

La aplicación está completamente optimizada para funcionar en **todos los dispositivos y orientaciones**. Ver [RESPONSIVE.md](RESPONSIVE.md) para información detallada.

### Breakpoints Implementados

| Dispositivo | Rango | Orientación | Características |
|------------|-------|-------------|-----------------|
| 📱 Móviles pequeños | 320px - 480px | Portrait | Fuentes pequeñas, botones 55px |
| 📱 Móviles medianos | 481px - 767px | Portrait | Fuentes medianas, botones 60px |
| 📱 Móviles | 481px - 896px | Landscape | Header compacto, botones 45px |
| 📱 Tablets | 768px - 1024px | Portrait | Fuentes grandes, botones 70px |
| 📱 Tablets | 768px - 1024px | Landscape | Balanceado, botones 60px |
| 💻 Laptops | 1025px - 1366px | - | Botones 80px, espaciado amplio |
| 🖥️ Desktop | 1367px+ | - | Ancho máx 1400px, botones 90px |

### Probar el Responsive

1. Abre Chrome DevTools (F12)
2. Activa Device Mode (Ctrl+Shift+M / Cmd+Shift+M)
3. Prueba diferentes dispositivos y orientaciones
4. Verifica que todo se vea correctamente

### Características Responsive

- **Mobile First**: Diseño base optimizado para móviles
- **Touch Friendly**: Botones grandes y fáciles de tocar
- **No Scroll Horizontal**: Contenido siempre dentro de la pantalla
- **Texto Adaptativo**: Fuentes que escalan según el dispositivo
- **Imágenes Responsive**: Se adaptan al ancho disponible

## Soporte

Si encuentras problemas durante la instalación o ejecución, verifica:

1. Que tienes Node.js instalado (versión 18 o superior)
2. Que eliminaste `node_modules` y `package-lock.json` antes de reinstalar
3. Que estás en el directorio correcto (`curso-react`)
4. Que no hay otros procesos usando el puerto 5173 (puerto por defecto de Vite)
