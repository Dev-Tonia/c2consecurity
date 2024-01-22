<template>
  <div>
    <HeroSection />
    <AboutUs />
    <ValueSection />
    <ServiceSection />
  </div>
  <CookiesPopUp v-if="isOpen" :isOpen="isOpen" @close-cookies="isFalse" />
</template>

<script setup>
const isOpen = ref(false);
setTimeout(() => {
  isOpen.value = true;
}, "1000");

function isFalse() {
  isOpen.value = false;
}
</script>

<style scoped></style>
