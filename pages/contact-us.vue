<template>
  <Banner title="Contact Us" />

  <section class="py-10">
    <div class="container">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="md:w-1/2">
          <div class="pb-12">
            <h2 class="text-xl md:text-2xl lg:text-3xl font-bold pb-10">
              Get In Touch With us
            </h2>
            <p class="text-lg md:text-xl font-medium">
              At C2construction security service limited, we work around the
              clock to ensure that our clients feel safe and secure. 24/7 we'll
              be ready.
            </p>
          </div>
          <div class="mb-2">
            <h5 class="font-bold md:text-lg">Head Office</h5>
            <p class="">3 Nassau path London SE2886RR</p>
          </div>
          <div class="mb-2">
            <h5 class="font-bold md:text-lg">Call Now!</h5>
            <p class="">
              We are available 24/7, every day of the year.
              <span class="text-green-500 font-medium text-lg">
                <a
                  href="tel:+7783863657"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  (778) 386-3657</a
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
  <section>
    <div class="google-map">
      <iframe
        src="https://maps.app.goo.gl/UQRRPeM8B7PS4ar36"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
