// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = (config) => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

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
