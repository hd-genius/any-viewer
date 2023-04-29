const { series, parallel, src, dest } = require('gulp');

const clean = (cb) => {
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

const copyHtml = () => {
    return src("src/*.html").pipe(dest("build/"));
}

const build = parallel(buildStyles, buildScripts, copyHtml);

exports.clean = clean;

exports.build = build;

exports.default = series(clean, build);