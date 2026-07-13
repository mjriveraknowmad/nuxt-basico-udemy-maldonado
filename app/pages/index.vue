<script setup lang="ts">
</script>

<template>
    <div>
        <!-- Hero Section -->
        <section class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6">Nuxt Básico</h1>
                <p class="text-xl md:text-2xl text-slate-300 mb-8">
                    Un proyecto educativo moderno para aprender Nuxt 4 con Vue 3 y TypeScript
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink 
                        to="/contactos" 
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
                    >
                        Ver Contactos →
                    </NuxtLink>
                    <a 
                        href="https://nuxt.com/docs" 
                        target="_blank"
                        class="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        Documentación Nuxt
                    </a>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="py-16 px-4 bg-white">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-slate-900 mb-6">📚 Acerca del Proyecto</h2>
                <p class="text-lg text-slate-700 mb-4">
                    Este proyecto es una versión <strong>modernizada y actualizada</strong> de una sección del curso 
                    "<a href="https://www.udemy.com/course/nuxt-js-aplicaciones-universales-con-vue-js" target="_blank" class="text-blue-500 hover:underline">Nuxt.js Aplicaciones Universales con Vue.js</a>" 
                    de Udemy (2021). Fue desarrollado para introducir conceptos fundamentales de Nuxt de forma sencilla y educativa.
                </p>
                <p class="text-lg text-slate-700">
                    El proyecto original usaba <strong>Nuxt 2, Bootstrap Vue y Vue 2</strong>. Esta versión lo actualiza a 
                    <strong>Nuxt 4.4, TypeScript y Tailwind CSS</strong>, manteniendo la simplicidad pedagógica.
                </p>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 px-4 bg-slate-50">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-slate-900 mb-12">✨ Partes repasadas en el proyecto</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Feature 1 -->
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">🛣️ File-Based Routing</h3>
                        <p class="text-slate-700">
                            Las rutas se crean automáticamente según la estructura de carpetas en <code class="bg-slate-100 px-2 py-1 rounded">pages/</code>. 
                            No necesitas configurar nada manualmente.
                        </p>
                    </div>

                    <!-- Feature 2 -->
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">📍 Rutas Dinámicas</h3>
                        <p class="text-slate-700">
                            Aprende a usar segmentos dinámicos como <code class="bg-slate-100 px-2 py-1 rounded">[id]</code> y 
                            accede a parámetros con <code class="bg-slate-100 px-2 py-1 rounded">useRoute()</code>.
                        </p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">⚙️ Composition API</h3>
                        <p class="text-slate-700">
                            Código moderno y limpio con Vue 3 Composition API. Lógica reutilizable y fácil de mantener.
                        </p>
                    </div>

                    <!-- Feature 4 -->
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">🎨 Tailwind CSS</h3>
                        <p class="text-slate-700">
                            Estilos modernos con utilidades CSS. Aprende diseño responsive sin escribir CSS personalizado.
                        </p>
                    </div>

                    <!-- Feature 5 -->
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">📘 TypeScript</h3>
                        <p class="text-slate-700">
                            Tipado seguro integrado por defecto. Detecta errores temprano y mejora el desarrollo.
                        </p>
                    </div>

                    <!-- Feature 6 -->
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-xl font-bold text-blue-600 mb-3">🔄 HMR (Hot Module Reload)</h3>
                        <p class="text-slate-700">
                            Los cambios se reflejan al instante sin recargar la página. Desarrollo ágil y productivo.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tech Stack Section -->
        <section class="py-16 px-4 bg-white">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-slate-900 mb-8">🛠️ Stack Tecnológico</h2>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-slate-900 text-white p-6 rounded-lg">
                        <h3 class="text-2xl font-bold mb-2">Nuxt 4.4</h3>
                        <p class="text-slate-300">Framework Vue moderno</p>
                    </div>
                    <div class="bg-slate-900 text-white p-6 rounded-lg">
                        <h3 class="text-2xl font-bold mb-2">Vue 3</h3>
                        <p class="text-slate-300">Composition API</p>
                    </div>
                    <div class="bg-slate-900 text-white p-6 rounded-lg">
                        <h3 class="text-2xl font-bold mb-2">TypeScript</h3>
                        <p class="text-slate-300">Tipado estático</p>
                    </div>
                    <div class="bg-slate-900 text-white p-6 rounded-lg">
                        <h3 class="text-2xl font-bold mb-2">Tailwind CSS</h3>
                        <p class="text-slate-300">Utilidades CSS</p>
                    </div>
                    <div class="bg-slate-900 text-white p-6 rounded-lg">
                        <h3 class="text-2xl font-bold mb-2">Node.js 18+</h3>
                        <p class="text-slate-300">Runtime</p>
                    </div>
                    <div class="bg-slate-900 text-white p-6 rounded-lg">
                        <h3 class="text-2xl font-bold mb-2">Vite</h3>
                        <p class="text-slate-300">Build tool rápido</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
