<script setup lang="ts">
const pieces = [
  {
    title: 'noon parallelism',
    href: 'https://zora.co/collect/0xd5160927bfe934f65e349abb3a92cc49871ab9e1'
  },
  {
    title: 'xhrzd underground lab',
    href: 'https://zora.co/collect/0xAb91E7ee802584aD68c23eCFAcF5824bEF730FDd/1'
  },
  {
    title: 'WEIRD SENSATION',
    href: 'https://zora.co/collect/0x907e2ea28394b337018c88994562520c57840b8e'
  },
  {
    title: 'day-at-the-beach_2017.sMmry.injct',
    href: 'https://zora.co/collect/0x05BDd4A8A61AC5FA3A26476c8e05813504a71f1E/1'
  },
  {
    title: 'hithithit.png',
    href: 'https://zora.co/collect/0x2577b607b9dd69365b2bdfbb40ff8dd651bf96a9'
  },
  {
    title:
      'Torcida Jovem Fla Na Ilha Do Sol Com o Barulho Do Mar / Young Crowd Fla On The Island Of The Sun With The Noise Of The Sea',
    href: 'https://zora.co/collect/0xb5898d79b1c129a6596a77f0d9ef5df5a2022119'
  },
  {
    title: 'How to keep a secret (?) - attempt #1',
    href: 'https://zora.co/collect/0x4c6b15e275c165394a01c379b74e9b5b9e338131/1'
  },
  {
    title: 'DOSSIER_SCAN_REMIX',
    href: 'https://zora.co/collect/0xe87f54b6df62c9fcc316ef199bffea7480727c8d/1'
  }
]
</script>

<template>
  <div class="bg-black w-full h-full flex flex-col pt-5 md:pt-10">
    <div class="w-full px-2 md:max-w-[800px] mx-auto flex flex-col md:gap-10 gap-5">
      <div class="text-4xl text-green font-bold">
        S.E.E.D. Collective Exibition on Refraciton x Proof of People Festival at Zero
        Space NYC - as part of NFT NYC 2023
      </div>
      <div class="h-full w-full flex items-center justify-center">
        <iframe
          src="https://www.youtube.com/embed/bsqFDRoNSIA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-[600px] h-[400px]"
        ></iframe>
      </div>

      <div class="w-full h-full text-green flex flex-col gap-2 pb-20">
        <div v-for="piece in pieces" :key="piece.href">
          <a
            :href="piece.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-3xl font-title"
          >
            _{{ piece.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
