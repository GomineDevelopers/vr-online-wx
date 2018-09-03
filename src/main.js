// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from '@/router';
import {commonTools} from '../static/js/common';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
/*引入公共样式*/
import '../static/css/common.css'

Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$commonTools = commonTools;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
