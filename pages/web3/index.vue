<script setup lang="ts">
const router = useRouter()

const choices = [
  { name: 'S.E.E.D. ZORA COLLECTIVE DROP V1.0', link: '/web3/zorav1' },
  { name: 'Refraciton x Proof of People // NFT NYC 2023', link: '/web3/popnftnyc2023' }
]
</script>

<template>
  <div
    class="absolute top-0 left-0 w-full h-full flex bg-black text-white font-bold font-title flex-col items-center justify-center text-4xl px-6"
  >
    <div class="flex flex-col gap-8">
      <div
        v-for="choice in choices"
        :key="choice.name"
        @click="router.push(choice.link)"
        class="cursor-pointer text-green w-full"
      >
        _{{ choice.name }}
      </div>
    </div>
  </div>
</template>
