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

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    const handleClickFavorito = () => {

        favoritos.value.push(peliculas.pelicula)

    }
    return {
        favoritos,
        handleClickFavorito
    }
})