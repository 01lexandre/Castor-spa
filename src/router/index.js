import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@domains/routes.js'
import beforeEach from './BeforeEach'
import afterEach from './AffterEach'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

router.afterEach(afterEach)
router.beforeEach(beforeEach)

export default router
