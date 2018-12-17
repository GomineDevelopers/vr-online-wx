import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const routes = [
  {
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld'),
    path: '/',
    meta: {
      title: '测试helloWorld页面',
    },
  },
  {
    name: 'noMember',
    component: () => import('@/pages/nomember'),
    path: '/nomember',
    meta: {
      title: '提示',
    },
  },
  {
    name: 'noMemberStatus',
    component: () => import('@/pages/nomemberstatus'),
    path: '/nomemberstatus',
    meta: {
      title: '等待审核页',
    },
  },
  {
    name: 'registerOne',
    component: () => import('@/pages/registerone'),
    path: '/registerone',
    meta: {
      title: '注册',
    },
  },
  {
    name: 'registerTwo',
    component: () => import('@/pages/registertwo'),
    path: '/registertwo',
    meta: {
      title: '注册',
    },
  },
  {
    name: 'caseReport',
    component: () => import('@/pages/casereport'),
    path: '/caseReport',
    meta: {
      title: '病例论坛',
      requiresAuth: true,
    },
  },
  {
    name: 'caseList',
    component: () => import('@/pages/caseList'),
    path: '/caseList',
    meta: {
      title: '病例列表',
      requiresAuth: true,
    },
  },
  {
    name: 'caseDetail',
    component: () => import('@/pages/casedetail'),
    path: '/caseDetail/:id',
    meta: {
      title: '病例列表详情页',
      requiresAuth: true,
    },
  },
  {
    name: 'problemConsult',
    component: () => import('@/pages/problemconsult'),
    path: '/problemConsult',
    meta: {
      title: '疑难求助',
      requiresAuth: true,
    },
  },
  {
    name: 'consultList',
    component: () => import('@/pages/consultlist'),
    path: '/consultList',
    meta: {
      title: '咨询列表',
      requiresAuth: true,
    },
  },
  {
    name: 'consultDetail',
    component: () => import('@/pages/consultdetail'),
    path: '/consultDetail/:id',
    meta: {
      title: '咨询列表详情页',
      requiresAuth: true,
    },
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});
const router = new Router({
  routes,
});

export { router };
