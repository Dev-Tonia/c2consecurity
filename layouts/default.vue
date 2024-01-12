<template>
  <header class="bg-primary bg-opacity-[.95]">
    <nav class="container flex justify-between py-3 text-white">
      <div class="text-2xl font-medium">
        <NuxtLink to="/">Security</NuxtLink>
      </div>

      <ul class="flex justify-between items-center">
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
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup></script>

<style scoped>
li {
  @apply px-2 text-2xl font-medium;
}
</style>
