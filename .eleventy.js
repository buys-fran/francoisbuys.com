module.exports = (config) => {
  // Set directories to pass through to the public folder
  config.addPassthroughCopy('./src/images/');

  // Returns a collection of garden posts in reverse date order
  config.addCollection('garden', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

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
