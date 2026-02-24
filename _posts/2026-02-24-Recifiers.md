---
title: "Rectifiers"
date: 2026-02-24
tags: ["Rectifiers", "Diodes", "AC to DC Conversion", "Half-Wave Rectifier", "Full-Wave Rectifier", "Bridge Rectifier"]
subject: "Electronics"
units:
  - unit: "HTQ Unit 4019"
    lo: "LO2 - AC Circuits"
  - unit: "T-Level Unit 08"
    lo: "Semiconductors (8.1)"
---

## Intro:

Rectifiers are electronic devices that convert alternating current (AC) to direct current (DC). They are essential in power supplies for electronic devices, allowing them to operate on DC power. The most common types of rectifiers include half-wave rectifiers, which use a single diode to allow only one half of the AC waveform to pass through, and full-wave rectifiers, which use multiple diodes to utilize both halves of the AC waveform. Bridge rectifiers, a specific type of full-wave rectifier, use four diodes arranged in a bridge configuration to efficiently convert AC to DC. Understanding the operation and applications of rectifiers is crucial for designing and analyzing power supply circuits in electronics.


## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://engineeringshare.github.io/engineering-resources/presentations/Rectifiers.pdf"
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
