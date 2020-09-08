import Vue from 'vue';
import App from './App.vue';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import i18n from './i18n'


Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

