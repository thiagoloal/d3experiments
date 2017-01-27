// Common imports
import gulp         from 'gulp';
import pkg          from '../package.json';
import environments from 'gulp-environments';
import path         from 'path';

// Require webpack utilities
import webpack      from 'webpack';

// Config variables
var src = path.join(pkg.src.script, '**/*.{js,jsx}'),
	srcPath = path.join(process.cwd(), pkg.src.script),
	dest = path.join(process.cwd(), pkg.build.script);

var webpackSettings = {
	debug: environments.development(),
	entry: {
		// 'ie-polyfill': 'babel-polyfill',
		main: ['babel-polyfill', path.join(srcPath, 'main.js')],
		// Each additional bundle you require (e.g. index page js, or contact page js)
		// should be added here and referenced as a script tag in the corresponding template
		// index: path.join(srcPath, 'index.js'),
	},
	output: {
		path: dest,
		publicPath: '/js/',
		filename: `[name]-${pkg.name}.js?[hash]`
	},
	plugins: environments.production() ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	] : [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	resolve: {
		extensions: ['', '.js', '.jsx', ]
	},
	module: {
		preLoaders: [{
			test: /\.jsx$|\.js$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		}],
		loaders: [
			// Javascript
			{
				test: /\.jsx$|\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				},
			},
		],
	},
	jshint: {},
	eslint: {}
};

if (environments.development()) {
	webpackSettings.devtool = "eval";
};

module.exports = webpackSettings;
