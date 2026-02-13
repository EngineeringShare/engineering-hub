---
title: HTQ Unit 4015 - Automation, Robotics and Programmable Logic Controllers (PLCs)
permalink: /classes/htq-unit-4015/
---

<head>
  <style>
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    @media (min-width: 1024px) {
      .projects {
        grid-template-columns: repeat(4, 1fr);
      }
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

# 🤖 HTQ Unit 4015 – Automation, Robotics & PLCs

This is the hub for HTQ Unit 4015: covering automated systems, industrial robotics, and PLC programming. Use the cards below to access lessons, assignments, and support materials.

---

{% assign unit_name = "HTQ Unit 4015" %}

{%- comment -%} Build a pipe-separated list of LOs for this unit {%- endcomment -%}
{% assign los_str = "" %}

{% for post in site.posts %}
  {% if post.units %}
    {% for u in post.units %}
      {% if u.unit == unit_name %}
        {% assign lo = u.lo | default: "Unsorted" %}
        {% capture los_str %}{{ los_str }}|{{ lo }}{% endcapture %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{%- assign los = los_str | split: "|" | uniq | sort -%}

{%- assign posts_sorted = site.posts | sort: "title" -%}

{% for lo in los %}
  {% if lo != "" %}
    <h2 style="margin-top:2rem;">{{ lo }}</h2>

    <div class="projects">
      {% for post in posts_sorted %}
        {% assign post_lo = "" %}

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
  {% endif %}
{% endfor %}