// https://vue-test-utils.vuejs.org/zh/guides/#%E7%94%A8-mocha-%E5%92%8C-webpack-%E6%B5%8B%E8%AF%95%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6

// npm install --save-dev @vue/test-utils karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack mocha karma-chai

var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: ['tests/**/*.spec.js'],
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    autoWatch: true,
    webpack: webpackConfig,
    reporters: ['spec'],
    browsers: ['ChromeHeadless']
  })
}