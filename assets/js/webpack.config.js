const webpack = require( 'webpack' );
const pkg = require( './package' );

const banner = `${ pkg.name } ${ pkg.version }\nCopyright (c) ${ new Date().getFullYear() } ${ pkg.author }\nLicense: ${ pkg.license }`;

const webpackConfig = {
	context: __dirname + `/src`,
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'index.min.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	externals: {
		lodash: 'lodash',
	},
	plugins: [
		new webpack.BannerPlugin( banner ),
	],
};

module.exports = webpackConfig;