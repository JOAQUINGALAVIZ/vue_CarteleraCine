import {ref} from 'vue'
import { defineStore } from "pinia";
import {usePeliculasStore} from './peliculas'

export const useFavoritosStore = defineStore('favoritos', () => {

    const peliculas  = usePeliculasStore()
    const favoritos = ref([])


    const handleClickFavorito = () => {

        favoritos.value.push(peliculas.pelicula)

    }
    return {
        favoritos,
        handleClickFavorito
    }
})