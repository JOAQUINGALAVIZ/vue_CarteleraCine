import {ref} from 'vue'
import {defineStore} from  'pinia'

export const usePeliculasStore = defineStore('peliculas', () => {

    const generos = ref([])

    return {
        generos
    }
})