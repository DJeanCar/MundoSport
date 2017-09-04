var path = require('path');
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== "prod";

module.exports = {
	devtool: 'source-map',
	context: path.resolve(__dirname, 'client', 'js'),
	entry: './admin/index.js',
	output: {
		path: path.resolve(__dirname, 'client', 'js', 'dist'),
		filename: 'admin.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015'],
					plugins: [
						'babel-plugin-react-html-attrs',
						'transform-object-rest-spread',
						'transform-decorators-legacy',
					]
				},
			}
		]
	},
	plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('prod')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};

