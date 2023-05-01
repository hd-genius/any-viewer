module.exports = {
    module: {
        rules: [
            {
                test: /\.glsl$/i,
                use: 'raw-loader',
            },
            {
                test: /\.module.css$/i,
                use: 'css-loader',
            },
        ],
    },
}
