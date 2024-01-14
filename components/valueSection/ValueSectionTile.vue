<template>
  <div class="bg-emerald-50/40 py-10 px-7 rounded-md">
    <h3
      class="font-medium text-center text-lg lg:text-xl border-b-2 border-green-500 pb-3"
    >
      {{ value.title }}
    </h3>
    <p class="mt-3 text-sm text-justify md:text-base lg:text-lg">
      {{ value.body }}
    </p>
  </div>
</template>

<script setup>
const { value } = defineProps(["value"]);
</script>

<style lang="scss" scoped></style>
