import { defineNuxtPlugin } from 'nuxt/app'
import { createManager } from '@vue-youtube/core'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createManager)
})
