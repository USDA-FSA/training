
import { createStore } from 'vuex';

import { navigation } from '@/Shared/_store/navigation.module.js';
import { videos } from '@/Shared/_store/videos.module.js';
import { alerts } from '@/Shared/_store/alerts.module.js';

export const store = createStore({
  modules: {
    navigation: navigation,
    videos: videos,
    alerts: alerts
  }
});