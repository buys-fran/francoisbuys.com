require('dotenv').config()

module.exports = (config) => {
  config.addLayoutAlias('base', 'layouts/base.njk')

  config.addPassthroughCopy("./src/img");

  // minify the html output
  config.addTransform('htmlmin', require('./src/utils/minify-html.js'))

  // compress and combine css files
  const pluginTailwind = require('eleventy-plugin-tailwindcss')
  config.addPlugin(pluginTailwind, {
    src: "src/css/styles.css",
    dest: ".",
    keepFolderStructure: false,
    minify: true
  })

  // compress and combine js files
  config.addFilter('jsmin', function (code) {
    const UglifyJS = require('uglify-js')
    let minified = UglifyJS.minify(code)
    if (minified.error) {
      console.log('UglifyJS error: ', minified.error)
      return code
    }
    return minified.code
  })

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
