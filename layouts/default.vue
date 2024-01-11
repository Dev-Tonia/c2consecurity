<template>
  <header>
    <nav class="flex justify-between">
      <div>
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
