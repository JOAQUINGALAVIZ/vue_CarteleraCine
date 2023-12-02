<script setup>
  import {computed} from 'vue'
  import { RouterLink, useRoute} from 'vue-router'
  import {usePeliculasStore} from '../stores/peliculas'


  const route = useRoute()
  const peliculas = usePeliculasStore()
  const paginaInicio = computed(() => route.name === 'inicio')

</script>


<template>
<header  
  class="bg-slate-800"
  :class="{header : paginaInicio}"
>
    <div class="mx-auto container px-5 py-16">
        <div class="flex justify-between items-center">
          <div>
            <RouterLink
                :to="{name: 'inicio'}"
            >
              <img class="w-32" src="/img/logo.png" alt="logotipo" />
            </RouterLink>
          </div>

          <nav class="flex gap-4">
            <RouterLink
              :to="{name: 'inicio'}"
              class="text-white uppercase font-bold"
              active-class="text-yellow-500"
            >
              Inicio
            </RouterLink>

            <RouterLink
                :to="{name: 'favoritos'}"
                class="text-white uppercase font-bold"
                active-class="text-yellow-500"
            >
              Favoritos
            </RouterLink>
          </nav>
        </div>
        <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
          v-if="paginaInicio"
        >
            <div class="space-y-4">
                <label 
                    class="block text-white uppercase font-extrabold text-lg"
                    for="titulo">Busca tu pélicula
                </label>
                <input 
                    id="titulo"
                    type="text"
                    class="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Nombre de tu pélicula"
                    v-model="peliculas.busqueda.nombre"
                >
            </div>

            <div class="space-y-4">
                <label 
                    class="block text-white uppercase font-extrabold text-lg"
                    for="genero">Géneros
                </label>
                <select 
                    id="genero"
                    class="p-3 w-full rounded-lg focus:outline-none"
                    v-model="peliculas.busqueda.genero"

                >
                    <option value="">-- Seleccione --</option>
                    <option
                        v-for="genero in peliculas.generos"
                        :key="genero.name"
                        :value="genero.name"
                    >{{genero.name}}</option>
                </select>
            </div>

            <input 
                type="submit"
                class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
                value="Buscar"
            />
        </form>
    </div>
</header>
</template>

<style>
  .header {
    background-image: url('/img/fondo_cine.png');
    background-size: cover;
    background-position: center;
    }
</style>