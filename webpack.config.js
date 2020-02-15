const path = require('path');

module.exports = {
  entry: "./scripts/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "main.js"
  },
  devtool: "sourcemap"
};
