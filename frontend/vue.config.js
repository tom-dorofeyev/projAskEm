const path = require('path');

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(_dirname, 'src/styles/global.scss')]
    }
  }
}
