export default [
    {
        path: '/',
        name: 'HomeView',
        meta: {
            title: 'Home'
        },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/about',
        name: 'AboutView',
        meta: {
            title: 'About'
        },
        component: () => import('../views/About.vue'),
    },
  ];