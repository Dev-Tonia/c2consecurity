<template>
  <section class="text-gray-900 pb-12 pt-16">
    <div class="container">
      <h2 class="text-3xl font-bold pb-5 pt-6">What Makes us Different</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <ValueSectionTile
          v-for="value in values"
          :key="value.title"
          :value="value"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    title: "A unique operating model ensuring true local service provision.",
    body: "Upholding a unique operating model, our security company ensures genuine local service provision, tailoring solutions to community needs, fostering a secure environment deeply rooted in adaptability and client-centric.",
  },
  {
    title: "Cost-effective HD CCTV systems.",
    body: "Deploying cost-effective HD CCTV systems enhances security measures by delivering high-resolution surveillance solutions, ensuring comprehensive monitoring and threat deterrence",
  },
  {
    title: "Bespoke access control system.",
    body: "Implementing a bespoke access control system elevates security, offering tailored solutions that precisely fit the unique requirements of facilities, enhancing protection and mitigating unauthorized access risks",
  },
  {
    title: "Total transparency.",
    body: "Ensuring total transparency in our security operations instills trust, providing clients with a clear view of our processes, measures, and outcomes for a truly accountable and reliable security partnership.",
  },
  {
    title: 'Our people have a "can do attitude".',
    body: "Empowering our security team with a 'can-do attitude' ensures proactive and resilient responses, fostering a culture of confidence and dedication in safeguarding our clients and their assets.",
  },
  {
    title: "Our belief is a strong ethical business culture.",
    body: "Firmly anchored in a strong ethical business culture, our security company prioritizes integrity and transparency, ensuring clients benefit from unwavering trust and reliability in safeguarding their assets.",
  },
];
</script>

<style lang="scss" scoped></style>
