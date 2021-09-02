console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    response: [],
  },
  methods: {
    axiosTemplate() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((res) => {
          const response = res.data.response;
          console.log(response);
          this.response = response;
        });
    }
  },
  created() {
    this.axiosTemplate();
  },
});
