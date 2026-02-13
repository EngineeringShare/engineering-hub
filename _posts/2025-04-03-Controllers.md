---
title: "Controllers"
date: 2025-04-03
tags: ["Microcontrollers", "Microcomputers", "systems", "control"]
subject: "mechatronics"
units:
  - unit: "T-Level Unit 09"
    lo: "Sensors and Actuators (9.1)"
---

## Intro:

In mechatronics, controllers are essential components that regulate the behavior of mechanical and electronic systems to achieve desired performance. They process input signals from sensors, apply control algorithms, and generate output signals to actuators, ensuring stability, precision, and efficiency. There are 3 main types of controllers used in mechatronics:

- Microcontrollers: These are compact integrated circuits that contain a processor, memory, and input/output peripherals. They are commonly used in embedded systems for controlling devices such as robots, appliances, and automotive systems.
- Microcomputers: These are more powerful than microcontrollers and typically run an operating system. They are used in applications that require complex processing, such as industrial automation, data acquisition, and advanced robotics.
- Programmable Logic Controllers (PLCs): These are ruggedized computers designed for industrial environments. They are used to control manufacturing processes, machinery, and other equipment in industries such as automotive, food processing, and chemical production. 

Controllers play a crucial role in ensuring that mechatronic systems operate efficiently, safely, and reliably by continuously monitoring and adjusting system parameters based on feedback from sensors. Understanding the different types of controllers and their applications is fundamental for anyone working in the field of mechatronics.

The presentation below will explore the various types of controllers used in mechatronics, their functions, and their applications in different industries. We will also discuss the principles of control systems and how controllers interact with sensors and actuators to achieve desired outcomes in complex systems.

## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://engineeringshare.github.io/engineering-resources/presentations/Controllers.pdf"
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

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
