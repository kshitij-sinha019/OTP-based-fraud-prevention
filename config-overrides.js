// const webpack = require('webpack');

// module.exports = function override(config) {
//     config.resolve.fallback = {
//         ...config.resolve.fallback,
//         "crypto": require.resolve("crypto-browserify"),
//         "stream": require.resolve("stream-browserify")
//     };
//     config.plugins = (config.plugins || []).concat([
//         new webpack.ProvidePlugin({
//             process: 'process/browser',
//             Buffer: ['buffer', 'Buffer']
//         })
//     ]);
//     return config;
// };

const webpack = require('webpack');

module.exports = function override(config) {
    // Adding a fallback for 'process/browser' and other required modules
    config.resolve.fallback = {
        ...config.resolve.fallback,
        process: require.resolve('process/browser'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/')
    };

    // Adding ProvidePlugin to ensure 'process' and 'Buffer' are available globally
    config.plugins = [
        ...(config.plugins || []),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ];

    return config;
};
