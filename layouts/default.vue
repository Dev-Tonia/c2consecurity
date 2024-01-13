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
  <footer>
    <div class="bg-[#221F20] text-white pt-10 pb-9">
      <div class="container">
        <div class="grid grid-cols-4 gap-4">
          <div class="col-span-2">
            <h1 class="font-bold text-2xl mb-6">
              c2constructionsecurityservicesltd
            </h1>
            <p class="text-xs md:text-sm">
              We offers a diverse range of customized security services that go
              beyond mere protection, aiming to instill peace of mind and
              assurance in various sectors including residential, commercial,
              construction, and public domains.
            </p>
          </div>
          <div>
            <h1 class="font-bold text-2xl mb-6">Services</h1>
            <ul>
              <li class="text-xs mb-2">
                <NuxtLink to="service"
                  >SECURITY GUARDING - ALL SECTORS</NuxtLink
                >
              </li>
              <li class="text-xs mb-2">
                <NuxtLink to="service">ID CARD SYSTEMS</NuxtLink>
              </li>
              <li class="text-xs mb-2">
                <NuxtLink to="service"> KEY HOLDING SERVICES </NuxtLink>
              </li>
              <li class="text-xs mb-2">
                <NuxtLink to="service"> EVENT MANAGEMENT </NuxtLink>
              </li>
              <li class="text-xs mb-2">
                <NuxtLink to="service">
                  IP & ANALOGUE CCTV INSTALLATION
                </NuxtLink>
              </li>
              <li class="text-xs mb-2">
                <NuxtLink to="service"> BIO METRIC ACCESS CONTROL </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h1 class="font-bold text-2xl mb-6">Contact Details</h1>
            <div class="mb-2">
              <h5 class="font-bold">Head Office</h5>
              <p class="text-xs">20-22 Wenlock Road London N1 7GU</p>
            </div>
            <div class="text-xs mb-2">
              <span class="font-bold">Tel:</span> 020 7117 2469
            </div>
            <div class="text-xs mb-2">
              <span class="font-bold">Mob:</span>
              07949 898649
            </div>
            <div class="text-xs mb-2">
              <span class="font-bold">Email:</span>
              info@prolinksecurity.co.uk
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
nav li {
  @apply px-2 text-2xl font-medium;
}
</style>
