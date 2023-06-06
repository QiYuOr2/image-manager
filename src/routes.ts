// vue3 router
import { createRouter, createWebHashHistory } from 'vue-router';
import Overview from './views/Overview.vue';
import Folder from './views/Folder.vue';

export const RouteNames = {
  Overview: 'Overview',
  Folder: 'Folder',
};

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: RouteNames.Overview,
      component: Overview,
    },
    {
      path: '/folder',
      name: RouteNames.Folder,
      component: Folder,
    },
  ],
});
