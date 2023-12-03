import api from '../lib/axios';
import {usePeliculasStore} from "@/stores/peliculas";

export default {
    obtenerListas({lista}){

        
        return api(`/movie/${lista}?language=es`)
    },
    buscarPeliculas({nombre}){
        console.log(nombre);
        return api(`/search/movie?query=${nombre}`)
    } 
}

