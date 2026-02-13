---
title: BTEC Unit 19 - PLCs
permalink: /classes/btec-unit-19/
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

# 🛠 BTEC Unit 19 - Programmable Logic Controllers (PLCs)

Welcome to the Unit 19 class hub. Below are all resources, lessons, and posts related to PLCs. Click on a card to view content.

---

{% assign unit_name = "BTEC Unit 19" %}

{%- comment -%}
Collect posts that contain this unit, and annotate each with the LO for this unit.
{%- endcomment -%}
{% assign matched = "" | split: "" %}

{% for post in site.posts %}
  {% if post.units %}
    {% for u in post.units %}
      {% if u.unit == unit_name %}
        {% assign item = post | merge: { "unit_lo": u.lo } %}
        {% assign matched = matched | push: item %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{%- assign matched = matched | sort: "unit_lo" -%}

{%- comment -%}
Build a list of LOs present (unique), then loop them.
{%- endcomment -%}
{% assign los = matched | map: "unit_lo" | uniq %}

{% for lo in los %}
  <h2 style="margin-top:2rem;">{{ lo }}</h2>

  <div class="projects">
    {% for post in matched %}
      {% if post.unit_lo == lo %}
        <a class="card-link" href="{{ post.url | relative_url }}">
          <div class="card">
            <h3>{{ post.title }}</h3>
          </div>
        </a>
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}
