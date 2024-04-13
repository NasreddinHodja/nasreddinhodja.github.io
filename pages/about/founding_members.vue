<script setup lang="ts">
const members = [
  {
    name: 'Raiana Moraes',
    link: 'https://linktr.ee/raimoraes'
  },
  {
    name: 'Rodrigus Pinheiro',
    link: 'https://linktr.ee/rodrigus_pinheiro'
  },
  {
    name: 'Nas',
    link: 'https://github.com/NasreddinHodja'
  },
  {
    name: 'Lucas Silva',
    link: 'https://www.701lucas.cargo.site'
  },
  {
    name: 'Felipe Filgueiras',
    link: 'https://www.felipefilgueiras.com'
  },
  {
    name: 'babi!',
    link: 'https://linktr.ee/foguentinheonline'
  },
  {
    name: 'Daniel Junqueira',
    link: 'https://linktr.ee/danieljunqueira'
  },
  {
    name: 'Gabriel KÖI',
    link: 'https://www.gabrielkoi.com'
  }
]
</script>

<template>
  <div class="w-full h-full bg-black font-title flex items-center justify-center gap-5">
    <div>
      <div v-for="member in members" :key="member.name">
        <a :href="member.link" class="text-green text-3xl">{{ member.name }}</a>
      </div>
    </div>
  </div>
</template>
