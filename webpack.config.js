module.exports = {
    module: {
        rules: [
            {
                test: /\.glsl$/i,
                use: 'raw-loader',
            },
            {
                test: /\.module\.css$/i,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/i,
                use: 'url-loader',
            },
        ],
    },
}
