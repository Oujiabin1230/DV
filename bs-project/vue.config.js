const { defineConfig } = require('@vue/cli-service')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')({resolvers: [ElementPlusResolver()],}),
      require('unplugin-vue-components/webpack')({ resolvers: [ElementPlusResolver()], }),
      require('unplugin-auto-import/webpack')({ resolvers: [ElementPlusResolver()], }),
    ],
  },

})
