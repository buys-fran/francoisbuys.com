const { parallel } = require('gulp');
const del = require('node-delete');
// Example del usage includes:
// here we use a globbing pattern to match everything inside the `mobile` folder
// 'dist/mobile/**/*',
// we don't want to clean this file though so we negate the pattern
// '!dist/mobile/deploy.json'

// Here we remove files and folders generated during the css build process.
// This way the build process is idempotent.
const cleanCss = () => {
  del.sync([
    'src/css/**/*.css.json',
  ]);
  return Promise.resolve();
};

// Here we remove all build artefacts. This way the build process is idempotent.
const clean = parallel(cleanCss)

// export default { clean, cleanCss };
module.exports = { clean, cleanCss };

