<template>
  <div class="corpo">
    <h1 class="centralizado">{{titulo}}</h1>

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

  /* estilo do painel */

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
</style>
