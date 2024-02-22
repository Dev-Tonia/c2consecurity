<template>
  <Banner title=" Our Services" />
  <div class="wrapper py-32">
    <div
      class="md:grid grid-cols-5 gap-9 border-t-4 pt-5"
      v-for="service in services"
      :key="service.title"
    >
      <div class="col-span-2 pb-4">
        <div class="h-48">
          <img class="w-full h-full" :src="service.img" :alt="service.title" />
        </div>
        <h4 class="font-bold md:text-lg lg:text-xl text-center">
          {{ service.title }}
        </h4>
      </div>

      <div class="col-span-3 mb-3">
        <p class="font-light text-sm md:text-lg lg:text-xl text-justify">
          {{ service.body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title:
    " Services|| C2construction Security Services - EXPERIENCE SECURITY LIKE NEVER BEFORE!",
});
const services = [
  {
    img: "/img/sec-serv.jpg",
    title: "SECURITY GUARDING - ALL SECTORS",
    body: "At C2construction Security Services we deliver high-quality security guard services throughout a range of industries, whether it be for offices, schools, construction sites or events. Primarily we provide our security guard services across Surrey and the surrounding counties, but have a good nationwide network. Our security guards have worked to evict squatters, patrol residential areas, and install security equipment ie electronic clocking, providing you with a quality assured record each week of our Security Guards’ patrol duties, whilst on Site.",
  },
  {
    img: "/img/access-control.png",
    title: "ID CARD SYSTEMS",
    body: "C2construction Security offer a unique biometric range of full height pedestrian turnstiles which are a perfect solution for a number of modern applications. If your site has high levels of pedestrians accessing certain external areas, a turnstile is the best way to control the access levels of staff, visitors and contractors. Units are constructed from mild or stainless steel and available in a number of colours. Our turnstiles use the latest technology & design to ensure a speedy and efficient operation whilst being as secure & safe as possible.",
  },
  {
    img: "/img/keyholding.jpg",
    title: "KEY HOLDING SERVICES",
    body: "Professionally trained staff will deal with minor incidents without disturbing clients during the night, including a boarding up service for broken windows. In the event of an intruder breaking into your business premises or home, we can be nominated as the key holder. We would attend the scene on your behalf and call the police in the event of criminal activity. We offer alarm monitoring, key holding and boarding up services.",
  },
  {
    img: "/img/event-mang-sec.jpg",
    title: "EVENT MANAGEMENT",
    body: "C2construction Security offer a full-service event management. With over 5 years' experience of providing crowd control management and security services to the events market, our breadth and depth of experience across live music, sport, conferences, exhibitions and community events is unmatched in the industry. We make this legacy count by providing high quality and well managed",
  },
  {
    img: "/img/cctv.gif",
    title: "IP & ANALOGUE CCTV INSTALLATION",
    body: "We design, supply, install and maintain a wide range of Electronic Security & surveillance Systems. This includes: CCTV, door entry intercom, access control, intruder alarm, fire alarm, turnstiles, security lighting and security locking systems. Our high calibre security installers can put an end to many security risks, whether it's for your home or business. You can see all our Installation services. Offering a bespoke security service is our pride. We offer free expert advice on all aspect of security and CCTV.",
  },
  {
    img: "/img/bio.jpg",
    title: "BIO METRIC ACCESS CONTROL",
    body: "C2construction Security has over 8 years experience installing and supporting biometric time and attendance systems, access control and registration software for companies large and small, schools, health services and construction sites all across the UK. Our experience and knowledge attained through the years has given us a keen insight into the best products available, and which of them offer you a real time and attendance solution, we would be pleased guide you through the process of making the right choice, to ensure that you get true value for money, and an employee time management system that will deliver for years to come.",
  },
];
</script>

<style scoped></style>
