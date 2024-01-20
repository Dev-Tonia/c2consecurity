<template>
  <div
    class="h-64 bg-[url('~/assets/img/banner.jpg')] bg-no-repeat bg-[length:100%_100%] relative"
  >
    <div
      class="absolute bg-black/60 top-0 bottom-0 right-0 left-0 flex items-center justify-center"
    >
      <h2 class="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>

<style scoped></style>
