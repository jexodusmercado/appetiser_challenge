require('./bootstrap');

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './routes';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from  './App.vue';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: {
        App
    }
});