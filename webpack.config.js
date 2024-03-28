const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: '/home/nikolay/Projects/JavaScript_HW/modules/dist/main.html',
        open: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin()
    ]
}
