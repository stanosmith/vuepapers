import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import store from '../store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        store.dispatch('getSpace');
        store.dispatch('getEntries');
        next();
      },
    },
  ],
});
