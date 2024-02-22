<template>
  <div>
    <HeroSection />
    <AboutUs />
    <ValueSection />
    <ServiceSection />
  </div>
  <CookiesPopUp
    v-once
    v-if="isOpen"
    :isOpen="isOpen"
    @close-cookies="isFalse"
  />
</template>

<script setup>
const isOpen = ref(false);
setTimeout(() => {
  isOpen.value = true;
}, "1500");

function isFalse() {
  isOpen.value = false;
}
</script>

<style scoped></style>
