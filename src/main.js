import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from "./route.js"

Vue.use(VueRouter);

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
  mode : 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
