---
title: BTEC Unit 31 - Electrical Machines
permalink: /classes/btec-unit-31/
---

<h1>BTEC Unit 31 (Electrical Machines) Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% assign all_posts = site.posts | sort: "title" %}
  {% for post in all_posts %}
    {% if post.units contains "BTEC Unit 31" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
