---
title: Technical Skills
permalink: /technical-skills/
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

# 🛠️ Technical Skills for Engineers

---

<div id="hub-cards" class="projects">
  {%- assign games = site.static_files
      | where_exp: "f", "f.path contains '/design_skills/'"
      | where_exp: "f", "f.extname == '.md'"
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


