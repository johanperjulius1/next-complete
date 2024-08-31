const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "app/Main.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[contenthash].bundle.js",
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html")
    })],
    mode: "production",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { // our code will be compatible with Internet Explorer 11
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}