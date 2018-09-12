// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from '@/router';
import axios from 'axios'
import qs from 'qs';
import {commonTools} from '../static/js/common';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
/*引入公共样式*/
import '../static/css/common.css'

Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$commonTools = commonTools;
Vue.prototype.$qs = qs;


router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    axios.get('http://192.168.0.5/noob/app/index.php',{
      params: {
        i:"8",
        c:"entry",
        p:"user",
        do:"shop",
        m:"ewei_shop",
        ac:"get_info"
      }
    })
      .then(function (response) {
        if(response.data && response.data.result && response.data.result.is_registered == '0' && to.name != 'noMember'){
          next({name:'noMember'});
        }else if(response.data && response.data.result && response.data.result.is_registered == '1' && to.name != 'noMemberStatus'){
          next({name:'noMemberStatus'});
        }else if(response.data && response.data.result && response.data.result.is_registered == '2'){
          next();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    next() // make sure to always call next()!
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
