<template>
  <div class="aa">
    <p class="p">blue</p>
    <span class="c">red</span>
  </div>
</template>

<script>
  export default {
    name: 'mgzf-home',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
.aa {
  & .c {
    color: red;
  }
  & .p {
    color: #6bff5f;
  }
}
</style>
