/**
 * Created by rocky on 2019/1/7.
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: () => System.import('../pages/index/index.vue'),
    alias: '/pages/index/index'
  }, {
    path: '/logs',
    name: 'logs',
    component: () => System.import('../pages/logs/index.vue'),
    alias: '/pages/logs/index'
  }, {
    path: '/counter',
    name: 'counter',
    component: () => System.import('../pages/counter/index.vue'),
    alias: '/pages/counter/index'
  }]
})
