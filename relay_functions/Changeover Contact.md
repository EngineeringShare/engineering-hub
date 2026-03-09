---
title: "Changeover Contact"
permalink: /Relay/Changeover-Contact/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/02/19/Relay-Symbols.html">🔙 Back to Relay Symbols and Functions</a>

<div style="text-align:center;">
  <img src="https://EngineeringShare.github.io/engineering-hub/images/Relay-Icons/Changeover_Contact.png"
       alt="Normally Open Contact Symbol" style="max-width:200px;height:auto;">
</div>

<h2>Changeover Contact</h2>
<p>
    A changeover contact is a type of electrical contact used in relay systems. It is represented by a symbol that consists of three terminals: a common terminal (C), a normally closed terminal (NC), and a normally open terminal (NO). The changeover contact is designed to switch between the NC and NO terminals based on the state of the relay coil. When the relay coil is not energized, the common terminal is connected to the NC terminal, allowing current to flow through that path. However, when the relay coil is energized, it creates a magnetic field that pulls the contact away from the NC terminal and connects it to the NO terminal, allowing current to flow through that path instead. Changeover contacts are commonly used in applications where it is necessary to switch between two different circuits or signals based on a certain condition.
</p>

<h3>How it Works</h3>
<p>
    The changeover contact operates based on the state of the relay coil. When the coil is not energized, the common terminal is connected to the NC terminal, preventing current from flowing through the circuit. However, when the coil is energized, it creates a magnetic field that pulls the contact away from the NC terminal and connects it to the NO terminal, allowing current to flow through the circuit. This behavior is useful in applications where you want to ensure that a circuit is energized when a certain condition is met, such as in start circuits or control systems.
</p>

<h3>Behavior Table</h3>
The table below shows how a Normally Open contact behaves:

<table>
  <tr>
    <th>Input Condition</th>
    <th>Contact State</th>
    <th>Output State</th>
  </tr>
  <tr>
    <td>False (Not Activated)</td>
    <td>Common connected to NC</td>
    <td>Signal flows through NC</td>
  </tr>
  <tr>
    <td>True (Activated)</td>
    <td>Common connected to NO</td>
    <td>Signal flows through NO</td>  
  </tr>
</table>

<h3> Using a Changeover Contact</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Fluid Sim</th>
        <td style="border: 1px solid #ddd; padding: 8px;">In fluid sim we can use a changeover contact, we can then assign it to a specific relay value, for example "R1". When the relay is not energized, the changeover contact will connect the common terminal to the NC terminal, and no signal will flow. However, when the relay is energized, it will connect the common terminal to the NO terminal, allowing the signal to flow.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Lab Bench</th>
        <td style="border: 1px solid #ddd; padding: 8px;">On the lab benches, we have sets of festo relay boxes. All of the constacts in these boxes are changeover contacts, meaning they have a common terminal, a normally closed terminal, and a normally open terminal. We can use the changeover contact in our lab experiments to demonstrate how it works in a real circuit. For example, we can connect the common terminal to a power supply, the NC terminal to a light bulb, and the NO terminal to another light bulb. When the relay coil is not energized, the common terminal will be connected to the NC terminal, allowing current to flow through the first light bulb and keeping it on. However, when we energize the relay coil, the common terminal will switch to connect with the NO terminal, allowing current to flow through the second light bulb and turning it on while the first light bulb turns off.</td>
    </tr>
</table>

<h3>Example Video</h3>

<div class="gif-row">
  <figure>
    <img src="https://engineeringshare.github.io/engineering-resources/gifs/Relays/Changeover Fluid Sim.gif"
         alt="Changeover Contact Example">
    <figcaption>Changeover contact in a fluid simulation. The changeover contact (left) is connected to relay R1. R1 is triggered by a button press in the simulation, which energizes the relay coil and switches the common terminal between the NO and NC terminals, completing the circuit.</figcaption>
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
