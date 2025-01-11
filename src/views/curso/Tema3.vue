<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Origen y desarrollo del espíritu empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
   

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
