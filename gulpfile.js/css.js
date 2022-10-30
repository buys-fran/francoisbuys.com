// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

const { src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')

// The main Sass method grabs all root Sass files,
// processes them, then sends them to the output calculator
const css = () => {
  return src('./src/css/*.scss') // Files to process
    .pipe(sass().on('error', sass.logError)) // send to sass processor
    .pipe(autoprefixer()) //sends the source file to the autoprefixer plugin
    .pipe(cleanCSS(isProduction ? { level: 2 } : {})) // only compress output in production
    .pipe(dest('./public/css', {sourceMaps: !isProduction})); // send to publis/css
};

module.exports = css;
