import axios from 'axios'
import {baseUrl} from './env.js'
// import Loading from 'COMPONENT/vue-loading'

const TOKEN = 'e527a81323a71118a05edad56a09ad251af47f02'

import qs from 'qs'
import * as Tool from 'UTIL/vuex'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = baseUrl
axios.defaults.headers.common['Authorization'] = `token ${TOKEN}`
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  let URL = config.url.split(config.baseURL)
  Tool.open(URL[1])
  console.log(config)
  if (config.showLoading) {
    // Loading.open()
  }
  return config
}, (error) => {
  Tool.toast('错误的传参', 'fail')
  // Loading.close()
  return Promise.reject(error)
})

// 返回
axios.interceptors.response.use((res) => {
  // console.log(res)
  // 拦截器配置
  // if (res.data.success) {
  //   Tool.toast(res.data.msg)
  //   Tool.close()
  //   return Promise.reject(res)
  // }
  Tool.close()
  // Loading.close()
  return res
}, (error) => {
  Tool.toast('网络异常', 'fail')
  Tool.close()
  // Loading.close()
  return Promise.reject(error)
})

export const oGet = (url, showLoading) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {showLoading: showLoading})
      .then(res => {
        resolve(res.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const oPost = (url, params, showLoading) => {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {showLoading: showLoading})
      .then(res => {
        resolve(res.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  // 发送注册验证码
  Authorization () {
    return oPost(`/user/info/get`, {ykresource: 'guessing'})
  },
  ReposList (username) {
    // return oGet(`/users/${username}/repos`)
    return oGet(`/search/repositories?q=user:${username}`)
  },
  Login (username, reponame) {
    return oGet(`/repos/${username}/${reponame}`)
  },
  UsersList (since) {
    return oGet(`/users?since=${since}`)
    // since The integer ID of the last User that you've seen.
  },
  Notifications (page) {
    return oGet(`/notifications?page=${page}`)
  },
  Notifs (page) {
    return oGet(`/repos/airyland/vux/notifications?page=${page}`, true)
  },
  Get (link) {
    return oGet(link)
  }
}
