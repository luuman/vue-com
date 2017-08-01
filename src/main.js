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

router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('global beforeResolve')
  next()
})

router.afterEach((to, from, next) => {
  console.log('global afterEach')
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
