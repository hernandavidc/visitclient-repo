import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from '../router';

const baseURL = 'https://fryosstudios.com/our/visitclients/Backend/public/index.php';
axios.defaults.baseURL = baseURL;

// Add a 401 response interceptor

axios.interceptors.response.use(function (response) {
    if(response.data.error && response.data.error.text == "Unauthorized Session") {
        router.push('/logout')
     }
    return response;
}, function (error) {
    if (401 === error.response.status) {
        return Promise.reject(new Error(response.data.error.text))
    } else {
        return Promise.reject(new Error(response.data.error.text));
    }
});

Vue.use(VueAxios, axios);
