---
title: "Set & Reset Output (S)/(R)"
permalink: /PLC-Ladder-Logic/Set-Reset-Output/
---

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/Output.png" alt="Output Coil Symbol" style="max-width: 200px; height: auto;">

</div>

<h2>Normally Output Coil</h2>
<p> 
    An Output Coil is a fundamental component in PLC Ladder Logic Programming. It represents an output device that is activated when the conditions leading to it in the ladder logic are met. When the logic flow reaches the output coil and the conditions are true, the coil energizes, triggering the associated output device, such as a motor, light, or valve. Output coils are essential for controlling various actuators and devices in industrial automation systems.
</p>

<p>
    Note that an output coil only outputs when its recieving a signal from the left side of the rung. If that signal stops for any reason, the output coil will de-energize and turn off the connected device.
</p>

<h3>

<h3>Behavior Table</h3>
The below table summarizes the behavior of an Output Coil:

<table>
    <tr>
        <th>Input Condition</th>
        <th>Coil State</th>
        <th>Output State</th>
    </tr>
    <tr>
        <td>False (No Signal)</td>
        <td>De-energized</td>
        <td>Device Off</td>
    </tr>
    <tr>
        <td>True (Signal Present)</td>
        <td>Energized</td>
        <td>Device On</td>
    </tr>
</table>

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
