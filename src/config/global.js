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
    numeroUnidad: '1',
    tituloUnidad: 'Emprendimiento social',
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
        titulo: 'Unidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Emprendedor',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Empresa',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Unidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Liderazgo en el emprendimiento',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Unidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Enfoque ambiental',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Enfoque sociológico',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Enfoque psicológico',
            hash: 't_3_3',
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
        'Ballvé, A. M. & Fontana, A. (2021). El propósito de la empresa: hacia un liderazgo directivo centrado en el bien común. LID Editorial Empresarial.',
      link: 'Elibro.net',
    },
    {
      referencia:
        'Bolivar Palechor. (2019, 22 enero). Por qué PENSAR en grande | Mentalidad | Liderazgo | Emprendimiento | Motivación [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=l606Ff3YRX0',
    },
    {
      referencia:
        'Gomez, M. (2024). Pirámide de Maslow: qué es, ejemplos y cómo usarla.',
      link: 'https://blog.hubspot.es/marketing/piramide-maslow-marketing',
    },
    {
      referencia:
        'Herruzo-Gómez, E., Hernández-Sánchez, B. R., & Cardella, G. M. (2019). Emprendimiento e innovación: oportunidades para todos. Dykinson.',
      link: 'Elibro.net',
    },
    {
      referencia:
        'Il Sung Park, S., & Duarte Masi, S. (2015). El perfil del emprendedor y los estudios relacionados a los emprendedores Iberoamericanos. Revista Internacional de Investigación en Ciencias Sociales, 11(2), 291-314.',
      link: 'https://doi.org/10.18004/riics.2015.diciembre.291-314',
    },
    {
      referencia:
        'Negocios En Tu Mundo. (2020, 19 febrero). Emprendimiento y salud mental - [Negocios en Tm]® [Vídeo]. YouTube.',
      link: 'https://www.youtube.com/watch?v=svnc2qzRJAA',
    },
    {
      referencia:
        'Salcedo Camacho, P. D. (2021). Programa emprendedor. Universidad Privada del Valle.',
      link: 'Elibro.net',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Habilidad de ajustar estrategias y acciones frente a cambios en el entorno o condiciones imprevistas.',
    },
    {
      termino: 'Capital Social',
      significado:
        'Recursos accesibles a través de redes de relaciones personales o profesionales, fundamentales para emprender.',
    },
    {
      termino: 'Creatividad',
      significado:
        'Capacidad de generar ideas novedosas y originales para resolver problemas o aprovechar oportunidades.',
    },
    {
      termino: 'Ecosistema Emprendedor',
      significado:
        'Conjunto de actores, instituciones y recursos que facilitan o dificultan la actividad empresarial en un contexto específico.',
    },
    {
      termino: 'Emprendedor',
      significado:
        'Persona que identifica oportunidades, asume riesgos y lidera proyectos que transforman ideas en realidades.',
    },
    {
      termino: 'Emprendimiento',
      significado:
        'Proceso de identificar, desarrollar y ejecutar ideas innovadoras que generan valor económico, social o ambiental.',
    },
    {
      termino: 'Empresa',
      significado:
        'Organización que coordina recursos para producir bienes o servicios y satisfacer necesidades del mercado.',
    },
    {
      termino: 'Innovación',
      significado:
        'Implementación de ideas, productos o procesos nuevos que aportan valor significativo al mercado o la sociedad.',
    },
    {
      termino: 'Inteligencia Emocional',
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
      termino: 'Modelo de Negocio',
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
      termino: 'Responsabilidad Social Corporativa',
      significado:
        'Prácticas empresariales que buscan un impacto positivo en la sociedad y el medio ambiente.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Desarrollo que satisface las necesidades actuales sin comprometer las capacidades de las futuras generaciones.',
    },
    {
      termino: 'Toma de Riesgos',
      significado:
        'Disposición para asumir decisiones con incertidumbre calculada, con el objetivo de generar valor.',
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
