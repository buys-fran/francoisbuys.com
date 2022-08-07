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
    // See: https://github.com/postcss/postcss-import
    // See: https://github.com/madyankin/postcss-modules
    postcssimport({ plugins: [ cssmodules ] }),
    autoprefixer
  ]

  return src('src/css/main.css')
    // Gulp sourcemaps enables degugging minified files
    .pipe( sourcemaps.init() )
    // Apply plugins explained above
    .pipe( postcss(plugins) )
    // Not sure what source maps does
    .pipe( sourcemaps.write('.') )
    // Here we write the fully process main.css file to public/css.
    // So we end up with a single css file in our public directory.
    .pipe( dest('./public/css') )
};

// Helper function that takes a data like this
// { test.json: { .class: { color: blue } } }
// returns a Buffer that containes this
// { test: { .class: { color: blue } } }
const combineModulesJson = (data) => {
  const result = Object.keys(data).reduce((acc, k) => {
    const key = k.substring(0, k.lastIndexOf("."))
    return { ...acc, [key]: data[k] };
  }, {});
  return Buffer.from(JSON.stringify(result));
};

// Postcss css modules generates json files that contain the css module
// class names map to the actual class names.
// This function combines all of the jOn files into a single main.css.json
// file. The combined file contains all the class names nested in a key
// that matches the files name of the css file where the classes are defined.
// For example if test.css contains a class called test,
// we can map to the class using css-module="test.test".
const processModules = () => {
  return src('src/css/**/*.json')
    .pipe(jsoncombine("main.css.json",combineModulesJson))
    .pipe(dest("src/css/."));
};

// We process html s we can add programatically add the mapped class names
// to the html.
const processHtml = () => {
  // This plugin processes html by adding the mapped classnames found in
  // main.css.json. This plugin can also use nested json structures that
  // enable us to reference class names in the nested json structure.
  // See: https://github.com/posthtml/posthtml-css-modules
  const plugins = [posthtmlCssModules('src/css/main.css.json')]

  return src('public/**/*.html')
    .pipe( posthtml(plugins) )
    .pipe( dest('public/') )
};

// We need to run the tasks in series, one after the other in sequence.
module.exports = series(processCss, processModules, processHtml);
