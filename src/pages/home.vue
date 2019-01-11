<template>
  <div></div>
</template>

<script>

  export default {
    data() {
      return {
        city: {}
      };
    },
    mounted() {
      this.$emit('IndexTabChange', "find");
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    padding: ptr(8) ptr(20);
    background: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
  }
  .homefind{
    padding-top: ptr(56);
  }
  .search-box {
    height: ptr(40);
    line-height: ptr(40);
    display: flex;
    flex-flow: row nowrap;
    .search-input {
      border: none;
      flex-grow: 1;
      padding-left: ptr(6);
      color: #666;
    }
    div {
      display: inline-block;
      background: #fff;
      border-radius: ptr(20);
      margin-left: ptr(5);
      flex: 1;
      border: 1px solid #ccc;
    }
    .choose-city {
      position: relative;
      padding-right: ptr(15);
      font-size: ptr(14);
      color: #666;
    }
    .iconsearch {
      display: inline-block;
      width: ptr(12);
      height: ptr(12);
      background-image: url(cdnAssets("images/homePage/icon-search@3x.png"));
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      margin-left: ptr(6);
    }
  }
</style>
<style lang="scss">
  .home-room-list {
    .filter-fixed {
      top: ptr(56) !important;
    }
    .filter-expand {
      .filter-fixed {
        top: 0 !important;
      }
    }
  }
</style>
