var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: {
		app: "./src/app.js"
	},
	output: {
		filename: "build/bundle.js",
		sourceMapFilename: "build/bundle.js"
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}