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
    {
        path: '/gallery',
        name: 'GalleryView',
        meta: {
            title: 'Gallery'
        },
        component: () => import('../views/Gallery.vue'),
    },
    {
        path: '/contact',
        name: 'ContactView',
        meta: {
            title: 'Contact'
        },
        component: () => import('../views/Contact.vue'),
    },
    {
        path: '/restoration',
        name: 'RestorationView',
        meta: {
            title: 'Restoration'
        },
        component: () => import('../views/Restoration.vue'),
    },
  ];