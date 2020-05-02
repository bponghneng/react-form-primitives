import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";

export default (env = {}) => ({
    context: process.cwd(),
    entry: {"react-form-primitives": ["./src/index.js"]},
    externals: {
        classnames: {
            amd: "classnames",
            commonjs: "classnames",
            commonjs2: "classnames",
            root: "classnames"
        },
        lodash: {
            amd: "lodash",
            commonjs: "lodash",
            commonjs2: "lodash",
            root: "_"
        },
        react: {
            amd: "React",
            commonjs: "react",
            commonjs2: "react",
            root: "React"
        },
        "react-dom": {
            amd: "ReactDOM",
            commonjs: "react-dom",
            commonjs2: "react-dom",
            root: "ReactDOM"
        },
        "react-select": {
            amd: "react-select",
            commonjs: "react-select",
            commonjs2: "react-select",
            root: "react-select"
        },
        validator: {
            amd: "validator",
            commonjs: "validator",
            commonjs2: "validator",
            root: "validator"
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    output: {
        devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]",
        filename: "react-form-components.js",
        library: "react-form-components",
        libraryTarget: "umd",
        path: path.join(process.cwd(), "./dist"),
        publicPath: "/dist/",
        umdNamedDefine: true
    },
    plugins: [new CleanWebpackPlugin({verbose: true})],
    resolve: {
        alias: {
            "classnames": path.resolve(__dirname, "./node_modules/classnames"),
            "lodash": path.resolve(__dirname, "./node_modules/lodash"),
            "react": path.resolve(__dirname, "./node_modules/react"),
            "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
            "react-select": path.resolve(__dirname, "./node_modules/react-select"),
            "validator": path.resolve(__dirname, "./node_modules/validator")
        },
        extensions: [".js", ".jsx"]
    }
});
