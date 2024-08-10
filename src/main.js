import { createApp } from 'vue'
import App from './App.vue'
import { createAppRouter } from './router'
import loginService from './services/login-service'
import { createAppStore } from './store'

export const router = createAppRouter()
export const store = createAppStore()

loginService.restoreLogin().then(() => {
  const app = createApp(App)
  app.use(router)
  app.use(store)

  app.mount('#app')
})
