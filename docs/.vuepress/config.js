const { hopeTheme } = require("vuepress-theme-hope");
const { usePagesPlugin } = require('vuepress-plugin-use-pages')
module.exports = {
    // 站点选项
    // ...
    lang: "zh-CN",
    title: "OpenWGTicket",
    description: "OpenWGTicket",
    base: '/Vuepress-template/',
    plugins: [
      usePagesPlugin(
        {
          startsWith: '/Tickets/',
        }
      ),
    ],
    theme: hopeTheme({
        hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

        iconAssets: "iconfont",
      
        logo: "/logo.svg",
      
        repo: "vuepress-theme-hope/vuepress-theme-hope",
      
        docsDir: "demo/src",
      
        // navbar
        navbar: [],
      
        // sidebar
        sidebar: "structure",
      
        footer: "吃人警告: 如果你稍微会一点Github, 可以一起维护这个组织的项目",
      
        displayFooter: true,
      
        pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
      
        encrypt: {
          config: {
            "/guide/encrypt.html": ["1234"],
          },
        },    
        plugins: {

          comment: {
            provider: "Giscus",
            repo: "OpenWargamingTicket/Discussions",
            repoId: "R_kgDOH2pMHg",
            category: "Announcements",
            categoryId: "DIC_kwDOH2pMHs4CQ8Xo",
          },

          mdEnhance: {
            enableAll: true,
            presentation: {
              plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
          },
        },
    }),
  };