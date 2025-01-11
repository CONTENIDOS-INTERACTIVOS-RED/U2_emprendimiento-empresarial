<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Emprendimiento, motivación y liderazgo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") La motivación es un elemento fundamental en el emprendimiento, actuando como el motor que impulsa a los emprendedores a transformar sus ideas en proyectos viables y sostenibles. Además de ser un estímulo inicial, la motivación es clave para mantener la resiliencia y la determinación ante los desafíos. Comprender cómo opera la motivación permite desarrollar un enfoque más sólido hacia las metas personales y profesionales.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    p.text-bold.mb-4 Tipos de motivación en el emprendimiento
    p.mb-4 La motivación en el emprendimiento puede clasificarse en intrínseca y extrínseca, ambas desempeñando un papel crucial en el impulso de los emprendedores.

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width.mb-4
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Intrínseca
              p Proviene del deseo interno de realizar actividades por placer, propósito o satisfacción personal. <br>Un emprendedor motivado por resolver un problema social o innovar en su campo de interés.

          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Extrínseca
              p Se basa en incentivos externos, como ganancias económicas, prestigio o independencia financiera. <br>Un emprendedor que busca reconocimiento o libertad económica a través de su negocio.


    p.mb-4 Estudios como los de Deci y Ryan (1985) destacan que la motivación intrínseca tiende a ser más sostenible, ya que conecta profundamente con los valores y objetivos del emprendedor.
    h2 Factores que influyen en la motivación
    p.mb-4 El éxito del emprendimiento depende de factores personales y contextuales que influyen en la motivación y estrategia del emprendedor.
    .row.mb-4
      .col-10.col-md-8.col-lg-6.mb-4.mx-auto(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
          div.mb-4.px-4
            p.text-bold.text-center Personales
            p.text-small.px-4.mb-1 <b>Metas y valores:</b> objetivos claros alineados con valores personales.
            p.text-small.px-4.mb-1 <b>Pasión:</b> interés genuino por el sector o problema abordado.
            p.text-small.px-4.mb-1 <b>Experiencias previas:</b> aprendizajes que moldean la visión y la estrategia del emprendedor.
      .col-10.col-md-8.col-lg-6.mb-4.mx-auto(data-aos="fade-left")
        div.custom-image-card.rounded-8px
          img.mb-4(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
          div.mb-4.px-4
            p.text-bold.text-center Contextuales
            p.text-small.px-4.mb-1 <b>Entorno social:</b> apoyo familiar, redes de contactos y comunidades emprendedoras.
            p.text-small.px-4.mb-1 <b>Económico:</b> acceso a recursos como financiamiento y mercados potenciales.
            p.text-small.px-4.mb-1 <b>Cultural:</b> valoración de la innovación y el emprendimiento en la sociedad.
            p.text-small.px-4.mb-1 <b>Políticas públicas:</b> incentivos fiscales y programas de formación.

    h2 Teoría de las necesidades de Maslow (1943)
    p.mb-4  Esta teoría establece una jerarquía de necesidades, desde las básicas (seguridad económica) hasta las superiores (autorrealización). En el emprendimiento, la autorrealización se refleja en el deseo de crear algo significativo, generar impacto o alcanzar el éxito personal y profesional.
    .row.mb-4 
      .col-6.col-md-4.mb-4.mx-auto(data-aos="fade-up")
        .bg-verde-claro.p-4.text-center.h-100 
          p.text-bold.mb-2.text-small Necesidades básicas:
          span.text-small Seguridad económica, estabilidad financiera.
      .col-6.col-md-4.mb-4.mx-auto(data-aos="fade-up")
        .bg-verde-claro.p-4.text-center.h-100
          p.text-bold.mb-2.text-small Necesidades de seguridad:

          span.text-small Establecer un negocio rentable y sostenible
      .col-6.col-md-4.mb-4.mx-auto(data-aos="fade-up")
        .bg-verde-claro.p-4.text-center.h-100
          p.text-bold.mb-2.text-small Necesidades sociales:

          span.text-small Construir redes de apoyo y colaborar con comunidades.
      .col-6.col-md-4.mb-4.ms-auto(data-aos="fade-up")
        .bg-verde-claro.p-4.text-center.h-100
          p.text-bold.mb-2.text-small Necesidades de estima:

          span.text-small Lograr reconocimiento y respetabilidad en el sector 
      .col-6.col-md-4.mb-4.me-auto(data-aos="fade-up")
        .bg-verde-claro.p-4.text-center.h-100
          p.text-bold.mb-2.text-small Autorrealización :

          span.text-small Crear proyectos innovadores y generar impacto en la sociedad. 

    p.mb-4 La motivación está intrínsecamente conectada con el liderazgo, ya que un emprendedor no solo debe mantenerse motivado, sino también inspirar y dirigir a su equipo. Un líder motivado fomenta un ambiente de colaboración, creatividad y compromiso, potenciando las capacidades individuales y colectivas. Así, el liderazgo transformacional, que combina visión estratégica con empatía y propósito, se convierte en una herramienta clave para maximizar el impacto del emprendimiento.
    p.mb-3 <b>Figura 1.</b> Pirámide de Maslow
    .row.mb-4
      .col-10.mx-auto(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.text-bold.mb-4 Teoría de la autodeterminación y su relevancia en el emprendimiento
        p.mb-4 La teoría de la autodeterminación de Deci y Ryan (1985) proporciona una base sólida para comprender cómo la motivación intrínseca impulsa a los emprendedores en su camino. Esta teoría identifica tres necesidades psicológicas fundamentales que favorecen la motivación intrínseca:
        .bg-amarillo.p-4
          p <b>Autonomía:</b> sentir que tienes control sobre tus decisiones y acciones.
          p <b>Competencia:</b> percibir que cuentas con las habilidades y recursos necesarios para alcanzar tus objetivos.
          p <b>Conexión social:</b> establecer relaciones significativas y recibir apoyo del entorno.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')

    p.mb-5 Cuando estas necesidades están satisfechas, los emprendedores experimentan un mayor nivel de compromiso y resiliencia, factores esenciales para perseverar frente a los retos del emprendimiento.

    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4
        
        p.text-bold.mb-4 La motivación en las etapas del emprendimiento
        p.mb-4 La motivación desempeña un papel crucial en todas las fases del emprendimiento:

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-42.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Inicio
              p.px-1.text-small.mb-0.d-flex.text-center Superar el miedo al fracaso, tomar decisiones iniciales y dar el primer paso hacia la realización del proyecto. 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-43.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Desarrollo y crecimiento
              p.px-1.text-small.mb-0.d-flex.text-center Mantener el compromiso frente a desafíos como la competencia, la falta de recursos o los cambios del mercado.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-44.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Consolidación
              p.px-1.text-small.mb-0.d-flex.text-center Continuar innovando, identificar nuevas oportunidades y asegurar la sostenibilidad del proyecto.

    p.mb-4 Las estrategias para cultivar la motivación en el emprendimiento son:

    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="31%" y="55%" numero="+")
        .h5.mb-2 Reflexiona sobre tus metas personales
        p Identifica qué te impulsa a emprender y conecta emocionalmente con tu proyecto.
      .tarjeta.bg-white.p-4(x="37%" y="33%" numero="+")
        .h5.mb-2 Rodéate de apoyo
        p Trabaja con personas que compartan tus valores y te brinden respaldo emocional y profesional.

      .tarjeta.bg-white.p-4(x="50%" y="33%" numero="+")
        .h5.mb-2 Celebra logros
        p Reconoce y disfruta cada avance, por pequeño que sea, para renovar energía y mantener una actitud positiva.
      .tarjeta.bg-white.p-4(x="63.5%" y="33%" numero="+")
        .h5.mb-2 Establece metas claras y alcanzables
        p - A corto plazo: Identifica objetivos inmediatos que permitan medir el progreso. <br>- A largo plazo: Proyecta metas que representen tu visión de éxito.
      .tarjeta.bg-white.p-4(x="70%" y="55%" numero="+")
        .h5.mb-2 Desarrolla resiliencia
        p Adopta una mentalidad de aprendizaje para transformar los fracasos en oportunidades de crecimiento.


    p.mb-4 La motivación está directamente vinculada con el éxito en el emprendimiento. Los emprendedores motivados destacan por su persistencia, creatividad y enfoque estratégico en la toma de decisiones. Además, la motivación intrínseca actúa como un catalizador que no solo impulsa al emprendedor, sino que también inspira a socios, empleados e inversionistas a comprometerse con el proyecto.

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Liderazgo en el emprendimiento

    p.mb-4 El liderazgo en el emprendimiento es una competencia fundamental para transformar ideas en realidades sostenibles. En un entorno empresarial lleno de incertidumbre, este liderazgo combina habilidades estratégicas, tácticas e interpersonales para guiar a un equipo hacia el logro de objetivos comunes. No se limita al manejo operativo, sino que incluye la formulación de una visión clara y la adaptación constante a los cambios del entorno.
    p.text-bold.mb-4 Las características clave del liderazgo emprendedor son:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width.mb-4
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.mx-auto
              p.text-bold.mb-4 Visión inspiradora
              p - Define el propósito del proyecto y actúa como referencia para decisiones estratégicas.
              p - Inspira confianza y compromiso en el equipo, socios e inversionistas.
              p - Debe ser ambiciosa, alcanzable y capaz de evolucionar con el tiempo.
            .d-none.d-lg-block.col-md-6.col-lg-4.mx-auto
              figure
                img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.mx-auto
              p.text-bold.mb-4 Toma de decisiones bajo presión
              p - Requiere equilibrio entre análisis riguroso e intuición. 
              p - Considera riesgos, beneficios e implicaciones a largo plazo.
              p - Debe ser ágil y adaptable en mercados dinámicos.

            .d-none.d-lg-block.col-md-6.col-lg-4.mx-auto
              figure
                img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.mx-auto
              p.text-bold.mb-4 Capacidad de innovación 
              p - Fomenta ideas creativas y explora nuevas oportunidades.
              p - Integra la innovación en la estrategia general del proyecto.
              p - Asigna recursos adecuados y elimina barreras para la creatividad.
            .d-none.d-lg-block.col-md-6.col-lg-4.mx-auto
              figure
                img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.mx-auto
              p.text-bold.mb-4 Resiliencia
              p - Permite enfrentar adversidades y aprender de fracasos.
              p - Fomenta un ambiente de trabajo adaptable y motivado.
              p - Crea una cultura organizacional de aprendizaje continuo.
            .d-none.d-lg-block.col-md-6.col-lg-4.mx-auto
              figure
                img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.mx-auto
              p.text-bold.mb-4 Inteligencia emocional
              p - Gestiona emociones propias y comprende las de los demás.
              p - Construye relaciones sólidas basadas en empatía y confianza.
              p - Facilita la colaboración en equipos diversos.
            .d-none.d-lg-block.col-md-6.col-lg-4.mx-auto
              figure
                img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.mx-auto
              p.text-bold.mb-4 Gestión de redes externas
              p - Establece relaciones con clientes, proveedores, inversionistas y socios clave.
              p - Facilita el acceso a recursos y retroalimentación.
              p - Requiere habilidades de negociación y persuasión.
            .d-none.d-lg-block.col-md-6.col-lg-4.mx-auto
              figure
                img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')

    p.text-bold.mb-4 Roles del liderazgo en las etapas del emprendimiento
    p.mb-4 El liderazgo en el emprendimiento abarca roles clave que guían el desarrollo del proyecto a lo largo de sus etapas.

    .row.mb-4.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-52.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Fase inicial
          p.px-1.text-small.mb-0.d-flex.text-center Conceptualiza el proyecto y define la visión. Forma un equipo sólido y busca recursos estratégicos.  
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-53.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Etapa de desarrollo
          p.px-1.text-small.mb-0.d-flex.text-center Implementa estrategias y supervisa operativamente. Cumple objetivos a corto y mediano plazo.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-54.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Fase de consolidación
          p.px-1.text-small.mb-0.d-flex.text-center Garantiza la sostenibilidad del proyecto. Promueve la innovación y se adapta a nuevas demandas del mercado,

    p.text-bold.mb-4 Estilos de liderazgo en el emprendimiento
    p.mb-4 En el emprendimiento, los estilos de liderazgo juegan un papel fundamental en la dirección y éxito de los proyectos.

    .row.mb-4 
      .col-6.col-md-4.mb-4(data-aos="fade-up")
        .bg-amarillo.p-4.text-center.h-100 
          p.text-bold.mb-2.text-small Transformacional
          span.text-small Inspira a los equipos y fomenta la creatividad
      .col-6.col-md-4.mb-4(data-aos="fade-up")
        .bg-amarillo.p-4.text-center.h-100 
          p.text-bold.mb-2.text-small Adaptativo
          span.text-small Ajusta estrategias rapidamente en mercados cambiantes
      .col-6.col-md-4.mb-4(data-aos="fade-up")
        .bg-amarillo.p-4.text-center.h-100 
          p.text-bold.mb-2.text-small Democrático
          span.text-small Fomenta la participación activa en la toma de decisiones.
      .col-6.col-md-4.mb-4(data-aos="fade-up")
        .bg-amarillo.p-4.text-center.h-100 
          p.text-bold.mb-2.text-small Orientados a resultados
          span.text-small Enfocado en metas claras y su cumplimiento.
      .col-6.col-md-4.mb-4(data-aos="fade-up")
        .bg-amarillo.p-4.text-center.h-100 
          p.text-bold.mb-2.text-small Carismático
          span.text-small Motiva mediante la comunicación y la personalidad del líder.
      .col-6.col-md-4.mb-4(data-aos="fade-up")
        .bg-amarillo.p-4.text-center.h-100 
          p.text-bold.mb-2.text-small Autocrático (moderado)
          span.text-small Útil en situaciones de alta presión que requieren decisiones rápidas.

    .bg-rojo-claro.bg-full-width.mb-5
      .px-5.pb-md-3.py-4
        .row.mb-4
          .d-flex.align-items-center
            div.d-flex.align-items-center
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-55.svg', alt='Texto que describa la imagen')
              .d-flex.flex-column
                p.text-bold.mb-2 Importancia del liderazgo emprendedor
                p.mb-0 El liderazgo en el emprendimiento es multifacético y esencial para enfrentar desafíos, aprovechar oportunidades y generar impacto positivo en el mercado y la sociedad. Combina visión estratégica, innovación, resiliencia, inteligencia emocional y habilidades de gestión. Este tipo de liderazgo no solo asegura el éxito del proyecto, sino que también contribuye al progreso económico y social, consolidando empresas sostenibles en un entorno globalizado y competitivo.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/51702") Palmero Cantero, F., et al. (2016). Manual de teorías emocionales y motivacionales. Universitat Jaume I.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/222463") Valencia Tovar, Á. (2015). El liderazgo, clave del éxito en la empresa. CESA.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=eFbmc65F47s") Emprendimiento y Motivación. (2022). Los mejores pasos para ser un EMPRENDEDOR [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=_rPJ_eZzlcw") pascualbravovirtual. (2021). Liderazgo y trabajo en equipo [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
