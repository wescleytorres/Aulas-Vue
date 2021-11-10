<template>
  <img class="img-response" :src="url" :alt="titulo" />
</template>

<script>
export default {

  props: ['url', 'titulo']
}
</script>

<style scoped>
  .img-response {
    width: 100%;
  }
</style>
