/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        green: '#aed795',
        pdf: '#f6b26b',
        video: '#88c070',
        audio: '#7c9bc5',
        img: '#a894f2',
        gif: '#ff9494',
        txt: '#6bb27d',
        dir: '#ffa500',
        installation: '#ffcc5c',
        performance: '#e56db1'
      },
      fontFamily: {
        base: ['Roboto'],
        title: ['Grotesk']
      }
    }
  },
  plugins: []
}
