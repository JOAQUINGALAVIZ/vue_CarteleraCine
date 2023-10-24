<template>
  <div>
    <header class="header">
      <div class="menu container">
        <h1>Cinepark 29.0</h1>
        <label for="menu">
          <img src="" class="menu-icono" alt="menu">
        </label>
        <nav class="navbar">
          <ul>
            <router-link to="/Nosotros">Nosotros</router-link>
          </ul>
        </nav>
        <ul>
          <router-link to="/login" class="btn-1">Login</router-link>
        </ul>
      </div>
    </header>

    <section class="estrenos">
      <div v-for="(movie, index) in movies" :key="index" class="peliculas">
        <router-link :to="'/pelicula' + (index + 1)">
          <img :src="movie.poster" :alt="movie.title" :title="movie.title" width="250" height="400" />
        </router-link>
        <h3>{{ movie.title }}</h3>
      </div>
    </section>

    <div class="social">
      <h2>Síguenos en nuestras redes sociales</h2>
      <ul class="redes">
        <li><a href="https://www.facebook.com/"><img src="Imagenes_sociales/facebook.png" width="75" height="75"></a></li>
        <li><a href="https://twitter.com/"><img src="Imagenes_sociales/twitter.png" width="75" height="75"></a></li>
        <li><a href="https://www.youtube.com/"><img src="Imagenes_sociales/youtube.png" width="75" height="75"></a></li>
        <li><a href="https://www.instagram.com/"><img src="Imagenes_sociales/instagram.png" width="75" height="75"></a></li>
      </ul>
    </div>

    <footer>
      <ul class="pie">
        <p>CinePark -- Todos los derechos reservados.</p>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          title: "JUSTICIERO",
          poster: "https://statics.cinemex.com/movie_posters/UxB4QhUZzWWfswb-750x1125.jpg"
        },
        {
          title: "POKEMON LA PELICULA",
          poster: "https://www.ecartelera.com/carteles/5200/5220/004_m.jpg"
        },
        {
          title: "LA LANGOSTA",
          poster: "https://pics.filmaffinity.com/the_lobster-643891588-large.jpg"
        },
        {
          title: "AVATAR",
          poster: "https://pics.filmaffinity.com/avatar_the_way_of_water-722646748-large.jpg"
        },
        {
          title: "BARBIE",
          poster: "https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
        },
        {
          title: "MISIÓN IMPOSIBLE",
          poster: "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg"
        },
        {
          title: "DUNGEONS OF DRAGON",
          poster: "https://m.media-amazon.com/images/M/MV5BZWM5MTQ3NDMtNGFiMS00Y2E5LWE2ZTUtN73M5MTcyZjM3ODRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
        },
        {
          title: "CARS",
          poster: "https://th.bing.com/th/id/OIP.f_toCHd7gRF8RjWmevSZfAHaKz?pid=ImgDet&rs=1"
        }
      ]
    };
  }
};
</script>

