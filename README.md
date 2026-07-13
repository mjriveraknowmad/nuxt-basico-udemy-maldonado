# Nuxt Básico - Proyecto Educativo Actualizado

Un proyecto educativo basado en el curso "[Nuxt.js Aplicaciones Universales con Vue.js](https://www.udemy.com/course/nuxt-js-aplicaciones-universales-con-vue-js)" de Udemy, **modernizado a Nuxt 4 con Vue 3 y TypeScript**.


## 🔄 Diferencias con el Curso Original

| Aspecto | Curso Original (2021) | Proyecto Actual |
|--------|----------------------|-----------------|
| **Versión Nuxt** | Nuxt 2.x | Nuxt 4.4 |
| **Versión Vue** | Vue 2 (Options API) | Vue 3 (Composition API) |
| **TypeScript** | No | ✅ Sí, incluido por defecto |
| **Styling** | Bootstrap Vue + Bootstrap CSS | Tailwind CSS (utility-first) |
### ¿Por qué estos cambios?

1. **Nuxt 4** — Framework moderno con mejor performance y DX
2. **Vue 3 Composition API** — Sintaxis más clara y reusable que Options API
3. **TypeScript** — Previene bugs y mejora la experiencia de desarrollo
4. **Tailwind CSS** — Más flexible que Bootstrap, mejor para aprender CSS moderno

## 🚀 Configuración Rápida

### Requisitos
- Node.js 18+
- npm (o pnpm/yarn/bun)

### Instalación

```bash
# Instalar dependencias
npm install

# Inicializar Nuxt
npm run postinstall
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo en http://localhost:3000
npm run dev
```

El servidor incluye **Hot Module Replacement (HMR)** — los cambios se reflejan instantáneamente sin recargar.

### Production

```bash
# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Generar sitio estático
npm run generate
```

## 📁 Estructura del Proyecto

```
app/
├── app.vue                      # Componente raíz (layout principal)
├── assets/
│   └── css/
│       └── main.css            # Estilos globales (directivas Tailwind)
├── components/
│   └── AppHeader.vue           # Componente de navegación (auto-registrado)
└── pages/
    ├── index.vue               # Ruta: /
    └── contactos/
        ├── index.vue           # Ruta: /contactos
        ├── contacto.vue        # Ruta: /contactos/contacto (form)
        └── [id]/
            └── index.vue       # Ruta: /contactos/:id (dynamic)

nuxt.config.ts                  # Configuración de Nuxt
tailwind.config.ts              # Configuración de Tailwind
tsconfig.json                   # Configuración de TypeScript
package.json                    # Dependencias y scripts
```

## 📖 Documentación Útil

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Vue 3 Guide](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS Utilities](https://tailwindcss.com/docs/utility-first)
- [TypeScript & Vue](https://vuejs.org/guide/typescript/overview.html)
