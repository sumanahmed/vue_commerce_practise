import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {router} from './router'
import store from './store/index'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
Vue.use(VueRouter);

export default router;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
