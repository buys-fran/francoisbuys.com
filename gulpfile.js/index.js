const {parallel, series, watch} = require('gulp');

// Pull in each task
const css = require('./css.js');
const { clean, cleanCss } = require('./clean.js');
// import css from './gulp-tasks/css.js';
// import { clean, cleanCss } from './gulp-tasks/clean.js';

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  watch('./src/css/**/*.css', {ignoreInitial: true}, cleanCss);
  watch('./src/css/**/*.css', {ignoreInitial: true}, css);
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
exports.default = series(clean, parallel(css));

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
exports.watch = watcher;

