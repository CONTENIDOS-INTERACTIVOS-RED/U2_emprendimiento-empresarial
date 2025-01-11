<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El emprendimiento se ha consolidado como un motor fundamental para el desarrollo económico, social y tecnológico en el mundo contemporáneo. En un entorno globalizado y en constante cambio, la capacidad de innovar, identificar oportunidades y transformar ideas en proyectos viables es esencial para enfrentar los desafíos y aprovechar las nuevas tendencias del mercado. El emprendimiento no solo impulsa la creación de nuevas empresas, sino que también fomenta la generación de empleo, la dinamización de sectores productivos y la promoción de prácticas sostenibles que benefician a la sociedad en su conjunto.

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-rojo.p-4.mb-4
          span Además de su impacto económico, el emprendimiento juega un papel crucial en la transformación cultural y social. Los emprendedores actúan como agentes de cambio, promoviendo una mentalidad de innovación, resiliencia y colaboración que desafía el statu quo y abre caminos hacia soluciones creativas y eficientes. Este fenómeno abarca una diversidad de enfoques, desde el emprendimiento tradicional y social hasta el tecnológico e intraemprendimiento, cada uno con características y retos específicos que reflejan las variadas necesidades y aspiraciones de diferentes contextos y comunidades.
        span Comprender el espíritu empresarial requiere un análisis multidimensional que integre perspectivas ambientales, sociológicas y psicológicas. El entorno en el que opera un emprendedor, las redes de relaciones sociales que construye y las características individuales que lo impulsan son factores determinantes para el éxito y la sostenibilidad de sus iniciativas. Este enfoque integral no solo facilita el diseño de políticas y programas de apoyo más efectivos, sino que también empodera a los emprendedores para que desarrollen sus capacidades, superen obstáculos y contribuyan de manera significativa al progreso y bienestar de sus entornos.

    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
