/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://erwanregy.github.io",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    }
}