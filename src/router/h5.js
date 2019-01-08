/**
 * Created by rocky on 2019/1/7.
 */
import Vue from 'vue'
import Router from 'vue-router'
import config from './config'
Vue.use(Router)

let routes = (config || []).map(v => {
  v.component = () => System.import(`../${v.entry}.vue`)
  v.path = v.uri
  return v
})

export default new Router({
  mode: 'history',
  routes: routes
})
