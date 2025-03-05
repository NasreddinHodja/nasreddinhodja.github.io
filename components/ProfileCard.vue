<script setup lang="ts">
const name = "NASREZINE";

const description =
  "\
Software engineer and artist. I build things with code, sound, and \
visuals — driven by curiosity and the joy of creating.";

const contacts = [
  {
    label: "e-mail",
    url: "mailto:nasrezine@protonmail.com",
  },
  {
    label: "github",
    url: "https://github.com/NasreddinHodja",
  },
  {
    label: "instagram",
    url: "https://www.instagram.com/nasrezine/",
  },
  {
    label: "twitter",
    url: "https://x.com/nasrezine",
  },
  {
    label: "zora",
    url: "https://zora.co/@nasrezine",
  },
  {
    label: "objkt",
    url: "https://objkt.com/users/tz1hwDPp7QJVpdpZCeiY3jtgT1HB2z3HpCZi",
  },
];
</script>

<template>
  <div
    class="flex flex-row md:gap-10 gap-4 bg-black/90 items-center md:p-10 p-4"
  >
    <ProfileImage />
    <div class="flex flex-col md:gap-4 gap-2 md:w-auto">
      <div class="md:text-xl text-base">{{ name }}</div>
      <div class="md:text-base text-sm">
        {{ description }}
      </div>
      <div class="flex gap-x-4 gap-y-1 md:text-base text-sm flex-wrap">
        <div v-for="contact in contacts" :ke="contact.label">
          <a :href="contact.url" target="_blank" class="underline">
            {{ contact.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
