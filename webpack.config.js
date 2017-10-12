module.exports = function(env) {
    switch (env) {
        case 'dev':
            return require('./webpack.dev.config');
        case 'prod':
            return require('./webpack.prod.config')
        default:
            return require('./webpack.dev.config');
    }
} 