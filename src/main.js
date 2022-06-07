import { createApp } from 'vue';
import UIComponents from '@/components/UI';
import App from './App.vue';
import store from './store';
// import '@/assets/styles/styles.scss';

const app = createApp(App);

UIComponents.forEach((component) => {
  app.component(component.name, component);
});

app
  .use(store)
  .mount('#app');
