const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env = { mode: 'development' }) => {
    return {
        mode: env.mode,
        entry: "./src/index.js",
        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                },
            ]
        },
        output: {
            path: __dirname + "/dist",
            filename: "bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, 'src'),
            compress: true,
            port: 9000
        },
        plugins: [
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                }
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ]
    }
}
