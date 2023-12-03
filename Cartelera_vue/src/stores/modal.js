import {ref, computed } from 'vue'
import {defineStore} from 'pinia'
import {useFavoritosStore} from './favoritos'
import {usePeliculasStore} from './peliculas'

export const useModalStore = defineStore('modal', () => {
    
    const favoritos = useFavoritosStore();
    const peliculas = usePeliculasStore();
    const modal = ref(false)

    function handleClickModal(){
        modal.value = !modal.value
    }

    const textoBoton = computed (() => {
        return favoritos.existeFavorito(peliculas.pelicula.id) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'
    })

    return{
        modal,
        handleClickModal,
        textoBoton
    }
})