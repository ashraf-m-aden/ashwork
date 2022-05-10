import VueRouter from 'vue-router';
// Pages
import ITStartup from './components/other-pages/coming-soon/ComingSoon.vue';
// import DCLN from './components/other-pages/features/DataCenterLocalNetwork.vue';
// import ServicesOne from './components/other-pages/services/ServicesOne';
// import SharePoint from './components/other-pages/about/SharePoint';
// import Apropos from './components/other-pages/about/AboutStyleOne.vue';
// import Security from './components/other-pages/about/Security.vue';
import NotFound from './components/other-pages/not-found/NotFound';
// import Contact from './components/other-pages/contact/Contact';

export const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    // { path: '/', component: ITStartup },
    // { path: '/local-network-data-center', component: DCLN },
    // { path: '/votre-profil', component: ServicesOne },
    // { path: '/securite-informatique', component: Security },
    // { path: '/cloud-entreprise', component: SharePoint },
    // { path: '/about', component: Apropos },
    { path: '/not-found', component: NotFound },
    // { path: '/contact', component: Contact },

    { path: '/', component: ITStartup },

    {
      path: '*', redirect: '/not-found'
    }
  ]
});
