import {ref, reactive, onMounted, computed} from 'vue'
import {defineStore} from  'pinia'
import apiService from '../services/apiService'
import {useModalStore} from './modal'



export const usePeliculasStore = defineStore('peliculas', () => {


    const modal = useModalStore()
    const listas = ref([])
    const busqueda = reactive({
        nombre: '',
        lista: ''
    })

    const pelicula = ref({})

    onMounted(async function (){
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

    })


    const peliculas = ref([])
    async function obtenerListas(){

        const {data: {results}} = await apiService.obtenerListas(busqueda)
        peliculas.value = results

    }


    async function obtenerPeliculas(){
        const {data: {results}} = await apiService.buscarPeliculas(busqueda)
        console.log(busqueda.nombre);
        console.log(results)
        peliculas.value = results
    }

    async function seleccionarPeliculas(id){
        const data = await apiService.buscarPelicula(id)
        pelicula.value = data.data

        modal.handleClickModal()
    }

    const noPeliculas = computed(() => peliculas.value.length === 0)

    return {
        listas,
        busqueda,
        obtenerListas,
        obtenerPeliculas,
        peliculas,
        seleccionarPeliculas,
        pelicula,
        noPeliculas
    }
})