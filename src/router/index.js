import Vue from 'vue'
import Router from 'vue-router'
import Skeleton from '../Components/Skeleton.vue'
import VueChartkick from 'vue-chartkick'

Vue.use(Router)
Vue.use(VueChartkick)

export default new Router({
  routes: [
    {
      path: '/',
      component: Skeleton
    }
  ]
})
