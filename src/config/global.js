export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad: 'El espíritu emprendedor',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Aspectos Normativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ley 2069 de 2020: Ley de Emprendimiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ley 2234 de 2022: Política de Emprendimiento Social',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El pensamiento y comportamiento emprendedor',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Creatividad e innovación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Toma de decisiones y gestión del riesgo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Resiliencia y adaptabilidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de Colombia (2006, 26 enero). Ley 1014 de fomento a la cultura del emprendimiento.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1014_2006.html',
    },
    {
      referencia:
        'Congreso de Colombia (2009, 23 enero). Ley 1286. Por la cual se modifica la Ley 29 de 1990, se transforma a Colciencias en Departamento Administrativo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34850',
    },
    {
      referencia:
        'Congreso de Colombia (2018, 27 julio). Ley 1931. Por la cual se establecen directrices para la gestión del cambio climático.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=87765',
    },
    {
      referencia:
        'Congreso de Colombia (2019, 18 julio). Ley 1972. Por medio de la cual se establece la protección de los derechos a la salud y al medio ambiente sano.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/ley-1972-2019.pdf',
    },
    {
      referencia:
        'Congreso de Colombia (2019, 27 diciembre). Ley 2210. Por medio de la cual se adoptan normas para la promoción del crecimiento económico.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=159687',
    },
    {
      referencia:
        'Congreso de Colombia (2020, 31 diciembre). Ley 2069 Por medio del cual se impulsa el emprendimiento en Colombia.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=160966',
    },
    {
      referencia:
        'Congreso de Colombia (2022, 08 julio). Ley 2234 Por la cual se promueve la política de emprendimiento social.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=160966',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (2020, 30 noviembre). Documento CONPES. Política Nacional de Emprendimiento.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4011.pdf',
    },
    {
      referencia:
        'Deulofeu Aymar, J. (2016). Emprendiendo la excelencia en el retail: caso Farret: empresa sostenible. Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/115603',
    },
    {
      referencia:
        'Galván, L. (2015). Creatividad para el cambio: innovación para la vida y la empresa. Universidad Peruana de Ciencias Aplicadas (UPC).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/41300',
    },
    {
      referencia:
        'Guilera, L. & Garrell, A. (2021). Productos y servicios inteligentes y sostenibles: técnicas para la innovación y la creatividad. Marge Books.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/172965',
    },
    {
      referencia:
        'Presidente de la República (2019, 05 junio). Decreto 957. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=94550',
    },
    {
      referencia:
        'Presidente de la República (2020, 22 diciembre). Decreto 1733. Por el cual se reglamenta la Ley 2024 de 2020.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=154026',
    },
    {
      referencia:
        'Sánchez López, S. B. (Comp.) & Zuluaga Trujillo, J. (Comp.). (2022). Industrias creativas: innovación y emprendimiento de mujeres en América Latina (1 ed.). Universidad de los Andes.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/218342',
    },
    {
      referencia:
        'Tamayo Saborit, M. & Gonzalez Capote, D. (2020). La gestión de riesgos: herramienta estratégica de gestión empresarial. Editorial Universo Sur.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/131885',
    },
    {
      referencia:
        'Véliz Montero, F. (2021). Resiliencia organizacional (2 ed.). Editorial Gedisa.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/218827',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Capacidad de ajustar estrategias y acciones frente a cambios en el entorno o condiciones imprevistas.',
    },
    {
      termino: 'Capital social',
      significado:
        'Recursos accesibles a través de redes de relaciones personales o profesionales, fundamentales para emprender.',
    },
    {
      termino: 'Competitividad',
      significado:
        'Capacidad de una empresa o individuo para destacar y mantenerse relevante en un mercado dinámico y exigente.',
    },
    {
      termino: 'Creatividad',
      significado:
        'Capacidad de generar ideas novedosas y originales para resolver problemas o aprovechar oportunidades.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de valores, normas y prácticas compartidas que definen el comportamiento dentro de una organización.',
    },
    {
      termino: 'Ecosistema emprendedor',
      significado:
        'Conjunto de actores, instituciones y recursos que facilitan o dificultan la actividad empresarial en un contexto específico.',
    },
    {
      termino: 'Innovación tecnológica',
      significado:
        'Uso de avances tecnológicos para desarrollar productos, procesos o servicios que generen valor significativo.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'Capacidad para gestionar emociones propias y comprender las de los demás, favoreciendo relaciones interpersonales efectivas.',
    },
    {
      termino: 'Intraemprendimiento',
      significado:
        'Desarrollo de proyectos innovadores dentro de organizaciones existentes, impulsados por empleados emprendedores.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Habilidad de influir, motivar y guiar a otros hacia el logro de objetivos comunes.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'Estrategia que define cómo una empresa crea, entrega y captura valor en su mercado.',
    },
    {
      termino: 'Motivación',
      significado:
        'Impulso interno o externo que inspira a una persona a actuar y alcanzar metas específicas.',
    },
    {
      termino: 'Proactividad',
      significado:
        'Actitud de anticiparse a los problemas o necesidades, buscando soluciones antes de que ocurran.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'Capacidad de superar adversidades, aprender de ellas y seguir adelante con mayor fortaleza.',
    },
    {
      termino: 'Toma de riesgos',
      significado:
        'Disposición para asumir decisiones con incertidumbre calculada, con el objetivo de generar valor.',
    },
    {
      termino: 'Transformación social',
      significado:
        'Impacto positivo generado por iniciativas que abordan problemas estructurales mediante estrategias sostenibles e inclusivas.',
    },
    {
      termino: 'Visión',
      significado:
        'Proyección estratégica de lo que una organización aspira alcanzar en el largo plazo.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
