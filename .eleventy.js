// Filters
const dateFilter = require('./src/filters/date-filter.js')
const w3DateFilter = require('./src/filters/w3-date-filter.js')

// Utils
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js')

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/')

  config.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: '<!-- more -->',
  })

  // Blog posts in reverse date order
  config.addCollection('blog', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse()
  })

  // Digital collections (bookmarks) in reverse date order
  config.addCollection('bookmarks', (collection) => {
    return [...collection.getFilteredByGlob('./src/bookmarks/*.md')].reverse()
  })

  // Featured blog posts in ordered by display order
  config.addCollection('featuredPosts', (collection) => {
    const posts = collection
      .getFilteredByGlob('./src/posts/*.md')
      .filter((x) => x.data.featured)
    return sortByDisplayOrder(posts)
  })

  // Add filters
  config.addFilter('dateFilter', dateFilter)
  config.addFilter('w3DateFilter', w3DateFilter)

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
