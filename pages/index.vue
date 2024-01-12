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
  <section class="bg-primary text-white py-4">
    <div class="container">
      <h2 class="text-3xl font-bold py-2">Get to know us</h2>
      <p class="mt-3 mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
        <span class="text-green-500 font-medium text-xl">
          C2Construction Security Services Limited</span
        >
        offers a diverse range of customized security services that go beyond
        mere protection, aiming to instill peace of mind and assurance in
        various sectors including residential, commercial, construction, and
        public domains. Our commitment to delivering unparalleled customer
        service is reflected in the exceptional quality of our staff, all of
        whom hold approvals from the Security Industry Authority (SIA).
      </p>
      <p class="mt-3 mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
        Situated in the central hub of Surrey, our main office serves as the
        cornerstone of
        <span class="text-green-500 font-medium text-xl">
          C2Construction Security Services Limited</span
        >. With Control Centres strategically positioned across 80% of the UK,
        we are well-equipped to fulfill all your security needs. Our clients
        prioritize value for money and a dependable team, and we consistently
        meet these demands through our extensive experience in delivering
        top-notch Security Services throughout the UK.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  height: 70vh;
  background: url(../assets/img/cctv-security.jpg) no-repeat;
  background-size: cover;
  /* padding: 100%; */
  position: relative;
}
.overlay {
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
