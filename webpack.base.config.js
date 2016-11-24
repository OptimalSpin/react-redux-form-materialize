const webpack = require('webpack')
const path = require('path')

const SRC_PATH = path.combine(__dirname, 'src')

module.exports = {
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
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: SRC_PATH
            }
        ],
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
        ]
    }
}