import api from '../lib/axios';
import {usePeliculasStore} from "@/stores/peliculas";

export default {
    obtenerListas({lista}){

        let peliculas = usePeliculasStore();
        return api(`/movie/${lista}?language=es&page=${peliculas.currentPage}`)
    },
    buscarPeliculas({nombre}){
        return api(`/discover/movie?query=${nombre}`)
    } 
}

