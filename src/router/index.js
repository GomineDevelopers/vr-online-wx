import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import registerOne from '@/pages/registerone'
import registerTwo from '@/pages/registertwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/registerone',
      name: 'registerOne',
      component: registerOne
    },
    {
      path: '/registertwo',
      name: 'registerTwo',
      component: registerTwo
    },
  ]
})
