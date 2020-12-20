---
title: Posts
layout: base
permalink: "/posts/"
eleventyExcludeFromCollections: all
---

<ul>
{% for post in collections.posts %}
<li>
<a class="text-lg font-medium hover:text-yellow-300" href="{{ post.url }}">{{ post.data.title }}</a>
<p class="text-sm text-gray-500">
  {% if updatedAt %} Updated on {{ updatedAt | dateDisplay }}
  {% else %} Updated on {{ page.date | dateDisplay }} {% endif %}
  <span class="px-2">({{ post.templateContent | emojiReadTime }})</span>
</p>
</li>
{% endfor %}
</ul>
