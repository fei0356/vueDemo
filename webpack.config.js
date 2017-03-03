var webpack = require("webpack");
var path = require('path');
//var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app/main');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'main.js'
  },
  resolve: {
	  alias: {
	    'vue$': 'vue/dist/vue.common.js',
	  }
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-2'],
					cacheDirectory: true
				},
				exclude: '/(node_modules)/'
			},
			{
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			}
		]
	},	
	plugins: [
		new webpack.ProvidePlugin({
			vue: path.resolve(__dirname, "./node_modules/vue/dist/vue.js")
		}),
		new webpack.HotModuleReplacementPlugin()

	],
	devServer: {
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }

}
