---
title: HNC HTQ Year 1 Electronics Hub
permalink: /classes/hnc-year-2-electronics/
---

<h1>HNC Electronics Year 2 Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% for post in site.posts %}
    {% if post.classes contains "HNC Year 2 Electronics" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
