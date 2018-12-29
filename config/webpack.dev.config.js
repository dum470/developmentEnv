const base = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './static',
        // hot: true,
        index: '/view/index.html'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })        
    ]  
});