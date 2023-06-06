import { createApp } from 'vue';
import './styles.css';
import './reset.css';
import { router } from './routes';
import App from './App.vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
