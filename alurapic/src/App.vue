<template>
  <div class="corpo">
    <h1 class="centralizado">{{titulo}}</h1>

    <input
      type="search"
      class="filtro"
      placeholder="filtre por parte do titulo"
      v-on:input="filtro = $event.target.value"
    />
    <ul class="lista-fotos">
      <li class="lista-fotos-item" :key="foto.id" v-for="foto of fotos">

        <meu-painel :titulo="foto.titulo">
            <img class="img-response" :src="foto.url" :alt="foto.alt" />
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>
import api from './services/api'
import Painel from './components/shared/painel/Painel.vue'

export default {

  components: {
    'meu-painel' : Painel
  },

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
.titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .img-response {
    width: 100%;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
