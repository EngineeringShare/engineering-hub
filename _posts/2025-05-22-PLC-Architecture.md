---
title: "PLC Theory - PLC Architecture"
date: 2025-05-22
tags: ["PLC", "Scan Cycle", "CPU", "Memory", "I/O", "Power Supply"]
subject: "PLCs"
units: ["T-Level Unit 09", "BTEC Unit 19", "HTQ Unit 4015"]
---

## Intro:

A Programmable Logic Controller (PLC) is a rugged industrial computer designed to reliably automate processes. At the heart of every PLC is a well-defined architecture that ensures consistent operation under demanding conditions. This presentation explores the key components of that architecture—including the CPU, memory, input and output modules, and power supply—alongside the scan cycle that dictates how the PLC processes information. By understanding these building blocks, we can see how PLCs achieve the speed, accuracy, and robustness required for modern automation systems.

## Audio:

<audio controls>
    <source src="https://engineeringshare.github.io/engineering-resources/audio/PLC Theory - PLC Architecture.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://engineeringshare.github.io/engineering-resources/presentations/PLC Theory – PLC Architecture.pdf"
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
* [YouTube: Programable Logic Controller Basics Explained - automation engineering](https://youtu.be/uOtdWHMKhnw)
* [W.Bolton: Programmable Logic Controllers, 5th Edition (Chapter 1) (Page 5)](https://books.google.co.uk/books?id=sDqnBQAAQBAJ&lpg=PP1&ots=-cgw4k5fdv&dq=Bolton%20W%20%E2%80%93%20Programmable%20Logic%20Controllers%20(Newnes%2C%202006)%20ISBN%200750681128&lr&pg=PP1#v=onepage&q&f=false)

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
