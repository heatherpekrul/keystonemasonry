import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';

const vueApp = createApp(App);

vueApp.use(Router);

vueApp.mount('#app');
