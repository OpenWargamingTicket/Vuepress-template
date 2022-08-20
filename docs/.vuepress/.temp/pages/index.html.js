export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"模版_标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"模版_标题\",\"heroImage\":\"/logo.svg\",\"tagline\":\"模版_描述\",\"actions\":[{\"text\":\"随机一个\",\"link\":\"/Random/\",\"type\":\"primary\"},{\"text\":\"从头开始\",\"link\":\"/Tickets/\"}],\"copyright\":true,\"footer\":\"MIT Licensed | Copyright © Open WG Ticket Project\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/Vuepress-template/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"OpenWGTicket\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"模版_标题\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.15,\"words\":45},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
