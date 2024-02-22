// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/sitemap"],
  devtools: { enabled: true },
  sitemap: {
    hostname: "https://www.c2constructionsecurityservices.co.uk/",
    // options
  },

  app: {
    head: {
      title:
        "Home || C2construction Security Services - EXPERIENCE SECURITY LIKE NEVER BEFORE!",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "C2construction Security Services  offers a diverse range of customized security services that go beyond mere protection, aiming to instill peace of mind and assurance in various sectors including residential, commercial, construction, and public domains. Our commitment to delivering unparalleled customer service is reflected in the exceptional quality of our staff, all of whom hold approvals from the Security Industry Authority (SIA).",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "/wildcard.png",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://www.c2constructionsecurityservices.co.uk/",
        },
        {
          hid: "og-site_name",
          property: "og:site_name",
          content: "C2construction Security Services website",
        },

        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content:
            "C2construction Security Services  - EXPERIENCE SECURITY LIKE NEVER BEFORE!",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "C2construction Security Services Limited offers a diverse range of customized security services that go beyond mere protection, aiming to instill peace of mind and assurance in various sectors including residential, commercial, construction, and public domains. Our commitment to delivering unparalleled customer service is reflected in the exceptional quality of our staff, all of whom hold approvals from the Security Industry Authority (SIA).",
        },

        {
          key: "keywords",
          property: "keywords",
          content:
            "security guarding - all sector, Nassau, London , manned guards, Uk, United Kingdom, security, uniformed, key-holding, Id card systems , biometric access control , Electronic Security & surveillance Systems, event management",
        },

        { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
        {
          hid: "t-title",
          name: "twitter:title",
          content:
            "C2construction Security Services  - EXPERIENCE SECURITY LIKE NEVER BEFORE!",
        },
        {
          hid: "t-description",
          name: "twitter:description",
          content:
            "C2construction Security Services Limited offers a diverse range of customized security services that go beyond mere protection, aiming to instill peace of mind and assurance in various sectors including residential, commercial, construction, and public domains. Our commitment to delivering unparalleled customer service is reflected in the exceptional quality of our staff, all of whom hold approvals from the Security Industry Authority (SIA).",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.c2constructionsecurityservices.co.uk/",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
