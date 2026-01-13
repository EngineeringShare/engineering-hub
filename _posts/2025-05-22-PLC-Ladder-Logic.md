---
title: "PLC Programming - Basic Functions (OLD)"
date: 2025-05-22
tags: ["PLC", "Programming", "Rungs"]
subject: "PLCs"
units: ["T-Level Unit 09", "BTEC Unit 19", "HTQ Unit 4015"]
---

## Intro:

Ladder Logic is a graphical programming language used to program Programmable Logic Controllers (PLCs) in industrial automation. It is designed to resemble electrical relay logic diagrams, making it easier for engineers and technicians familiar with traditional control systems to understand and implement. Ladder Logic consists of rungs, which represent individual control instructions, and various symbols that denote different types of inputs, outputs, and functions. This page explores the basic functions of Ladder Logic programming, including the use of contacts, coils, timers, counters, and other essential elements that form the foundation of PLC programming.

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://raw.githubusercontent.com/EngineeringShare/engineering-resources/main/presentations/Ladder Logic Functions.pdf"
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

## Interactive Tools:

<a href="https://engineeringshare.co.uk/interactive/Ladder%20Logic%20Engineer.html">👷‍♂️ Ladder Logic Game</a>

## Other Materials:
* [YouTube: Programable Logic Controller Basics Explained - automation engineering](https://youtu.be/uOtdWHMKhnw)

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
