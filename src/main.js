// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import { sync } from 'vuex-router-sync';

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl';

import router from './router';
import store from './store/index';

sync(store, router);

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');
