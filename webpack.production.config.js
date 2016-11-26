const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const {babelLoaderConfig} = require('./webpack.base.config')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
    externals: {
        'react': {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
        'classnames': {
            commonjs: 'classnames',
            commonjs2: 'classnames',
            amd: 'Classnames',
            root: 'classnames'
        }
    },
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
    ],
    module: {
        loaders: [
            babelLoaderConfig
        ]
    }
})
