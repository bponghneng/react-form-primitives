const babelOptions = {
  presets: ["@babel/preset-react"]
};

module.exports = require("babel-jest").createTransformer(babelOptions);
