---
title: HTQ Unit 4019 - Electrical and Electronic Principles
permalink: /classes/htq-unit-4019/
---

<h1>HTQ Unit 4019 (Electronics) Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% assign all_posts = site.posts | sort %}
  {% for post all_posts %}
    {% if post.units contains "HTQ Unit 4019" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
