module.exports = {
    base: "/star-mini-ui/",
    title: 'star-mini-ui', // 设置网站标题
    description: '简洁 ui 库', //描述
    port: 1234, //端口
    themeConfig: { //主题配置
        nav: [
            {
                text: '主页',
                link: 'https://github.com/nosillytrying/star-mini-ui/issues'
            }, // 导航条
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [{
                    collapsable: true,
                    children: [
                        'button'
                    ]
                }
            ]
        },
        repo: 'nosillytrying/star-mini-ui',
        repoLabel: 'Github',
    },
    markdown: { // markdown 插入代码时展示对应行数
    lineNumbers: true
  }
}