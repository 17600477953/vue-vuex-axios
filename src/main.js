
import Vue from 'vue'
import store from './vuex/store'
// import Login from './components/Login'
import axios from 'axios'
import VueRouter from 'vue-router'
import routes from './router/routes'
import App from './App'

axios.defaults.baseURL = ' https://easy-mock.com/mock/5a66e36c22fd760ce19451f8/add'
Vue.use(VueRouter)
Vue.prototype.$http = axios

const router = new VueRouter({
  routes
})
// 全局导航钩子
router.beforeEach((to, from, next) => {
  let storage = window.localStorage
  if (to.path === '/login') {
    next()
  } else {
    if (storage.isLogin === true || storage.isLogin === 'true') {
      next()
    } else {
      next('/login')
    }
  }
})
// function isEmptyObject (obj) {
//   for (var key in obj) {
//     return false
//  }
//   return true
// }
// 判断object是否为空
/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
