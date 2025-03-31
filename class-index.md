---
layout: default
title: Class Hub
permalink: /classes/
---

<h1>Class Hub</h1>
<p>Select a class to see relevant posts:</p>

<ul>
  {% assign all_classes = "" | split: "," %}
  {% for post in site.posts %}
    {% for class in post.classes %}
      {% unless all_classes contains class %}
        {% assign all_classes = all_classes | push: class %}
      {% endunless %}
    {% endfor %}
  {% endfor %}

  {% for class in all_classes %}
    <li><a href="/classes/{{ class | slugify }}/">{{ class }}</a></li>
  {% endfor %}
</ul>
