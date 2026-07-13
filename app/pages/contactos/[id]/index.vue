<template>
    <div>
        <p>
            Ruta dinámica de contacto, con id: {{ $route.params.id }}
        </p>
        <p>
           En lugar de crear una carpeta con el index.vue (~/pages/contactos/[id]/index.vue), también se podría hacer directamente ~/pages/contactos/[id].vue
        </p>
        <p>
            Si quisieras que el atributo sea dinámico, habría que ponerlo entre dos [[id]]
            ~/pages/contactos/[[id]]/index.vue or ~/pages/contactos/[[id]].vue will match both /contactos and
            /contactos/123, y ya se haría todo en el mismo archivo, pero en este caso, como queremos que sea un contacto
            específico, lo dejamos así.
        </p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>