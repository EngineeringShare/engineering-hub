---
title: "Sensors, Actuators and Controllers"
date: 2025-05-01
tags: ["Microcontrollers", "Microcomputers", "systems", "control", "motors", "sensors"]
subject: "mechatronics"
units:
  - unit: "T-Level Unit 09"
    lo: "Sensors and Actuators (9.1)"
---

## Intro:

In mechatronics, sensors, actuators, and controllers form the core building blocks of any automated system. Sensors detect changes in the environment or system conditions and provide crucial data as input signals. Controllers interpret this data, apply decision-making or control algorithms, and send commands to actuators. Actuators then convert these commands into physical action, such as movement, force, or switching. Working together, these three elements create closed-loop systems that enable precision, adaptability, and efficiency in applications ranging from robotics and industrial automation to consumer electronics.

## Audio:

<audio controls>
    <source src="https://engineeringshare.github.io/engineering-resources/audio/Sensors Actuators and Controllers.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://engineeringshare.github.io/engineering-resources/presentations/Sensors, Actuators and Microcontrollers.pdf"
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

<a href="https://engineeringshare.co.uk/interactive/Sensors%20Actuators%20&%20Controllers%20Sort.html">🧩 Sort Game</a>

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
