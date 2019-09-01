import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Loan from './views/Loan.vue';
import Settings from './views/Settings.vue';
import NotFound from './views/NotFound.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    //  beforeEnter: requireAuth,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      //beforeEnter: requireAuth,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      //beforeEnter: requireAuth,
    },
    {
      path: '/loan',
      name: 'loan',
      component: Loan,
      //beforeEnter: requireAuth,
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
