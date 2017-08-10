export const setDocumentTitle = (title) => {
  'use strict'
  if (!title) return
  setTimeout(function () {
    // 利用iframe的onload事件刷新页面
    document.title = title
    var iframe = document.createElement('iframe')
    // iframe.src = '/favicon.ico' // 必须
    iframe.style.visibility = 'hidden'
    iframe.style.width = '1px'
    iframe.style.height = '1px'
    iframe.onload = function () {
      setTimeout(function () {
        document.body.removeChild(iframe)
      }, 0)
    }
    document.body.appendChild(iframe)
  }, 0)
}
