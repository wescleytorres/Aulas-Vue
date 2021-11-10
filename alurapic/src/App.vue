<template>
  <div class="corpo">
    <h1 class="centralizado">{{titulo}}</h1>

    <input
      type="search"
      class="filtro"
      placeholder="filtre por parte do titulo"
      @input="filtro = $event.target.value"
    />
    <ul class="lista-fotos">
      <li class="lista-fotos-item" :key="foto.id" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>
import api from './services/api'
import Painel from './components/shared/painel/Painel.vue'
import ImagemResponsiva from './components/shared/imagem-responsiva/ImagemResponsiva.vue'

export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva
  },

  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ''
    }
  },

  computed: {

    fotosComFiltro() {
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i')
        return this.fotos.filter(foto => exp.test(foto.titulo))
      }

      return this.fotos
    }
  },

  created() {
    api.get('/fotos')
      .then(res => this.fotos = res.data, error => console.log(error))
  }

}

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

  .filtro {
    display: block;
    width: 100%;
  }
</style>
