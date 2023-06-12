// vue3 router
import { createRouter, createWebHashHistory } from 'vue-router';
import Overview from './views/Overview.vue';
import Folder from './views/Folder.vue';
import ImageViewer from './views/ImageViewer.vue';

export const RouteNames = {
  Overview: 'Overview',
  Folder: 'Folder',
  ImageViewer: 'ImageViewer',
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
    {
      path: '/image-viewer',
      name: RouteNames.ImageViewer,
      component: ImageViewer,
    },
  ],
});
