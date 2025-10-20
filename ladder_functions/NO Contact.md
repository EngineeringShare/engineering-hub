---
title: "NO Contact"
permalink: /PLC-Ladder-Logic/NO-Contact/
---

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/NO_Contact.png" alt="Normally Open Contact Symbol" style="max-width: 200px; height: auto;">

</div>

<h2>Normally Open Contact (NO)</h2>
<p> 
    A Normally Open (NO) contact is a fundamental component in PLC Ladder Logic Programming. It represents a switch or relay contact that is open (not conducting) when in its default state. When the associated input condition is met (e.g., a button is pressed or a sensor is activated), the NO contact closes, allowing current to flow through the circuit. This change in state is used to control other elements in the ladder logic, such as coils or other contacts. NO contacts are commonly used for start buttons, sensors, and other input devices where an action is initiated by closing the contact.
</p>

<p>
    It can be most simply understood as a switch that is "off" by default and only turns "on" when activated (when the input condition is true).
</p>

<h3>Behavior Table</h3>
The below table summarizes the behavior of a Normally Open contact:

<table>
    <tr>
        <th>Input Condition</th>
        <th>Contact State</th>
        <th>Output State</th>
    </tr>
    <tr>
        <td>False (Not Activated)</td>
        <td>Open</td>
        <td>No Signal Flows</td>
    </tr>
    <tr>
        <td>True (Activated)</td>
        <td>Closed</td>
        <td>Signal Flows</td>
    </tr>    
</table>

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Back</a>
