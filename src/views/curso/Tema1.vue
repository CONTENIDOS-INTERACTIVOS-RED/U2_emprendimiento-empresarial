<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Aspectos Normativos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4 La <b>Ley 1014 de 2006</b>, conocida como la Ley de Fomento a la Cultura del Emprendimiento, es un pilar fundamental del marco normativo colombiano diseñado para consolidar el emprendimiento como un componente esencial del desarrollo económico, social y cultural. Su enfoque innovador busca integrar el espíritu emprendedor en la educación, promoviendo una mentalidad que no solo transforma a los individuos, sino que también impulsa la transformación de las comunidades y el país en general. 
        p.mb-1.text-bold Objetivos y enfoque integral
        p.mb-4 La ley establece que el emprendimiento no debe limitarse a la creación de negocios, sino que debe ser entendido como una competencia integral que incluye creatividad, resolución de problemas, toma de decisiones estratégicas y asunción de riesgos calculados.
        .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Para lograrlo, promueve la inclusión del emprendimiento como eje transversal en todos los niveles educativos, desde la educación básica hasta la formación técnica, tecnológica y superior. Esto garantiza que los estudiantes, independientemente de su área de estudio, adquieran herramientas prácticas para identificar oportunidades y materializar ideas innovadoras.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  
    
    h2 Elementos destacados de la Ley 1014
    p.mb-4 La Ley 1014 destaca como un marco normativo clave para promover el espíritu emprendedor en Colombia, enfocándose en la educación y el impacto social.

    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
            .col-md-12.col-xl-5.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Espacios de aprendizaje práctico
              p La normativa fomenta actividades como ferias empresariales, concursos de ideas, laboratorios de innovación y simulaciones empresariales. Estas iniciativas permiten a los estudiantes interactuar con el sector productivo, aplicar conocimientos en contextos reales y fortalecer habilidades prácticas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
            .col-md-12.col-xl-5.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Inclusión y diversidad disciplinaria
              p La ley promueve el espíritu emprendedor en todas las disciplinas, desde las ciencias hasta las artes, ampliando las perspectivas de innovación y enriqueciendo el ecosistema emprendedor del país.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
            .col-md-12.col-xl-5.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Impacto social
              p El emprendimiento se presenta como una herramienta para la equidad y el desarrollo inclusivo, fomentando proyectos en comunidades vulnerables, reduciendo brechas económicas y generando empleo y oportunidades.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
            .col-md-12.col-xl-5.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Cambio cultural
              p Al integrar el emprendimiento en el sistema educativo, se impulsa una cultura de innovación y liderazgo, preparando a las nuevas generaciones para ser agentes de cambio y líderes en proyectos sostenibles.

    h2 Desafíos en la implementación
    p.mb-4 La implementación de la Ley 1014 enfrenta diversos desafíos que limitan su alcance y efectividad.
    
    .row.mb-3
      .col-12.col-lg-3.bg-amarillo-3.p-4.text-center(data-aos="fade-right")
        p.text-bold.mb-0 Recursos educativos insuficientes 
      .col-12.col-lg-9.bg-amarillo-3-claro.p-4(data-aos="fade-left")
        span No todas las instituciones cuentan con los recursos necesarios para implementar programas efectivos. Se requieren capacitaciones docentes, infraestructura adecuada y contenidos actualizados.
    .row.mb-3
      .col-12.col-lg-3.bg-rojo.p-4.text-center(data-aos="fade-right")
        p.text-bold.mb-0 Desigualdad regional
      .col-12.col-lg-9.bg-rojo-claro.p-4(data-aos="fade-left")
        span Las diferencias en los recursos disponibles en las diversas regiones del país han dificultado una implementación equitativa.
    .row.mb-4
      .col-12.col-lg-3.bg-azul.p-4.text-center(data-aos="fade-right")
        p.text-bold.mb-0 Sostenibilidad de proyectos
      .col-12.col-lg-9.bg-verde-claro.p-4(data-aos="fade-left")
        span Muchos estudiantes enfrentan barreras como la falta de financiamiento, mentorias y redes de apoyo para consolidad sus ideas en el mercado.

    p.text-bold.mb-4 Avances y oportunidades
    p.mb-4 A pesar de estos desafíos, la Ley 1014 ha logrado integrar el emprendimiento en la agenda educativa y social del país, contribuyendo al desarrollo de una generación más preparada para los retos contemporáneos. Además, ha promovido políticas públicas complementarias, como programas de financiamiento para emprendedores jóvenes y plataformas de innovación colaborativa.
    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .bg-amarillo.p-4
          span La Ley 1014 de 2006 posiciona el emprendimiento como una herramienta clave para el desarrollo sostenible en Colombia. Su enfoque inclusivo e integral ha permitido que el emprendimiento sea reconocido como una competencia esencial, con impacto positivo en la economía, la sociedad y la cultura. Esta normativa brinda a las nuevas generaciones la oportunidad de convertirse en líderes de proyectos transformadores, fortaleciendo el tejido social y económico del país.

    
    .row.mb-5
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Ley 1014 de 2006 
                  p.text-small Si desea conocer más sobr e la Ley 1014 de 2006, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1014_2006.html" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right
        
    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Ley 2069 de 2020: Ley de Emprendimiento

    p.mb-4 La Ley 2069 de 2020, conocida como la <b>Ley de Emprendimiento</b>, representa un paso significativo en el fortalecimiento del ecosistema emprendedor en Colombia. Esta normativa tiene como objetivo no solo fomentar la creación de nuevas empresas, sino también consolidar aquellas que ya están en funcionamiento, impulsando la innovación, competitividad y sostenibilidad. La ley resalta el compromiso del Estado colombiano con el emprendimiento como motor de empleo, innovación tecnológica y desarrollo social.
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-amarillo.p-4
          p.text-bold.mb-3 Simplificación de trámites y formalización
          span Uno de los elementos más destacados de esta ley es la <b>reducción de barreras burocráticas</b> para la formalización empresarial. La digitalización de procesos, como el registro mercantil y la obtención de licencias, agiliza los trámites para los emprendedores. Esto no solo elimina costos innecesarios, sino que también acelera los tiempos, permitiendo a los emprendedores legalizar sus negocios de manera más eficiente y accesible.
      .d-none.d-xl-block.col-xl-5(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    h2 Acceso al financiamiento
    p.mb-4 La Ley 2069 introduce mecanismos que facilitan el acceso a recursos económicos para los emprendedores:

    .row.mb-4
      .col-8.col-md-6.col-xl-4.mx-auto.d-flex.flex-column(data-aos="fade-right")
        .bg-azul.p-4.mb-0.text-center
          p.text-bold.mb-0 Fondos de inversión especializados
           
        .bg-verde-claro.p-4.text-center.h-100
          span.text-center Creación de fondos dirigidos a startups y proyectos innovadores.
      .col-8.col-md-6.col-xl-4.mx-auto.d-flex.flex-column(data-aos="fade-up")
        .bg-rojo.p-4.mb-0.text-center
          p.text-bold.mb-0 Microcréditos
           
        .bg-rojo-claro.p-4.text-center.h-100
          span.text-center Promoción de líneas de crédito con condiciones preferenciales.
      .col-8.col-md-6.col-xl-4.mx-auto.d-flex.flex-column(data-aos="fade-left")
        .bg-amarillo-3.p-4.mb-0.text-center
          
          p.text-bold.mb-0 Programas de garantías estatales
        .bg-amarillo-3-claro.p-4.text-center.h-100
          span.text-center Apoyo a emprendedores para reducir riesgos y facilitar la obtención de financiamiento.

    p.mb-4 Estas iniciativas son esenciales tanto para proyectos en etapas iniciales como para aquellos en proceso de expansión, brindando un respaldo financiero clave.

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-left")
        .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-12.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-2.text-bold Inclusión y equidad
            span La ley fomenta un <b>ecosistema emprendedor inclusivo</b>, con programas dirigidos a mujeres, jóvenes, comunidades rurales y minorías étnicas. Esto asegura que todos los sectores de la población tengan acceso a oportunidades, promoviendo un crecimiento económico más equitativo y justo.

    p.text-bold.mb-4 Innovación como eje estratégico
    p.mb-4 La Ley 2069 impulsa la innovación como componente central del emprendimiento. Entre los incentivos clave destacan:

    .row.mb-3
      .col-12.col-lg-3.bg-amarillo-3.p-4.text-center(data-aos="fade-right")
        p.text-bold.mb-0 Beneficios fiscales
      .col-12.col-lg-9.bg-amarillo-3-claro.p-4(data-aos="fade-left")
        span Reducción de impuestos para proyectos de base tecnológica y científica. 
    .row.mb-3
      .col-12.col-lg-3.bg-rojo.p-4.text-center(data-aos="fade-right")
        p.text-bold.mb-0 Apoyo técnico
      .col-12.col-lg-9.bg-rojo-claro.p-4(data-aos="fade-left")
        span Programas que facilitan la implementación de proyectos innovadores.
    .row.mb-4
      .col-12.col-lg-3.bg-azul.p-4.text-center(data-aos="fade-right")
        p.text-bold.mb-0 Focalización sectorial
      .col-12.col-lg-9.bg-verde-claro.p-4(data-aos="fade-left")
        span Priorización de sectores como tecnología, ambiente y agroindustria , considerados de alto impacto para la economía nacional.

    p.text-bold.mb-4 Redes de apoyo al emprendedor
    p.mb-4 La ley promueve la creación y fortalecimiento de redes de apoyo como aceleradoras, incubadoras y clústeres sectoriales. Estas redes ofrecen:
    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-13.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 <b>Acompañamiento técnico:</b> mentorías y asesorías especializadas.
            div.d-flex.mb-0
              p.mb-0.me-2 •
              p.mb-0 <b>Conexiones estratégicas:</b> enlace con aliados del sector público y privado.
    p.mb-4 La cooperación entre el sector público y privado es clave para crear un entorno colaborativo que facilite el desarrollo empresarial.
    h2 Sostenibilidad y capacitación continua
    p.mb-4 La Ley 2069 también prioriza la sostenibilidad de las empresas existentes. Para ello, establece:
    .row.mb-3
      .col-12.col-md-10.mx-auto(data-aos="fade-up")
        .bg-gris.p-4.mb-3
          .row
            .col-auto.d-flex.mx-auto.mb-3.mb-md-0
              img(style="width:90px" src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen')
            .col-12.col-md-5.d-flex.mb-3.mb-md-0
              h2.my-auto Programa de formación
            .col-12.col-md-5
              span Capacitación en gestión financiera, marketing digital y estrategias de exportación. 
    .row.mb-3
      .col-12.col-md-10.mx-auto(data-aos="fade-up")
        .bg-gris.p-4.mb-3
          .row
            .col-auto.d-flex.mx-auto.mb-3.mb-md-0
              img(style="width:90px" src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen')
            .col-12.col-md-5.d-flex.mb-3.mb-md-0
              h2.my-auto Adaptabilidad al mercado
            .col-12.col-md-5
              span Herramientas para que los emprendedores respondan a las demandas del entorno cambiante.


    h2 Internacionalización
    p.mb-4 La normativa fomenta la <b>expansión de emprendimientos a mercados internacionales</b> mediante: 
    .row.mb-5
      .col-12.col-xl-5(data-aos="fade-right")
        div.d-flex.mb-2
          p.mb-0.me-2 •
          p.mb-0 Acceso a programas de promoción de exportaciones.
        div.d-flex.mb-2
          p.mb-0.me-2 •
          p.mb-0 Participación en ferias internacionales.
        div.d-flex.mb-2
          p.mb-0.me-2 •
          p.mb-0 Reducción de barreras arancelarias y logísticas.
      .d-none.d-xl-block.col-xl-3(data-aos="fade-up")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
      .col-12.col-xl-4(data-aos="fade-left")
        .bg-amarillo.p-4
          span Esto permite que los emprendedores colombianos compitan en mercados globales, ampliando el alcance de sus productos y servicios.
    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column.bg-azul-3.p-4(data-aos="fade-left")
        p.text-bold.mb-3 Promoción de la cultura emprendedora
        span La ley refuerza la <b>cultura emprendedora</b> a través de campañas educativas y de sensibilización que inspiran a las nuevas generaciones a ver el emprendimiento como una opción viable de desarrollo profesional. Este enfoque fomenta valores como innovación, resiliencia y responsabilidad social, esenciales para el éxito empresarial.

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.flex-column.bg-verde-claro.p-4(data-aos="fade-right")
        p.text-bold.mb-3 Impacto y visión a futuro
        span En conjunto, la Ley 2069 de 2020 proporciona un <b>marco normativo integral</b> que apoya todas las etapas del emprendimiento, desde la idea inicial hasta su expansión internacional. Aprovechar los beneficios que ofrece esta ley posiciona a los emprendedores como actores clave en el desarrollo económico y social de Colombia. La normativa subraya la importancia del emprendimiento como herramienta transformadora, destacando su potencial para generar impacto positivo tanto en la sociedad como en el entorno económico.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Ley 2069 de 2020
                  p.text-small Si desea conocer más sobre  la Ley 2069 de 2020, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=160966" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Ley 2234 de 2022: Política de Emprendimiento Social
    
    p.mb-4 La Ley 2234 de 2022, conocida como la <b>Política de Emprendimiento Social</b>, representa un avance crucial en el marco normativo colombiano, estableciendo un soporte sólido para iniciativas empresariales que prioricen el impacto social y ambiental por encima del lucro económico, garantizando su sostenibilidad financiera. Esta normativa sitúa al emprendimiento social como una herramienta clave para abordar problemáticas estructurales en comunidades vulnerables y en el entorno natural, promoviendo modelos de negocio transformadores.
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .d-flex.align-items-start.bg-amarillo.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-20.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La Ley 2234 define al <b>emprendimiento social</b> como aquellas iniciativas empresariales cuya misión principal es generar valor social o ambiental mientras operan bajo un modelo económico sostenible. Este enfoque rompe con el paradigma tradicional del negocio centrado exclusivamente en la rentabilidad, permitiendo que proyectos enfocados en resolver desafíos como la pobreza, desigualdad, exclusión social y cambio climático tengan un respaldo legal y operativo en el país.


    .bg-fondo-3.bg-full-width
      .px-5.pb-md-3.py-4
        p.text-bold.mb-4 Incentivos y financiamiento
        p.mb-4 Uno de los pilares más destacados de la ley es la creación de incentivos específicos para eliminar barreras y fomentar la sostenibilidad de los emprendimientos sociales. Entre los principales beneficios se incluyen:
        .row.mb-4
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mx-auto.ms-lg-auto.me-lg-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Exenciones <br>fiscales
              p.px-1.text-small.mb-0.d-flex.text-center Reducción de la carga tributaria para emprendedores sociales, lo que les permite destinar mas recursos a sus actividades de impacto. 
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mx-auto.ms-lg-0.me-lg-auto(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style="width: 80px")
              p.text-bold.mb-4.text-center Mecanismos de financiamiento <br>especializado
              p.px-1.text-small.mb-0.d-flex.text-center Fondos de inversión de impacto, programas de microcréditos con tasas preferenciales, periodos de gracia extendidos y requisitos de acceso flexibles, todos diseñados para fortalecer las etapas iniciales de los proyectos.

    p.text-bold.mb-4 Redes de apoyo y colaboración
    p.mb-4 La normativa fomenta la creación de redes que conecten a los emprendedores sociales con diversos actores, como:

    .bg-gris.p-4.mb-3(data-aos="fade-up")
      .row
        .col-auto.d-flex.mx-auto.mb-3.mb-md-0
          img(style="width:90px" src='@/assets/curso/unidad/img-23.svg', alt='Texto que describa la imagen')
        .col-12.col-md-5.d-flex.mb-3.mb-md-0
          h2.my-auto Entidades gubernamentales
        .col-12.col-md-5
          span Acceso a recursos públicos y programas de apoyo.
    .bg-gris.p-4.mb-3(data-aos="fade-up")
      .row
        .col-auto.d-flex.mx-auto.mb-3.mb-md-0
          img(style="width:90px" src='@/assets/curso/unidad/img-24.svg', alt='Texto que describa la imagen')
        .col-12.col-md-5.d-flex.mb-3.mb-md-0
          h2.my-auto ONG y empresas privadas 
        .col-12.col-md-5
          span Espacio para mentorías y cooperación técnica.
    .bg-gris.p-4.mb-3(data-aos="fade-up")
      .row
        .col-auto.d-flex.mx-auto.mb-3.mb-md-0
          img(style="width:90px" src='@/assets/curso/unidad/img-25.svg', alt='Texto que describa la imagen')
        .col-12.col-md-5.d-flex.mb-3.mb-md-0
          h2.my-auto Instituciones educativas
        .col-12.col-md-5
          span Formación de desarrollo de capacidades.

    p.mb-4 Estas redes permiten escalar proyectos, fortalecer competencias operativas y maximizar el impacto de las iniciativas.

    h2 Sostenibilidad y prácticas responsables
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La Ley 2234 promueve la adopción de <b>prácticas sostenibles</b> mediante:
        .bg-amarillo.p-4.mb-4
          .d-flex.flex-column
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 <b>Economía circular:</b> modelos que optimizan recursos y reducen desechos.
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 <b>Innovación tecnológica: </b>implementación de soluciones tecnológicas para generar impacto ambiental positivo.
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 <b>Competitividad sostenible: </b>integración de criterios ambientales que incrementan el valor percibido por los consumidores.
        span Este enfoque busca no solo reforzar el compromiso de los emprendedores con el medio ambiente, sino también garantizar su viabilidad en mercados que valoran la sostenibilidad.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    p.text-bold.mb-4 Medición del impacto
    p.mb-4 La medición del impacto social y ambiental es un eje central de esta ley. Se establecen estándares e indicadores que permiten:
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Evaluar el alcance de las iniciativas")
            p Medir el impacto de las acciones a través de indicadores como número de beneficiarios, reducción de huellas ambientales y mejora en la calidad de vida de comunidades.
          .div(titulo="Rendición de cuentas")
            p Garantizar transparencia ante socios, inversionistas y entidades gubernamentales para fortalecer la confianza en las operaciones.
          .div(titulo="Credibilidad del proyecto")
            p Fortalecer la legitimidad de los emprendimientos en el ecosistema, demostrando compromiso y resultados tangibles.

    p.text-bold.mb-4 Inclusión y equidad
    p.mb-4 La ley prioriza el apoyo a emprendimientos liderados por:

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-amarillo.p-4.mb-4
          .d-flex.flex-column
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 <b>Poblaciones vulnerables: </b>mujeres, jóvenes, comunidades rurales y minorías étnicas.
            div.d-flex.mb-2
              p.mb-0.me-2 •
              p.mb-0 <b>Regiones afectadas por conflictos: </b>reconocimiento del emprendimiento social como herramienta para reconstruir tejido social y fomentar la equidad territorial.
        span Este enfoque inclusivo busca garantizar que todas las personas tengan acceso a los recursos necesarios para desarrollar proyectos empresariales transformadores.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    p.text-bold.mb-4 Alineación con los Objetivos de Desarrollo Sostenible (ODS)
    p.mb-5 La Ley 2234 se alinea con los <b>ODS de las Naciones Unidas</b>, abordando problemáticas como la pobreza, la igualdad de género, la acción climática y el acceso a servicios básicos. Esto posiciona a Colombia como un referente en la promoción de modelos empresariales responsables, abriendo puertas a redes internacionales, financiamiento global y mayor visibilidad para los emprendimientos sociales del país. 

    h2 Desafíos en su implementación
    p.mb-4 Aunque la Ley 2234 ofrece un marco prometedor, su implementación enfrenta retos como:
    .row.mb-4
      .col-8.col-md-6.col-lg-4.mx-auto(data-aos="fade-up")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
      .col-8.col-md-6.col-lg-4.mx-auto(data-aos="fade-up")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
      .col-8.col-md-6.col-lg-4.mx-auto(data-aos="fade-up")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
    
    p.mb-4 La Ley 2234 de 2022 redefine el concepto de emprendimiento en Colombia, integrando dimensiones sociales y ambientales en su marco regulatorio. Al facilitar incentivos, herramientas y redes de apoyo, los emprendedores sociales tienen la oportunidad de liderar proyectos que no solo sean económicamente viables, sino que también generen un impacto positivo y duradero en las comunidades y el entorno. Esta ley establece las bases para un ecosistema inclusivo, innovador y sostenible, fortaleciendo la posición de Colombia como un país comprometido con el desarrollo equitativo y la sostenibilidad global.
    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-up")

        .rounded.shadow.p-3.py-lg-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/componentes/link-icon-circle.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-bold.mb-3 Ley 2234 de 2022 
                  p.text-small Si desea conocer más sobre la Ley 2234 de 2022, se recomienda consultar el siguiente recurso:
                .col-sm-auto
                  a.download-btn.boton.bg-azul-2.text-white(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=189388" target="_blank")
                    span.text-small Ir al sitio
                    i.fas.fa-arrow-right

    .row.bg-amarillo.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Otras normativas 
          p.mb-5 En el documento se expone un panorama detallado sobre las normativas complementarias relacionadas con el emprendimiento en Colombia, que van más allá de las leyes principales como la Ley 1014 de 2006, la Ley 2069 de 2020 y la Ley 2234 de 2022.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Otras normativas.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Normativas complementarias.
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.mincit.gov.co/getattachment/6f817ee6-ece7-40f0-8cc0-7b31cfc639b8/Circular-030-del-22-de-diciembre-de-2023.aspx") Ministerio de Comercio, Industria y Turismo (2023). Circular No. 30 Implementación de la ley 2234 de 2022.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/217715") Galindo Rodríguez, O. A., et al. (2021). Casos empresariales colombianos. Fondo Editorial CEIPA.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=J6WHOcgaiKg") Negocios En Tu Mundo. (2017). Normatividad Jurídica en la Maratón de Emprendimiento [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=W4s1Yw0EONQ") Cápsulas tributarias. (2021). Aspectos tributarios de la Ley 2069 [Vídeo]
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=dr_BSHfZkWU") Ministerio TIC Colombia. (2014). Caso de éxito - TeVeo - Apps.co [Vídeo]
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
