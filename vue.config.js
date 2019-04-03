const path=require("path");
module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 强制内联CSS
  css: { extract: false },
  chainWebpack: config => {
    //配置alias
      // // 配置采用外部依赖方式
      // config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
      config.resolve.alias.set('img', path.join(__dirname, 'src/assets'))
      config.resolve.alias.set('components', path.join(__dirname, 'src/components'))
    //  config.resolve.alias.set('util', path.join(__dirname, 'src/util/index.js'))
      config.resolve.alias.set('create-api', path.join(__dirname, 'src/util/create-api'))
      config.resolve.alias.set('mixins', path.join(__dirname, 'src/common/mixins'))
      

    // 扩展 webpack 配置，使 packages 加入编译
    config.module
      .rule('js')
      .include
        .add(/packages/)
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
}
