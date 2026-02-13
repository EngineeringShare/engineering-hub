---
title: T-Level Year 2 Hub
permalink: /classes/t-level-year-2/
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

# 🧭 T-Level Engineering Hub

---

{% assign unit_name = "T-Level Year 2" %}

{%- comment -%} 
  Set the unit name for this page 
{%- endcomment -%}
{% assign unit_name = page.title | split: " - " | first %}

{%- comment -%} 
  1. FIRST PASS: Find all unique LOs for this specific unit
{%- endcomment -%}
{% assign lo_list = "" %}
{% for post in site.posts %}
  {% if post.units %}
    {% for u in post.units %}
      {% if u.unit == unit_name %}
        {% capture lo_name %}{{ u.lo | default: "General" }}{% endcapture %}
        {% assign lo_list = lo_list | append: lo_name | append: "###" %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% assign unique_los = lo_list | split: "###" | uniq | sort %}

{%- comment -%} 
  2. SECOND PASS: Loop through LOs and find matching posts
{%- endcomment -%}
{% for lo in unique_los %}
  {% if lo != "" %}
    <h2 style="margin-top: 2.5rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">
      {{ lo }}
    </h2>
    
    <div class="projects">
      {% for post in site.posts %}
        {% assign is_match = false %}
        
        {% for u in post.units %}
          {% if u.unit == unit_name and u.lo == lo %}
            {% assign is_match = true %}
          {% endif %}
        {% endfor %}

        {% if is_match %}
          <a class="card-link" href="{{ post.url | relative_url }}">
            <div class="card">
              <h3>{{ post.title }}</h3>
              <p style="font-size: 0.8rem; color: #666;">{{ post.date | date: "%B %d, %Y" }}</p>
            </div>
          </a>
        {% endif %}
      {% endfor %}
    </div>
  {% endif %}
{% endfor %}