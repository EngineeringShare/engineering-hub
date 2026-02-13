---
title: "PLC Programming - Sequential Programming"
date: 2025-05-14
tags: ["PLC", "Move", "Sequence", "Comparator"]
subject: "PLCs"
units:
  - unit: "T-Level Unit 09"
    lo: "PLCs (9.2)"
  - unit: "BTEC Unit 19"
    lo: "LO2 - PLC Programming"
  - unit: "HTQ Unit 4015"
    lo: "LO2 - PLC Program Design and Development"
---

## Intro:

Sequential programming in PLCs involves creating a series of steps or operations that are executed in a specific order to control machinery or processes. This type of programming is essential for applications that require a defined sequence of actions, such as assembly lines, packaging systems, and automated manufacturing processes. Sequential programming often utilizes instructions like MOVE, which transfers data from one location to another, and comparators, which evaluate conditions to determine the flow of the program. This page explores the concepts and techniques used in sequential programming for PLCs, including the use of state machines, step sequences, and timing functions to achieve precise control over industrial processes.

## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://engineeringshare.github.io/engineering-resources/presentations/Sequential Ladder Logic.pdf"
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
[Ladder Logic Simulator](https://app.plcsimulator.online/)

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
