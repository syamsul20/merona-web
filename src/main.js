import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import './assets/sass/custom.scss';
import './assets/css/main.css';

createApp(App).use(router).mount('#app')
