---
title: T-Level Unit 09 Hub
permalink: /classes/t-level-unit-09/
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

This is the hub for T-Level Unit 9: Mechatronics — covering sensors and transducers, actuators, control systems, robotics, and system integration. Use the cards below to access lessons, assignments, and support materials.

---

{% assign unit_name = "T-Level Unit 09" %}

 <ul>
{% for post in site.posts %}
  {% if post.units %}
    {% comment %} Check if units is actually a list/array {% endcomment %}
    {% if post.units[0] %}
      <li>Checking: {{ post.title }} - ✅ Format OK</li>
    {% else %}
      <li style="color: red;">Checking: {{ post.title }} - ❌ ERROR: Units is not a list!</li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>