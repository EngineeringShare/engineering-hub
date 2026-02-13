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

{% comment %} 
  1. Extract all 'units' arrays from all posts 
  2. Flatten them into one list
  3. Filter that list to only include items matching your unit_name
  4. Map those items to just their 'lo' strings
{% endcomment %}

{% assign all_unit_entries = site.posts | map: "units" | compact %}
{% assign relevant_los = "" | split: "" %}

{% for entry_array in all_unit_entries %}
  {% for entry in entry_array %}
    {% if entry.unit == unit_name %}
      {% assign lo_name = entry.lo | default: "Unsorted" %}
      {% assign relevant_los = relevant_los | push: lo_name %}
    {% endif %}
  {% endfor %}
{% endfor %}

{% assign final_los = relevant_los | uniq | sort %}

{% for lo in final_los %}
  <h2 style="margin-top:2rem;">{{ lo }}</h2>
  <div class="projects">
    {% for post in site.posts %}
      {% assign match = false %}
      {% for u in post.units %}
        {% if u.unit == unit_name and u.lo == lo %}
          {% assign match = true %}
        {% endif %}
      {% endfor %}

      {% if match %}
        <a class="card-link" href="{{ post.url | relative_url }}">
          <div class="card">
            <h3>{{ post.title }}</h3>
          </div>
        </a>
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}