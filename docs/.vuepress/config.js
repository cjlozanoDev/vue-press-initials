module.exports = {
  title: 'Mi sitio con VuePress',
  description: 'Creación de ayuda con vue-press',

  //   head: [
  //     [
  //       'link',
  //       {
  //         rel: 'icon',
  //         href: `/icono.ico`
  //       }
  //     ]
  //   ],

  base: '/dist/ayuda',
  //  base: '/',      Hay que ponerlo así si quieres hacer una construcción "local" de la web (por ejemplo, para enviarlo a S3)
  dest: 'dist/ayuda',
  patterns: ['**/*.md', '**/*.vue'],
  markdown: {
    toc: { includeLevel: [2, 3, 4] },
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' }
  },
  themeConfig: {
    docsDir: '../docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Google', link: 'https://google.com' }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
       title: 'Introducción a la app',
       collapsable: true,
       children: [
        './01._MANUAL_DE_USUARIO/01.01_Introduccion_a_app.md',
        './01._MANUAL_DE_USUARIO/01.02_Pagina_principal.md'
       ]
      },
      {
       title: 'Configuración app',
       collapsable: true,
       children: [
        './02._CONFIGURACION/02.01_Configuracion_inicial.md'
       ]
      }
    ]
  }
}