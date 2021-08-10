---
title: 'francoisbuys.com - Blog'
intro:
  eyebrow: 'This is my blog'
  main: 'Here is where I like to think out loud.'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 5
permalink: 'writing{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

# Writing

Some pieces are fully fledged essays while others are simple notes that I felt like leaving here. I like writing about web development, VIM, Pair Programming and other interesting things.

