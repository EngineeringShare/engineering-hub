---
title: BTEC Unit 24 - Electronic Devices and Circuits
permalink: /classes/btec-unit-24/
---

<h1>BTEC Unit 24 (Electronic Devices and Circuits) Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% assign all_posts = site.posts | sort: "title" %}
  {% for post in all_posts %}
    {% if post.units contains "BTEC Unit 24" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
