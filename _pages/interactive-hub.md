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
    .card img {
      max-width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 6px;
    }
    .card h3 {
      color: #1f2937;
      margin: 0.75rem 0 0;
      text-align: center;
      font-size: 1rem;
      line-height: 1.2;
    }
  </style>
</head>

# Interactive Learning Hub

---

## 🎮 Interactive Games

Explore bite-sized interactive activities for quick revision and practice. Click a card to launch a game.

<div class="projects">
  {%- assign games = site.static_files
      | where_exp: "f", "f.path contains '/interactive/'"
      | where_exp: "f", "f.extname == '.html'"
      | sort: "name" -%}

  {%- for f in games -%}
    {%- comment -%}
      Derive a display title from the filename:
      "matching-test.html" -> "Matching Test"
    {%- endcomment -%}
    {%- assign base = f.basename | replace: '-', ' ' | replace: '_', ' ' -%}
    {%- assign words = base | split: ' ' -%}
    {%- capture title -%}
      {%- for w in words -%}{{ w | capitalize }}{% unless forloop.last %} {% endunless %}{%- endfor -%}
    {%- endcapture -%}

    {%- comment -%}
      Optional thumbnail support:
      If /interactive/<name>.png exists, show it.
    {%- endcomment -%}
    {%- assign thumb_path = f.path | replace: f.extname, '.png' -%}
    {%- assign thumb = site.static_files | where: "path", thumb_path | first -%}

    <a class="card-link" href="{{ f.path | relative_url }}">
      <div class="card">
        {%- if thumb -%}
          <img src="{{ thumb.path | relative_url }}" alt="{{ title }} thumbnail">
        {%- endif -%}
        <h3>{{ title }}</h3>
      </div>
    </a>
  {%- endfor -%}
</div>
