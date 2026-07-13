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
# Terminal 1 - Iniciar servidor de desarrollo en http://localhost:3000
npm run dev

# Terminal 2 (nueva) - Iniciar servidor backend con json-server en http://localhost:3001
npm run backend-server
```

El servidor incluye **Hot Module Replacement (HMR)** — los cambios se reflejan instantáneamente sin recargar.

#### API Backend (json-server)

Con `npm run backend-server` tendrás acceso a:
- `GET http://localhost:3001/contacts` — Listado completo de contactos
- `GET http://localhost:3001/contacts/:id` — Detalle de un contacto específico
- `POST http://localhost:3001/contacts` — Crear nuevo contacto
- `PUT http://localhost:3001/contacts/:id` — Actualizar contacto
- `DELETE http://localhost:3001/contacts/:id` — Eliminar contacto

Los datos de prueba están en `db/db.json`.

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
    ├── index.vue               # Ruta: / (landing page)
    ├── error.vue               # Página de error personalizada
    └── contactos/
        ├── index.vue           # Ruta: /contactos (listado con datos de API)
        ├── contacto.vue        # Ruta: /contactos/contacto (form crear)
        └── [id]/
            └── index.vue       # Ruta: /contactos/:id (detalle de contacto)

db/
└── db.json                      # Base de datos mock con 50 contactos

nuxt.config.ts                  # Configuración de Nuxt
tailwind.config.ts              # Configuración de Tailwind
tsconfig.json                   # Configuración de TypeScript
package.json                    # Dependencias y scripts
```

## 🎓 Conceptos Clave a Aprender

### 1. File-Based Routing
Todas las rutas se generan automáticamente basándose en la estructura de `pages/`:
```
pages/index.vue → /
pages/contactos/index.vue → /contactos
pages/contactos/[id]/index.vue → /contactos/:id
```

### 2. Acceder a Parámetros Dinámicos
```vue
<script setup lang="ts">
const route = useRoute()
const id = route.params.id  // Acceder al parámetro dinámico
</script>
```

### 3. Navegación Client-Side
```vue
<NuxtLink to="/contactos">Ir a Contactos</NuxtLink>
```

### 4. Fetching Data con useFetch
```vue
<script setup lang="ts">
const { data, pending, error } = await useFetch('http://localhost:3001/contacts')

// data.value contiene los contactos
// pending indica si aún está cargando
// error contiene errores si los hay
</script>
```

### 5. Computed Properties & Reactivity
```vue
<script setup lang="ts">
const idParametro = ref(123)
const link = computed(() => `/contactos/${idParametro.value}`)
</script>
```

## 🌐 Trabajando con Datos

### Backend Mock (json-server)

Este proyecto incluye **json-server** para simular un backend REST. Los datos de prueba incluyen 50 contactos con información completa.

**Estructura de un Contacto:**
```json
{
  "id": 1,
  "name": "Donovan Bernardo",
  "email": "donovanbernardo@biospan.com",
  "phone": "+1 (944) 559-2262",
  "company": "BIOSPAN",
  "age": 29,
  "gender": "male",
  "eyeColor": "brown",
  "isActive": false,
  "picture": "https://via.placeholder.com/150/yellow",
  "address": "918 Williams Place, Gallina, Missouri, 2869"
}
```

**Endpoints Disponibles:**
- `GET /contacts` — Obtener todos los contactos
- `GET /contacts/:id` — Obtener contacto por ID
- `POST /contacts` — Crear nuevo contacto
- `PUT /contacts/:id` — Actualizar contacto
- `DELETE /contacts/:id` — Eliminar contacto

### Ejemplo: Listar Contactos

Ver [app/pages/contactos/index.vue](app/pages/contactos/index.vue) para un ejemplo completo de cómo:
- Usar `useFetch` para obtener datos
- Mostrar estados de carga, error y datos vacíos
- Renderizar una tabla responsive
- Linkear a detalles individuales

## 📖 Documentación Útil

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Vue 3 Guide](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS Utilities](https://tailwindcss.com/docs/utility-first)
- [TypeScript & Vue](https://vuejs.org/guide/typescript/overview.html)
