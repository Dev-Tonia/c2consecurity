<template>
  <ClientOnly>
    <Teleport to="body">
      <div class="bg-green-800 text-white fixed bottom-0 w-full py-5">
        <div class="wrapper flex items-center justify-center">
          <div>
            <p>
              We use cookies to improve your experience on our site. By
              continuing to use our site, you accept our use of cookies.
            </p>
            <div class="space-x-4 pt-2">
              <button
                @click="closeCookies"
                class="inline-flex items-center justify-center sp px-5 py-1 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary/50"
              >
                Accept Cookies
              </button>
              <button
                @click="closeCookies"
                class="inline-flex items-center justify-center px-5 py-1 text-base font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-500/50"
              >
                Decline Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>
<script setup>
const { isOpen } = defineProps(["isOpen"]);
const emit = defineEmits(["close-cookies"]);
function closeCookies() {
  emit("close-cookies");
}
</script>
