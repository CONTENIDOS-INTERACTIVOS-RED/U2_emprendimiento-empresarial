<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definiciones de emprendimiento, emprendedor y empresa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        p.mb-4 El <b>emprendimiento</b> es un fenómeno dinámico y transformador que combina creatividad, innovación y estrategia para identificar oportunidades, enfrentar desafíos y generar soluciones sostenibles. Va más allá de la creación de empresas, siendo un motor de cambio que impulsa el progreso económico, social y ambiental.
        .row.mb-4
          .d-flex.align-items-center
            div.d-flex.align-items-center.bg-rojo.px-3.py-4
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
              .d-flex.flex-column
                p.text-bold.mb-2 El emprendedor

                p.pe-xl-4.mb-0 Es la persona que lidera este proceso, caracterizándose por su capacidad de identificar necesidades, asumir riesgos calculados y desarrollar proyectos innovadores que generen valor en diferentes contextos. Su papel incluye no solo la implementación de ideas visionarias, sino también la adaptación constante a las dinámicas del entorno.
        p.text-bold.mb-2 La empresa

        span En este marco, es el vehículo mediante el cual el emprendedor materializa sus ideas, transformándolas en productos, servicios o soluciones que implican positivamente en la sociedad.
      .col-4.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')

    h2 Características del emprendimiento
    p.mb-4 El emprendimiento se distingue por varios aspectos clave que lo hacen un motor de transformación:
    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width.mb-4
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Conexión con la innovación
              p Impulsa el desarrollo de productos, servicios y modelos disruptivos.
              p <b>Ejemplo:</b> las startups tecnológicas que aprovechan herramientas como inteligencia artificial y big data.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Adaptación y toma de riesgos 
              p Evalúa escenarios y mitiga riesgos mediante una planificación estratégica.
              p Fomenta una mentalidad resiliente donde los fracasos son aprendizajes.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Generación de valor 
              p <b>- Económico:</b> creación de empleo y dinamización del mercado.
              p <b>- Social:</b> inclusión mediante programas educativos o de salud.
              p <b>- Ambiental: </b> adopción de prácticas sostenibles.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Transformación cultural
              p Cambia el statu quo, promoviendo innovación, cambio y colaboración.

    .bg-fondo-2.bg-full-width.mb-4
      .px-5.pb-md-3.py-4
        p.text-bold.mb-4 Tipos de emprendimiento
        p.mb-4 El emprendimiento abarca diversas modalidades que responden a diferentes necesidades y contextos.
        .row.mb-4
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Emprendimiento tradicional
                p.text-small.px-4.text-center.pb-2 Creación de negocios con fines de lucro, como pequeñas y medianas empresas familiares.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Emprendimiento social
                p.text-small.px-4.text-center.pb-2 Proyectos sostenibles enfocados en resolver problemas sociales o ambientales.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Emprendimiento tecnológico
                p.text-small.px-4.text-center.pb-2 Redefinición de industrias mediante soluciones basadas en ciencia y tecnología.
          .col-10.col-md-6.col-lg-4.col-xl-3.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Intraemprendimiento
                p.text-small.px-4.text-center.pb-2 Desarrollo de ideas innovadoras dentro de organizaciones existentes, fomentando creatividad e innovación interna.

    p.mb-4.text-bold Retos del emprendimiento
    p.mb-4 Aunque transformador, el emprendimiento enfrenta desafíos significativos:
    .row.mb-4
      .col-6.col-md-4.col-xl-3.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-amarillo-3.p-4.mb-0.text-center
          p.text-bold.mb-0 Acceso limitado a
          p.text-bold.mb-0 Financiamiento
        .bg-amarillo-3-claro.p-4.text-center.h-100
          span.text-center Barrera común para emprendedores en etapas iniciales. 
      .col-6.col-md-4.col-xl-3.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-amarillo-2.p-4.mb-0.text-center
          p.text-bold.mb-0 Burocracia
          p.text-bold.mb-0 Excesiva
        .bg-amarillo.p-4.text-center.h-100
          span.text-center Dificulta el registro y operación de nuevos  negocios
      .col-6.col-md-4.col-xl-3.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-amarillo-3.p-4.mb-0.text-center
          p.text-bold.mb-0 Falta de redes
          p.text-bold.mb-0 de apoyo
        .bg-amarillo-3-claro.p-4.text-center.h-100
          span.text-center Limita la colaboración y el intercambio de recursos.
      .col-6.col-md-4.col-xl-3.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-amarillo-2.p-4.mb-0.text-center
          p.text-bold.mb-0 Incursión en mercados
          p.text-bold.mb-0 saturados
        .bg-amarillo.p-4.text-center.h-100
          span.text-center Requiere diferenciación y posicionamiento estratégico. 

    p.text-bold.mb-4 Beneficios educativos del emprendimiento
    p.mb-4 El proceso emprendedor fomenta el desarrollo personal y profesional al proporcionar:
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-2.text-bold(data-aos="fade-up") Habilidades clave:
            span Pensamiento crítico, resolución de problemas, liderazgo y negociación.
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-2.text-bold(data-aos="fade-up") Mentalidad de crecimiento
            span Impulsa la adaptación y reinvención en un entorno cambiante.
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-16.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-2.text-bold(data-aos="fade-up") Inspiración colectiva
            span Motiva a otros a explorar su potencial y contribuir al progreso social. 

    p.mb-4 El emprendimiento es un fenómeno integral que trasciende la creación de empresas. Su capacidad para transformar ideas en soluciones sostenibles lo convierte en un pilar del progreso contemporáneo. Entender su importancia no solo permite emprender con éxito, sino también posicionarse como un agente de cambio capaz de impactar positivamente en su entorno y en el mundo.
    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Emprendedor

    p.mb-4 El <b>emprendedor</b> es la figura central del proceso de emprendimiento, una persona que identifica oportunidades, impulsa la innovación y genera valor en diferentes contextos. Su papel combina habilidades personales, intelectuales y estratégicas que transforman ideas en soluciones tangibles con impacto positivo a nivel local y global.
    h2 Características principales del emprendedor
    p.mb-4 Los emprendedores destacan por una serie de características que los posicionan como motores de cambio e innovación en la sociedad.
    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Mentalidad disruptiva
              p Observa el entorno desafiando el statu quo para proponer soluciones innovadoras a problemas complejos. Esta mentalidad es producto de un aprendizaje continuo y una disposición abierta al cambio.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Gestión del riesgo 
              p Transforma el riesgo en una oportunidad al combinar análisis racional, intuición y experiencia acumulada para anticipar escenarios y mitigar incertidumbres.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Liderazgo transformacional
              p Combina dirección estratégica con conexión emocional hacia su equipo, inspirando y motivando a otros para comprometerse con una visión compartida basada en colaboración y creatividad.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Resiliencia
              p Capacidad para superar fracasos, aprender de ellos y adaptarse a cambios inesperados en el entorno, manteniendo la motivación frente a los desafíos constantes.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Pensamiento estratégico
              p Diseña estrategias alineadas con tendencias del mercado y necesidades de los clientes, gestionando recursos de manera eficiente para garantizar la sostenibilidad de sus proyectos.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Motivación intrínseca
              p Impulsado por un propósito más allá de beneficios económicos, busca impactar positivamente en su entorno a través de mejoras sociales, ambientales o económicas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Agente de cambio social
              p Promueve inclusión, equidad e innovación, particularmente en sectores desatendidos, mediante modelos que combinan rentabilidad e impacto social.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold.mb-4 Transformación digital
              p Desempeña un papel clave en la adopción de tecnologías disruptivas como inteligencia artificial y blockchain, impulsando la competitividad y explorando nuevas oportunidades para la sociedad.
      
    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4
        
        h2 Impacto del emprendedor
        p.mb-4 El impacto del emprendedor trasciende múltiples ámbitos, transformando economías y comunidades.

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Económico
              p.px-1.text-small.mb-0.d-flex.text-center Crea empleo y dinamiza mercados, fomentando la competitividad y el desarrollo económico. 
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Social
              p.px-1.text-small.mb-0.d-flex.text-center Contribuye a la inclusión y equidad mediante iniciativas en educación, salud, y sostenibilidad.
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Cultural
              p.px-1.text-small.mb-0.d-flex.text-center Cambia la percepción del entorno promoviendo innovación, colaboración y una mentalidad proactiva.  
          .col-10.col-md-8.col-lg-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-28.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Educativo
              p.px-1.text-small.mb-0.d-flex.text-center Inspira a otros al compartir conocimientos y experiencias, generando un efecto multiplicador en comunidades. 

    h2 Desafíos del emprendedor
    p.mb-4 El camino del emprendedor está lleno de desafíos que requieren habilidades y estrategias para superarlos.
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Gestión de la incertidumbre")
            p Enfrenta entornos volátiles y toma decisiones informadas bajo presión, adaptándose rápidamente a los cambios del mercado.
          .div(titulo="Acceso a recursos limitados")
            p Optimiza recursos financieros y humanos en un entorno competitivo.
          .div(titulo="Competencia")
            p Se diferencia mediante estrategias de innovación y posicionamiento en mercados saturados.
          .div(titulo="Equilibrio personal y profesional")
            p Maneja el estrés y la carga laboral, asegurando un balance que permita sostenibilidad en su vida personal y profesional.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
    
    p.mb-4 El emprendedor es un puente entre la innovación y la acción, alguien que materializa ideas abstractas en soluciones concretas con impacto duradero. Su capacidad para liderar, adaptarse y generar valor define no solo su éxito individual, sino también el progreso de las economías y comunidades en las que opera. En un mundo en constante evolución, el emprendedor es una figura clave que encarna el espíritu de transformación y la búsqueda continua de nuevas oportunidades.
    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2
        h2 Empresa

    p.mb-4 La empresa es una organización estructurada para coordinar recursos humanos, financieros, tecnológicos y materiales con el propósito de producir bienes o servicios que satisfagan necesidades específicas en el mercado. Además de generar beneficios económicos, las empresas impactan la sociedad y el medio ambiente, fomentando la innovación, el crecimiento económico y la sostenibilidad. Su operación se da en un entorno cambiante donde las demandas del mercado y las innovaciones tecnológicas son constantes.
    h2 Componentes esenciales de la empresa
    p.mb-4 Una empresa se sostiene sobre componentes esenciales que determinan su propósito y funcionamiento.

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-amarillo-oscuro.p-4
          .d-flex
            p ●
            p.ms-2 <b>Misión:</b> define el propósito principal de la empresa, indicando el impacto que busca generar.
          .d-flex
            p ●	
            p.ms-2 <b>Visión:</b> establece los objetivos estratégicos a largo plazo.
          .d-flex
            p ●
            p.ms-2 <b>Estructura funcional:</b> organiza actividades y recursos en áreas como producción, marketing, finanzas y gestión de recursos humanos, asegurando la eficiencia operativa. 
          .d-flex
            p ●
            p.ms-2 <b>Generación de valor:</b> se manifiesta en la creación de empleo, desarrollo de productos y satisfacción de necesidades específicas en el mercado.

    p.mb-4 La clasificación de las empresas se realiza según diversos criterios que reflejan su actividad y propósito.
    p.mb-4 <b>Tabla 1. </b> Clasificación de las empresas
    .row.mb-4
      .col-10.mx-auto

         .tabla-a.mb-5
            table
              thead
                tr
                  th.text-white.bg-verde-oscuro.text-center Criterio 
                  th.text-white.bg-verde-oscuro.text-center Tipos
                  th.text-white.bg-verde-oscuro.text-center Descripción
              tbody
                tr.bg-verde-claro(data-aos="fade-up")
                  td.text-center.text-bold Sector economico
                  td.text-center Primario
                  td.text-center Agricultura, minería, pesca.
                tr.bg-verde-claro(data-aos="fade-up")
                  td.text-center.text-bold Sector económico
                  td.text-center Secundario
                  td.text-center Industria y manufactura.
                tr.bg-verde-claro(data-aos="fade-up")
                  td.text-center.text-bold Sector económico
                  td.text-center Terciario
                  td.text-center Servicios y comercio.
                tr.bg-verde-claro(data-aos="fade-up")
                  td.text-center.text-bold Propósito
                  td.text-center Tradicional
                  td.text-center Busca maximizar beneficios económicos.
                tr.bg-verde-claro(data-aos="fade-up")
                  td.text-center.text-bold Propósito
                  td.text-center Social o sostenible
                  td.text-center Integra objetivos sociales y ambientales junto con los económicos.
    .bg-fondo-2.bg-full-width.mb-5
      .px-5.pb-md-3.py-4
        
        h2 Retos empresariales
        p.mb-4 Las empresas enfrentan diversos retos que desafían su sostenibilidad y éxito en el mercado:

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Adaptación al entorno
              p.px-1.text-small.mb-0.d-flex.text-center Las empresas enfrentan cambios constantes en regulaciones, políticas públicas y demandas del mercado.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Competitividad
              p.px-1.text-small.mb-0.d-flex.text-center Implica la diferenciación y el posicionamiento estratégico en mercados saturados.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-33.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Sostenibilidad
              p.px-1.text-small.mb-0.d-flex.text-center Busca balancear el crecimiento económico con prácticas responsables que minimicen el impacto ambiental.

    .bg-amarillo-2.bg-full-width.mb-5
      .px-5.pb-md-3.py-4
        .row.mb-4
          .d-flex.align-items-center
            div.d-flex.align-items-center
              img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-34.svg', alt='Texto que describa la imagen')
              p.pe-xl-5.mb-0 La empresa es una herramienta fundamental para canalizar ideas hacia proyectos concretos que generen valor económico, social y ambiental. Su comprensión integral es clave para gestionar sus recursos y aprovechar sus oportunidades en un entorno dinámico.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/129642") Herruzo-Gómez, E., et al. (2019). Emprendimiento e innovación: oportunidades para todos. Dykinson.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/191127") Salcedo Camacho, P. D. (2021). Programa emprendedor. Universidad Privada del Valle.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/52801") L. Villagrá, F. (2011). Empresa e iniciativa emprendedora. Macmillan Iberia.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/61471") Rajadell Carreras, M. (2016). Creación de empresas. Universitat Politècnica de Catalunya.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=WTiM1yq99oI") Ministerio TIC Colombia. (2013). Historias de emprendimiento en Colombia y el mundo [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=nJaBVkiqgBc") Víctor Cámara. (2020). Para poder tener un emprendimiento exitoso [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=xrr3UAFOnPg") ParqueSoft Pasto. (2016). Conoce los ocho tipos de Emprendedores [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
