"use strict";

var path = require("path");

module.exports = {
    entry: [
        "./src",
    ],
    module: {
        rules: [
            { test: /\.js$/, loader: ["babel-loader"], exclude: /node_modules/ },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ],
            },
        ],
    },
    output: {
        path: path.resolve("./dist"),
        filename: "bundle.js",
    },
    resolve: {
        modules: [
            path.resolve("./node_modules"),
        ],
        extensions: [".js", ".less"],
    },
};
