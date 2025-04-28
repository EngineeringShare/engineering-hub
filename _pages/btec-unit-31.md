---
title: BTEC Unit 31: Electrical Machines
permalink: /classes/btec-unit-31/
---

<h1>BTEC Electrical Devices Year 2 Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% for post in site.posts %}
    {% if post.units contains "BTEC Unit 31" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
