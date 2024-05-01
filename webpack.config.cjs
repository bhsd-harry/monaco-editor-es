const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    "workers/editor.worker": 'monaco-editor/esm/vs/editor/editor.worker',
    "workers/json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
    "workers/css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
    "workers/html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
    "workers/ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
  },
  output: {
    globalObject: 'self',
    filename: '[name].js',
    path: path.resolve(__dirname),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // don't chunk the output
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    // copy legal notices over
    new CopyPlugin({
      patterns: [
        { from: 'node_modules/monaco-editor/ThirdPartyNotices.txt' },
      ],
    })
  ],
  // weird kludge required by css-loader
  resolve: {
    fallback: {
      fs: false
    }
  },
  performance: {
    maxAssetSize: 5_000_000,
    maxEntrypointSize: 5_000_000
  }
};
