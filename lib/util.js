const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    /**
     * Get `HtmlWebpackPlugin BeforeEmit` callback
     *
     * @param {Object} compiler webpack compiler
     * @param {Function} callback callback
     */
    afterHtmlProcessing: function(compiler, callback) {
        compiler.hooks.compilation.tap('HtmlStringReplace', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('HtmlStringReplace', callback);
        })
    },
    /**
     * default replacement function
     *
     * @param {String} match matched string
     * @return {String}
     */
    defaultReplace(match) {
        return match;
    }
};