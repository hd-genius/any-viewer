const { series, parallel, src, dest } = require('gulp');
const webpack = require('webpack-stream');
const minifyHTML = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

const clean = (cb) => {
    cb();
}

const buildStyles = () => {
    return src("src/styles/styles.css")
        .pipe(cleanCSS())
        .pipe(dest("build/styles"));
}

const buildScripts = () => {
    return src("src/scripts/main.js")
        .pipe(webpack({
            mode: "production"
        }))
        .pipe(dest("build/scripts"));
}

const buildHtml = () => {
    return src("src/index.html")
        .pipe(minifyHTML({ collapseWhitespace: true }))
        .pipe(dest("build/"));
}

const build = parallel(buildStyles, buildScripts, buildHtml);

exports.clean = clean;

exports.build = build;

exports.serve = () => {};

exports.default = series(clean, build);