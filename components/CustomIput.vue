<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
function oninput(event) {
  $emit("update:modelValue", $event.target.value);
}
</script>

<template>
  <div class="form-group">
    <label> {{ label }}</label>
    <input type="text" :value="modelValue" @input="" v-bind="$attrs" />
  </div>
</template>
<style scoped>
input {
  @apply block w-full py-2 px-3 bg-[#F3F5F9] rounded-lg  border-none outline-none;
}
input[type="text"]:disabled::placeholder {
  @apply text-black font-bold;
}
input::placeholder {
  @apply text-sm text-gray-700;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
