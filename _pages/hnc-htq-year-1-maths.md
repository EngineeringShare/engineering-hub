---
title: HNC HTQ Year 1 Maths Hub
permalink: /classes/hnc-htq-year-1-maths/
---

<h1>T-Level Year 1 Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% for post in site.posts %}
    {% if post.classes contains "HNC HTQ Year 1 Maths" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
