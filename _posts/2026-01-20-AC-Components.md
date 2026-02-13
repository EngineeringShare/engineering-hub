---
title: "AC Components"
date: 2026-01-20
tags: ["Sinusoidal", "Power", "Circuit", "RLC", "AC", "Capacitor", "Inductor", "Resistor", "Reactance", "Impedance", "Phase Angle", "Admittance"]
subject: "electronics"
units:
  - unit: "HTQ Unit 4019"
    lo: "LO2 - AC Circuits"
  - unit: "BTEC Unit 56"
    lo: "LO4 - AC Circuits"
  - unit: "T-Level Unit 08"
    lo: "AC Circuits (8.1)"
---

## Intro:

Different components in AC circuits—resistors, capacitors, and inductors—behave uniquely when subjected to alternating current. Resistors oppose current flow uniformly, while capacitors and inductors introduce reactance, which varies with frequency. Capacitors store energy in an electric field, causing current to lead voltage, whereas inductors store energy in a magnetic field, causing voltage to lead current. The combined effect of these components results in impedance, a complex quantity that encompasses both resistance and reactance. Understanding these behaviors is crucial for analyzing AC circuits, as they influence phase angles, power consumption, and overall circuit performance.

This presentation delves into the characteristics of AC components, exploring how they interact within circuits, their impact on signal phase relationships, and the mathematical principles governing their operation. Key concepts such as reactance, impedance, and admittance are examined to provide a comprehensive understanding of AC circuit analysis.

## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://engineeringshare.github.io/engineering-resources/presentations/AC Components.pdf"
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
* [Electronics Tutorials: AC Inductance and Inductive Reactance](https://www.electronics-tutorials.ws/accircuits/ac-inductance.html)
* [Electronics Tutorials: AC Capacitance and Capacitive Reactance](https://www.electronics-tutorials.ws/accircuits/ac-capacitance.html)

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
