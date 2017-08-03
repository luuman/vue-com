import axios from 'axios'
import {baseUrl} from './env.js'
import Loading from 'COMPONENT/vue-loading'

// const TOKEN = '93a89eb491ce25f7cd243bd51fd8c68b38ae77cd'
// const option = {
//   headers: {
//     'Authorization': `token ${TOKEN}`
//   }
// }
// console.log('option' + option)

import qs from 'qs'
import * as Tool from 'UTIL/vuex'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = baseUrl
// axios.defaults.headers.common['Authorization'] = `token ${TOKEN}`
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
    Loading.open()
  }
  return config
}, (error) => {
  Tool.toast('错误的传参', 'fail')
  Loading.close()
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
  Loading.close()
  return res
}, (error) => {
  Tool.toast('网络异常', 'fail')
  Tool.close()
  Loading.close()
  return Promise.reject(error)
})

export const oGet = (url, params, showLoading) => {
  return new Promise((resolve, reject) => {
    axios.get(url, params, {showLoading: showLoading})
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
  JSSDK () {
    return oPost(`/wx/sign/query`, {url: window.location.href})
  },
  Register (Name, Phone, Code) {
    return oPost(`/user/mobile/binding`, {name: Name, mobile: Phone, code: Code})
  },
  Sign (UserId) {
    return oPost(`/activity/guess/sign`)
  },
  Vote (CityId) {
    return oPost(`/activity/pkCity/addActivityPeopleGuestPk`, {cityId: CityId})
  },
  VoteInfo () {
    return oPost(`/activity/pkCity/cityList`)
  },
  Code (Phone) {
    return oPost(`/code/mobileinfo/get`, {'mobile': Phone})
  },
  CoreInfo (UserId) {
    return oPost(`/activity/cardCenter/list`)
  },
  RegretId (Id) {
    return oPost(`/activity/guess/pill/info`, {origin: Id})
  },
  GetRretId (Id) {
    return oPost(`/activity/guess/pill/create`, {origin: Id})
  },
  LuckDraw (UserId, Type, Id) {
    return oPost(`/activity/cardCenter/draw`, {userId: UserId, ruleType: Type, id: Id})
  },
  DoRegret (TimeId) {
    return oPost(`/activity/pkCity/updateActivityPeopleGuestPk`, {'id': TimeId})
  },
  Get (link) {
    return oGet(link)
  }
}

// import * as repos from '../../static/FontEnd.json'
// export const setpromise = data => {
//   return new Promise((resolve, reject) => {
//     resolve(data)
//   })
// }
// var List = (username) => setpromise(repos)
// var Notifications = (username) => setpromise(repos)

// export default {
//   List,
//   Notifications
// }
