<template>
  <div>
    <h1 class="titulo">{{titulo}}</h1>

    <input
      type="search"
      class="filtro"
      placeholder="filtre por parte do titulo"
      @input="filtro = $event.target.value"
    />
    <ul class="lista-fotos">
      <li class="lista-fotos-item" :key="foto.id" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">

            <imagem-responsiva
              v-meu-transform:scale.animate="1.2"
              :url="foto.url"
              :titulo="foto.titulo"
            />
            <meu-botao
              tipo="button"
              rotulo="REMOVER"
              @botaoAtivado="remove(foto)"
              :confirmacao="true"
              estilo="perigo"
            />

        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>
import api from '../../services/api'
import { Painel, ImagemResponsiva, Botao } from '../shared'

export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva,
    'meu-botao' : Botao,
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

  methods: {

    remove(foto) {
      alert('Remover a foto!' + foto.titulo)
    }

  },

  created() {
    api.get('/fotos')
      .then(res => this.fotos = res.data, error => console.log(error))
  }

}

</script>

<style scoped>
.titulo {
    text-align: center;
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
