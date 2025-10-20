---
title: "NO Contact"
permalink: /PLC-Ladder-Logic/NC-Contact/
---

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/NC_Contact.png" alt="Normally Closed Contact Symbol" style="max-width: 200px; height: auto;">

</div>

<h2>Normally Closed Contact (NC)</h2>
<p> 
    A Normally Closed (NC) contact is a key element in PLC Ladder Logic Programming. It represents a switch or relay contact that is closed (conducting) in its default state. When the associated input condition is met (e.g., a button is pressed or a sensor is activated), the NC contact opens, interrupting the flow of current through the circuit. This change in state is used to control other elements in the ladder logic, such as coils or other contacts. NC contacts are commonly used for stop buttons, safety interlocks, and other input devices where an action is initiated by opening the contact.
</p>

<p>
    It can be most simply understood as a switch that is "on" by default and only turns "off" when activated (when the input condition is true).
</p>

<h3>Behavior Table</h3>
The below table summarizes the behavior of a Normally Closed contact:

<table>
    <tr>
        <th>Input Condition</th>
        <th>Contact State</th>
        <th>Output State</th>
    </tr>
    <tr>
        <td>False (Not Activated)</td>
        <td>Closed</td>
        <td>Signal Flows</td>
    </tr>
    <tr>
        <td>True (Activated)</td>
        <td>Open</td>
        <td>No Signal Flows</td>
    </tr>
</table>

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
