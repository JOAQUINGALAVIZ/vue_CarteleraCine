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

    function existeFavorito(){
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritosLocalStorage.some(favorito => favorito.id === peliculas.pelicula.id )
    }

    function eliminarFavorito() {
        favoritos.value = favoritos.value.filter( favorito => favorito.id !== peliculas.pelicula.id )
    }

    function agregarFavorito() {
        favoritos.value.push(peliculas.pelicula)
    }

    function handleClickFavorito() {
        if(existeFavorito()){
            eliminarFavorito()
        }
        else{
            agregarFavorito()
        }
    }

    return {
        favoritos,
        handleClickFavorito,
        existeFavorito
    }
})