import { createRouter, createWebHistory } from 'vue-router';

import { sharedRoutes } from './shared.routes';


const routes = [
  ...sharedRoutes,
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue')
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
