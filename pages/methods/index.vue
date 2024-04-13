<script setup lang="ts">
const router = useRouter()

const choices = [
  { name: 'Parallel Biome Hypothesis', link: '/pbh' },
  { name: 'Cyberia', link: '/cyberia' }
]
</script>

<template>
  <div
    class="w-full h-full flex bg-black text-white font-title flex-col items-center justify-center"
  >
    <div v-for="choice in choices" :key="choice.name" @click="router.push(choice.link)">
      {{ choice.name }}
    </div>
  </div>
</template>
