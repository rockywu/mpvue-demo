/**
 * Created by rocky on 2019/1/7.
 */
import config from './config'

let routes = (config || []).map(v => {
  v.path = v.entry;
  return v;
})

module.exports = routes;
