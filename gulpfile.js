const { series, parallel } = require('gulp');

exports.clean = (cb) => {
    cb();
}

const bundleStyles = (cb) => {
    cb();
}

const minifyStyles = (cb) => {
    cb();
}

const buildStyles = series(bundleStyles, minifyStyles);

const compileScripts = (cb) => {
    cb();
}

const bundleScripts = (cb) => {
    cb();
}

const minifyScripts = (cb) => {
    cb();
}

const buildScripts = series(compileScripts, bundleScripts, minifyScripts);

const copyHtml = (cb) => {
    cb();
}

exports.build = parallel(buildStyles, buildScripts, copyHtml);

exports.default = series(clean, build);