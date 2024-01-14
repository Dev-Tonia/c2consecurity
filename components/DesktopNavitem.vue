<template>
  <ul class="hidden md:flex justify-between items-center">
    <li>
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/service">Service</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/jobs">Jobs</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/contact-us">Contact us</NuxtLink>
    </li>
  </ul>
</template>

<script setup></script>

<style scoped>
li {
  @apply px-2 text-xl  md:text-2xl font-medium;
}
</style>
