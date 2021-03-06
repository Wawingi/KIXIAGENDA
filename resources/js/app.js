
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap'

import axios from 'axios'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    router,
    render: h=>h(App)
});