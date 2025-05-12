---
title: HTQ Unit 4002 - Engineering Maths
permalink: /classes/htq-unit-4002/
---

<h1>HTQ Unit 4002 (Maths) Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% assign all_posts = site.posts | sort: "title" %}
  {% for post in all_posts %}
    {% if post.units contains "HTQ Unit 4002" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
