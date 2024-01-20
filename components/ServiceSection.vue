<template>
  <section class="bg-green-500/[0.05] text-gray-900 pb-16 pt-16">
    <div class="wrapper">
      <h2 class="text-3xl font-bold py-5">Our Services</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="service in services" :key="service.title">
          <NuxtLink to="/service">
            <div class="h-48 mb-5">
              <img
                class="w-full h-full"
                :src="service.img"
                :alt="service.title"
              />
            </div>
            <h4 class="font-bold text-xl text-center">
              {{ service.title }}
            </h4>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    img: "/img/sec-serv.jpg",
    title: "SECURITY GUARDING - ALL SECTORS",
  },
  {
    img: "/img/access-control.png",
    title: "ID CARD SYSTEMS",
  },
  {
    img: "/img/keyholding.jpg",
    title: "KEY HOLDING SERVICES",
  },
  {
    img: "/img/event-mang-sec.jpg",
    title: "EVENT MANAGEMENT",
  },
  {
    img: "/img/cctv.gif",
    title: "IP & ANALOGUE CCTV INSTALLATION",
  },
  {
    img: "/img/bio.jpg",
    title: "BIO METRIC ACCESS CONTROL",
  },
];
</script>

<style lang="scss" scoped></style>
