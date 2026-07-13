<template>
    <header class="bg-slate-800 border-b-4 border-blue-500 shadow-md">
        <nav class="mx-auto flex items-center justify-center gap-8 p-6">
            <nuxt-link to="/contactos" class="text-white font-semibold hover:text-blue-300 transition-colors">Contactos</nuxt-link>
            <nuxt-link to="/contactos/contacto" class="text-white font-semibold hover:text-blue-300 transition-colors">Contacto</nuxt-link>
            <nuxt-link to="/contactos/abcd" class="text-white font-semibold hover:text-blue-300 transition-colors">Contacto id no válido</nuxt-link>
            <div class="flex items-center gap-2 bg-slate-700 rounded-lg px-3 py-2">
                <nuxt-link :to="link" class="text-white font-semibold hover:text-blue-300 transition-colors"> Contacto parámetro: </nuxt-link>
                <input v-model="idParametro" type="number" class="bg-slate-600 border border-slate-500 rounded px-2 py-1 w-20 text-white placeholder-slate-400" />
                <button @click="router.push(link)" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-3 py-1 transition-colors"> Ir </button>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
    const router = useRouter()
    const idParametro = ref(123)
    const link = computed(() => `/contactos/${idParametro.value}`)
</script>