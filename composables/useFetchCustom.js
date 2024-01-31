export default function () {
  const data = ref(null);

  const url = "https://chimelu.c2constructionsecurityservicesltd.co.uk/api/";
  const submitForm = async (param, bodyData) => {
    const res = await useFetch(`${url}${param}`, {
      method: "post",
      body: bodyData,
    });

    data.value = res.value;
  };

  return { data, submitForm };
}
