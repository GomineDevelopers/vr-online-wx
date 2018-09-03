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
    name: 'registerOne',
    component: () =>import('@/pages/registerone'),
    path: '/registerone',
    meta: {
      title: '注册页面一'
    }
  },
  {
    name: 'registerTwo',
    component: () =>import('@/pages/registertwo'),
    path: '/registertwo',
    meta: {
      title: '注册页面二'
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
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
