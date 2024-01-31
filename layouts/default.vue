<template>
  <header class="bg-primary bg-opacity-[.95]">
    <nav class="wrapper py-3 text-white">
      <div class="flex justify-between">
        <div class="text-2xl font-medium">
          <BrandLogo />
        </div>
        <div class="md:hidden text-2xl text-white" @click="toggleNavbar">
          <i class="ri-menu-fill"></i>
        </div>
        <DesktopNavitem />
      </div>
      <MobileNavItem v-if="isNavbarOpen" />
    </nav>
  </header>
  <main>
    <slot />
  </main>
  <footer class="pt-10">
    <div class="text-white pb-9 bg-[#221F20] pt-10">
      <div class="wrapper">
        <div class="md:grid grid-cols-4 gap-4">
          <div class="md:col-span-2">
            <BrandLogo class="mb-3" />
            <p class="text-xs md:text-sm">
              We offers a diverse range of customized security services that go
              beyond mere protection, aiming to instill peace of mind and
              assurance in various sectors including residential, commercial,
              construction, and public domains.
            </p>
            <div>
              <span class="font-bold"> Follow us on social: </span>
              <a
                href="https://x.com/c2construc26800?s=20"
                rel="noreferrer noopener"
                target="_blank"
              >
                <span class="inline-block ps-3">
                  <i class="ri-twitter-x-fill text-2xl"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="flex justify-between gap-6 md:col-span-2 mt-6 md:mb-0">
            <div class=" ">
              <h1 class="font-bold text-2xl mb-3 md:mb-6">Services</h1>
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
            <div class="w-1/2">
              <h1 class="font-bold text-2xl mb-3 md:mb-6">Contact Details</h1>
              <div class="mb-2">
                <h5 class="font-bold">Head Office</h5>
                <p class="text-xs">3 Nassau path London SE288AN</p>
              </div>
              <div class="text-xs mb-2">
                <span class="font-bold">Tel:</span>
                <a
                  href="tel:+7783863657"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  +447948508175</a
                >
              </div>

              <div class="text-xs mb-2">
                <span class="font-bold">Email:</span>
                <a
                  href="mailto: 
              Support@c2constructionsecurityservicesltd.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  class="break-words"
                >
                  Support@c2constructionsecurityservicesltd.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </footer>
</template>

<script setup>
const isNavbarOpen = ref(false);
provide("isNavbarOpen", isNavbarOpen);

function toggleNavbar() {
  isNavbarOpen.value = !isNavbarOpen.value;
}
</script>

<style scoped></style>
