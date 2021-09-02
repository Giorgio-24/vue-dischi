console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    response: [],
    getYear: [],
    orderedResponse: [],
  },
  computed: {
  },
  methods: {
    orderAlbumsByYear() {
      this.response.forEach(element => {
        this.orderedResponse.push(element)
        this.orderedResponse.sort(function (a, b) { return a.year - b.year });
      });
    },



    axiosTemplate() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((res) => {
          const response = res.data.response;
          console.log(response);
          this.response = response;
          this.orderAlbumsByYear();
        });
    }
  },
  created() {
    this.axiosTemplate();

  },
  mounted() {

  },
});
