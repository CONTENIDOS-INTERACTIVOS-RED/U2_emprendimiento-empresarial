<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. El pensamiento y comportamiento emprendedor'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-rojo.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up")  El pensamiento emprendedor es un enfoque integral que combina creatividad, innovación y pragmatismo para interpretar y actuar frente a la realidad de manera dinámica y proactiva. Este tipo de pensamiento va más allá de la generación de ideas, incorporando habilidades para evaluar su viabilidad, planificar estratégicamente y convertir esas ideas en proyectos concretos que generen valor. Adoptar este pensamiento permite identificar oportunidades en escenarios que otros podrían considerar como limitantes, posicionándolo como un agente de cambio dentro de su entorno. 

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Creatividad e innovación

    p.mb-4 La creatividad e innovación son pilares fundamentales en el emprendimiento, ya que impulsan la capacidad de transformar ideas originales en soluciones prácticas, adaptadas a un entorno competitivo y en constante evolución. Aunque estrechamente relacionadas, estas competencias tienen características únicas que las hacen indispensables para desarrollar proyectos emprendedores exitosos.

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Creatividad", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-xl-5(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
          .col-md-12.col-xl-7.mb-4.mb-md-0(data-aos="fade-left")
            h4 Creatividad
            p(data-aos="fade-up") Es una habilidad cognitiva que permite concebir ideas nuevas, inusuales y valiosas a través de la observación, conexión de conceptos y exploración de posibilidades. Está influida por conocimientos previos, experiencias personales y perspectivas diversas. <br>Ejemplo: Un emprendedor creativo identifica una necesidad insatisfecha y propone una idea abstracta con potencial de solución práctica.

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Innovación", :iconUrl="require('@/assets/curso/unidad/img-34.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-xl-5(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
          .col-md-12.col-xl-7.mb-4.mb-md-0(data-aos="fade-left")
            h4 Innovación
            p(data-aos="fade-up") Es el proceso que transforma ideas creativas en realidades concretas que generan valor. Implica planificación, diseño, implementación y comercialización, donde la creatividad se convierte en un motor de cambio tangible. <br>Ejemplo: Una persona creativa idea un dispositivo para monitorear la salud, y la innovación lo desarrolla tecnológicamente, produce y comercializa.


    p.text-bold.mb-4 Relación simbiótica entre creatividad e innovación
    p.mb-4 La relación entre creatividad e innovación es simbiótica. La creatividad alimenta las ideas, mientras que la innovación las materializa. Una idea creativa sin innovación carece de impacto práctico, y un proceso innovador sin creatividad puede dar lugar a soluciones poco originales. Ambas competencias son esenciales para el éxito emprendedor y deben integrarse en cualquier proyecto.
    .row.mb-5
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.align-items-start.bg-verde-claro.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-38.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") En un mercado saturado, la creatividad e innovación permiten a los emprendedores destacar. Productos o servicios innovadores no solo satisfacen necesidades, sino que también pueden redefinir industrias. Por ejemplo, empresas como Apple y Tesla han revolucionado sus sectores al combinar estas habilidades, estableciendo nuevos estándares en tecnología y movilidad.

    p.text-bold.mb-4 Desarrollando la creatividad
    p.mb-4 Fomentar la creatividad implica cultivar un entorno que valore la experimentación y la curiosidad. Esto se puede lograr mediante:

    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

      .tarjeta.bg-amarillo.p-4(x="31%" y="20%" numero="+")
        .h5.mb-2 Exposición a diversidad de ideas
        p Explorar diferentes disciplinas, culturas y experiencias para ampliar el horizonte creativo.
      .tarjeta.bg-rojo.p-4(x="55%" y="20%" numero="+")
        .h5.mb-2 Herramientas creativas
        p Utilizar técnicas como lluvia de ideas, mapas mentales y pensamiento lateral para encontrar soluciones no convencionales.
      .tarjeta.bg-azul.p-4(x="79%" y="20%" numero="+")
        .h5.mb-2 Entornos colaborativos
        p Trabajar con equipos diversos para enriquecer el proceso creativo con múltiples perspectivas.

    p.text-bold.mb-4 Fomentando la innovación
    p.mb-4 La innovación requiere adoptar una mentalidad orientada al cambio y la mejora continua. Entre las estrategias clave se incluyen:

    .row.mb-4
      .col-8.col-md-6.col-xl-4.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-right")
        .bg-amarillo-3.p-4.mb-0.text-center
          p.text-bold.mb-0 Compresión del mercado
        .bg-amarillo-3-claro.p-4.text-center.h-100
          span.text-center Identificar necesidades y oportunidades a través de análisis detallados.
      .col-8.col-md-6.col-xl-4.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-up")
        .bg-amarillo-3.p-4.mb-0.text-center
          p.text-bold.mb-0 Iteración constante
        .bg-amarillo-3-claro.p-4.text-center.h-100
          span.text-center Ajustar y mejorar continuamente los productos o servicios.
      .col-8.col-md-6.col-xl-4.mx-auto.d-flex.flex-column.mb-4(data-aos="fade-left")
        .bg-amarillo-3.p-4.mb-0.text-center
          p.text-bold.mb-0 Colaboración estratégica
        .bg-amarillo-3-claro.p-4.text-center.h-100
          span.text-center Involucrar a socios, clientes e inversionistas para validar y perfeccionar ideas.

    p.text-bold.mb-4 Colaboración y diversidad
    p.mb-4 Tanto la creatividad como la innovación se benefician enormemente de la colaboración. La inclusión de diversas perspectivas, conocimientos y experiencias en equipos de trabajo fortalece el proceso creativo y mejora la efectividad de las soluciones innovadoras. Además, la retroalimentación de múltiples actores permite desarrollar proyectos más sólidos y adaptados a las necesidades reales del mercado.

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-azul.p-4.mb-4
          span En un mundo caracterizado por cambios rápidos y avances tecnológicos, la creatividad y la innovación son más relevantes que nunca. Estas competencias no solo ayudan a los emprendedores a adaptarse a un entorno dinámico, sino que también los posicionan como líderes capaces de anticiparse a tendencias y generar impacto positivo en la sociedad.
        span La creatividad y la innovación son los pilares del emprendimiento, donde la creatividad imagina lo posible y la innovación lo convierte en realidad. Estas habilidades, aplicadas estratégicamente, potencian las posibilidades de éxito al generar valor y transformar realidades. Cultivar ambas competencias es esencial para cualquier emprendedor que busque destacarse y generar impacto en un mercado competitivo y en constante evolución.
      .d-none.d-xl-block.col-xl-4(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')


    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Creatividad e innovación
                  p.text-small Si desea conocer más sobre creatividad e innovación, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://elibro.net/es/lc/tecnologicadeloriente/login_usuario/?next=/es/lc/tecnologicadeloriente/titulos/41300/" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right
        
    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Toma de decisiones y gestión del riesgo


    p.mb-4 La toma de decisiones y la gestión del riesgo constituyen elementos centrales en el comportamiento emprendedor. Estas competencias no solo permiten transformar ideas en proyectos viables, sino que también ayudan a enfrentar un entorno lleno de incertidumbre. Al desarrollarlas, puedes evaluar estratégicamente las oportunidades y minimizar los impactos adversos asociados a los riesgos inherentes al emprendimiento.
    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
  
        figure
          .video
            <iframe width="1903" height="748" src="https://www.youtube.com/embed/QPZdu6Pb5_o" title="La toma de decisiones y gestión del riesgo en el emprendimiento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    p.mb-4 Por ejemplo, al lanzar un nuevo producto, un emprendedor puede realizar pruebas piloto para recopilar retroalimentación inicial, reducir la incertidumbre y ajustar estrategias antes del lanzamiento masivo. 

    .row.mb-4
      .col-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        .row.mb-4
          .d-flex.align-items-center
            div.d-flex.align-items-center.bg-verde-claro.px-3.py-4
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-42.svg', alt='Texto que describa la imagen')
              p.pe-xl-5.mb-0  En un entorno empresarial dinámico, la capacidad de adaptarse rápidamente a los cambios es esencial. Avances tecnológicos, crisis económicas o cambios regulatorios pueden alterar las condiciones del mercado de manera inesperada. La flexibilidad y resiliencia permiten ajustar las estrategias y mantener la viabilidad del proyecto.

    p.mb-4 La toma de decisiones y la gestión del riesgo también tienen un importante componente emocional. Los emprendedores enfrentan presión constante y deben mantener la calma, tomar decisiones racionales y comunicar efectivamente con sus equipos. La inteligencia emocional es fundamental para manejar el estrés y fomentar un entorno de trabajo positivo.

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        .bg-rojo.p-4
          span La toma de decisiones y la gestión del riesgo son competencias esenciales en el emprendimiento. Al desarrollar habilidades analíticas, estratégicas y emocionales, puedes convertirte en un líder resiliente y visionario. Estas competencias no solo te permiten superar desafíos, sino también identificar oportunidades que impulsen tu proyecto hacia el éxito, generando impacto positivo tanto en el mercado como en la sociedad.
      .d-none.d-xl-block.col-xl-4(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Gestión de riesgos 
                  p.text-small Si desea conocer más sobre la gestión de riesgos como herramienta estratégica de gestión empresarial, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/131885" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right
        
    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 Resiliencia y adaptabilidad

    p.mb-4 La resiliencia y la adaptabilidad son habilidades clave para el éxito en el emprendimiento, especialmente en entornos dinámicos y desafiantes. Estas competencias permiten superar obstáculos, aprender de ellos y ajustarse de manera ágil a los cambios del entorno.
    h2 Resiliencia: enfrentar adversidades
    p.mb-4 La resiliencia implica recuperarse de fracasos y mantener la motivación ante dificultades. Ayuda a:

    .row.mb-4
      .col-4.ms-auto.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
      .col-10.col-lg-8.mx-auto.ms-lg-0.me-lg-auto(data-aos="fade-left")
        .bg-gris.p-4.px-lg-5.h-100.d-flex.flex-column.justify-content-center
          .d-flex.flex-column
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 Aprender de errores para mejorar estrategias.
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 Manejar el estrés con enfoque y calma.
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 Mantener una mentalidad positiva para avanzar.
    h2 Adaptabilidad: ajustarse al cambio
    p.mb-4 La adaptabilidad permite ajustarse a nuevos escenarios y aprovechar oportunidades. Esto incluye: 
    .row.mb-4
      .col-10.col-lg-8.mx-auto.ms-lg-0.me-lg-auto(data-aos="fade-right")
        .bg-gris.p-4.px-lg-5.h-100.d-flex.flex-column.justify-content-center
          .d-flex.flex-column
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 Anticipar y responder con agilidad a cambios del mercado.
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 Rediseñar estrategias o productos según las demandas.
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 Innovar y encontrar soluciones en un entorno incierto.
      .col-4.ms-auto.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
    
    p.text-bold.mb-4 Conexión entre resiliencia y adaptabilidad
    p.mb-4 Ambas competencias se complementan: la resiliencia aporta fortaleza emocional, mientras la adaptabilidad facilita respuestas prácticas. Juntas, te preparan para liderar proyectos sostenibles y convertir desafíos en oportunidades.
    p.mb-4 Desarrollo de estas competencias como: 
    .row.mb-4
      .col-8.col-md-6.col-lg-4.mx-auto(data-aos="fade-up")
        .bg-verde.p-4
          p.text-center.mb-0 Practica la autorreflexión y busca apoyo en redes de mentores.
      .col-8.col-md-6.col-lg-4.mx-auto(data-aos="fade-up")
        .bg-verde.p-4
          p.text-center.mb-0 Mantente informado sobre tendencias y fomenta una mentalidad abierta.
      .col-8.col-md-6.col-lg-4.mx-auto(data-aos="fade-up")
        .bg-verde.p-4
          p.text-center.mb-0 Colabora con equipos diversos para enriquecer soluciones.
    p.mb-5 La resiliencia y adaptabilidad lo posicionan como un líder preparado para superar desafíos, innovar y mantener la relevancia en mercados cambiantes. Cultivarlas asegura la sostenibilidad de sus proyectos y su desarrollo profesional.

    .row.mb-5
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Resiliencia organizacional
                  p.text-small Si desea conocer más sobre resiliencia organizacional, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/218827" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right

    .row.bg-rojo.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Casos exitosos de emprendimiento
          p.mb-5 En el documento se destacan casos emblemáticos de éxito empresarial en Colombia que combinan innovación, sostenibilidad y estrategias de impacto social. Ejemplos como Rappi, Crepes & Waffles, TOTTO y Vélez ilustran cómo estas empresas lograron trascender sus mercados locales, transformándose en referentes internacionales.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Casos exitosos de emprendimiento.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Casos exitosos de emprendimiento
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul.mb-5
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/225511") Godoy Villalobos, A. (2021). Las 22 leyes inmutables del emprendimiento. RIL editores.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/94010") Ponti, F. (2009). La empresa creativa: metodologías para el desarrollo de la innovación. Ediciones Granica.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/75247") Barber Kuri, C. M. & Díaz Becerril, C. F. (2014). Casos empresariales. Tomo I. Editorial Miguel Ángel Porrúa.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=gXNiVSvWf2U") Mariacanovirtual. (2024). Creatividad, innovación y emprendimiento [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=xOklu29CVzA") Ministerio TIC Colombia. (2018). Bienestapp, emprendimiento colombiano [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Emprendimiento y Desarrollo Empresarial',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué herramienta estratégica ayuda a evaluar riesgos en emprendimientos?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Matrices de riesgo', esCorrecta: true },
            { id: 'b', texto: 'Mapas mentales', esCorrecta: false },
            { id: 'c', texto: 'Técnicas de brainstorming', esCorrecta: false },
            { id: 'd', texto: 'Modelos de trabajo rígidos', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué objetivo tiene la Ley 2069 respecto a las pequeñas empresas?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer impuestos más altos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promover su crecimiento mediante incentivos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituirlas por grandes empresas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restringir su acceso a tecnología',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué rol juega la economía naranja en el desarrollo emprendedor?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Promover la creatividad y la innovación como motores de crecimiento',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir sectores tradicionales',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la diversidad cultural',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Enfocarse exclusivamente en productos digitales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento es clave para garantizar la equidad de género en el ámbito empresarial?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusión de hombres en roles de liderazgo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Implementación de políticas inclusivas y educativas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducción de oportunidades laborales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitación de programas de mentoría',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué característica distingue a los emprendimientos apoyados por incubadoras?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Están diseñados para operar sin redes de apoyo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reciben mentorías y recursos para acelerar su desarrollo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Operan únicamente en mercados locales',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dependen exclusivamente de sus propias inversiones',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
