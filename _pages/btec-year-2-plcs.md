---
title: BTEC Year 2 PLCs Hub
permalink: /classes/btec-year-2-plcs/
---

<h1>BTEC PLCs Year 2 Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% for post in site.posts %}
    {% if post.classes contains "BTEC Year 2 PLCs" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
