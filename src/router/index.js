import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'

Vue.use(Router)
const router = new Router({
  base: '/',
  mode: 'hash',
  linkActiveClass: 'active',
  routes: routers
})
export default router
