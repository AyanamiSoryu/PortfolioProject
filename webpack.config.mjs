import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";


export default {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve('./dist/'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /.*\/src\/.*\.s?css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /.*\/src\/.*\.svg$/,
                issuer: /\.[jt]sx?$/,
                options: {
                    replaceAttrValues: {
                        black: 'currentColor',
                        "#000": 'currentColor',
                        "#202020": 'currentColor'
                    }
                },
                loader: '@svgr/webpack',
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                // use: [
                //     {
                //         loader: 'file-loader',
                //         // loader: 'file?name=src/css/[name].[ext]',
                //         options: {
                //             name: 'fonts/[name].[hash].[ext]',
                //         },
                //     },
                // ],
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Custom title",
        template: './public/index.html'
    })],
};
