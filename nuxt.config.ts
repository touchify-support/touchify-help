export default defineNuxtConfig({
    modules: ["@nuxtjs/i18n", "@nuxt/content", "@nuxt/eslint", "@nuxt/image", "@nuxt/scripts", "@nuxt/ui"],
    css: ["~/assets/app.css"],
    build: {
        transpile: ["sharp"],
    },
    i18n: {
        defaultLocale: "en",
        locales: [
            { code: "en", name: "English" },
            { code: "fr", name: "Français" },
        ],
    },
    fonts: {
        families: [
            { name: "Source Sans", provider: "adobe", weights: [400, 600, 700] },
            { name: "Work Sans", provider: "google", weight: 800 },
        ],
    },
    image: {
        providers: {
            none: {
                provider: "~/node_modules/@nuxt/image/dist/runtime/providers/none",
                options: {},
            },
        },
    },
    llms: {
        domain: "https://help.touchify.io",
    },
});
