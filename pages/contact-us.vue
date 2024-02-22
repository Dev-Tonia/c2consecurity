<template>
  <Banner title="Contact Us" />
  <!-- <p>{{ tel }}</p> -->
  <!-- <p>{{ addr }}</p> -->
  <section class="py-10">
    <div class="wrapper">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="md:w-1/2">
          <div class="pb-12">
            <h2 class="text-xl md:text-2xl lg:text-3xl font-bold pb-10">
              Get In Touch With us
            </h2>
            <p class="text-lg md:text-xl font-medium">
              At C2construction security service, we work around the clock to
              ensure that our clients feel safe and secure. 24/7 we'll be ready.
            </p>
          </div>
          <div class="mb-2">
            <h5 class="font-bold md:text-lg">Head Office</h5>
            <p class="">{{ addr }}</p>
          </div>
          <div class="mb-2">
            <h5 class="font-bold md:text-lg">Call Now!</h5>
            <p class="">
              We are available 24/7, every day of the year.
              <span class="text-green-500 font-medium text-lg">
                <a
                  :href="`tel:${tel}`"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {{ tel }}</a
                >
              </span>
            </p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <!--  -->
    </div>
  </section>
  <section class="pt-20 mt-8 pb-10 map">
    <div class="wrapper">
      <h2 class="text-xl text-center md:text-2xl lg:text-3xl font-bold pb-10">
        Get Direction
      </h2>
      <div class="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2483.605999207396!2d0.1147063766197443!3d51.50209737181208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%20Nassau%20path%20London%20SE2886RR!5e0!3m2!1sen!2sng!4v1705436580333!5m2!1sen!2sng"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title:
    "Contact us || C2construction Security Services - EXPERIENCE SECURITY LIKE NEVER BEFORE!",
});
const tel = ref("");
const addr = ref("");
// const data = ref("");

onMounted(async () => {
  await nextTick();

  const {
    data,
    pending: pend,
    error,
    refresh,
  } = await useFetch(
    "https://chimelu.c2constructionsecurityservices.co.uk/api/data"
  );
  const [{ phone, address }] = data.value;
  tel.value = phone;
  addr.value = address;
  // users.value = data.value;
});
</script>

<style scoped>
.map {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
