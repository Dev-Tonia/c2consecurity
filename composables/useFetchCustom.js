export default function () {
  const result = ref(null);

  const url = "https://chimelu.c2constructionsecurityservices.co.uk/api/";

  const submitForm = async (param, bodyData) => {
    const { data } = await useFetch(`${url}${param}`, {
      method: "post",
      body: bodyData,
    });
    result.value = data._value;
  };

  return { result, submitForm };
}
