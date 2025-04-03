---
title: BTEC Year 2 Electrical Devices Hub
permalink: /classes/btec-year-2-electrical-devices/
---

<h1>BTEC Electrical Devices Year 2 Hub</h1>
<p>Here are all posts related to your class:</p>

<ul>
  {% for post in site.posts %}
    {% if post.classes contains "BTEC Year 2 Electrical Devices" %}
      <li><a href="{{'/engineering-hub' | append: post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
