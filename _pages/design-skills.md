---
title: Design Skills
permalink: /design-skills/
---

<head>
  <style>
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .card-link {
      text-decoration: none;
    }

    .card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      height: 100%;
    }

    .card:hover {
      transform: scale(1.03);
    }

    .card h3 {
      color: #1f2937;
      margin: 0.5rem 0 0;
      text-align: center;
      font-size: 1rem;
    }

    h1 {
      font-size: 2rem;
      margin-top: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  </style>
</head>

# 🎨 Design Skills for Engineers

---

<div id="hub-cards" class="projects">
  {%- assign pages_ds = site.pages
      | where_exp: "p", "p.path contains 'design_skills/'"
      | sort: "name" -%}

  {%- for p in pages_ds -%}
    {%- assign title = p.title 
        | default: p.name 
        | split: '.' | first 
        | replace: '-', ' ' 
        | replace: '_', ' ' 
        | strip -%}

    {%- comment -%}
      Looks for a sibling PNG with the same basename as the .md
      e.g. design_skills/test.md -> design_skills/test.png
    {%- endcomment -%}
    {%- assign thumb_name = p.path | replace: '.md', '.png' -%}
    {%- assign thumb = site.static_files 
        | where_exp: "sf", "sf.path contains thumb_name" 
        | first -%}

    <a class="card-link" href="{{ p.url | relative_url }}">
      <div class="card">
        {%- if thumb -%}
          <img src="{{ thumb.path | relative_url }}" alt="{{ title }} thumbnail"
               style="max-width:100%;height:120px;object-fit:cover;border-radius:6px;">
        {%- endif -%}
        <h3>{{ title }}</h3>
      </div>
    </a>
  {%- endfor -%}
</div>
