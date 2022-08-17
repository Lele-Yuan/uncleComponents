import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import UncleComponent from '@unclejia/components';
import router from './router';

createApp(App).use(router).use(UncleComponent).mount('#app');
