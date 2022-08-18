
export const videoRoutes = [
  { 
    path: '/video/:id',
    component: () => import('@/Video/_views/Video.vue'),
    props: true
  }
]