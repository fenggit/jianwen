module.exports = {
    title: '见闻阅读',
    description: '涨点知识,seo',
    //port: '7777',
    base: '/jianwen/',//github仓库名称
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'fenggit/jianwen',
    repoLabel: '查看源码',
    // repo: 'https://github.com/fenggit/jianwen',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        // <link rel="manifest" href="/manifest.json">

        // pwa
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    // pwa see：https://developer.mozilla.org/zh-CN/docs/Web/Manifest
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容 ",
            buttonText: "刷新"
        }
    }],
    markdown: {
        lineNumbers: true
    }
    ,

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/':
            {
                lang: 'zh-CN' // 将会被设置为 <html> 的 lang 属性
            }
        ,
        /*'/en/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器'
        }*/
    }
    ,

    themeConfig: {
        // pwa
        serviceWorker: {
            updatePopup: {
                message: "内容已更新",
                buttonText: "刷新"
            }
        },

        // 文档修改时间的前缀
        lastUpdated: '修改时间', // string | boolean
                             // 导航栏
        nav:
            [
                {text: 'Home', link: '/'},
                {text: '亚马逊', link: '/jbletter/'},
                {text: 'Test', link: '/test/'},
                {text: 'about', link: '/about/'},
                {text: 'External', link: 'https://google.com'},
                // {
                //     text: 'Languages',
                //     ariaLabel: 'Language Menu',
                //     items: [
                //         {text: 'Chinese', link: '/language/chinese/'},
                //         {text: 'Japanese', link: '/language/japanese/'},
                //         {text: 'Group1', items: [{text: 'Guide', link: '/guide/'}, {text: 'Guide2', link: '/guide/'}]},
                //         {text: 'Group2', items: [/*  */]}
                //     ]
                // }
            ],

        // 侧边栏
        //sidebar: 'auto',
        sidebar:
            {
                '/jbletter/':
                    [
                        '', /* /foo/ */
                        '贝索斯1997年致股东的信', /* /foo/one.html */
                        '贝索斯1999年致股东的信'   /* /foo/two.html */
                    ],

                '/test/':
                    [
                        //'',      /* /bar/ */
                        't1', /* /bar/three.html */
                        't2'   /* /bar/four.html */
                    ],

                // fallback
                '/':
                    [
                        '', /* / */
                        '/about/', /* /contact.html */
                        '/test/'    /* /about.html */
                    ]
            }
        ,

        //启用页面滚动效果
        smoothScroll: false,
        sidebarDepth:
            2,
    }

// themeConfig: {
//     nav: require('./nav'),
//     /*sidebar: {'/guide/':[
//             {
//                 title:'新手指南',
//                 collapsable: true,
//                 children:[
//                     '/guide/notes/one',
//                 ]
//             },
//             {
//                 title:'知码学院',
//                 collapsable: true,
//                 children:[
//                     '/guide/notes/two',
//                 ]
//             }
//         ]
//     },*/
//     sidebarDepth: 2,
//     sidebar: 'auto',
//     lastUpdated: true,
//     searchMaxSuggestions: 10,
//     serviceWorker: {
//         updatePopup: {
//             message: "有新的内容.",
//             buttonText: '更新'
//         }
//     },
//     editLinks: true,
//     editLinkText: '在 GitHub 上编辑此页 ！'
// }
}
;