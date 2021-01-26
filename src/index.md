---
layout: base
title: francoisbuys.com
changefreq: weekly
priority: 1
---

{% for post in collections.posts %}
<article class="mb-8">
  <h2 class="text-2xl tracking-wide font-medium text-center"> {{ post.data.title }} </h2>
  <p class="text-gray-500 text-center py-4">
    {% if updatedAt %} Updated on {{ updatedAt | dateDisplay }}
    {% else %} Updated on {{ post.date | dateDisplay }} {% endif %}
  </p>
  <p class="text-justify">{{ post.templateContent | postBlurb }} </p>
   <a
     class="block py-4 underline uppercase text-center hover:text-yellow-300"
     href="{{ post.url }}"
   >
     Read more
   </a>
</article>
{% endfor %}
