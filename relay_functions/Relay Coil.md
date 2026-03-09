---
title: "Relay Coil"
permalink: /Relay/Relay-Coil/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/02/19/Relay-Symbols.html">🔙 Back to Relay Symbols and Functions</a>

<div style="text-align:center;">
  <img src="https://EngineeringShare.github.io/engineering-hub/images/Relay-Icons/Relay_Coil.png"
       alt="Normally Open Contact Symbol" style="max-width:200px;height:auto;">
</div>

<h2>Relay Coil</h2>
<p>
    A relay coil is an essential component of a relay, which is an electrically operated switch used in various applications to control circuits. The relay coil is a wire wound around a core, and when an electric current flows through it, it generates a magnetic field. This magnetic field is responsible for actuating the relay's contacts, allowing them to open or close depending on the design of the relay. The relay coil is typically energized by a low voltage signal, which can be used to control higher voltage circuits without direct electrical connection. Relays are commonly used in automation systems, control panels, and various electronic devices to enable remote switching and control of circuits.
</p>

<h3>How it Works</h3>
<p>
    The relay coil works by creating a magnetic field when an electric current passes through it. This magnetic field then interacts with the relay's armature, which is a movable component that can open or close the contacts of the relay. When the coil is energized, the magnetic field pulls the armature towards it, causing the contacts to change their state (either from open to closed or vice versa). When the coil is de-energized, the magnetic field collapses, and a spring mechanism typically returns the armature to its original position, restoring the contacts to their default state. This allows relays to control circuits without direct electrical connection, providing isolation and enabling control of high-power devices with low-power signals.
</p>

<h3> Using a Relay Coil</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Fluid Sim</th>
        <td style="border: 1px solid #ddd; padding: 8px;">In fluid sim, we can use the relay coil to demonstrate how it works in a circuit. For example, we can create a simple circuit where a button press energizes the relay coil, which in turn closes a normally open (NO) contact to allow fluid to flow through a pipe. This simulates how a relay can control the flow of electricity in a real circuit. When the button is pressed, the relay coil is energized, creating a magnetic field that pulls the armature and closes the NO contact. When the button is released, the coil is de-energized, and the NO contact opens.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Lab Bench</th>
        <td style="border: 1px solid #ddd; padding: 8px;">On the lab benches, we have sets of festo relay boxes. These boxes consist of pairs of NO and NC contacts that are connected to a relay coil. We can plug power into the top of the coil and ground into the bottom of the coil. This completes the circuit for the relay coil and actuates NO and NC contacts.</td>
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
