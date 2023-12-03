<script setup>
  import {computed} from 'vue'
  import { RouterLink, useRoute} from 'vue-router'
  import {usePeliculasStore} from '../stores/peliculas'



  const route = useRoute()
  const peliculas = usePeliculasStore()
  const paginaInicio = computed(() => route.name === 'inicio')


  const handleSubmit = () => {
  if (peliculas.busqueda.nombre === '') {
    peliculas.obtenerListas()
    console.log("se ejecuta listas");
  } else {
    peliculas.obtenerPeliculas()
    console.log("se ejecuta peliculas");
  }
}


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

          <nav class="flex gap-4 text-white">
            <RouterLink
              :to="{name: 'inicio'}"
              class="uppercase font-bold"
              active-class="text-orange-500"
            >
              Inicio
            </RouterLink>

            <RouterLink
                :to="{name: 'favoritos'}"
                class="uppercase font-bold"
                active-class="text-orange-500"
            >
              Favoritos
            </RouterLink>
          </nav>
        </div>
        <form
            v-if="paginaInicio"
            class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            @submit.prevent="handleSubmit"
        >
            <div class="space-y-4">
                <label 
                    class="block text-white uppercase font-extrabold text-lg"
                    for="titulo">Busca tu película
                </label>
                <input 
                    id="titulo"
                    type="text"
                    class="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Nombre de tu película"
                    v-model="peliculas.busqueda.nombre"
                >
            </div>

            <div class="space-y-4">
                <label 
                    class="block text-white uppercase font-extrabold text-lg"
                    for="lista">Listas
                </label>
                <select 
                    id="lista"
                    class="p-3 w-full rounded-lg focus:outline-none"
                    v-model="peliculas.busqueda.lista"

                >
                    <option value="">-- Seleccione --</option>
                    <option
                        v-for="lista in peliculas.listas"
                        :key="lista.id"
                        :value="lista.id"
                    >{{lista.name}}</option>
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