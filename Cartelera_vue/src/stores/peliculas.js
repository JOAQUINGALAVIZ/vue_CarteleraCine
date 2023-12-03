import {ref, reactive, onMounted} from 'vue'
import {defineStore} from  'pinia'
import apiService from '../services/apiService'


export const usePeliculasStore = defineStore('peliculas', () => {

    let currentPage = 1;
    function setCurrentPage(newPage){
        currentPage = newPage;
    }

    const listas = ref([])
    const busqueda = reactive({
        nombre: '',
        lista: ''
    })

    onMounted(async function (){
        // const {data: {genres}} = await apiService.obtenerGeneros()
        listas.value = [
            {
                name: 'Vistas Actualmente',
                id: 'now_playing'
            },

            {
                name: 'Populares en Cinepark',
                id: 'popular'
            },

            {
                name: 'Mejores calificadas',
                id: 'top_rated'
            },

            {
                name: 'Proximos Lanzamientos',
                id: 'upcoming'
            }

        ]
        // const lista = document.getElementById('lista');
        // const data = await apiService.obtenerListas(lista.option.value, currentPage)
        // console.log(data);


        // generos.value = genres
    })


    const peliculas = ref([])
    async function obtenerListas(){

        const {data: {results}} = await apiService.obtenerListas(busqueda)
        peliculas.value = results
        console.log(currentPage);

    }



    async function obtenerPeliculas(){
        const {data: {results}} = await apiService.buscarPeliculas(busqueda)
        console.log(results)
        peliculas.value = results
    }

    return {
        currentPage,
        setCurrentPage,
        listas,
        busqueda,
        obtenerListas,
        obtenerPeliculas,
        peliculas
    }
})