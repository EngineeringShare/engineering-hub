---
title: "Pressure Sensor"
permalink: /Sensors-and-Actuators/Pressure-Sensor/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/01/21/Sensors-and-Actuators.html">🔙 Back to Sensors and Actuators</a>

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/Sensors-Actuators-Icons/Pressure_Sensor.jpg" alt="Pressure Sensor Symbol" style="width: 150px; height: auto;">
</div>

<h2>Pressure Sensor Overview</h2>
<p> 
    Pressure sensors are devices that measure the pressure of a fluid (liquid or gas) and convert it into an electrical signal. This signal can then be used to monitor, control, or regulate the pressure within a system. Pressure sensors are widely used in industrial applications, automotive systems, medical devices, and consumer electronics due to their ability to provide accurate and reliable pressure measurements.

</p>

<h3>How it Works</h3>
<p>
    A pressure sensor typically consists of a diaphragm or other pressure-sensitive element that deforms under pressure. This deformation is converted into an electrical signal using various technologies such as strain gauges, capacitive sensing, or piezoelectric elements. The resulting signal is proportional to the applied pressure and can be processed by electronic circuits or microcontrollers for further use. For example, in an automotive application, a pressure sensor can be used to monitor the tire pressure and alert the driver if it falls below a certain threshold, ensuring safety and optimal performance.
</p>

<h3>Key Features</h3>
<ul>
    <li><strong>Accuracy:</strong> Pressure sensors provide precise measurements of pressure, which is crucial for applications that require tight control and monitoring.</li>
    <li><strong>Durability:</strong> Many pressure sensors are designed to withstand harsh environments, making them suitable for industrial and automotive applications.</li>
    <li><strong>Versatility:</strong> Pressure sensors can be used to measure a wide range of pressures, from very low to very high, making them adaptable to various applications.</li>
</ul>

<h3>Breakdown Table</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Name</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Pressure Sensor</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Sensor/Actuator</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Sensor</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Description</th>
        <td style="border: 1px solid #ddd; padding: 8px;">A device that measures the pressure of a fluid and converts it into an electrical signal, changing the state of an electrical circuit.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Signal/Power Type</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Electrical (Analog or Digital)</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Common Applications</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Industrial machinery, automotive systems, medical devices, consumer electronics.</td>
    </tr>
</table>

<h3>What we use in college</h3>
<p>
    In college, we use a festo pressure sensor (Code: SPAU-P10R-W-G18FD-L-PNLK-PNVBA-M12U) in our lab setup. We typically use it to monitor the pressure in pneumatic systems, such as those used in our MPS (Mechatronic Production Systems) setups. The sensor has 5 pins, which include power supply, ground, and signal output. We connect the 24v to our power supply, the 0v to ground, and our output to Q2. We can then connect this to a PLC or a mechantronic system to monitor the pressure and ensure that it stays within safe operating limits. This allows us to automate processes and prevent damage to equipment due to overpressure situations.
</p>
<p>
    The festo pressure sensors have the ability to change the value at which they activate based on the pressure. This means that we can set a specific pressure threshold, and when the pressure in the system reaches that threshold, the sensor will activate and send a signal to our control system.
</p>

<h3>Example Video</h3>

<div class="gif-row">
  <figure>
    <img src="https://engineeringshare.github.io/engineering-resources/gifs/Pressure Sensor.gif"
        alt="Pressure Sensor Example">
    <figcaption>Pressure sensor detecting the pressure in a pneumatic system. When the button is not pressed there is no pressure in the system and the indicator LED remains off. When the button is pressed, it creates pressure in the system which is detected by the sensor, lighting up the indicator LED.</figcaption>
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
