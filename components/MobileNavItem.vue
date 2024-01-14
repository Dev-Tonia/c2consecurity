<template>
  <ul class="md:hidden mt-3">
    <li v-for="item in listItems" :key="item.title" @click="closeNavbar">
      <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const listItems = [
  { title: "Home", path: "/" },
  { title: "Service", path: "/service" },
  { title: "Jobs", path: "/jobs" },
  { title: "Contact Us", path: "/contact-us" },
];
// getting the status of the navbar from the parent
const isOpen = inject("isNavbarOpen");
function closeNavbar() {
  if (isOpen.value === true) {
    isOpen.value = false;
  }
}
</script>

<style scoped>
li {
  @apply border-b pb-1 mt-3;
}
</style>
