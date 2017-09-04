var path = require('path');

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
					presets: ['react'],
					plugins: [
						'babel-plugin-react-html-attrs',
						'transform-object-rest-spread',
						'transform-decorators-legacy',
					]
				},
			}
		]
	},
};
