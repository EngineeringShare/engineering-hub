---
title: "Homepage"
date: 26-03-2025
---
<head>
  <link rel="shortcut icon" type="image/png" href="https://engineeringshare.github.io/engineering-hub/favicon.png">
</head>

## Welcome to the Engineering Hub!

This hub is the central place for all the learning materials related to my classes. Whether you're revisiting class slides or reviewing tutorial resources, everything you need is organised right here. Use the search bar below to quickly find topics, or browse by unit using the breakdown further down — each section links directly to materials for the lessons I teach. It's all designed to help you stay on track and make the most of your studies.

## Search for topic

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

## Unit Hub

<p>Select a unit to see relevant posts:</p>

<ul>
  {% assign all_classes = "" | split: "," %}
  {% for post in site.posts %}
    {% for class in post.units %}
      {% unless all_classes contains class %}
        {% assign all_classes = all_classes | push: class %}
      {% endunless %}
    {% endfor %}
  {% endfor %}

  {% assign all_classes = all_classes | sort %}

  {% for class in all_classes %}
    {% assign slugified_class = class | slugify %}
    <li><a href="{{ '/classes/' | append: slugified_class | relative_url }}">{{ class }}</a></li>
  {% endfor %}

</ul>

## Engineering Fun Fact

<span id="fun-fact">Loading...

<script src="https://engineeringshare.github.io/engineering-hub/fun-fact.js" defer></script>

## Credit
All course materials, as well as the design and development of this website, have been produced by James Absolom.

## Contact Me
If there is anything out of place with this website or something missing please contact me here:

<ul>
<li>Email: James-Absolom@yorkcollege.ac.uk</li>
<li>Teams: James Absolom</li>
</ul>