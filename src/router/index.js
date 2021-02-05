import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import XTR from '../views/XTR.vue';
import XTRXL from '../views/XTRXL.vue';
import XTRTH from '../views/XTRTH.vue';
import XTC from '../views/XTC.vue';
import CommandCamp from '../views/CommandCamp.vue';
import XSport from '../views/XSport.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/xtr',
    name: 'XTR',
    component: XTR
  },
  {
    path: '/xtr-xl',
    name: 'XTRXL',
    component: XTRXL
  },
  {
    path: '/xtr-th',
    name: 'XTRTH',
    component: XTRTH
  },
  {
    path: '/xtc',
    name: 'XTC',
    component: XTC
  },
  {
    path: '/commandcamp',
    name: 'CommandCamp',
    component: CommandCamp
  },
  {
    path: '/xsport',
    name: 'XSport',
    component: XSport
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
