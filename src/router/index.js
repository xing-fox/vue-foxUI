import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'

const map = resolve => require(['@/view/pages/map'], resolve)
const dragRefresh = resolve => require(['@/view/pages/dragRefresh'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/dragRefresh',
      name: 'dragRefresh',
      component: dragRefresh
    }
  ]
})
