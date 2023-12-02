<script setup>
    defineProps({
        pelicula: {
            type: Object
        }
    })
</script>

<template>
    <div>
        <h2>{{ pelicula.title }}</h2>
    </div>
</template>


