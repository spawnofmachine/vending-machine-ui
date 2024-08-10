import { router } from '../main'
import { store } from '../main'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080'
})

export default {
  login(username, password, rememberMe) {
    const loginPromise = http.post('/auth/login', { username, password })

    const fullPromise = loginPromise
      .then((response) => {
        const token = response.data.accessToken.token
        if (rememberMe) {
          localStorage.setItem('token', token)
        }
        const authorizedRequestParams = { headers: { Authorization: `Bearer ${token}` } }

        const userPromise = http.get('/api/profile', authorizedRequestParams)
        const rolesPromise = http.get('/api/profile/roles', authorizedRequestParams)

        return Promise.all([userPromise, rolesPromise])
          .then((responses) => {
            const userResponse = responses[0]
            const rolesResponse = responses[1]

            store.commit('SET_LOGIN_INFO', {
              token,
              user: userResponse.data,
              roles: rolesResponse.data
            })
            return true
          })
          .catch((error) => {
            return false
          })
      })
      .catch((error) => {
        return false
      })
    return fullPromise
  },

  restoreLogin() {
    const token = localStorage.getItem('token')
    if (token) {
      const authorizedRequestParams = { headers: { Authorization: `Bearer ${token}` } }
      const userPromise = http.get('/api/profile', authorizedRequestParams)
      const rolesPromise = http.get('/api/profile/roles', authorizedRequestParams)

      return Promise.all([userPromise, rolesPromise])
        .then((responses) => {
          const userResponse = responses[0]
          const rolesResponse = responses[1]

          store.commit('SET_LOGIN_INFO', {
            token: token,
            user: userResponse.data,
            roles: rolesResponse.data
          })
          router.push('/')
        })
        .catch((error) => {
          this.logout()
        })
    }
    return Promise.resolve()
  },

  logout() {
    store.commit('CLEAR_LOGIN_INFO', null)
    localStorage.removeItem('token')
    router.push('/')
  },

  register(user) {
    return http.post('/api/users', user)
  }
}
