<template>
  <div id="App">
    <h1>{{titulo}}</h1>

    <ul>
      <li :key="foto.id" v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.alt" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
    }
  },

  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(response => response.json())
      .then(fotos => this.fotos = fotos, error => console.log(error))
  }
};
</script>

<style>
</style>
