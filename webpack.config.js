const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");
const apiMocker = require("connect-api-mocker");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    devtool: false,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/transform-runtime"],
                },
            },
            {
                test: /\.(scss|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    output: {
        publicPath: "",
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "./public"),
        port: 3000,
        before: (app) => {
            app.use(apiMocker("/api", "mocks/api"));
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new SourceMapDevToolPlugin(),
        new webpack.BannerPlugin({ banner: new Date().toLocaleString() }),
        new ESLintPlugin(),
    ],
};
