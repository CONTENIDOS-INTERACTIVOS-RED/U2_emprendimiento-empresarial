<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El espíritu emprendedor se reconoce como un motor clave para impulsar la innovación y la generación de valor en diferentes contextos. En esta unidad, se analizarán los elementos esenciales que definen al emprendedor y su entorno, abarcando tanto los aspectos normativos como las habilidades y actitudes necesarias para sobresalir en esta labor. Se abordarán las leyes fundamentales que han promovido la cultura del emprendimiento en Colombia, como la Ley 1014 de 2006, la Ley 2069 de 2020 y la Ley 2234 de 2022, las cuales configuran un marco legal que respalda el desarrollo de los emprendimientos y su impacto en la sociedad.

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-azul.p-4.mb-4
          span Además del análisis normativo, esta unidad examina el pensamiento y el comportamiento emprendedor, elementos esenciales para identificar oportunidades y superar retos en el ámbito empresarial. También se presentarán casos exitosos de emprendimiento, que permitirán estudiar experiencias reales y aprender de estrategias innovadoras empleadas por otros. Estos casos no solo complementarán el marco teórico, sino que también servirán como fuente de inspiración para aplicar los aprendizajes en proyectos propios.
        span Al culminar esta unidad, se espera contar con una perspectiva integral del espíritu emprendedor, comprendiendo cómo las leyes y las políticas públicas favorecen su desarrollo. Asimismo, se destacará la importancia de características individuales como la resiliencia, la creatividad y la proactividad, elementos esenciales para alcanzar el éxito. Este enfoque permitirá relacionar las herramientas legales y conceptuales con las habilidades prácticas necesarias para emprender.

    
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
