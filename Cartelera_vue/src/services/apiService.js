import api from '../lib/axios';

export default {
    obtenerGeneros(){
        return api('/genre/movie/list')
    }
}

