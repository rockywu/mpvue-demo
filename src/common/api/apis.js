/**
 * Created by rocky on 2019/1/10.
 */
import fly from './fly'
import {INTERCEPTOR_DEFAULT, BASE_URI} from './constants'

fly.registerApis('base', {
  baseURL: BASE_URI.base,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  interceptors: [INTERCEPTOR_DEFAULT]
}, {
  ccc: {
    url: 'ccc.php',
    method: 'post'
  }
})
