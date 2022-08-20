import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/ass_code_root/Documents/vue/OpenWargaingTicket/OperationTicket/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("/Users/ass_code_root/Documents/vue/OpenWargaingTicket/OperationTicket/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("/Users/ass_code_root/Documents/vue/OpenWargaingTicket/OperationTicket/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
}
