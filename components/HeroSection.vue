<template>
  <section
    class="h-[50vh] lg:h-[70vh] bg-[url('~/assets/img/bg.jpg')] bg-no-repeat bg-[length:100%_100%] relative"
  >
    <div
      class="absolute bg-black/50 top-0 bottom-0 right-0 left-0 flex items-center justify-center lg:block"
    >
      <div class="wrapper">
        <div
          class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1
              class="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
            >
              EXPERIENCE SECURITY LIKE NEVER BEFORE!
            </h1>
            <p
              class="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl"
            >
              Physical Security: Physical security involves measures taken to
              protect physical assets, premises, and people.
            </p>

            <NuxtLink
              to="/contact-us"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-400"
            >
              Speak to Us
            </NuxtLink>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="../assets/img/new-removebg-preview.png" alt="mockup" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
