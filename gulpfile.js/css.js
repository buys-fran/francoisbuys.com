const { src, dest, series } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const postcssimport = require('postcss-import');
const cssmodules = require('postcss-modules');
const autoprefixer = require('autoprefixer');
const jsoncombine = require('gulp-jsoncombine');
const posthtml = require('gulp-posthtml');
const posthtmlCssModules = require('posthtml-css-modules');

const processCss = () => {
  const plugins = [
    // postcss-import allows us to inline import statement similar to 
    // sass imports. See: https://github.com/postcss/postcss-import
    // The plugins option accepts an array of plugins to be applied on each
    // imported files. Here we apply postcss-modules to every import prior
    // to inlining it. That how we get the individial css module json files
    // for every imported css file.
    postcssimport({ plugins: [ cssmodules ] }),
    autoprefixer
  ]

  return src('src/css/main.css')
    // Not sure why we use sourcemaps
    .pipe( sourcemaps.init() )
    // Apply plugins explained above
    .pipe( postcss(plugins) )
    // Not sure what source maps does
    .pipe( sourcemaps.write('.') )
    // Here we write the fully process main.css file to public/css.
    // So we end up with a single css file in our public directory.
    .pipe( dest('./public/css') )
};

const combineModulesJson = (data) => {
  const result = Object.keys(data).reduce((acc, k) => {
    const key = k.substring(0, k.lastIndexOf("."))
    return { ...acc, [key]: data[k] };
  }, {});
  return Buffer.from(JSON.stringify(result));
};

const processModules = () => {
  return src('src/css/**/*.json')
    .pipe(jsoncombine("main.css.json",combineModulesJson))
    .pipe(dest("src/css/."));
};

const processHtml = () => {
  const plugins = [posthtmlCssModules('src/css/main.css.json')]

  return src('public/**/*.html')
    .pipe( posthtml(plugins) )
    .pipe( dest('test/') )
};

// export default series(processCss, processModules, processHtml);
module.exports = series(processCss, processModules, processHtml);
