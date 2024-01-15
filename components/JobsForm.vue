<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
// const formData = ref(formInitial);
const formData = reactive({
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  qualifications: [],
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
    address1: { required },
    address2: {},
    city: { required },
    state: { required },
    zipCode: { required },
    country: {},
    qualifications: { required },
    additionalInfo: { required },
  };
});

const v$ = useVuelidate(rules, formData);

const submitForm = () => {
  v$.value.$validate();
  if (v$.value.$error) {
    console.log("error occurred");
    return;
  } else {
    console.log(formData.email, formData.name, formData.password);
  }
  formData.name = "";
  formData.email = "";
  formData.phoneNumber = "";
  formData.confirmPassword = null;
};
</script>

<template>
  <section class="mx-auto px-5 py-24 text-gray-900">
    <div class="">
      <form
        @submit.prevent="submitForm"
        class="mx-auto mt-10 flex w-full flex-col rounded-lg p-8 shadow-2xl md:mt-0 md:w-5/6"
      >
        <div class="mb-7 pt-5">
          <h2 class="font-medium text-lg md:text-xl lg:text-2xl text-center">
            APPLICATION FORM
          </h2>
          <p class="italic text-sm text-center text-green-500">
            Come work with us
          </p>
        </div>
        <!-- Name input -->
        <!-- label,placeHolder,id,type,error -->
        <div class="flex gap-4">
          <CustomInput
            class="w-full"
            v-model="formData.name"
            place-holder="Enter First Name"
            label="First Name"
            id="name"
            type="text"
            :error="v$.firstName.$error"
          />
          <CustomInput
            class="w-full"
            v-model="formData.name"
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

        <!-- Phone input -->
        <CustomInput
          v-model="formData.phoneNumber"
          place-holder="Enter Phone Number"
          label="Phone Number"
          id="phoneNumber"
          type="text"
          :error="v$.phoneNumber.$error"
        />
        <!-- Address Input -->
        <div>
          <CustomInput
            v-model="formData.address1"
            place-holder="Address 1"
            label="Address"
            id="address 1"
            type="text"
            :error="v$.address1.$error"
          />
          <CustomInput
            v-model="formData.address2"
            place-holder="Address 2"
            id="address 1"
            type="text"
            :error="false"
          />
          <div class="flex gap-4">
            <CustomInput
              class="w-full"
              v-model="formData.city"
              place-holder="City"
              label="City"
              id="city"
              type="text"
              :error="v$.city.$error"
            />
            <CustomInput
              class="w-full"
              v-model="formData.state"
              place-holder="State "
              label="State"
              id="state "
              type="text"
              :error="v$.state.$error"
            />
          </div>
          <div class="flex gap-4">
            <CustomInput
              class="w-full"
              v-model="formData.zipCode"
              place-holder="Zip Code"
              label="Zip Code"
              id="zipCode"
              type="text"
              :error="v$.zipCode.$error"
            />
            <CustomInput
              class="w-full"
              v-model="formData.state"
              place-holder="Country "
              label="Country"
              id="country "
              type="text"
              :error="false"
            />
          </div>
        </div>
        <div
          class="mb-4"
          :class="{ 'border-red-500 border': v$.qualifications.$error }"
        >
          <h6 class="text-sm leading-7 text-gray-400">Qualifications</h6>
          <div>
            <input
              type="checkbox"
              id="firstAider"
              value="First Aider"
              v-model="formData.qualifications"
              class="accent-green-500"
            />
            <label class="inline-block text-gray-900 ps-2" for="firstAider"
              >First Aider</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              id="CSCSCard"
              value="CSCS Card"
              v-model="formData.qualifications"
              class="accent-green-500"
            />
            <label class="inline-block text-gray-900 ps-2" for="CSCSCard"
              >CSCS Card</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              id="fireMarshall"
              value="Fire Marshall"
              v-model="formData.qualifications"
              class="accent-green-500"
            />
            <label class="inline-block text-gray-900 ps-2" for="fireMarshall"
              >Fire Marshall</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              id="drivingLicense"
              value="Driving License"
              v-model="formData.qualifications"
              class="accent-green-500"
            />
            <label class="inline-block text-gray-900 ps-2" for="drivingLicense"
              >Driving License</label
            >
          </div>
        </div>
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
    </div>
  </section>
</template>
