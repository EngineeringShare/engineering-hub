---
title: "Engineering Hub"
date: 2025-07-23
---

<head>
  <link rel="shortcut icon" type="image/png" href="https://engineeringshare.github.io/engineering-hub/favicon.png">
  <style>
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
  {%- comment -%} 1. Initialize an empty array {%- endcomment -%}
  {% assign unit_names = "" | split: "" %}

  {%- comment -%} 2. Collect only the 'unit' string from the units objects {%- endcomment -%}
  {% for post in site.posts %}
    {% if post.units %}
      {% for item in post.units %}
        {% if item.unit %}
          {% assign unit_names = unit_names | push: item.unit %}
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endfor %}

  {%- comment -%} 3. Now it is safe to uniq and sort because it's an array of strings {%- endcomment -%}
  {% assign sorted_units = unit_names | uniq | sort %}

  {%- comment -%} 4. Render the cards {%- endcomment -%}
  {% for unit in sorted_units %}
    {% assign slugified_class = unit | slugify %}
    <a class="card-link" href="{{ '/classes/' | append: slugified_class | append: '/' | relative_url }}">
      <div class="card">
        <h3>{{ unit }}</h3>
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
<script src="https://engineeringshare.co.uk/fun-fact.js" defer></script>

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

