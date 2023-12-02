import {ref, onMounted} from 'vue'
import {defineStore} from  'pinia'
import axios from 'axios';
import options from "@/stores/apiService";

export const usePeliculasStore = defineStore('peliculas', () => {

    const generos = ref([])

    onMounted(async () => {
        const {data: {genres}} = await axios('https://api.themoviedb.org/3/genre/movie/list', options)

        generos.value = genres
    })

    return {
        generos
    }
})