var path = require('path');
var CopyPlugin = require('copy-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = env => {

    return {
        mode: 'development',
        context: __dirname,
        entry:  [
            "./src/index.tsx"
        ],
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "widget.bundle.js"
        },
        devServer: {
            contentBase: path.resolve(__dirname, "build"),
            port: 5555
        },
        plugins: [
            new CopyPlugin([{from: env.bundleFile, to: './integration.bundle.js'}]),
            new WriteFilePlugin()
        ],
        resolve: {
            extensions: ['.ts', '.js', '.tsx']    
        },
        module: {
            rules: [
              {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                  }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                  }, {
                    loader: 'less-loader' // compiles Less to CSS
                  }]
              },
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
              },
              {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                include: /node_modules/,
                loader: "file-loader",
                options: {
                    name: "dist/assets/fonts/[name].[ext]",
                    publicPath: ""
                }
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "assets/images/[name].[ext]",
                    publicPath: ""
                }
            },
            ]
          }    
    }
};