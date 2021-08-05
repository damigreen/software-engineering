import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _300fcf1c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _7e1e6118 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _587b3cdc = () => interopDefault(import('..\\pages\\dashboard\\admin\\index.vue' /* webpackChunkName: "pages/dashboard/admin/index" */))
const _7317e74e = () => interopDefault(import('..\\pages\\people\\users\\details\\index.vue' /* webpackChunkName: "pages/people/users/details/index" */))
const _719bf3c1 = () => interopDefault(import('..\\pages\\people\\users\\settings\\index.vue' /* webpackChunkName: "pages/people/users/settings/index" */))
const _07aff337 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _300fcf1c,
    name: "about"
  }, {
    path: "/profile",
    component: _7e1e6118,
    name: "profile"
  }, {
    path: "/dashboard/admin",
    component: _587b3cdc,
    name: "dashboard-admin"
  }, {
    path: "/people/users/details",
    component: _7317e74e,
    name: "people-users-details"
  }, {
    path: "/people/users/settings",
    component: _719bf3c1,
    name: "people-users-settings"
  }, {
    path: "/",
    component: _07aff337,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
