import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const routes = [{
    name: 'HelloWorld',
    component: () =>import('@/components/HelloWorld'),
    path: '/',
    meta: {
      title: '测试helloWorld页面'
    }
  },
  {
    name: 'noMember',
    component: () =>import('@/pages/nomember'),
    path: '/nomember',
    meta: {
      title: '注册提示页'
    }
  },
  {
    name: 'noMemberStatus',
    component: () =>import('@/pages/nomemberstatus'),
    path: '/nomemberstatus',
    meta: {
      title: '等待审核页'
    }
  },
  {
    name: 'registerOne',
    component: () =>import('@/pages/registerone'),
    path: '/registerone',
    meta: {
      title: '注册页面'
    }
  },
  {
    name: 'registerTwo',
    component: () =>import('@/pages/registertwo'),
    path: '/registertwo',
    meta: {
      title: '注册页面'
    }
  },
  {
    name: 'caseReport',
    component: () =>import('@/pages/casereport'),
    path: '/caseReport',
    meta: {
      title: '病例填报',
      requiresAuth:true
    }
  },
  {
    name: 'problemConsult',
    component: () =>import('@/pages/problemconsult'),
    path: '/problemConsult',
    meta: {
      title: '问题咨询',
      requiresAuth:true
    }
  },
  {
    name: 'consultList',
    component: () =>import('@/pages/consultlist'),
    path: '/consultList',
    meta: {
      title: '咨询列表',
      requiresAuth:true
    }
  },
  {
    name: 'consultDetail',
    component: () =>import('@/pages/consultdetail'),
    path: '/consultDetail',
    meta: {
      title: '咨询列表详情页',
      requiresAuth:true
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});
const router = new Router({
  routes
});

export {
  router
};
