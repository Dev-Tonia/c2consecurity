<template>
  <section class="bg-white">
    <div class="container">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
          >
            EXPERIENCE SECURITY LIKE NEVER BEFORE!
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
          >
            Physical Security: Physical security involves measures taken to
            protect physical assets, premises, and people.
          </p>

          <NuxtLink
            to="/contact-us"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border-2 border-green-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-green-500"
          >
            Speak to Us
          </NuxtLink>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="../assets/img/sec2.png" alt="mockup" />
        </div>
      </div>
    </div>
  </section>
  <AboutUs />
  <ValueSection />
</template>

<script setup></script>

<style scoped></style>
