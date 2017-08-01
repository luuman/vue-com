/* 存储localStorage */
export const setLocal = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
/* 获取localStorage */
export const getLocal = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}
/* 删除localStorage */
export const removeLocal = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/* 存储sessionStorage */
export const setSession = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}
/* 获取sessionStorage */
export const getSession = name => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}
/* 删除sessionStorage */
export const removeSession = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}

/* 存储cookie */
// 这是有设定过期时间的使用示例：
// s20是代表20秒
// h是指小时，如12小时则是：h12
// d是天数，30天则：d30
export const setCookie = (name, content, time) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  let exp = new Date()
  time = cookieTime(time)
  exp.setTime(exp.getTime() + time * 1)
  document.cookie = name + '=' + escape(content) + ';expires=' + exp.toGMTString()
}
export const cookieTime = time => {
  if (!name) return
  let sT1 = time.substring(1, time.length) * 1
  let sT2 = time.substring(0, 1)
  if (sT2 === 's') {
    return sT1 * 1000
  } else if (sT2 === 'h') {
    return sT1 * 60 * 60 * 1000
  } else if (sT2 === 'd') {
    return sT1 * 24 * 60 * 60 * 1000
  }
}
/* 获取cookie */
export const getCookie = name => {
  if (!name) return
  let arr
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}
/* 删除cookie */
export const removeCookie = name => {
  if (!name) return
  window.sessionStorage.removeItem(name)
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cVal = getCookie(name)
  if (cVal != null) {
    document.cookie = name + '=' + cVal + ';expires=' + exp.toGMTString()
  }
}
