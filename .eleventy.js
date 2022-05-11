module.exports = (config) => {
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
