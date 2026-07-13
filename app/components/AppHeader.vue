<template>
    <header>
        <nav class="mx-auto flex items-center gap-6 p-6">
            <nuxt-link to="/contactos">Contactos</nuxt-link>
            <nuxt-link to="/contactos/contacto">Contacto</nuxt-link>
            <div>
                <span>Contacto parámetro: </span>
                <input v-model="idParametro" type="number" class="border border-gray-300 rounded px-2 py-1 w-20 ml-2" />
                <nuxt-link :to="link" class="border border-gray-300 rounded px-2 py-1 w-20 ml-2"> Ir </nuxt-link>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
    const idParametro = ref(123)
    const link = computed(() => `/contactos/${idParametro.value}`)
</script>