<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const formData = reactive({
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  licenseType: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  firstAider: false,
  cscsCard: false,
  fireMarshall: false,
  drivingLicense: false,
  qualifications: [],
  additionalInfo: "",
});
const isOpen = ref(false);
const modalMsg = ref("");
const error = ref(false);
const rules = computed(() => {
  return {
    email: {
      required,
      email,
    },
    firstName: { required },
    lastName: { required },
    phoneNumber: { required },
    licenseType: { required },
    address1: { required },
    address2: {},
    city: { required },
    state: { required },
    zipCode: { required },
    country: {},

    additionalInfo: { required },
  };
});
const v$ = useVuelidate(rules, formData);
const { result, submitForm } = useFetchCustom();
const submit = () => {
  v$.value.$validate();
  if (v$.value.$error) {
    isOpen.value = true;
    error.value = true;
    modalMsg.value = "Error Occurred \nAll the input field are required.";
    return;
  } else {
    submitForm("services", {
      firstName: formData.firstName,
      email: formData.email,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      licenseType: formData.licenseType,
      qualifications: {
        first_aider:
          formData.firstAider.toString().charAt(0).toUpperCase() +
          formData.firstAider.toString().slice(1),
        cscs_card:
          formData.cscsCard.toString().charAt(0).toUpperCase() +
          formData.cscsCard.toString().slice(1),
        Fire_Marshall:
          formData.fireMarshall.toString().charAt(0).toUpperCase() +
          formData.fireMarshall.toString().slice(1),
        driving_license:
          formData.drivingLicense.toString().charAt(0).toUpperCase() +
          formData.drivingLicense.toString().slice(1),
      },
      state: formData.state,
      city: formData.city,
      country: formData.country,
      address1: formData.address1,
      zipCode: formData.zipCode,
      additionalInfo: formData.additionalInfo,
    });
    error.value = false;
    isOpen.value = true;
    modalMsg.value = "Your application was successful.";
  }
  formData.email = "";
  formData.firstName = "";
  formData.lastName = "";
  formData.phoneNumber = "";
  formData.licenseType = "";
  formData.address1 = "";
  formData.address2 = "";
  formData.city = "";
  formData.state = "";
  formData.zipCode = "";
  formData.country = "";
  formData.qualifications = [];
  formData.additionalInfo = "";
};
function closeModal() {
  isOpen.value = false;
}
</script>

<template>
  <section class="mx-auto px-5 py-24 text-gray-900">
    <div class="">
      <form
        @submit.prevent="submit"
        class="mx-auto mt-10 flex w-full flex-col rounded-lg p-8 shadow-2xl md:mt-0 md:w-5/6"
      >
        <h2 class="text-xl md:text-2xl lg:text-3xl font-bold pb-10">
          We're Here To Help!
        </h2>
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
        <!-- Phone input -->
        <CustomInput
          v-model="formData.phoneNumber"
          place-holder="Enter Phone Number"
          label="Phone Number"
          id="phoneNumber"
          type="text"
          :error="v$.phoneNumber.$error"
        />

        <!-- For the drop down -->
        <div
          class="relative mb-4"
          :class="{ 'border-red-500 border': v$.licenseType.$error }"
        >
          <label for="license" class="text-sm leading-7 text-gray-400"
            >SIA License Type</label
          >
          <div class="relative">
            <select
              v-model="formData.licenseType"
              name="license"
              id="license"
              class="w-full rounded border border-gray-600 bg-transparent bg-opacity-20 py-1 px-3 text-base leading-8 text-gray-900 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
            >
              <option disabled value="">Select SIA License Type</option>
              <option value="Security Guard">Security Guard</option>
              <option value="Door Supervisor">Door Supervisor</option>
              <option value="CCTV ">CCTV</option>
              <option value="key holder">key holder</option>
              <option value="CP ">CP</option>
              <option value="Vehicle Immobilizer">Vehicle Immobilizer</option>
            </select>
          </div>
        </div>
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
              v-model="formData.country"
              place-holder="Country "
              label="Country"
              id="country "
              type="text"
              :error="false"
            />
          </div>
        </div>
        <div class="mb-4">
          <h6 class="text-sm leading-7 text-gray-400">Qualifications</h6>
          <div>
            <input
              type="checkbox"
              id="firstAider"
              value="First Aider"
              v-model="formData.firstAider"
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
              v-model="formData.cscsCard"
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
              v-model="formData.fireMarshall"
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
              v-model="formData.drivingLicense"
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
          imageUrl="../assets/img/new-removebg-preview.png"
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
  <Modal
    :data="modalMsg"
    @close-modal="closeModal"
    v-if="isOpen"
    :error="error"
  />
</template>
