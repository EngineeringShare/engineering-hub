---
title: "NC Contact"
permalink: /Relay/NC-Contact/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/02/19/Relay-Symbols.html">🔙 Back to Relay Symbols and Functions</a>

<div style="text-align:center;">
  <img src="https://EngineeringShare.github.io/engineering-hub/images/Relay-Icons/NC_Contact.png"
       alt="Normally Closed Contact Symbol" style="max-width:200px;height:auto;">
</div>

<h2>Normally Closed Contact (NC)</h2>
<p>
    A Normally Closed (NC) contact is a type of electrical contact used in relay systems. It is represented by a symbol that consists of two parallel lines with a diagonal slash through them or a switch symbol with a line connecting the two terminals. The NC contact is designed to be closed (allowing current to flow) when the relay coil is not energized, and it opens (interrupting the current flow) when the coil is energized. This means that in its default state, the NC contact allows current to pass through, and when activated, it breaks the circuit. NC contacts are commonly used in safety circuits, interlocks, and control systems where it is important to ensure that a circuit is broken when a certain condition is met.
</p>

<h3>How it Works</h3>
<p>
    The NC contact operates based on the state of the relay coil. When the coil is not energized, the NC contact remains closed, allowing current to flow through the circuit. However, when the coil is energized, it creates a magnetic field that pulls the contact away from its default position, causing it to open and interrupt the current flow. This behavior is useful in applications where you want to ensure that a circuit is de-energized when a certain condition is met, such as in emergency stop circuits or safety interlocks.
</p>

<h3>Behavior Table</h3>
The table below shows how a Normally Closed contact behaves:

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

<h3> Using a NC Contact</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Fluid Sim</th>
        <td style="border: 1px solid #ddd; padding: 8px;">In fluid sim we can use a NC "break" contact, we can then assign it to a specific relay value, for example "R1". When the relay is not energized, the NC contact will complete our circuit and allow the signal to flow. However, when the relay is energized, it will break the circuit and stop the signal from flowing.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Lab Bench</th>
        <td style="border: 1px solid #ddd; padding: 8px;">On the lab benches, we have sets of festo relay boxes. These boxes consist of pairs of NO and NC contacts that are connected to a relay coil. We can use the NC contact in our lab experiments to demonstrate how it works in a real circuit. For example, we can connect the NC contact in series with a light bulb and a power supply. When the relay coil is not energized, the NC contact will allow current to flow through the light bulb, causing it to light up. However, when we energize the relay coil, the NC contact will open, breaking the circuit and causing the light bulb to turn off.</td>
    </tr>
</table>

<h3>Example Video</h3>

<div class="gif-row">
  <figure>
    <img src="https://engineeringshare.github.io/engineering-resources/gifs/Relays/NC Fluid Sim.gif"
         alt="NC Contact Example">
    <figcaption>NC contact in a fluid simulation. The NC contact (left) is connected to relay R1. R1 is triggered by a button press in the simulation, which energizes the relay coil and opens the NC contact, breaking the circuit.</figcaption>
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

<a href="https://engineeringshare.github.io/engineering-hub/2026/02/19/Relay-Symbols.html">🔙 Back to Relay Symbols and Functions</a>
