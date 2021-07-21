const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env'],
                ['@babel/preset-typescript']
              ]
            }
          },
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    filename: 'oscar.min.js',
    path: path.resolve(__dirname, 'lib'),
  },
};
