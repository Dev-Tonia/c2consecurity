<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
// const formData = ref(formInitial);
const formData = reactive({
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  additionalInfo: "",
});
const rules = computed(() => {
  return {
    email: {
      required,
      email,
    },
    firstName: { required },
    lastName: { required },
    phoneNumber: { required },
    additionalInfo: { required },
  };
});

const v$ = useVuelidate(rules, formData);
const { data, submitForm } = useFetchCustom();

const submit = async () => {
  v$.value.$validate();
  if (v$.value.$error) {
    console.log("error occurred");
    return;
  } else {
    submitForm("contact", {
      first_name: formData.firstName,
      email: formData.email,
      last_name: formData.lastName,
      phone: formData.phoneNumber,
      info: formData.additionalInfo,
    });
  }
  formData.firstName = "";
  formData.lastName = "";
  formData.email = "";
  formData.phoneNumber = "";
  formData.additionalInfo = "";
};
</script>
<template>
  <form
    @submit.prevent="submit"
    class="mx-auto mt-10 flex w-full flex-col rounded-lg p-8 shadow-2xl md:mt-0 md:w-11/12"
  >
    <div class="mb-7 pt-5">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold pb-10">
        We're Here To Help!
      </h2>
    </div>
    <!-- Name input -->
    <!-- label,placeHolder,id,type,error -->
    <div class="flex gap-4">
      <CustomInput
        class="w-full"
        v-model="formData.firstName"
        place-holder="Enter First Name"
        label="First Name"
        id="name"
        type="text"
        :error="v$.firstName.$error"
      />
      <CustomInput
        class="w-full"
        v-model="formData.lastName"
        place-holder="Enter Last Name"
        label="Last Name"
        id="name"
        type="text"
        :error="v$.lastName.$error"
      />
    </div>

    <!-- Email input -->
    <CustomInput
      v-model="formData.email"
      place-holder="eg email@email.com"
      label="Email"
      id="email"
      type="email"
      :error="v$.email.$error"
    />

    <!-- Phone number input -->
    <CustomInput
      v-model="formData.phoneNumber"
      place-holder="(123) 456 789"
      label="Phone Number"
      id="phoneNumber"
      type="text"
      :error="v$.phoneNumber.$error"
    />
    <!-- textarea -->
    <CustomTextArea
      v-model="formData.additionalInfo"
      place-holder="Additional Information"
      label="Additional Information "
      id="additionalInfo"
      :error="v$.additionalInfo.$error"
    />
    <button
      type="submit"
      class="rounded border-0 bg-green-500 py-2 px-8 font-bold text-gray-100 transition-colors duration-500 hover:bg-green-500 hover:bg-opacity-80 focus:outline-none"
    >
      Submit
    </button>
  </form>
  <!-- <div class="bg-green-500">
    {{ data }}
  </div> -->
</template>
