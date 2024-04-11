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
  <div class="px-8 pt-6 h-26 z-10 text-white flex flex-col gap-4">
    <div
      class="flex w-full text-2xl font-bold items-end justify-between"
      :class="{ 'bg-black': route.path !== '/' }"
    >
      <div @click="router.push('/')" class="flex">S.E.E.D.</div>
      <div @click="router.push('/')">
        <img src="@/assets/img/logo_singularity.png" class="w-24 pb-1" />
      </div>
    </div>
    <div class="flex flex-row w-full justify-between">
      <div
        v-for="(item, index) in items"
        key="index"
        class="flex grow"
        :class="{ 'border-l': index !== 0 }"
      >
        <!-- <div v-if="index > 0">｜</div> -->
        <div
          @click="router.push(item.link)"
          class="flex grow"
          :class="{
            'justify-start': index === 0,
            'justify-center': index > 0 && index < items.length - 1,
            'justify-end': index === items.length - 1
          }"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
