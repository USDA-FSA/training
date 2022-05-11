import { createApp } from 'vue';
import App from '@/App.vue'
const app = createApp(App);

import { store } from '@/_store/store';
app.use(store);

import { router } from '@/_router/routes';
app.use(router);

// BEFORE REMOVED - using vite.config.js to load in FSA-Style
// Import FSA Style here to allow for font, image, and CSS assets
//import 'fsa-style/src/stylesheets/fsa-style.scss';
//import 'fsa-style';
// uncomment below if importing individual components
//import { fsaModal } from 'fsa-style';

app.mount('#app');
