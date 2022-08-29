import { createRouter, createWebHistory } from 'vue-router';

import { dashboardRoutes } from '@/Dashboard/_routes/dashboard.routes.js';
import { videoRoutes } from '@/Video/_routes/video.routes.js';
import { searchRoutes } from '@/Search/_routes/search.routes.js';


const routes = [
  ...dashboardRoutes,
  ...videoRoutes,
  ...searchRoutes,
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/Shared/_views/NotFound.vue')
  }
];

export const router = createRouter({
  history: createWebHistory('/training/'), // base directory option now here createWebHistory('/base-directory/'),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
