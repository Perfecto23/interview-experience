import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  outDir: "dist",
  
  title: "柯芃丞的面经记录",
  description: "记录我的所有面试经历和过程",
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  // TODO: Replace with your actual domain
  sitemap: {
    hostname: 'https://example.com',
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png', // Ensure logo.png exists in docs/public if used, or remove
    nav: [
      { text: '首页', link: '/' },
      { text: '个人博客', link: 'https://blog.itmirror.top' },
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    sidebar: [
  {
    "text": "腾讯-WXG-微信小店",
    "collapsed": true,
    "items": [
      {
        "text": "部门一面",
        "link": "/腾讯-WXG-微信小店/部门一面"
      },
      {
        "text": "部门二面",
        "link": "/腾讯-WXG-微信小店/部门二面"
      },
      {
        "text": "笔试",
        "link": "/腾讯-WXG-微信小店/笔试"
      },
      {
        "text": "面委会一面",
        "link": "/腾讯-WXG-微信小店/面委会一面"
      },
      {
        "text": "面委会二面",
        "link": "/腾讯-WXG-微信小店/面委会二面"
      }
    ]
  },
  {
    "text": "字节跳动-飞书文档-AI团队",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/字节跳动-飞书文档-AI团队/一面"
      },
      {
        "text": "二面",
        "link": "/字节跳动-飞书文档-AI团队/二面"
      },
      {
        "text": "三面",
        "link": "/字节跳动-飞书文档-AI团队/三面"
      }
    ]
  },
  {
    "text": "万兴科技",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/万兴科技/一面"
      },
      {
        "text": "二面",
        "link": "/万兴科技/二面"
      },
      {
        "text": "三面",
        "link": "/万兴科技/三面"
      }
    ]
  },
  {
    "text": "深度赋智",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/深度赋智/一面"
      },
      {
        "text": "CEO面",
        "link": "/深度赋智/CEO面"
      }
    ]
  },
  {
    "text": "游密科技",
    "collapsed": true,
    "items": [
      {
        "text": "技术面",
        "link": "/游密科技/技术面"
      }
    ]
  },
  {
    "text": "萌时科技",
    "collapsed": true,
    "items": [
      {
        "text": "说明",
        "link": "/萌时科技/说明"
      },
    ]
  },
  {
    "text": "Shopee-金融风控",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/Shopee-金融风控/一面"
      },
      {
        "text": "二面",
        "link": "/Shopee-金融风控/二面"
      }
    ]
  },
  {
    "text": "京东零售-海外电商",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/京东零售-海外电商/一面"
      },
      {
        "text": "二面",
        "link": "/京东零售-海外电商/二面"
      }
    ]
  },
  {
    "text": "影石 Insta360",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/影石-Insta360/一面"
      },
      {
        "text": "二面",
        "link": "/影石-Insta360/二面"
      }
    ]
  },
  {
    "text": "马卡龙",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/马卡龙/一面"
      },
      {
        "text": "CEO面",
        "link": "/马卡龙/CEO面"
      }
    ]
  },
  {
    "text": "安菲翁",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/安菲翁/一面"
      },
      {
        "text": "二面+CEO面",
        "link": "/安菲翁/二面+CEO面"
      }
    ]
  },
  {
    "text": "数字马力",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/数字马力/一面"
      },
      {
        "text": "二面",
        "link": "/数字马力/二面"
      }
    ]
  },
  {
    "text": "道通科技",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/道通科技/一面"
      },
      {
        "text": "二面",
        "link": "/道通科技/二面"
      }
    ]
  },
  {
    "text": "蜂群互联网",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/蜂群互联网/一面"
      },
      {
        "text": "二面",
        "link": "/蜂群互联网/二面"
      }
    ]
  },
  {
    "text": "小步网络",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/小步网络/一面"
      },
      {
        "text": "CEO面",
        "link": "/小步网络/CEO面"
      }
    ]
  },
  {
    "text": "富途证券-用户增长",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/富途证券-用户增长/一面"
      },
      {
        "text": "二面",
        "link": "/富途证券-用户增长/二面"
      }
    ]
  },
  {
    "text": "量匠",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/量匠/一面"
      }
    ]
  },
  {
    "text": "未来机器人",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/未来机器人/一面"
      }
    ]
  },
  {
    "text": "百度网盘",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/百度网盘/一面"
      }
    ]
  },
  {
    "text": "KuCoin",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/KuCoin/一面"
      }
    ]
  },
  {
    "text": "腾讯音乐",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/腾讯音乐/一面"
      }
    ]
  },
  {
    "text": "思维巡航",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/思维巡航/一面"
      }
    ]
  },
  {
    "text": "智现未来",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/智现未来/一面"
      }
    ]
  },
  {
    "text": "道旅旅游科技",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/道旅旅游科技/一面"
      }
    ]
  },
  {
    "text": "长桥证券",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/长桥证券/一面"
      }
    ]
  },
  {
    "text": "数创弧光",
    "collapsed": true,
    "items": [
      {
        "text": "一面",
        "link": "/数创弧光/一面"
      }
    ]
  }
],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Perfecto23' }
    ]
  }
})
