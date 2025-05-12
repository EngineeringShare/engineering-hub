---
title: BTEC Unit 19 - PLCs
permalink: /classes/btec-unit-19/
---

<h1>BTEC Unit 19 (PLCs) Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% assign all_posts = site.posts | sort: "title" %}
  {% for post in all_posts %}
    {% if post.units contains "BTEC Unit 19" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
