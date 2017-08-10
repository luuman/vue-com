// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('!!script-loader!ASSET/fonts/iconfont')
import Vue from 'vue'
import App from './App'
import router from './routes'
import 'UTIL/flexible'
// import 'UTIL/rem'

// import Alert from 'COMPONENT/alert'
// Vue.component('my-alert', Alert)

import SVG from 'COMPONENT/svg'
Vue.component('v-svg', SVG)

// import FastClick from 'fastclick'
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body)
//   }, false)
// }

// console.time('执行时间')
// console.timeEnd('执行时间')

import VueLazyload from 'vue-lazyload'
import loading from 'ASSET/img/lazy/loading.png'
import error from 'ASSET/img/lazy/error.png'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: loading,
  loading: error,
  // listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend'],
  attempt: 1
})

import Alert from 'COMPONENT/vue-alerts'
Vue.use(Alert)

import Loading from 'COMPONENT/vue-loading'
Vue.prototype.$Loading = Loading
Vue.use(Loading)

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// import VueScroller from 'vue-scroller'
// Vue.use(VueScroller)

// import vueTap from 'v-tap'
// Vue.use(vueTap)

// import Alert from 'vue-alerts'
// Vue.use(Alert)

// import progressive from 'progressive-image/dist/vue'
// Vue.use(progressive, {
//   removePreview: true
// })
// Vue.config.productionTip = false

// import store from 'VUEX/store'

console.log('[process.env.NODE_ENV]' + process.env.NODE_ENV)

router.beforeEach((to, from, next) => {
  // console.log('global beforeEach')
  next()
})
// bug
// router.beforeResolve((to, from, next) => {
//   console.log('global beforeResolve')
//   next()
// })

import {setDocumentTitle} from 'UTIL/common'
router.afterEach((to, from, next) => {
  setDocumentTitle(to.meta.title)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: {
    // Alert,
    App
  }
})
