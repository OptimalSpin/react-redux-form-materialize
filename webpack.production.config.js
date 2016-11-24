const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const merge = require('merge')

module.exports = merge(baseConfig, {
    devtool: null,
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            }
        })
    ]
})
