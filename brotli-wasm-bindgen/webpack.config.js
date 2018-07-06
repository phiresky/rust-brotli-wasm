const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./load-brotli-wasm-bindgen.js",
    mode: "production",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "brotli-wasm.js",
        library: "brotliwasm",
        libraryTarget: "umd",
    }
};
