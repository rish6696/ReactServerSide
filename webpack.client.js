const path =require('path')
const webpack = require('webpack')

module.exports={
    // Inform webpack we are building bundle for node js rather tha browser

    //tel webpack the root file of our application 
    entry: './src/client/client.js',

    //output is to tell webpack where to put output file
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')

    },

    // tell babel to run webpack on every file
    module:{
        rules: [
            {
              test: /\.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                presets: [
                  'react',
                  'stage-0',
                  ['env', { targets: { browsers: ['last 2 versions'] } }]
                ]
              }
            }
          ]
    },


    plugins: [
        new webpack.ProvidePlugin({
          "React": "react",
        }),
      ],
}