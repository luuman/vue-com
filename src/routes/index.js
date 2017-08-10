import Vue from 'vue'
import Router from 'vue-router'

// import Demo from 'VIEW/demo'
// import Alert from 'VIEW/alert'
// import Button from 'VIEW/button'
// import Login from 'VIEW/login'
// import Head from 'VIEW/head'
// import Swiper from 'VIEW/swiper'

const Demo = r => require.ensure([], () => r(require('VIEW/demo')), 'demo')
const Alert = r => require.ensure([], () => r(require('VIEW/alert')), 'alert')
const Button = r => require.ensure([], () => r(require('VIEW/button')), 'button')
const Login = r => require.ensure([], () => r(require('VIEW/login')), 'login')
const Head = r => require.ensure([], () => r(require('VIEW/head')), 'head')
const Swiper = r => require.ensure([], () => r(require('VIEW/swiper')), 'swiper')
const VueAlert = r => require.ensure([], () => r(require('VIEW/vue-alert')), 'alert')
const Loading = r => require.ensure([], () => r(require('VIEW/loading')), 'loading')
const Previewer = r => require.ensure([], () => r(require('VIEW/previewer')), 'loading')
const Scroller = r => require.ensure([], () => r(require('VIEW/scroller')), 'Scroller')
const Scroll = r => require.ensure([], () => r(require('VIEW/scroll')), 'Scroll')
const ScrollerInfo = r => require.ensure([], () => r(require('VIEW/scroller/info')), 'Scroller')
const KeepAlive = r => require.ensure([], () => r(require('VIEW/keep-alive')), 'Scroller')
const Util = r => require.ensure([], () => r(require('VIEW/utils')), 'Util')
const HtmlCanvas = r => require.ensure([], () => r(require('VIEW/html-canvas')), 'HtmlCanvas')
const Clipboard = r => require.ensure([], () => r(require('VIEW/clipboard')), 'Clipboard')

const VueCrop = r => require.ensure([], () => r(require('VIEW/vue-crop')), 'VueCrop')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      // keepAlive: true,
      // beforeEnter (to, from, next) {
      //   console.log('router beforeEnter')
      //   next()
      // },
      meta: {
        title: '首页'
      },
      component: Demo
    },
    {
      path: '/Alert',
      name: 'Alert',
      meta: {
        title: '弹窗'
      },
      component: Alert
    },
    {
      path: '/VueAlert',
      name: 'VueAlert',
      meta: {
        title: '弹窗'
      },
      component: VueAlert
    },
    {
      path: '/Loading',
      name: 'Loading',
      meta: {
        title: 'Loading'
      },
      component: Loading
    },
    {
      path: '/Clipboard',
      name: 'Clipboard',
      meta: {
        title: '复制'
      },
      component: Clipboard
    },
    {
      path: '/HtmlCanvas',
      name: 'HtmlCanvas',
      meta: {
        title: '图片生成器'
      },
      component: HtmlCanvas
    },
    {
      path: '/Previewer',
      name: 'Previewer',
      meta: {
        title: '图片查看'
      },
      component: Previewer
    },
    {
      path: '/Button',
      name: 'Button',
      meta: {
        title: ''
      },
      component: Button
    },
    {
      path: '/Login',
      name: 'Login',
      meta: {
        title: ''
      },
      component: Login
    },
    {
      path: '/VueCrop',
      name: 'VueCrop',
      meta: {
        title: '头像上传'
      },
      component: VueCrop
    },
    {
      path: '/Head',
      name: 'Head',
      meta: {
        title: ''
      },
      component: Head
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      meta: {
        title: '轮播图'
      },
      component: Swiper
    },
    {
      path: '/KeepAlive',
      name: 'KeepAlive',
      meta: {
        title: '缓存'
      },
      component: KeepAlive
    },
    {
      path: '/Util',
      name: 'Util',
      meta: {
        title: '工具'
      },
      component: Util
    },
    {
      path: '/Scroll',
      name: 'Scroll',
      meta: {
        title: 'TOP'
      },
      component: Scroll
    },
    {
      path: '/Scroller/:username',
      name: 'Scroller',
      meta: {
        title: '数据加载'
      },
      component: ScrollerInfo
    },
    {
      path: '/Scroller',
      name: 'Scroller',
      meta: {
        title: ''
      },
      component: Scroller
    }
  ]
})
