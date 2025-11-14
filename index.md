---
title: "Engineering Hub"
date: 2025-07-23
---

<head>
  <link rel="shortcut icon" type="image/png" href="https://engineeringshare.github.io/engineering-hub/favicon.png">
  <style>
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }
    .card-link { text-decoration: none; }
    .card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      transition: transform 0.2s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      height: 100%;
    }
    .card:hover { transform: scale(1.03); }
    .card h3 {
      color: #1f2937;
      margin: 0.5rem 0 0;
      text-align: center;
      font-size: 1.2rem;
    }
    .search-container { margin: 2rem 0; }
    #search-input {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      border-radius: 8px;
      border: 1px solid #ccc;
    }
    #results-container { margin-top: 1rem; }
  </style>
</head>

## Welcome to the Engineering Hub!

This site is your one-stop destination for accessing class slides, assignments, resources, tutorials, and interactive activities.

---

## 🔍 Search for a Topic

<div class="search-container">
  <input type="text" id="search-input" placeholder="Search...">
  <ul id="results-container"></ul>
</div>

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

---

## 📚 Unit Hub

<p>Select a unit to view posts and resources:</p>

<div class="projects">
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
    <a class="card-link" href="{{ '/classes/' | append: slugified_class | relative_url }}">
      <div class="card">
        <h3>{{ class }}</h3>
      </div>
    </a>
  {% endfor %}
</div>

---

## 🛠️ Engineering Skills

<div class="projects">
  <a class="card-link" href="{{ '/technical-skills/' | relative_url }}">
    <div class="card">
      <h3>Technical Skills Hub</h3>
    </div>
  </a>

  <a class="card-link" href="{{ '/design-skills/' | relative_url }}">
    <div class="card">
      <h3>Design Skills Hub</h3>
    </div>
  </a>
</div>

## 🎮 Interactive Games and Tools

<div class="projects">
  <a class="card-link" href="{{ '/interactive-hub/' | relative_url }}">
    <div class="card">
      <h3>Interactive Learning Hub</h3>
    </div>
  </a>

  <a class="card-link" href="{{ '/teaching-tools-hub/' | relative_url }}">
    <div class="card">
      <h3>Teaching Tools Hub</h3>
    </div>
  </a>
</div>

---

## 🧠 Engineering Fun Fact

<span id="fun-fact">Loading...</span>
<script src="https://engineeringshare.github.io/engineering-hub/fun-fact.js" defer></script>

---

## Credits

- **Site by:** 
  - <a href="https://wiprobotics.github.io/Portfolio/" target="_blank">James Absolom</a>
- **Content by:** 
  - <a href="https://wiprobotics.github.io/Portfolio/" target="_blank">James Absolom</a>
  - Graeme Woodhall
  - Matt Milner

---

## 📬 Contact Me

If anything looks off or you're missing materials, contact me directly:

- **Email:** James-Absolom@yorkcollege.ac.uk  
- **Teams:** James Absolom

---

## License

This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License. See the [LICENSE](https://engineeringshare.github.io/engineering-hub/LICENSE) file for details.

---

## 📝 Changelog

<a href="{{ '/changelog/' | relative_url }}">View the Changelog Here</a>

