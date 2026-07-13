<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow-2xl p-8 text-center">
      <div class="mb-6">
        <h1 class="text-6xl font-bold text-red-600 mb-4">{{ error.status }}</h1>
        <div class="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
      </div>
      
      <p class="text-gray-700 text-lg font-medium mb-2">{{ error.message }}</p>
      <p class="text-gray-500 text-sm mb-8">Algo salió mal. Regresa y vuelve a intentarlo.</p>
      
      <NuxtLink 
        to="/" 
        class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        ← Volver al Inicio
      </NuxtLink>
    </div>
  </div>
</template>