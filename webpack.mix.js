const mix = require('laravel-mix');
const fs = require('fs');

mix.sass('src/scss/app.scss', 'dist/css')
    .js('src/js/app.js', 'dist/js')
