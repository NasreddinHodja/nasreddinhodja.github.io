<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const items = [
  {
    title: 'about',
    link: '/about'
  },
  {
    title: 'web3',
    link: '/web3'
  },
  {
    title: 'methods',
    link: '/methods'
  }
]
</script>

<template>
  <div
    class="sticky top-0 flex w-full h-40 text-white font-title gap-4 text-4xl font-extrabold items-end justify-between px-40 z-10 pb-4"
    :class="{ 'bg-black': route.path !== '/' }"
  >
    <div @click="router.push('/')" class="text-6xl">S.E.E.D.</div>
    <div class="flex gap-4 flex-row">
      <div v-for="(item, index) in items" key="index" class="flex gap-4">
        <div v-if="index > 0">｜</div>
        <div @click="router.push(item.link)">{{ item.title }}</div>
      </div>
    </div>
    <div @click="router.push('/')" class="min-w-40">
      <img src="@/assets/img/logo_singularity.png" class="w-40" />
    </div>
  </div>
</template>
