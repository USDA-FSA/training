import { createRouter, createWebHistory } from 'vue-router';

import { dashboardRoutes } from '@/Dashboard/_routes/dashboard.routes.js';
import { generalRoutes } from '@/General/_routes/general.routes.js';
import { visualStyleRoutes } from '@/Visual-Style/_routes/visual-style.routes.js';
import { uiComponentsRoutes } from '@/UI-Components/_routes/ui-components.routes.js';


const routes = [
  ...dashboardRoutes,
  ...generalRoutes,
  ...visualStyleRoutes,
  ...uiComponentsRoutes,
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
