---
title: 随机发生页面
icon: creative
---

<!-- more -->

<script>
import { defineComponent } from 'vue'
import { usePages } from '@temp/pages'  // pages.js is default filename
export default defineComponent({
  setup() {
  },
  mounted() {
    const pages = usePages()
    var numPage = pages.length
    var theRandomNumber = Math.floor(Math.random() * numPage);
    console.log(theRandomNumber)
    console.log(pages)
    var page = pages.at(theRandomNumber)
    console.log(page)
    var url = page.path
    console.log(url)
    window.location.href = '/Vuepress-template' + url
  },
})
</script>