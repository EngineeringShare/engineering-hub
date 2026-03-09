---
title: "NO Contact"
permalink: /Relay/NO-Contact/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/02/19/Relay-Symbols.html">🔙 Back to Relay Symbols and Functions</a>

<div style="text-align:center;">
  <img src="https://EngineeringShare.github.io/engineering-hub/images/Relay-Icons/NO_Contact.png"
       alt="Normally Open Contact Symbol" style="max-width:200px;height:auto;">
</div>

<h2>Normally Open Contact (NO)</h2>
<p>
    A normally open (NO) contact is a type of electrical contact used in relay systems. It is represented by a symbol that consists of two parallel lines with a gap between them or a switch symbol with a line connecting the two terminals. The NO contact is designed to be open (not allowing current to flow) when the relay coil is not energized, and it closes (allowing current to flow) when the coil is energized. This means that in its default state, the NO contact does not allow current to pass through, and when activated, it completes the circuit. NO contacts are commonly used in control circuits, signaling systems, and applications where it is important to ensure that a circuit is energized when a certain condition is met.
</p>

<h3>How it Works</h3>
<p>
    The NO contact operates based on the state of the relay coil. When the coil is not energized, the NO contact remains open, preventing current from flowing through the circuit. However, when the coil is energized, it creates a magnetic field that pulls the contact into its closed position, allowing current to flow through the circuit. This behavior is useful in applications where you want to ensure that a circuit is energized when a certain condition is met, such as in start circuits or control systems.
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
    <td>Open</td>
    <td>No Signal Flows</td>
  </tr>
  <tr>
    <td>True (Activated)</td>
    <td>Closed</td>
    <td>Signal Flows</td>
  </tr>
</table>

<h3> Using a NO Contact</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Fluid Sim</th>
        <td style="border: 1px solid #ddd; padding: 8px;">In fluid sim we can use a NO "make" contact, we can then assign it to a specific relay value, for example "R1". When the relay is not energized, the NO contact will be open and no signal will flow. However, when the relay is energized, it will close the contact and allow the signal to flow.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Lab Bench</th>
        <td style="border: 1px solid #ddd; padding: 8px;">On the lab benches, we have sets of festo relay boxes. These boxes consist of pairs of NO and NC contacts that are connected to a relay coil. We can use the NO contact in our lab experiments to demonstrate how it works in a real circuit. For example, we can connect the NO contact in series with a light bulb and a power supply. When the relay coil is not energized, the NO contact will be open and no current will flow through the light bulb. However, when we energize the relay coil, the NO contact will close, completing the circuit and causing the light bulb to turn on.</td>
    </tr>
</table>

<h3>Example Video</h3>

<div class="gif-row">
  <figure>
    <img src="https://engineeringshare.github.io/engineering-resources/gifs/Relays/NO Fluid Sim.gif"
         alt="NO Contact Example">
    <figcaption>NO contact in a fluid simulation. The NO contact (left) is connected to relay R1. R1 is triggered by a button press in the simulation, which energizes the relay coil and closes the NO contact, completing the circuit.</figcaption>
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
