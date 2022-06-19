import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _219ef3d9 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0db63e86 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _382e35ec = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4156ce9e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _94babfc4 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _dac522dc = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _cae2497c = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))

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
    component: _219ef3d9,
    name: "about___fa"
  }, {
    path: "/blog",
    component: _0db63e86,
    name: "blog___fa"
  }, {
    path: "/contact",
    component: _382e35ec,
    name: "contact___fa"
  }, {
    path: "/en",
    component: _4156ce9e,
    name: "index___en"
  }, {
    path: "/gallery",
    component: _94babfc4,
    name: "gallery___fa"
  }, {
    path: "/pricing",
    component: _dac522dc,
    name: "pricing___fa"
  }, {
    path: "/services",
    component: _cae2497c,
    name: "services___fa"
  }, {
    path: "/en/about",
    component: _219ef3d9,
    name: "about___en"
  }, {
    path: "/en/blog",
    component: _0db63e86,
    name: "blog___en"
  }, {
    path: "/en/contact",
    component: _382e35ec,
    name: "contact___en"
  }, {
    path: "/en/gallery",
    component: _94babfc4,
    name: "gallery___en"
  }, {
    path: "/en/pricing",
    component: _dac522dc,
    name: "pricing___en"
  }, {
    path: "/en/services",
    component: _cae2497c,
    name: "services___en"
  }, {
    path: "/",
    component: _4156ce9e,
    name: "index___fa"
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
