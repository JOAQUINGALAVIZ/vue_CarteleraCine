import {ref, watch, onMounted} from 'vue'
import { defineStore } from "pinia";
import {usePeliculasStore} from './peliculas'

export const useFavoritosStore = defineStore('favoritos', () => {

    const peliculas  = usePeliculasStore()
    const favoritos = ref([])

    onMounted(() => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, {
        deep: true
    })

    function sincronizarLocalStorage() {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    // function existeFavorito(id){
    //     const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
    //     return favoritosLocalStorage.some(favorito => favorito.pelicula.id === id )
    // }

    function handleClickFavorito() {
        // if(existeFavorito(peliculas.pelicula.pelicula.id)){
        //     console.log('Ya Existe...')
        // }
        // else{
        //     favoritos.value.push(peliculas.pelicula)
        // }
        favoritos.value.push(peliculas.pelicula)
    }

    return {
        favoritos,
        handleClickFavorito
    }
})