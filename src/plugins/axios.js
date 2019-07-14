import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
const baseURL = 'https://fryosstudios.com/our/visitclients/Backend/public/index.php';
axios.defaults.baseURL = baseURL;
Vue.use(VueAxios, axios);
