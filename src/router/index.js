import Vue from 'vue'
import VueChartkick from 'vue-chartkick'
import Router from 'vue-router'
import Skeleton from '@/components/Skeleton'

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
