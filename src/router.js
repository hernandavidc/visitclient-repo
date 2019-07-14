import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from './store'
Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLogged = store.state.auth.isLogged
  const user = store.state.auth.user
  if ( ! requiresAuth && user && isLogged && to.path === '/login') {
    return next('/')
  } 
  if (requiresAuth && ! isLogged && ! user) {
    next('/login')
  } else {
    next()
  }
})

export default router
