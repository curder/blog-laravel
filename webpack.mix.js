let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// Bootstrap

mix.js(['resources/assets/js/app.js'], 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css').version();

// Zui
/*mix.js([
 'resources/assets/js/app.js',
 'node_modules/zui/dist/js/zui.js'
 ], 'public/js/app.js')
 .styles([
 'node_modules/zui/dist/css/zui.css',
 'resources/assets/css/app.css',
 ], 'public/css/app.css')
 .copy('node_modules/zui/dist/fonts', 'public/fonts').version();*/

