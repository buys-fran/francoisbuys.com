module.exports = (config) => {
  // Set directories to pass through to the public folder
  config.addPassthroughCopy('./src/images/');

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',

    dir: {
      input: 'src',
      output: 'public',
    }
  }
}
