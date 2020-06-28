module.exports = {
    title: 'start-mini-ui', // 设置网站标题
    description: '简洁 ui 库', //描述
    dest: './build', // 设置输出目录
    port: 1234, //端口
    themeConfig: { //主题配置
        nav: [{
                text: '主页',
                link: 'https://github.com/zyqq/wheel/issues'
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
        }
    },
    markdown: { // markdown 插入代码时展示对应行数
    lineNumbers: true
  }
}