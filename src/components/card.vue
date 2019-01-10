<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    'text': {
      default: "",
      type: String
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
