type AppConfig = {
    appName: string;
    appDescription: string;
    sessionCookieName: string;
    sessionCookieDuration: number;
    adminEmails: string[];
    appGithubLink: string;
    links: {
        twitter: string;
        github: string;
        email: string;
        docs: string;
    }
}

const appConfig: AppConfig = {
    appName: "Paninv Tracker",
    appDescription: "Tracking your Recipes and Ingredients, One Step at a Time",
    sessionCookieName: "_paninv_session",
    sessionCookieDuration: 60 * 60 * 24 * 7 * 1000,
    adminEmails: process.env.ADMIN_EMAILS?.split(", ") ?? [],
    appGithubLink: "https://github.com/Hi-kue/paininv-tracker",
    links: {
        twitter: "https://twitter.com/hikue", // TODO: This isn't actually my Twitter handle, sadly.
        github: "https://github.com/Hi-kue",
        email: "hikue.primary@gmail.com",
        docs: "https://hikues-docs.vercel.app" // TODO: Create a Doc's Website for All Apps!
    }
} as const;

export default appConfig;