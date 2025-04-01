---
title: "Homepage"
date: 26-03-2025
---

<head>
  <link rel="shortcut icon" type="image/png" href="https://engineeringshare.github.io/engineering-hub/favicon.png">
</head>

## Welcome
This hub serves as a central place for all my class materials across the lessons I teach. You'll find a search bar below to easily look up subjects, followed by a class breakdown where you can select your class and access its materials.

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
    {% assign slugified_class = class | slugify %}
    <li><a href="{{ '/classes/' | append: slugified_class | relative_url }}">{{ class }}</a></li>
  {% endfor %}
</ul>

