const { environment } = require('@rails/webpacker')
const vue = require('./loaders/vue')
const { VueLoaderPlugin } = require('vue-loader')

environment.loaders.append('vue', vue)
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
module.exports = environment
