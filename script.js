console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albumsGenres: [],
    orderedResponse: [],
    selectedGenre: 'All',
  },
  computed: {
    showAlbumsByGenre();
  },
  methods: {
    orderAlbumsByYear(response) {
      response.forEach(element => {
        this.orderedResponse.push(element)
        this.orderedResponse.sort(function (a, b) { return a.year - b.year });
      });
    },
    getAlbumsGenre(response) {
      response.forEach(element => {
        if (!this.albumsGenres.includes(element.genre)) {
          this.albumsGenres.push(element.genre);
        };
      });
    },
    showAlbumsByGenre() {

    },



    axiosTemplate() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((res) => {
          const response = res.data.response;
          console.log(response);
          this.getAlbumsGenre(response);
          this.orderAlbumsByYear(response);
        });
    }
  },
  created() {
    this.axiosTemplate();

  },
  mounted() {

  },
});
