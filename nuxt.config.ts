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
    routeRules: {
        "/fr/introduction-touchify-publisher": {
            redirect: { to: "/fr/touchify-publisher/introduction", statusCode: 301 },
        },
        "/fr/guide-installation-windows": {
            redirect: { to: "/fr/touchify-player/installation/windows", statusCode: 301 },
        },
        "/fr/guide-installation-android": {
            redirect: { to: "/fr/touchify-player/installation/android", statusCode: 301 },
        },
        "/fr/guide-installation-ios-ipad": {
            redirect: { to: "/fr/touchify-player/installation/ios", statusCode: 301 },
        },
        "/fr/guide-installation-brightsign": {
            redirect: { to: "/fr/touchify-player/installation/brightsign", statusCode: 301 },
        },
        "/fr/introduction-touchify-player": { redirect: { to: "/fr/touchify-player/introduction", statusCode: 301 } },
        "/fr/guide-installation-mac-os": {
            redirect: { to: "/fr/touchify-player/installation/macos", statusCode: 301 },
        },
        "/fr/guide-installation-linux-et-raspberry": {
            redirect: { to: "/fr/touchify-player/installation/linux", statusCode: 301 },
        },
        "/fr/guide-installation-tizen": { redirect: { to: "/fr/touchify-player/installation/tizen", statusCode: 301 } },
        "/fr/connecter-application-touchify-player": {
            redirect: { to: "/fr/touchify-player/getting-started/connection", statusCode: 301 },
        },
        "/fr/ecran-daccueil": { redirect: { to: "/fr/touchify-player/getting-started/home-screen", statusCode: 301 } },
        "/fr/options-du-lecteur": { redirect: { to: "/fr/touchify-player/getting-started/settings", statusCode: 301 } },
        "/fr/introduction-plateforme-touchify": {
            redirect: { to: "/fr/getting-started/introduction", statusCode: 301 },
        },
        "/fr/rooms-manager/gestion-des-sites": {
            redirect: { to: "/fr/applications/rooms-manager/sites", statusCode: 301 },
        },
        "/fr/rooms-manager/gestion-des-salles-de-reunion": {
            redirect: { to: "/fr/applications/rooms-manager/meeting-rooms", statusCode: 301 },
        },
        "/fr/rooms-manager/reserver-une-salle-pour-un-utilisateur": {
            redirect: { to: "/fr/applications/rooms-manager/booking", statusCode: 301 },
        },
        "/fr/rooms-manager/comment-se-connecter-a-ladministration": {
            redirect: { to: "/fr/applications/rooms-manager/login", statusCode: 301 },
        },
        "/fr/rooms-manager/administration-des-utilisateurs": {
            redirect: { to: "/fr/applications/rooms-manager/users", statusCode: 301 },
        },
        "/fr/optimiser-ses-vidéos": { redirect: { to: "/fr/tips-tricks/optimize-video", statusCode: 301 } },
        "/fr/touchify-player/resolution-des-problemes": {
            redirect: { to: "/fr/touchify-player/troubleshooting/kiosk", statusCode: 301 },
        },
        "/fr/creer-un-projet": { redirect: { to: "/fr/getting-started/create-project", statusCode: 301 } },
        "/fr/interface-touchify-studio": { redirect: { to: "/fr/getting-started/studio-ui", statusCode: 301 } },
        "/fr/creer-un-contenu-interactif": {
            redirect: { to: "/fr/getting-started/create-interactive-content", statusCode: 301 },
        },
        "/fr/creer-un-affichage-dynamique": {
            redirect: { to: "/fr/getting-started/create-signage-content", statusCode: 301 },
        },
        "/fr/publier-et-diffuser": { redirect: { to: "/fr/getting-started/publish", statusCode: 301 } },
        "/fr/personnalisation-des-textes": { redirect: { to: "/fr/touchify-studio/elements/texts", statusCode: 301 } },
        "/fr/arrière-plan-et-bordures": {
            redirect: { to: "/fr/touchify-studio/elements/background-and-borders", statusCode: 301 },
        },
        "/fr/fichiers-et-médias": { redirect: { to: "/fr/touchify-studio/elements/media", statusCode: 301 } },
        "/fr/les-formes": { redirect: { to: "/fr/touchify-studio/elements/drawing", statusCode: 301 } },
        "/fr/interactions-introduction": {
            redirect: { to: "/fr/touchify-studio/interactions/introduction", statusCode: 301 },
        },
        "/fr/navigation": { redirect: { to: "/fr/touchify-studio/interactions/navigation", statusCode: 301 } },
        "/fr/manipulation": { redirect: { to: "/fr/touchify-studio/interactions/manipulation", statusCode: 301 } },
        "/fr/fenêtres-introduction": { redirect: { to: "/fr/touchify-studio/interactions/dialogs", statusCode: 301 } },
        "/fr/les-animations-introduction": {
            redirect: { to: "/fr/touchify-studio/animations/introduction", statusCode: 301 },
        },
        "/fr/personnaliser-une-animation": {
            redirect: { to: "/fr/touchify-studio/animations/customize", statusCode: 301 },
        },
        "/fr/storyboard": { redirect: { to: "/fr/touchify-studio/animations/storyboards", statusCode: 301 } },
        "/fr/image-interactive": { redirect: { to: "/fr/tips-tricks/interactive-image", statusCode: 301 } },
        "/fr/zone-de-défilement": { redirect: { to: "/fr/tips-tricks/scrollable-content", statusCode: 301 } },
        "/fr/guide-installation-chromeos": {
            redirect: { to: "/fr/touchify-player/installation/chromeos", statusCode: 301 },
        },
        "/fr/créer-une-clé-api-pour-les-tpe-stripe": {
            redirect: { to: "/fr/guides/stripe-terminal", statusCode: 301 },
        },
        "/fr/guide-installation-android-tv": {
            redirect: { to: "/fr/touchify-player/installation/a.android-tv", statusCode: 301 },
        },
    },
});
