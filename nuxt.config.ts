export default defineNuxtConfig({
    css: [
        "~/assets/index.scss"
    ],
    compatibilityDate: "2024-07-19",
    future: {
        compatibilityVersion: 4
    },
    modules: [
        "@nuxt/icon",
        "@unocss/nuxt"
    ],
    icon: {
        componentName: "iconify"
    }
});