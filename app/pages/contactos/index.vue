<template>
    <div class="py-12 px-4">
        <div class="max-w-6xl mx-auto">
            <!-- Header -->
            <div class="mb-12">
                <h1 class="text-4xl font-bold text-slate-900 mb-2">Listado de Contactos</h1>
                <p class="text-lg text-slate-600">Todos los contactos disponibles en la base de datos</p>
            </div>

            <!-- Loading State -->
            <div v-if="pending" class="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <div class="inline-block animate-spin">
                    <svg class="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                <p class="text-blue-700 mt-3 font-medium">Cargando contactos...</p>
            </div>

            <!-- Error State -->
            <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-6">
                <p class="text-red-700 font-semibold">❌ Error al cargar contactos</p>
                <p class="text-red-600 mt-2">{{ error.message }}</p>
                <p class="text-sm text-red-500 mt-3">Asegúrate de que el servidor está corriendo: <code class="bg-red-100 px-2 py-1 rounded">npm run backend-server</code></p>
            </div>

            <!-- Table View (Desktop) -->
            <div v-if="!pending && !error && contacts?.length" class="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
                <table class="w-full">
                    <thead class="bg-slate-900 text-white">
                        <tr>
                            <th class="px-6 py-4 text-left font-semibold">Nombre</th>
                            <th class="px-6 py-4 text-left font-semibold">Email</th>
                            <th class="px-6 py-4 text-left font-semibold">Teléfono</th>
                            <th class="px-6 py-4 text-left font-semibold">Empresa</th>
                            <th class="px-6 py-4 text-left font-semibold">Edad</th>
                            <th class="px-6 py-4 text-center font-semibold">Acción</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200">
                        <tr 
                            v-for="contact in contacts" 
                            :key="contact.id"
                            class="hover:bg-slate-50 transition-colors"
                        >
                            <td class="px-6 py-4 font-medium text-slate-900">{{ contact.name }}</td>
                            <td class="px-6 py-4 text-slate-600">{{ contact.email }}</td>
                            <td class="px-6 py-4 text-slate-600">{{ contact.phone }}</td>
                            <td class="px-6 py-4 text-slate-600">{{ contact.company }}</td>
                            <td class="px-6 py-4 text-slate-600">{{ contact.age }} años</td>
                            <td class="px-6 py-4 text-center">
                                <NuxtLink 
                                    :to="`/contactos/${contact.id}`"
                                    class="text-blue-500 hover:text-blue-700 font-semibold hover:underline"
                                >
                                    Ver
                                </NuxtLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Card View (Mobile) -->
            <div v-if="!pending && !error && contacts.length" class="md:hidden grid gap-4">
                <div 
                    v-for="contact in contacts" 
                    :key="contact.id"
                    class="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500"
                >
                    <div class="flex items-start justify-between mb-3">
                        <h3 class="text-lg font-bold text-slate-900">{{ contact.name }}</h3>
                        <span class="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                            {{ contact.age }} años
                        </span>
                    </div>
                    <div class="space-y-2 mb-4">
                        <p class="text-sm text-slate-600"><span class="font-semibold">Email:</span> {{ contact.email }}</p>
                        <p class="text-sm text-slate-600"><span class="font-semibold">Teléfono:</span> {{ contact.phone }}</p>
                        <p class="text-sm text-slate-600"><span class="font-semibold">Empresa:</span> {{ contact.company }}</p>
                    </div>
                    <NuxtLink 
                        :to="`/contactos/${contact.id}`"
                        class="inline-block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
                    >
                        Ver Detalles
                    </NuxtLink>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="!pending && !error && !contacts?.length" class="bg-slate-50 border border-slate-200 rounded-lg p-12 text-center">
                <p class="text-slate-700 text-lg font-semibold">No hay contactos disponibles</p>
                <p class="text-slate-600 mt-2">Intenta recargar la página o verifica la conexión al servidor.</p>
            </div>

            <!-- Info Box -->
            <div v-if="!pending && !error" class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p class="text-blue-900 text-sm">
                    <span class="font-semibold">Total de contactos:</span> {{ contacts?.length }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default',
})

const { contacts, pending, error } = useContacts()
</script>