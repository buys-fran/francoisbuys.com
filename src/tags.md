---
layout: 'layouts/feed.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'nav', 'garden', 'rss']
permalink: '/tag/{{ tag | slug }}/'
eleventyComputed:
  title: '{{ tag }} Archive | francoisbuys.com'
---

