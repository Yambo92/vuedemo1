
module.exports = {
    lintOnSave: false,
    configureWebpack: config => {
        config.entry.app = './src/main.js'
    }
    
}