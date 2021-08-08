const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js')

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/')

  config.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: '<!-- more -->',
  })

  config.addCollection('featuredPosts', (collection) => {
    const posts = collection
      .getFilteredByGlob('./src/posts/*.md')
      .filter((x) => x.data.featured)
    return sortByDisplayOrder(posts)
  })

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
