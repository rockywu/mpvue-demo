/**
 * Created by rocky on 2019/1/7.
 */
module.exports = [
  {
    path: 'pages/index/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: 'index',
      enablePullDownRefresh: true
    }
  },
  {
    path: 'pages/counter/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '文章列表',
      enablePullDownRefresh: true
    }
  },
  {
    path: 'pages/logs/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: "查看启动日志",
      enablePullDownRefresh: true
    }
  }
]
