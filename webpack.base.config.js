const webpack = require('webpack')
const path = require('path')

const SRC_PATH = path.join(__dirname, 'src')

module.exports = {    
    output: {
        library: 'ReactReduxFormMaterialize',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    loaders: [
        {
            test: /\.json$/i,
            loader: 'json',
        }
    ]
}

module.exports.babelLoaderConfig = { 
    test: /\.jsx?$/, 
    loader: 'babel', 
    include: [SRC_PATH]
}
      
