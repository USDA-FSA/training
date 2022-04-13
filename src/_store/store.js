
import { createStore } from 'vuex';

import { navigation } from './navigation.module.js';
import { alerts } from './alerts.module.js';

export const store = createStore({
  modules: {
    navigation: navigation,
    alerts: alerts
  }
});