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
    .card h3 {
      color: #1f2937;
      margin: 0.5rem 0 0;
      text-align: center;
      font-size: 1rem;
    }
    h1 { font-size: 2rem; margin-top: 2rem; }
    p  { font-size: 1.1rem; }
  </style>
</head>

# Interactive Learning Hub

Explore bite-sized interactive activities for quick revision and practice. Click a card to launch a game.

---

## 🎮 Interactive Games

<div class="projects">
  <!-- Matching Game -->
  <a class="card-link" href="{{ '/matching-test.html' | relative_url }}">
    <div class="card">
      <h3>Matching Game</h3>
    </div>
  </a>

  <!-- Add more games here as you create separate HTML files -->
  {%- comment -%}
  <a class="card-link" href="{{ '/circuit-quiz.html' | relative_url }}">
    <div class="card">
      <h3>Circuit Symbols Quiz</h3>
    </div>
  </a>
  <a class="card-link" href="{{ '/ohms-law-practice.html' | relative_url }}">
    <div class="card">
      <h3>Ohm’s Law Practice</h3>
    </div>
  </a>
  {%- endcomment -%}
</div>

---

## 📘 (Optional) Interactive Lessons & Activities from Posts
<p>Posts tagged to your interactive unit can also appear here.</p>

<div class="projects">
  {% assign all_posts = site.posts | sort: "title" %}
  {% for post in all_posts %}
    {% if post.units contains "HTQ Unit 4019" or post.categories contains "interactive" %}
      <a class="card-link" href="{{ post.url | relative_url }}">
        <div class="card">
          <h3>{{ post.title }}</h3>
        </div>
      </a>
    {% endif %}
  {% endfor %}
</div>
