---
title: "Actuators, DoF and RoM"
date: 2025-09-11
tags: ["Actuators", "DoF", "Degrees of Freedom", "RoM", "Range of Motion"]
subject: "Robotics"
units: ["BTEC Unit 40", "HTQ Unit 4015", "T-Level Unit 09"]
---

## Intro:

Actuators are essential components in robotics and mechanical systems, responsible for converting energy into motion. They play a crucial role in enabling robots to perform tasks by providing the necessary movement and force. Understanding the different types of actuators, such as electric motors, hydraulic cylinders, and pneumatic actuators, is vital for selecting the right one for specific applications.

Systems can be characterized by their Degrees of Freedom (DoF), which refers to the number of independent movements a system can make. Each degree of freedom corresponds to a specific type of motion, such as translation along an axis or rotation around an axis. The Range of Motion (RoM) defines the extent of movement possible for each degree of freedom, indicating how far a joint or actuator can move within its limits. This page explores the various types of actuators, the concept of degrees of freedom, and the importance of range of motion in designing and analyzing robotic systems.

## Presentation:

<div id="pdf-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="pdf-frame"
        src="https://raw.githubusercontent.com/EngineeringShare/engineering-resources/main/presentations/Degrees of Freedom and Range of Motion.pdf"
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

<a href="https://engineeringshare.co.uk/interactive/2D%20Robot%20Arm%20Simulation.html">🦾 2D Robot Arm Simulator</a>

## Other Materials:

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
