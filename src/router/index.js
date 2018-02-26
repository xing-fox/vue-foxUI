import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'

const Fwmap = resolve => require(['@/components/Fw-map'], resolve)

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
      name: 'Fwmap',
      component: Fwmap
    }
  ]
})
