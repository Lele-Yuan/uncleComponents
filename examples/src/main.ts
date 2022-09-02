import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { JButton } from '@unclejia/components';
// import '@unclejia/components/lib/style.css';
import router from './router';

createApp(App)
    .use(router)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    .use(JButton)
    .mount('#app');
