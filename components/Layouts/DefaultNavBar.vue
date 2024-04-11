<script setup lang="ts">
const router = useRouter()

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
    class="flex w-full h-40 bg-black text-white gap-4 text-2xl font-bold items-end justify-between px-40"
  >
    <div @click="router.push('/')" class="text-4xl">S.E.E.D.</div>
    <div class="flex gap-4 flex-row">
      <div v-for="(item, index) in items" key="index" class="flex gap-4">
        <div v-if="index > 0">｜</div>
        <div @click="router.push(item.link)">{{ item.title }}</div>
      </div>
    </div>
    <div @click="router.push('/')">
      <img src="@/assets/img/logo_singularity.png" class="w-40" />
    </div>
  </div>
</template>
