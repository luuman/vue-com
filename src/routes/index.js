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
