<template>
  <div class="h-screen w-screen flex flex-col font-base">
    <div class="hidden md:block"><LayoutsDefaultNavBar></LayoutsDefaultNavBar></div>
    <div class="md:hidden"><LayoutsMobileNavBar></LayoutsMobileNavBar></div>
    <div class="grow"><slot></slot></div>
  </div>
</template>
