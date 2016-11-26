const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const baseConfig = require('./webpack.base.config')
const {babelLoaderConfig} = require('./webpack.base.config')

const TEST_PATH = path.join(__dirname, 'test')

babelLoaderConfig.include.push(TEST_PATH)

module.exports = merge(baseConfig, {
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
            babelLoaderConfig
        ]
    }
})