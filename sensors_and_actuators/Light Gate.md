---
title: "Light Gate"
permalink: /Sensors-and-Actuators/Light-Gate/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/01/21/Sensors-and-Actuators.html">🔙 Back to Sensors and Actuators</a>

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/Sensors-Actuators-Icons/Light_Gate.png" alt="Light Gate Symbol" style="width: 150px; height: auto;">
</div>

<h2>Light Gate Overview</h2>
<p> 
    Light gates are optical sensors that detect the presence of an object by breaking a beam of light. They consist of a transmitter and a receiver, which are typically placed opposite each other. When an object interrupts the beam between the transmitter and receiver, it triggers a signal that can be used to control machinery or activate alarms. Light gates are widely used in industrial automation for safety applications, such as detecting people or objects in hazardous areas. They are also used in various other applications, including counting objects on a conveyor belt, measuring the speed of moving objects, and in security systems for detecting intruders.
</p>

<h3>How it Works</h3>
<p>
    A light gate operates by emitting a beam of light from the transmitter to the receiver. When an object passes through the beam, it interrupts the light, causing a change in the signal received by the receiver. This change can be detected and processed by a control system to perform a specific action, such as stopping a machine or sounding an alarm. Light gates can be configured to detect objects of various sizes and can be used in both indoor and outdoor environments. They are often used in safety applications to prevent accidents by ensuring that machinery stops when a person or object is detected in a hazardous area.
</p>

<h3>Key Features</h3>
<ul>
    <li><strong>Non-Contact Detection:</strong> Light gates can detect objects without physical contact, making them ideal for applications where hygiene or safety is a concern.</li>
    <li><strong>Fast Response Time:</strong> Light gates can detect objects almost instantaneously, allowing for quick reactions in safety-critical applications.</li>
    <li><strong>Versatility:</strong> They can be used in a wide range of applications, from industrial automation to security systems.</li>
</ul>

<h3>Breakdown Table</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Name</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Light Gate</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Sensor/Actuator</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Sensor</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Description</th>
        <td style="border: 1px solid #ddd; padding: 8px;">A device that detects the presence of an object by breaking a beam of light, changing the state of an electrical circuit.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Signal/Power Type</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Electrical (ON/OFF)</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Common Applications</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Industrial automation, safety systems, conveyor belt monitoring, security systems.</td>
    </tr>
</table>

<h3>What we use in college</h3>
<p>
    In college we use a festo light gate (Code: SOEZ-LLK-SE-2,0-M4) in our MPS (Mechatronic Production Systems) setups. This then communicates with a festo fibre optic unit (Code: SOEG-L-Q30-PA-S-2L) which interprets the signal from the light gate and sends it to our PLC or mechantronic system. The light gate is typically used to detect the presence of objects on a conveyor belt or to monitor the position of moving parts in our MPS setups. When an object breaks the beam of light, the sensor sends a signal to the fibre optic unit, which then processes this signal and can trigger actions such as stopping a machine, counting objects, or activating an alarm. This allows us to automate processes and ensure safety in our lab setups.
</p>

<h3>Example Video</h3>

<div class="gif-row">
  <figure>
    <img src="https://engineeringshare.github.io/engineering-resources/gifs/Sensor-Actuator/Light Gate.gif"
         alt="Light gate example">
    <figcaption>Light gate detecting an object on a conveyor belt. When I put the object between the transmitter and receiver, it breaks the beam of light, causing the sensor to send a signal to the control system.</figcaption>
  </figure>
</div>

<style>
  .gif-row {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .gif-row figure {
    width: 48%;
    margin: 0;
    text-align: center;
  }

  .gif-row img {
    width: 100%;
    height: auto;
  }

  .gif-row figcaption {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #555;
  }
</style>

<a href="https://engineeringshare.github.io/engineering-hub/2026/01/21/Sensors-and-Actuators.html">🔙 Back to Sensors and Actuators</a>
