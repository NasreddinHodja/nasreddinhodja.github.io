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
        green: '#aed795'
      },
      fontFamily: {
        base: ['Roboto'],
        title: ['Grotesk']
      }
    }
  },
  plugins: []
}
