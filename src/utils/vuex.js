import store from 'VUEX/store'
// import Loading from 'COMPONENT/vue-loading'

export const toast = (str, icon) => {
  console.group('showToast')
  store.dispatch('showToast', true)
  if (icon === 'success') {
    store.dispatch('showSuccess', true)
    store.dispatch('showFail', false)
  } else {
    store.dispatch('showSuccess', false)
    store.dispatch('showFail', true)
  }
  store.dispatch('toastMsg', str)
  setTimeout(() => {
    store.dispatch('showToast', false)
  }, 1500)
  console.groupEnd()
}

export const alert = (str) => {
  console.group('showAlert')
  store.dispatch('showAlert', true)
  store.dispatch('alertMsg', str)
  setTimeout(() => {
    store.dispatch('showAlert', false)
  }, 1500)
  console.groupEnd()
}

export const open = (text) => {
  console.group('AXIOS ' + text)
  store.dispatch('openLoading', text)
  // window.Loading.show()
  // Loading.plugin.Loading.show()vue
}

export const close = () => {
  console.groupEnd()
  store.dispatch('closeLoading')
  // window.Loading.hide()
}
