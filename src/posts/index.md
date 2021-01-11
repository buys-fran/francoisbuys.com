---
title: Posts
layout: base
permalink: "/posts/"
eleventyExcludeFromCollections: all
---

{% assign posts = collections.posts | reverse %}
<ul>
{% for post in posts %}
<li class="mb-4">
<a class="text-lg font-medium hover:text-yellow-300" href="{{ post.url }}">{{ post.data.title }}</a>
<p class="text-sm text-gray-500">
  {% if post.updatedAt %} Updated on {{ post.updatedAt | dateDisplay }}
  {% else %} Updated on {{ post.date | dateDisplay }} {% endif %}
  <span class="px-2">({{ post.templateContent | emojiReadTime }})</span>
</p>
</li>
{% endfor %}
</ul>
