const plugins = [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-transform-runtime"
];

const presets = ["@babel/preset-env", "@babel/preset-react"];

module.exports = { presets, plugins };
