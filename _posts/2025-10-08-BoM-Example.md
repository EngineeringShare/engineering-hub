---
title: "BoM Example"
date: 2025-10-08
tags: ["BoM", "Occspec"]
subject: "Other"
units:
  - unit: "T-Level Year 2"
    lo: "Occupational Specialism" 
---

## Intro:

A Bill of Materials (BoM) is a comprehensive list of materials, components, and assemblies required to construct, manufacture, or repair a product or system. It serves as a crucial document in engineering and manufacturing processes, providing detailed information about each item, including part numbers, descriptions, quantities, and specifications. The BoM helps ensure that all necessary materials are available for production and assists in inventory management, cost estimation, and procurement planning.

The equation for calculating the cost used for your BoM is:


$$
\mathrm{Cost\ Used}=\frac{\mathrm{Unit\ Cost}}{\mathrm{Unit\ Size}\,(w\times h)}\times \mathrm{Part\ Size}\,(w\times h)
$$


## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://engineeringshare.github.io/engineering-resources/presentations/Example BoM.pdf"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen>
    </iframe>

    <!-- Fullscreen button -->
    <button 
        onclick="openFullscreen()" 
        style="position:absolute; top:10px; right:10px; z-index:10; padding:6px 12px; border:none; background:#243040; color:white; border-radius:6px; cursor:pointer;">
        ⛶ Fullscreen
    </button>
</div>

<script>
    function openFullscreen() {
        const elem = document.getElementById("pdf-frame");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE11
            elem.msRequestFullscreen();
        }
    }
</script>

## Other Materials:

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
