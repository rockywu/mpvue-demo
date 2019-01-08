<template>
  <div class="container">
    <!-- 图片引用的两种方式 -->
    <img class="girl" src="https://image.mgzf.com/mogoroom/mogoka/9/531302/a8b6602ceebe/1544522739331.jpg" alt="">
    <card :text="motto"></card>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <!-- 路由跳转 -->
    <a @click="gotoGame('pages/counter/index')" class="counter">去往Vuex示例页面</a>
    <a @click="gotoGame('pages/logs/index')" class="counter">去往logs页面</a>
  </div>
</template>

<script>
  // 组件引用
  import card from '@/components/card'

  export default {
    data () {
      return {
        motto: 'Hello World'
      }
    },
    components: {
      card
    },
    methods: {
      gotoGame (path) {
        this.navigatePageTo(this.router + path)
      }
    }
  }
</script>


<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
