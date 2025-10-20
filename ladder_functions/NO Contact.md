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

<p>
    Note that whilst you typically use a NO contact to read an input device (like a push button or sensor), it can also be used to read internal memory bits within the PLC program itself. This allows for more complex logic operations and control strategies within the ladder logic.
</p>

<p>
    For example if we had a NO assigned to Q0.0 (an output coil) in one rung, we could then use a NO contact assigned to the same Q0.0 in another rung to create a holding circuit. This would allow the output to remain energized even after the initial input condition is no longer true, until another condition de-energizes it.
</p>

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
