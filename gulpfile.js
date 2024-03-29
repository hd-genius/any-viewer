const { series, parallel, src, dest, watch } = require('gulp')
const gulpClean = require('gulp-clean')
const webpack = require('webpack-stream')
const webpackConfig = require('./webpack.config')
const minifyHTML = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const browserSync = require('browser-sync').create()
const rename = require('gulp-rename')

const bundleJavascript = () =>
    webpack({
        mode: 'production',
        ...webpackConfig,
    })

const clean = () => {
    return src('build/', { allowEmpty: true }).pipe(gulpClean())
}

const buildStyles = () => {
    return src('src/styles/styles.css')
        .pipe(cleanCSS())
        .pipe(dest('build/styles'))
}

const buildComponents = () => {
    return src('src/components/index.js')
        .pipe(bundleJavascript())
        .pipe(rename('index.js'))
        .pipe(dest('build/components'))
}

const buildScripts = () => {
    return src('src/scripts/main.js')
        .pipe(bundleJavascript())
        .pipe(dest('build/scripts'))
}

const buildHtml = () => {
    return src('src/index.html')
        .pipe(minifyHTML({ collapseWhitespace: true }))
        .pipe(dest('build/'))
}

const build = parallel(buildStyles, buildScripts, buildComponents, buildHtml)

exports.clean = clean

exports.build = build

exports.serve = () => {
    browserSync.init({
        server: {
            baseDir: './build/',
        },
        watch: true,
    })

    watch('src/styles/**/*.css', { ignoreInitial: false }, buildStyles)

    watch('src/scripts/**/*.js', { ignoreInitial: false }, buildScripts)

    watch('src/components/**/*', { ignoreInitial: false }, buildComponents)

    watch('src/**/*.html', { ignoreInitial: false }, buildHtml)
}

exports.default = series(clean, build)
