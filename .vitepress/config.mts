import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/React_y_Next_14/',
  title: "React y Next 14",
  description: "Índice y Materiales del Curso de React",
  themeConfig: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Índice Principal', link: 'https://xixay.github.io/ayuda-memoria/' }
    ],
    sidebar: [
      {
        text: 'Clases',
        items: [
          { text: '1. Fundamentos JS', link: '/clases/fundamentos-js' },
          { text: '2. React + Vite + Fund', link: '/clases/react-vite' },
          { text: '3. Formularios', link: '/clases/formularios' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xixay/React_y_Next_14' }
    ]
  }
})
