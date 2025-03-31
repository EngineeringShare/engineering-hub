---
title: "Homepage"
date: 26-03-2025
---

## Welcome
This hub is the location to find all my class materials for the different lessons I teach. Below you can find all materials split into subject areas. Each subject area will have a presentation on the 

## Search

<input type="text" id="search-input" placeholder="Search...">
<ul id="results-container"></ul>

<script src="https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.9.2/simple-jekyll-search.min.js"></script>
<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: 'search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 20
  })
</script>

## Class Hub

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
    <li><a href="engineering-hub/classes/{{ class | slugify }}/">{{ class }}</a></li>
  {% endfor %}
</ul>

