/**
 * Created by rocky on 2019/1/10.
 */
import fly from './fly'
import {INTERCEPTOR_DEFAULT} from './constants'

/**
 * 设定拦截器
 */
fly.registerInterceptor(INTERCEPTOR_DEFAULT, {
  request (req) {
    return req
  },
  response (res) {
    return res
  }
})
