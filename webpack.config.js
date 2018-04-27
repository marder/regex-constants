const { resolve } = require('path');

module.exports = {

	entry: "./build/index.js",
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'regex-constans.js',
		library: 'mreg'
	},

	devtool: "source-map",

	resolve: {
		// OPtions for resolving module requests
		// (does not aply to resolving to loaders)

		// Directories where to look for modules
		modules: [
			"node_modules",
			resolve(__dirname, "app")
		],

		// extensions that are used
		extensions: [".js", ".json", ".jsx", ".css"]

	}

}