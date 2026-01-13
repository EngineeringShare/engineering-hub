---
title: "Flow Diagrams"
date: 2025-05-12
tags: ["Control", "History"]
subject: "PLCs"
units: ["T-Level Unit 10", "BTEC Unit 19"]
---

## Intro:

Flowcharts are a visual method of representing how a program or system operates, bridging the gap between plain English and code. They use standardized symbols to show processes, decisions, inputs, and outputs, making it easier to plan and communicate logic before programming begins. This presentation explores the key flowchart symbols, how to use them effectively, and common mistakes to avoid, providing a foundation for designing clear and structured control logic.

## Audio:

<audio controls>
    <source src="https://raw.githubusercontent.com/EngineeringShare/engineering-resources/main/audio/Flow Charts.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://raw.githubusercontent.com/EngineeringShare/engineering-resources/main/presentations/FlowCharts.pdf"
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

<a href="https://engineeringshare.co.uk/interactive/Flowchart%20Engineer.html">⚡ Flowchart Game</a>

## Other Materials:

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
