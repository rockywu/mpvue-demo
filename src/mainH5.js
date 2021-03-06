// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import router from './router/h5'
import store from './store'
import api from './common/api'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(Vuex)
Vue.mixin({
  data () {
    return {
      service: '', // 服务
      router: '/', // 路由路径
      imgSrc: '' // 图片路径
    }
  },
  methods: {
    newroot () {
      return this.$route
    },
    navigatePageTo (url) {
      this.$router.push(url)
    },
    reLaunchPageTo (url) {
      this.$router.replace(url)
    },
    setStorageSync (name, data) {
      sessionStorage.setItem(name, JSON.stringify(data))
    },
    getStorageSync (name) {
      return JSON.parse(sessionStorage.getItem(name))
    }
  },
  created () {
    this.$api.fetch('base.ccc', {a:1, b:2}, {params: {c: 1,d: 2}}).then(v => {
      console.log(v)
    })
    console.log('chrome')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
