import {ref, reactive, onMounted} from 'vue'
import {defineStore} from  'pinia'
import apiService from '../services/apiService'



export const usePeliculasStore = defineStore('peliculas', () => {

    const generos = ref([])
    const busqueda = reactive({
        nombre: '',
        genero: ''
    })

    onMounted(async function(){
        const {data: {genres}} = await apiService.obtenerGeneros()


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