---
title: "Diffuse Sensor"
permalink: /Sensors-and-Actuators/Diffuse-Sensor/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/01/21/Sensors-and-Actuators.html">🔙 Back to Sensors and Actuators</a>

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/Sensors-Actuators-Icons/Diffuse_Sensor.jpg" alt="Diffuse Sensor Symbol" style="width: 150px; height: auto;">
</div>

<h2>Diffuse Sensor Overview</h2>
<p> 
    Diffuse sensors are optical sensors that detect the presence of an object without physical contact. They emit a beam of light (usually infrared or visible light) and detect when an object reflects the beam back to the sensor. When an object is detected, the sensor sends a signal to a control system, which can then trigger an action such as stopping a machine or activating an alarm. Diffuse sensors are commonly used in industrial automation, robotics, and safety applications due to their non-contact nature and reliability in detecting objects of various sizes and materials.
</p>

<h3>How it Works</h3>
<p>
    A diffuse sensor consists of a light emitter and a receiver. The emitter sends out a beam of light, and the receiver detects the reflected light from an object. When an object enters the sensor's detection range, it reflects the emitted light back to the receiver, which then processes this signal to determine the presence of the object. The sensor can be configured to detect objects at different distances and can be used to detect a wide variety of materials, including transparent and reflective objects.
</p>

<h3>Key Features</h3>
<ul>
    <li><strong>Durability:</strong> Diffuse sensors are designed to withstand harsh industrial environments, making them reliable for long-term use.</li>
    <li><strong>Versatility:</strong> They can be used in a wide range of applications, from simple on/off control to complex automation systems.</li>
    <li><strong>Cost-Effective:</strong> Diffuse sensors are generally inexpensive and easy to install, making them a popular choice for many applications.</li>
</ul>

<h3>Other Uses of Diffuse Sensors</h3>
<p>
    Diffuse sensors are not only used for object detection but can also be used for specific colour detection (not general colour). This works by analyzing the wavelength of the reflected light, allowing the sensor to differentiate between different colours. For instance a diffuse sensor using infrared light can be used to detect the presence of a dark object as it will not reflect much light back to the receiver, whereas a light object will reflect more light (for instance a red or metallic object) and be easily detected. This makes diffuse sensors useful in applications such as sorting systems, where they can be used to separate objects based on colour or material properties.
</p>

<h3>Breakdown Table</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Name</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Diffuse Sensor</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Sensor/Actuator</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Sensor</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Description</th>
        <td style="border: 1px solid #ddd; padding: 8px;">A device that detects the presence or position of an object by detecting reflected light from an object, changing the state of an electrical circuit.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Signal/Power Type</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Electrical (ON/OFF)</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Common Applications</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Industrial machinery, conveyor systems, safety interlocks, robotics.</td>
    </tr>
</table>

<h3>What we use in college</h3>
<p>
    In college, we use a Festo Diffuse Sensor (Code: D:SEN-BG-SOEG-RT-M12) for various automation projects. This sensor has 5 pins and operates on a 24V DC power supply. We typically only use 3 of the pins: +24v, 0v and Q1 (the output signal). We plug the 24V DC power supply into the +24v and 0v pins, and then connect the Q1 output to an input on our PLC or circuit to detect when the sensor is activated.
</p>

<h3>Example Video</h3>

<div class="gif-row">
  <figure>
    <img src="https://engineeringshare.github.io/engineering-resources/gifs/Diffuse Sensor.gif"
         alt="Diffuse Sensor Example">
    <figcaption>Diffuse sensor detecting an object via reflected light. When my hand is in front of the sensor, it detects the object and completes the circuit lighting up the indicator LED.</figcaption>
  </figure>

  <figure>
    <img src="https://engineeringshare.github.io/engineering-resources/gifs/Diffuse Sensor Colour.gif"
         alt="Diffuse Sensor Colour Detection Example">
    <figcaption>Diffuse sensor detecting red vs black objects. The sensor detects the red object more easily as it reflects more light back to the receiver, while the black object is less easily detected due to its low reflectivity.When the sensor detects a red object, it lights up the indicator LED.</figcaption>
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
