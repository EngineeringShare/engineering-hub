---
title: Interactive Learning Hub
permalink: /interactive-hub/
---

<head>
  <style>
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 1.25rem;
    }
    .card-link { text-decoration: none; }
    .card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      transition: transform 0.2s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      height: 100%;
    }
    .card:hover { transform: scale(1.03); }
    .card h3 { color: #1f2937; margin: 0.5rem 0 0; text-align: center; font-size: 1rem; }
    .search-wrap { margin: 0.75rem 0 0.5rem 0; }
    .search-input {
      width: 100%;
      padding: 0.65rem 0.8rem;
      font-size: 1rem;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      outline: none;
    }
    .results { margin-top: 0.75rem; list-style: none; padding-left: 0; }
    .results li { margin: 0.4rem 0; }
    .muted { color: #6b7280; font-size: 0.95rem; }
  </style>
</head>

# Interactive Learning Hub

Type to find a game, or browse all cards below.

<div class="search-wrap">
  <input id="hub-search" class="search-input" type="text" placeholder="Search interactive games…">
  <ul id="hub-results" class="results"></ul>
  <div id="hub-hint" class="muted">Tip: try “matching”, “ohm”, “circuit”, etc.</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.9.2/simple-jekyll-search.min.js"></script>
<script>
  const searchInput = document.getElementById('hub-search');
  const resultsEl = document.getElementById('hub-results');
  const hintEl = document.getElementById('hub-hint');
  const cardsSection = document.getElementById('hub-cards');

  SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: resultsEl,
    json: '{{ "/interactive-search.json" | relative_url }}',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: '<li class="muted">No games found.</li>',
    limit: 20
  });

  // UX: hide the card grid when user types; show again when empty
  searchInput.addEventListener('input', () => {
    const hasQuery = searchInput.value.trim().length > 0;
    cardsSection.style.display = hasQuery ? 'none' : '';
    hintEl.style.display = hasQuery ? 'none' : '';
  });
</script>

---

## 🎮 All Interactive Games

<div id="hub-cards" class="projects">
  {%- assign games = site.static_files
      | where_exp: "f", "f.path contains '/interactive/'"
      | where_exp: "f", "f.extname == '.html'"
      | sort: "name" -%}
  {%- for f in games -%}
    {%- assign title = f.basename 
   | replace: '-', ' ' 
   | replace: '_', ' ' 
   | strip -%}


    {%- assign thumb_path = f.path | replace: f.extname, '.png' -%}
    {%- assign thumb = site.static_files | where: "path", thumb_path | first -%}

    <a class="card-link" href="{{ f.path | relative_url }}">
      <div class="card">
        {%- if thumb -%}
          <img src="{{ thumb.path | relative_url }}" alt="{{title}} thumbnail" style="max-width:100%;height:120px;object-fit:cover;border-radius:6px;">
        {%- endif -%}
        <h3>{{title}}</h3>
      </div>
    </a>
  {%- endfor -%}
</div>
