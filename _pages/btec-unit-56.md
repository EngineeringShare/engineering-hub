---
title: BTEC Unit 56 - Electrical & Electronic Principles
permalink: /classes/btec-unit-56/
---

<h1>BTEC Unit 56 (Electrictronics) Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% assign all_posts = site.posts | sort %}
  {% for post all_posts %}
    {% if post.units contains "BTEC Unit 56" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
