import {ref, watch, onMounted, computed } from 'vue'
import { defineStore } from "pinia";
import {usePeliculasStore} from './peliculas'
import {useModalStore} from './modal'
import {useNotificacionStore} from './notificaciones'

export const useFavoritosStore = defineStore('favoritos', () => {

    const peliculas  = usePeliculasStore()
    const modal  = useModalStore()
    const notificaciones = useNotificacionStore()

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

        notificaciones.mostrar = true
        notificaciones.texto = 'Se agregó a favoritos'


        setTimeout(() => {
           notificaciones.$reset() 
        }, 3000)
    }

    function handleClickFavorito() {
        if(existeFavorito()){
            eliminarFavorito()
        }
        else{
            agregarFavorito()
        }
        modal.modal = false
    }

    const noFavoritos = computed(() => favoritos.value.length === 0)

    return {
        favoritos,
        handleClickFavorito,
        existeFavorito,
        noFavoritos
    }
})