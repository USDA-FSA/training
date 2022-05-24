import { createRouter, createWebHistory } from 'vue-router';

import { dashboardRoutes } from '@/Dashboard/_routes/dashboard.routes.js';
import { visualStyleRoutes } from '@/Visual-Style/_routes/visual-style.routes.js';


const routes = [
  ...dashboardRoutes,
  ...visualStyleRoutes,
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
