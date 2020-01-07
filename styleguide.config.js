const path = require('path')

module.exports = {
    webpackConfig: require('./webpack.config'),
    components: 'index.ts', // 写入对应目录的文档
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse,
    ribbon: {
        url: 'https://github.com/Grewer/storage-DAO/',
        text: 'Fork me on GitHub'
    },
    updateDocs(docs, file) {
        if (docs.doclets.version) {
            const versionFilePath = path.resolve(
                path.dirname(file),
                docs.doclets.version
            )
            const version = require(versionFilePath).version

            docs.doclets.version = version
            docs.tags.version[0].description = version
        }

        return docs
    },
    verbose: true,
    dangerouslyUpdateWebpackConfig(webpackConfig, env) {
        webpackConfig.output.path = path.join(__dirname, 'doc')
        return webpackConfig
    }
}
