<script setup lang="ts">
const pieces = [
  {
    type: 'VIDEO',
    img: 'ladylethal.png',
    link: 'https://zora.co/collect/zora:0x5766a5effc7ea4b540b819b8bb44c59c8953ee3b/6?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'IMG',
    img: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeigcgqfocilrdxcsvdaebljoher3ljfvfmo2utt4x5fatvn65au4m4&w=1080&q=75',
    link: 'https://zora.co/collect/zora:0x0473034cd7392526b3931c8985d0a41b367a2b1e/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'VIDEO',
    img: 'koi.png',
    link: 'https://zora.co/collect/zora:0x875b1af986a8acb6b5c36b3a82d6c3179ded661c/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'VIDEO',
    img: 'princesinhadapas.png',
    link: 'https://zora.co/collect/zora:0xd8170bb9406401826b2cf02b6122213da0148135/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'MODEL',
    img: 'shido.png',
    link: 'https://zora.co/collect/zora:0x73c88be5450458ec8eb7250e7fb68f2b7a2a9e8f/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'VIDEO',
    img: 'lvkinhas.png',
    link: 'https://zora.co/collect/zora:0x14cfb8e98ad2be72270216ee5e56f6743cd8d054/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'VIDEO',
    img: 'fil.png',
    link: 'https://zora.co/collect/zora:0x2666b44dba038c40da70809d9e6f3e4bb9bcd072/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'IMG',
    img: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeig5wnusrwdltoisjxqgzqgzj73mrr4kjux7e3trdissj7fhsm5ziu&w=1080&q=75',
    link: 'https://zora.co/collect/zora:0x7522c48d1d10545374654075a8fb12466211e0f5/1?referrer=0xc8D159F9A0D7299eA37aAEf081Cd3384F86557AD'
  },
  {
    type: 'GIF',
    img: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeial2z76zad7f7meqngrvgrxdgeopriexyou3z2fplmbpaqgq5zbgu&w=1080&q=75',
    link: 'https://zora.co/collect/zora:0xc5aa49f5757bed4f5836c20f15ceecd87b89f585/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'GIF',
    img: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeic4zwtiuzjehtnxw6nxpkuyq63e2ihzqxf5bff6npjctbfnlcem64&w=1080&q=75',
    link: 'https://zora.co/collect/zora:0x23917048acce548e2b90121b1dca4f8e83a5f9ae/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'VIDEO',
    img: 'fallen.png',
    link: 'https://zora.co/collect/zora:0x4e93372581632503ac23ab396e4253259313feaa/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'IMG',
    img: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeifqisqnvami3nbcqpds4ewtywyvb34xvfqm4yu4seh3o4aflfzvfy&w=1080&q=75',
    link: 'https://zora.co/collect/zora:0xbb8435bb32492c10e5f9ced8a751f56776bec800/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'WEB',
    img: 'pashe.png',
    link: 'https://zora.co/collect/zora:0x668c90e59effe3f88128ef6ce9274b924311a475/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'IMG',
    img: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafkreiepgmnca6twsbbkobjsjekaxvxu5xxjqkinsswgvq72vw2w7imznu&w=1080&q=75',
    link: 'https://zora.co/collect/zora:0x5a02827d7818541c556b644e91dcb6aff7353bd2/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'GIF',
    img: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeigclsryz73ft42vhiz3uz7bvpu7bnccqkyel2qzv6oqnd3zkx4afa&w=1080&q=75',
    link: 'https://zora.co/collect/zora:0x855567bdaba147b6c6bdddcb623ec42388ee129f/7?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'WEB',
    img: 'tilma.png',
    link: 'https://zora.co/collect/zora:0xc37325acbd6b8646b8f580bf5f797d3c5f14bb75/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'VIDEO',
    img: 'rodrigus.png',
    link: 'https://zora.co/collect/zora:0xdfbc5ebb62db40564291a3203eec734259af1b36/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'VIDEO',
    img: '100.png',
    link: 'https://zora.co/collect/zora:0xa857ff5ec9e19794356e36510d584c7a4c79a893/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'VIDEO',
    img: 'xpqzl.png',
    link: 'https://zora.co/collect/zora:0x5470016ffa2f597be9de47c015e10865f9ca3937/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  },
  {
    type: 'IMG',
    img: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafkreicnddg6spi2mscc35e35sfo3bzwemajrj2gox3zxiakvobedzrok4&w=1080&q=75',
    link: 'https://zora.co/collect/zora:0xb0e509e6b6fa676e3b7cdd63a162cc97a266465d/1?referrer=0xc8D159F9A0D7299eA37aAEf081Cd3384F86557AD'
  },
  {
    type: 'VIDEO',
    img: 'ronda.png',
    link: 'https://zora.co/collect/zora:0xa55fdc47a1eff3cd62024839ffb302a98404204d/1?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32'
  }
]

function getImgUrl(img: string) {
  if (img.startsWith('https')) {
    return img
  } else {
    return `/zorav1/${img}`
  }
}
</script>

<template>
  <div
    class="w-full h-full px-5 pt-5 md:pt-10 bg-black text-white flex flex-col gap-10 md:gap-40"
  >
    <div
      class="w-full flex flex-col items-center gap-5 md:gap-16 md:px-80 text-xl md:text-2xl"
    >
      <a
        href="https://zora.co/collect/zora:0x38045fbf52060c88dc61ea3b5972865ea1316a72"
        target="_blank"
        class="text-4xl font-bold font-title text-green w-full"
      >
        S.E.E.D. ZORA COLLECTIVE DROP V1.0
      </a>
      <div id="flyer" class="w-full md:w-1/2">
        <a
          href="https://zora.co/collect/zora:0x38045fbf52060c88dc61ea3b5972865ea1316a72/1"
          target="_blank"
        >
          <img
            src="https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeiapyohrijvnhv5eufnp46bprcmm74skkeuhh46qunenjwidd3st3q&w=1080&q=75"
          />
        </a>
      </div>
      <div>
        Through
        <span class="font-bold text-green">S.E.E.D.: ZORA COLLECTIVE DROP V. 0.1</span>
        , the S.E.E.D. collective proposes a first round of creation and minting of pieces
        from each of its 9 participants, also inviting 11 other artists/creators to join
        this creation movement in WEB3, with a focus primarily on the production of
        Brazilian artists/creators and representatives from the Global South.
        Unprecedented, the pieces presented in
        <span class="font-bold text-green">COLLECTIVE DROP V. 0.1</span>
        — a total of 20 pieces, from 20 participants — were specially conceived for the
        occasion, highlighting the specificities of the research, languages, and poetics
        of each of the creators.
      </div>
      <div>
        By minting the pieces of
        <span class="font-bold text-green">S.E.E.D.: ZORA COLLECTIVE DROP V. 0.1</span>
        , you support the collective and the involved artists/creators in the following
        ways: Finance the production of artistic works by
        <span class="font-bold text-green">S.E.E.D.</span>
        members and invited artists/creators — both in WEB3 and in IRL contexts; Support
        and enable the growth of our community of Brazilian and Global South artists and
        creators; Expand the visibility of the
        <span class="font-bold text-green">S.E.E.D.</span>
        collective in WEB3 to develop future cultural projects — both in WEB3 and in IRL
        exhibitions and events; Raise funds for the
        <span class="font-bold text-green">S.E.E.D.</span>
        collective to structure itself as a DAO and, once again, continue proposing our
        projects and empowering others;
        <span class="font-bold text-green">S.E.E.D. : ZORA COLLECTIVE DROP V. 0.1</span>
        is a multifaceted technological creation device, with possibilities for initiation
        and assembly that are unimaginably complex and surprising, changing with each
        attempt at connection, depending on the work proposal of each of the participants
        and the worlds they point towards.
      </div>
      <div class="text-4xl text-green">We greatly appreciate your support!</div>
      <div class="md:w-1/2">
        <figure>
          <video controls>
            <source src="@/public/zorav1/DRLOLLI_COMPRESSEDD.webm" type="video/webm" />
          </video>
          <figcaption>
            <a
              href="https://zora.co/collect/zora:0x38045fbf52060c88dc61ea3b5972865ea1316a72/2?referrer=0x52974E8f4BD9C71E3905bd90EFa009e209125e32"
              target="_blank"
              class="border-l-2 pl-3 mt-2 border-green text-xl"
            >
              Welcome To S.E.E.D. Experiments Laborathory
              <sub>(click for HD)</sub>
            </a>
          </figcaption>
        </figure>
      </div>
      <div class="md:w-1/2">
        <a
          href="https://zora.co/collect/zora:0x38045fbf52060c88dc61ea3b5972865ea1316a72/3"
          target="_blank"
        >
          <img class="w-full" src="@/public/zorav1/GIF_COMPRESSED_SEEDHEART.gif" />
        </a>
      </div>
      <div class="flex flex-col gap-10">
        <div class="text-4xl font-title font-bold text-green">
          S.E.E.D. Artists/creators in S.E.E.D.: ZORA COLLECTIVE DROP V. 0.1:
        </div>
        <div class="border-l-2 border-green pl-6 py-0 flex flex-col gap-6">
          <div class="flex flex-col">
            <a href="https://twitter.com/internetjunk_" target="_blank">
              Daniel Junqueira
            </a>
            <a href="https://twitter.com/gabriel_koi" target="_blank">Gabriel KÖI</a>
            <a href="https://twitter.com/flpgfx" target="_blank">Felipe Filgueiras</a>
            <a href="https://twitter.com/foguentao" target="_blank">Foguentinhe Online</a>
            <a href="https://twitter.com/nasrezine" target="_blank">Nasrezine</a>
            <a href="https://twitter.com/https_raimoraes" target="_blank">
              Raiana Morais
            </a>
            <a href="https://twitter.com/_rodriguss_" target="_blank">
              Rodrigus Pinheiro
            </a>
            <a href="https://twitter.com/lucas414141_9" target="_blank">Tiillma, 3</a>
            <a href="https://twitter.com/27251_100prcnt" target="_blank">100%</a>
          </div>
          <div class="flex flex-col">
            <a href="https://twitter.com/agniis_eg" target="_blank">Agniis Evergrace</a>
            <a href="https://twitter.com/GrotesqueChiq" target="_blank">Grotesquechic</a>
            <a href="https://twitter.com/ladyletal_" target="_blank">Luccas Morais</a>
            <a href="https://twitter.com/lvqkinhas" target="_blank">lvqkinhas</a>
            <a href="https://twitter.com/pashe4ever" target="_blank">Pashe</a>
            <a href="https://twitter.com/princezinha" target="_blank">
              Princezinha da Paz
            </a>
            <a href="https://twitter.com/priscilanassar" target="_blank">
              Priscila Nassar
            </a>
            <a href="https://twitter.com/ronnnnnnnda" target="_blank">RONDA</a>
            <a href="https://twitter.com/sabatobox" target="_blank">Sabato</a>
            <a href="https://twitter.com/tuukzs" target="_blank">Tuukz</a>
            <a href="https://twitter.com/_xpQzl" target="_blank">xpQzl</a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full md:max-w-[1200px] m-auto relative flex flex-col pb-20 md:pb-0 md:max-h-[3000px] flex-wrap items-center content-center gap-2"
    >
      <div v-for="piece in pieces" class="w-full">
        <a class="relative w-full" :href="piece.link" target="_blank">
          <div
            class="absolute top-5 left-1.5 text-white px-1 font-title font-bold border-2 z-10"
            :class="{
              'bg-video': piece.type === 'VIDEO',
              'bg-img': piece.type === 'IMG',
              'bg-installation': piece.type === 'MODEL',
              'bg-dir': piece.type === 'WEB',
              'bg-gif': piece.type === 'GIF'
            }"
          >
            {{ piece.type }}
          </div>
          <img class="w-[400px]" :src="getImgUrl(piece.img)" />
        </a>
      </div>
    </div>
  </div>
</template>
