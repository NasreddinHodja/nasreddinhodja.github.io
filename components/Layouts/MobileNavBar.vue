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
    class="pt-6 px-6 h-26 z-10 text-white flex flex-col gap-3 font-bold pb-2 font-title"
    :class="{ 'bg-black': !['/'].includes(route.path) }"
  >
    <div class="flex w-full text-4xl font-bold items-end justify-between">
      <div @click="router.push('/')" class="flex">S.E.E.D.</div>
      <div @click="router.push('/')" class="flex">
        <img src="@/assets/img/logo_singularity.png" class="w-24 pb-1" />
      </div>
    </div>
    <div class="flex flex-row w-full justify-between">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="router.push(item.link)"
        class="z-10"
      >
        {{ item.title }}
      </div>
      <div class="absolute -inset-x-4 z-0 flex justify-between w-full">
        <div v-for="(item, index) in items" :key="index" class="w-full text-white flex">
          <div v-if="index > 0">｜</div>
        </div>
      </div>
    </div>
  </div>
</template>
