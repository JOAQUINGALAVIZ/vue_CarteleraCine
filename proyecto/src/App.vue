<template>
  <div>
    <header class="header">
      <div class="menu container">
        <h1>Cinepark 2.0</h1>
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
        <li><a href="https://www.facebook.com/"><img src="./img/facebook.png" width="75" height="75" alt="facebook"></a></li>
        <li><a href="https://twitter.com/"><img src="./img/twitter.png" width="75" height="75" alt="twitter"></a></li>
        <li><a href="https://www.youtube.com/"><img src="./img/youtube.png" width="75" height="75" alt="youtube"></a></li>
        <li><a href="https://www.instagram.com/"><img src="./img/instagram.png" width="75" height="75" alt="instagram"></a></li>
      </ul>
    </div>

    <footer>
      <p class="pie">CinePark -- Todos los derechos reservados.</p>
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
          poster: "https://peliculas.pub/img/uYbqRYPsHmWZFvaNJtP4FTV1Rzj6Hvo43vLoRmDdFvasFwe13wW4Hwo43vLoRmWfHUcEJp6URNJxbtoPHoWcX2WcXpECFzIPJvJqHG56PaWIcDWAHTZ8J8.jpg"
        },
        {
          title: "AVATAR",
          poster: "https://image.tmdb.org/t/p/original/yqayiDD4OFQkpDzny6NEDD1I3up.jpg"
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
          poster: "https://th.bing.com/th/id/R.6f486255a9a8be08601bc52a24782e3a?rik=ij5Q40%2b3aikENw&riu=http%3a%2f%2fwww.followingthenerd.com%2fsite%2fwp-content%2fuploads%2f2022%2f12%2ffollowing-the-nerd-dungeons-and-dragons-691x1024.jpg&ehk=XJQZD1yiVvW8fFhciFnTF13KbaHYxJWFElCgiwtyN2k%3d&risl=&pid=ImgRaw&r=0"
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











<style>

.app {
  background-color: rgb(0, 0, 0);
  font-family: 'Times New Roman', Times, serif;
  color: rgb(255, 255, 255);
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  text-align: center;
}

.pie {
  display: inline-block;
  background-color: #8b0303;
  color: rgb(251, 255, 0);
  padding: 20px 20px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
}

.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header {
  background-color: rgb(0, 0, 0);
  text-align: center;
  line-height: 80px;
  color: rgb(0, 0, 0);
  border-bottom: 3px dashed black;
}

.menu-icono {
  display: none;
  cursor: pointer;
}

.navbar ul {
  list-style: none;
  margin: 1;
  padding: 1;
}

.estrenos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cartelera img {
  width: 200px;
  transition: transform 0.5s;
  transform-origin: center;
}

.cartelera:hover img {
  transform: rotateY(360deg);
}

.social {
  display: grid;
  grid-template-columns: auto;
}

.redes {
  display: flex;
  gap: 18rem;
}

.redes li {
  text-decoration: none;
  list-style: none;
}


h1 {
  font-size: calc(20px + 4vh);
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #fff6a9;
  font-family: "Sacramento", cursive;
  text-align: center;
  animation: blink 1s infinite;
  -webkit-animation: blink 1s infinite;
}

a {
  font-size: calc(10px + 2vh);
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #fff6a9;
  font-family: "Sacramento", cursive;
  text-align: center;
  animation: blink 1s infinite;
  -webkit-animation: blink 1s infinite;
}




</style>