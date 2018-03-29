import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // user:{}
  userToken: {}
  // isLogin: false
}

const mutations = {
  isLogin (state, token) {
    state.userToken = token
    let storage = window.localStorage
    if (state.userToken.status === true) {
      storage.setItem('isLogin', true)
    } else {
      storage.setItem('isLogin', false)
    }
    console.log(storage.isLogin)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
