const wallabyWebpack = require("wallaby-webpack");
const webpackConfig = require("./webpack.config");

const wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
    return {
        name: "integration",
        files: [
            { pattern: "node_modules/babel-polyfill/dist/polyfill.js", instrument: false },
            { pattern: "src/**/*.js", load: false },
            { pattern: "src/**/*.less", load: false },
        ],
        tests: [
            { pattern: "tests/**/*.tests.js", load: false },
        ],
        env: {
            kind: "chrome",
        },
        testFramework: "jasmine",
        compilers: {
            "**/*.js": wallaby.compilers.babel({ babel: require("babel-core") }),
        },
        postprocessor: wallabyPostprocessor,
        bootstrap: () => {
            window.__moduleBundler.loadTests();
        },
    };
};