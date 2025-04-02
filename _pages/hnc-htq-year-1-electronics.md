---
title: HNC HTQ Year 1 Electronics Hub
permalink: /classes/hnc-htq-year-1-electronics/
---

<h1>HTQ/HNC Year 1 Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% for post in site.posts %}
    {% if post.classes contains "HNC HTQ Year 1 Electronics" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
