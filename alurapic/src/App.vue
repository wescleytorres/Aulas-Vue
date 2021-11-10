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
import api from './services/api'

export default {
  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
    }
  },

  created() {
    api.get('/fotos')
      .then(res => this.fotos = res.data, error => console.log(error))
  }
};
</script>

<style>
</style>
