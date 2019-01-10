/**
 * Created by rocky on 2019/1/10.
 */
let fly = {}
if (process.env.PLATFORM === 'wx') {
  fly = require('flyio-ext/lib/wx').default
} else if (process.env.PLATFORM === 'h5') {
  fly = require('flyio-ext/lib/h5').default
} else {
  /**
   * 默认使用node环境，作为调试
   */
  fly = require('flyio-ext/lib/node').default
}

export default fly
