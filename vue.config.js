const path = require("path");
// const { config } = require("process")
function pathHandler(pathUrl) {
  return path.join(__dirname, pathUrl);
}
// 引入等比适配插件
const px2rem = require("postcss-px2rem");
// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16,
});
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", pathHandler("./src"))
      .set("Api", pathHandler("./src/api"))
      .set("Assets", pathHandler("./src/assets"))
      .set("Comp", pathHandler("./src/components"))
      .set("Mixin", pathHandler("./src/mixin"))
      .set("Pages", pathHandler("./src/pages"))
      .set("Plugins", pathHandler("./src/plugins"))
      .set("Router", pathHandler("./src/router"))
      .set("Store", pathHandler("./src/store"))
      .set("Utils", pathHandler("./src/utils"))
      .set("Directive", pathHandler("./src/directive"))
     .set("Filter", pathHandler("./src/filters"));
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://59.110.226.77:3000',
        changeOrigin: true 
      },
      '/index.php': {
        target: 'http://www.qinqin.net',
        changeOrigin: true 
      },
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true 
      }

    }
  },
};
