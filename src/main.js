import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import './assets/sass/custom.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Spinner from 'vue-spinkit';
import VueI18n from 'vue-i18n';
import lang from './lang.json';
import router from './router.js';

Vue.config.productionTip = false

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Spinner', Spinner)
Vue.use(BootstrapVue);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'fr',
  messages: lang
});

new Vue({
  router,
  render: h => h(App),
  i18n,
}).$mount('#app')
