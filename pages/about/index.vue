<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="w-full h-full flex md:overflow-hidden relative overflow-x-hidden">
    <video autoplay muted loop class="absolute w-auto min-w-full min-h-full max-w-none">
      <source src="@/assets/img/about_bg.webm" type="video/mp4" />
    </video>

    <div
      class="flex flex-col md:flex-row w-full h-full z-10 pt-10 gap-10 px-6 md:px-40 md:gap-20 md:pt-20"
    >
      <div class="md:w-1/2 flex flex-col gap-10 md:gap-20">
        <div class="flex flex-col text-white gap-4">
          <div class="flex">
            <h1 class="text-green text-4xl bg-black font-bold font-tilte">Who are we</h1>
          </div>
          <p class="bg-black text-xl">
            S.E.E.D_dao is a cross-disciplinary collective of web3 artists conceiving
            artistic practices as well as an exhibition experience that brings together
            immersive environments and the development of a curatorial axis of works in
            NFT and IRL.
          </p>
        </div>
        <div @click="router.push('/about/founding_members')" class="flex">
          <h1 class="text-green text-4xl bg-black font-bold font-tilte">
            Founding members
          </h1>
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex">
            <h1 class="text-green text-4xl bg-black font-bold font-tilte">Contact us</h1>
          </div>
          <div class="bg-black text-white font-bold font-tilte">
            <p>
              <a
                href="https://twitter.com/SEED_dao"
                target="_blank"
                rel="noopener noreferrer"
              >
                {twit} @SEED_dao
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/s.e.e.d._/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {inst} @s.e.e.d._
              </a>
            </p>
            <p>{mail} s.e.e.d_dao@protonmail.com</p>
            <p>
              <a
                href="https://discord.gg/7xA2VGJE"
                target="_blank"
                rel="noopener noreferrer"
              >
                {disc} 丂.ｅ.𝑒.Ｄ. server
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col pt-6">
        <div class="flex flex-col text-white gap-4">
          <div class="flex">
            <h1 class="text-green text-4xl bg-black font-bold font-tilte">
              S.E.E.D. Philosophy
            </h1>
          </div>
          <p class="bg-black text-xl">
            S.E.E.D: Experimental Singularity In Daydream. Conceived as a DAO and an
            empowering entity for multi-format interdisciplinary experiences,
            disseminating sapiential and artistic and exhibition practices, bringing
            together immersive environments in conjunction with the development of a
            curatorial axis of works in NFT and IRL. S.E.E.D proposes the transition
            through the unknown and unexplored territories of reality and beyond,
            encouraging narrative techniques, fabulation, and post-cinema. Evokes
            perspectives and unidentifiable affirmations, with decentralized bodies and
            senses, favoring the creation of imagetic hyperlinks manifested in earthly,
            cross, and interdimensional planes, along with the movement of unknown and
            local hemispheres, expanding from micro to macro. S.E.E.D seeks to encompass
            tentacular and nonspecific experiences, while also discussing limits,
            collective spaces, and forms of language.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
