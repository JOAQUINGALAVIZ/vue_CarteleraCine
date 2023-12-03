<script setup>
import { defineProps } from 'vue';
import {useModalStore} from "@/stores/modal";
import {usePeliculasStore} from '../stores/peliculas'

const modal = useModalStore()
const peliculas = usePeliculasStore()

defineProps(['pelicula']);

const getPosterURL = (posterPath) => {
  const baseURL = "https://image.tmdb.org/t/p/";
  return posterPath ? baseURL + "w500" + posterPath : null;
};
</script>

<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
      <img
          class="hover:scale-125 transition-transform hover:rotate-2"
          :src="getPosterURL(pelicula.poster_path)"
          :alt="'Poster de ' + pelicula.title"
      />
    </div>

    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">{{ pelicula.title }}</h2>
      <button
        type="button"
        class="bg-red-700 mt-5 w-full p-3 font-bold text-white text-lg hover:bg-red-900"
        @click="peliculas.seleccionarPeliculas(pelicula.id)"
      >
        Ver Sipnosis
      </button>
    </div>
  </div>
</template>


