console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    response: [],
  },
  computed: {
    ei: this.axiosTemplate(),
  },
  methods: {
    axiosTemplate() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((res) => {
          const response = res.data.response;
          this.response.push(response);
        });
    }
  },
});
