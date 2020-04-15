import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _838a8698 = () => interopDefault(import('../pages/list/index.vue' /* webpackChunkName: "pages/list/index" */))
const _8d2c08c8 = () => interopDefault(import('../pages/map/index.vue' /* webpackChunkName: "pages/map/index" */))
const _6af85c1c = () => interopDefault(import('../pages/list/_id.vue' /* webpackChunkName: "pages/list/_id" */))
const _de9121e2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/list",
    component: _838a8698,
    name: "list"
  }, {
    path: "/map",
    component: _8d2c08c8,
    name: "map"
  }, {
    path: "/list/:id",
    component: _6af85c1c,
    name: "list-id"
  }, {
    path: "/",
    component: _de9121e2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
