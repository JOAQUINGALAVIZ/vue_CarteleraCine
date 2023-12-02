import {ref, reactive, onMounted} from 'vue'
import {defineStore} from  'pinia'
import axios from 'axios';
import options from "@/stores/apiService";

export const usePeliculasStore = defineStore('peliculas', () => {

    const generos = ref([])
    const busqueda = reactive({
        nombre: '',
        genero: ''
    })

    onMounted(async function(){
        const {data: {genres}} = await axios('https://api.themoviedb.org/3/genre/movie/list', options)

        generos.value = genres
    })

    function obtenerPeliculas(){
        console.log('Consultando API...');
    }

    return {
        generos,
        busqueda,
        obtenerPeliculas
    }
})