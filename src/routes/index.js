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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo',
      // keepAlive: true,
      beforeEnter (to, from, next) {
        console.log('router beforeEnter')
        next()
      },
      component: Demo
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/VueAlert',
      name: 'VueAlert',
      component: VueAlert
    },
    {
      path: '/Loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/Previewer',
      name: 'Previewer',
      component: Previewer
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Head',
      name: 'Head',
      component: Head
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
