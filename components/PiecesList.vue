<script setup lang="ts">
const pieces = [
  {
    title: "rain_dance_on_magellanic_clouds.png",
    url: "https://objkt.com/tokens/KT1Ro7fyAmAiLmLignzzCeT9Q25UMgh9pWkf/49",
    image: "pieces/rain_dance_on_magellanic_clouds.png",
  },
  {
    title: "naseeb_mera_jaga_diya.png",
    url: "https://zora.co/collect/zora:0xe1905bd2b8ea85fc86614b94df38c8a9e8eef440/1?referrer=0xebf02f03b9fbc20a6dd93fdd416d13187768a873",
    image: "pieces/naseeb_mera_jaga_diya.png",
  },
  {
    title: "hate_the_player.png",
    url: "https://zora.co/collect/zora:0x0c5a0f5859dba5d5c2c893968a2d497b17ea2e12/14?referrer=0xebf02f03b9fbc20a6dd93fdd416d13187768a873",
    image: "pieces/hate_the_player.png",
  },
  {
    title: "nao_pega_nao.png",
    url: "https://postimg.cc/py7YqxtJ",
    image: "pieces/nao_pega_nao.png",
  },

  {
    title: "4nd7roxnas.png",
    url: "",
    image: "pieces/4nd7roxnas.png",
  },
  {
    title: "20x_por_dia.png",
    url: "https://postimg.cc/t1PjWCs7",
    image: "pieces/20x_por_dia.png",
  },
  {
    title: "hithithit.png",
    url: "https://postimg.cc/0r641PZF",
    image: "pieces/hithithit_insta.png",
  },
];
</script>
<template>
  <div class="bg-black/90 md:p-10 p-4 flex flex-col gap-4">
    <div class="md:text-xl">Pieces</div>
    <div class="grid lg:grid-cols-2 gap-10">
      <div v-for="piece in pieces" :key="piece.url">
        <PieceCard :title="piece.title" :url="piece.url" :image="piece.image" />
      </div>
    </div>
  </div>
</template>
