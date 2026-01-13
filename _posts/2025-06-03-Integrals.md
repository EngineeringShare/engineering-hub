---
title: "Integrals"
date: 2025-06-03
tags: ["maths", "integration"]
subject: "Maths"
units: ["HTQ Unit 4002"]
---

## Intro:

Integration is a fundamental concept in calculus that involves finding the integral of a function, which represents the accumulation of quantities such as area under a curve, total distance traveled, or accumulated growth. It is the reverse process of differentiation and is used to solve problems involving rates of change and accumulation. This page explores the basic principles of integration, including definite and indefinite integrals, common techniques for finding integrals, and their applications in various fields such as physics, engineering, and economics.

## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://raw.githubusercontent.com/EngineeringShare/engineering-resources/main/presentations/Integration.pdf"
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
[YouTube: Calculus 1 - Integration & Antiderivatives](https://youtu.be/6WUjbJEeJwM?si=qZHg8RtiUZW_aAwq)

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
