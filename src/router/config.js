/**
 * Created by rocky on 2019/1/8.
 * 配置格式
 * 小程序版本必填字段
 * ```
 * {
 *  name "",
 *  entry: "", //将转换为小程序中path
 *  config: {}
 * }
 * H5依赖,请按照对于参数配置
 * {
 *  uri: "", //转换为vue-router path
 *  name: "",
 *  meta: {},
 * }
 *
 * ```
 *
 * 顾兼容路由配置必须添加一下4个参数
 * 1、uri //h5使用的路由配置（支持vue-router标准）
 * 2、entry //小程序文件路径地址,不要填写vue尾缀，这个entry将作为h5的文件路径使用
 * 3、name  //页面名称 页面跳转将使用name进行跳转匹配
 * 4、config //小程序页面配置
 */
module.exports = [
  {
    uri: '/',
    name: 'home',
    entry: 'pages/home',
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '蘑菇租房',
      enablePullDownRefresh: true
    }
  },
  {
    uri: '/self/index',
    name: 'home',
    entry: 'pages/self/index',
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '蘑菇租房',
      enablePullDownRefresh: true
    }
  },
  {
    uri: '/self/setting',
    name: 'home',
    entry: 'pages/self/setting',
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '蘑菇租房',
      enablePullDownRefresh: true
    }
  }
]
