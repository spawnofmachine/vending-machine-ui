import { createStore } from 'vuex'
import axios from 'axios'

export function createAppStore() {
  return createStore({
    state: {
      token: null,
      user: {},
      userRoles: []
    },
    mutations: {
      SET_AUTH_TOKEN(state, token) {
        state.token = token
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      },
      SET_LOGIN_INFO(state, { token, user, roles }) {
        state.token = token
        state.user = user
        state.userRoles = roles
      },
      CLEAR_LOGIN_INFO(state) {
        state.token = null
        state.user = null
        state.userRoles = []
      }
    }
  })
}
