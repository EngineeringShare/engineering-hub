---
title: T-Level Unit 05 Hub
permalink: /classes/t-level-unit-05/
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

This is the hub for T-Level Unit 5: Engineering Science — covering mechanical principles, materials science, thermal physics, and electrical principles. Use the cards below to access lessons, assignments, and support materials.

---

{% assign unit_name = "T-Level Unit 05" %}

{%- comment -%}
1) Build a unique list of LOs used for this unit
{%- endcomment -%}
{% assign los = "" | split: "" %}

{% for post in site.posts %}
  {% if post.units %}
    {% for u in post.units %}
      {% if u.unit == unit_name %}
        {% assign lo = u.lo | default: "Unsorted" %}
        {% unless los contains lo %}
          {% assign los = los | push: lo %}
        {% endunless %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{%- comment -%}
Optional: sort LO headings (string sort)
{%- endcomment -%}
{% assign los = los | sort %}

{%- comment -%}
2) Render each LO section + cards
{%- endcomment -%}
{% for lo in los %}
  <h2 style="margin-top:2rem;">{{ lo }}</h2>

  <div class="projects">
    {% assign posts_sorted = site.posts | sort: "title" %}
    {% for post in posts_sorted %}
      {% assign post_lo = nil %}

      {% if post.units %}
        {% for u in post.units %}
          {% if u.unit == unit_name %}
            {% assign post_lo = u.lo | default: "Unsorted" %}
          {% endif %}
        {% endfor %}
      {% endif %}

      {% if post_lo == lo %}
        <a class="card-link" href="{{ post.url | relative_url }}">
          <div class="card">
            <h3>{{ post.title }}</h3>
          </div>
        </a>
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}
