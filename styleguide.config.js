module.exports = {
    webpackConfig: require('./webpack.config'),
    components: 'index.ts', // 写入对应目录的文档
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse,
    ribbon: {
        url: 'http://github.com/',
        text: 'Fork me on GitHub'
    }
}
