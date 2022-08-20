export const data = JSON.parse("{\"key\":\"v-0787be93\",\"path\":\"/Random/\",\"title\":\"随机发生页面\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"随机发生页面\",\"icon\":\"creative\",\"summary\":\"import { defineComponent } from 'vue' import { usePages } from '@temp/pages' // pages.js is default filename export default defineComponent({ setup() { }, mounted() { const pages =\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/Vuepress-template/Random/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"OpenWGTicket\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"随机发生页面\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.2,\"words\":60},\"filePathRelative\":\"Random/README.md\"}")

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
