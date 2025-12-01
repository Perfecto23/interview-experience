// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch } from 'vue'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

// JSON-LD 结构化数据
const injectSchemaOrg = () => {
  if (typeof document === 'undefined') return
  
  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript) existingScript.remove()
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "柯芃丞的面经记录",
    "url": "https://interview-experience.itmirror.top/",
    "description": "17天面试实录 - 26家公司56场面试完整复盘，包含字节跳动、腾讯、百度等大厂前端面试经验",
    "author": {
      "@type": "Person",
      "name": "柯芃丞",
      "url": "https://blog.itmirror.top"
    },
    "publisher": {
      "@type": "Person",
      "name": "柯芃丞"
    }
  }
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      // 初始注入
      injectSchemaOrg()
      
      // 路由变化时更新
      router.onAfterRouteChange = () => {
        injectSchemaOrg()
      }
    }
  }
} satisfies Theme

