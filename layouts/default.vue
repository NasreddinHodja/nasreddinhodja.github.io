<template>
  <div>
    <div class="hidden md:block"><LayoutsDefaultNavBar></LayoutsDefaultNavBar></div>
    <div class="md:hidden"><LayoutsMobileNavBar></LayoutsMobileNavBar></div>
    <slot></slot>
  </div>
</template>
