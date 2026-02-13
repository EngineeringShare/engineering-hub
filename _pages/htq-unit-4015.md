---
layout: default
title: HTQ Unit 4015 - Automation, Robotics and Programmable Logic Controllers (PLCs)
permalink: /classes/htq-unit-4015/
---

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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
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

# 🤖 HTQ Unit 4015 - Automation, Robotics & PLCs

This is the hub for HTQ Unit 4015: covering automated systems, industrial robotics, and PLC programming. Use the cards below to access lessons, assignments, and support materials.

---

{% assign unit_name = "HTQ Unit 4015" %}

{% assign lo_list = "" %}
{% for post in site.posts %}
{% if post.units %}
{% for u in post.units %}
{% if u.unit == target_unit %}
{% capture lo_name %}{{ u.lo | default: "General" | strip }}{% endcapture %}
{% assign lo_list = lo_list | append: lo_name | append: "###" %}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
{% assign unique_los = lo_list | split: "###" | uniq | sort %}

{% for lo in unique_los %}
{% assign lo_clean = lo | strip %}
{% if lo_clean != "" %}
<h2 style="margin-top: 2rem; border-bottom: 2px solid #eee;">{{ lo_clean }}</h2>

<div class="projects">
{% for post in site.posts %}
{% assign is_match = false %}
{% if post.units %}
{% for u in post.units %}
{% assign u_unit = u.unit | strip %}
{% assign u_lo = u.lo | default: "General" | strip %}
{% if u_unit == target_unit and u_lo == lo_clean %}
{% assign is_match = true %}
{% endif %}
{% endfor %}
{% endif %}

{% if is_match %}
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
