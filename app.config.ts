export default defineAppConfig({ 
    seo: {
        titleTemplate: "%s | Touchify Help Center",
        title: "Touchify Help Center",
    },
    header: {
        title: "Touchify",
        logo: {
            alt: "Touchify Help Center",
            light: "/logo_light.svg",
            dark: "/logo_dark.svg",
        }
    },
    socials: {
        linkedin: "https://www.linkedin.com/company/touchify",
    },
    ui: {
        colors: {
            primary: "#5236DD",
            secondary: "#FFA76C",
        }
    }
});