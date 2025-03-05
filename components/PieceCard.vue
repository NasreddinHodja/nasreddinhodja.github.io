<script setup lang="ts">
defineProps<{
  title: string;
  url: string;
  image: string;
}>();
</script>

<template>
  <a
    :href="url"
    target="_blank"
    class="h-full flex flex-col gap-4 w-full items-center justify-center"
  >
    <div class="h-full flex items-center">
      <img class="w-auto" :src="image" border="0" />
    </div>
    <div
      class="underline md:text-base text-sm max-w-full truncate text-ellipsis"
    >
      {{ title }}
    </div>
  </a>
</template>
