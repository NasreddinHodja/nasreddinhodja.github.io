<template>
  <div
    class="w-full flex flex-col items-center bg-[url('/public/bg.png')] bg-cover bg-center bg-fixed md:py-24 py-8 px-2"
  >
    <div class="md:w-2/3 w-full flex flex-col md:gap-10 gap-4">
      <div class="flex xl:flex-row flex-col md:gap-10 gap-4">
        <WelcomeCard />
        <ProfileCard />
      </div>
      <PiecesList />
    </div>
  </div>
</template>
