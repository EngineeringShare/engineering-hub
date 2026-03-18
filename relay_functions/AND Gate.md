---
title: "AND Gate"
permalink: /Relay/AND-Gate/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/02/19/Relay-Symbols.html">🔙 Back to Relay Symbols and Functions</a>

<div style="text-align:center;">
  <img src="https://EngineeringShare.github.io/engineering-hub/images/Relay-Icons/AND_Gate.png"
       alt="AND Gate Symbol" style="max-width:200px;height:auto;">
</div>

<h2>AND Gate</h2>
<p>
    To build an AND gate using relays, we put two parts in series. These parts can either be individual gates or larger combinations of gates. The key point is that both parts must be activated for the output to be activated. This means that if either part is not activated, the output will not be activated. In a relay-based AND gate, we can use normally open (NO) contacts for both parts. When both NO contacts are closed (activated), the circuit is completed and the output is activated. If either NO contact is open (not activated), the circuit remains incomplete and the output is not activated. This configuration allows us to implement the logical AND function using relays.
</p>

<h3>How it Works</h3>
<p>
    The AND gate works by requiring both inputs to be true (activated) for the output to be true (activated). In a relay-based AND gate, we can use two normally open (NO) contacts in series. When both NO contacts are closed (activated), the circuit is completed and the output is activated. If either NO contact is open (not activated), the circuit remains incomplete and the output is not activated. This behavior allows us to implement the logical AND function using relays, where the output is only activated when both inputs are activated.
</p>

<h3>Behavior Table</h3>
The table below shows how a AND Gate behaves:

<table>
  <tr>
    <th>Input A</th>
    <th>Input B</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>False (Not Activated)</td>
    <td>False (Not Activated)</td>
    <td>False (Not Activated)</td>
  </tr>
  <tr>
    <td>False (Not Activated)</td>
    <td>True (Activated)</td>
    <td>False (Not Activated)</td>
  </tr>
  <tr>
    <td>True (Activated)</td>
    <td>False (Not Activated)</td>
    <td>False (Not Activated)</td>  
  </tr>
  <tr>
    <td>True (Activated)</td>
    <td>True (Activated)</td>
    <td>True (Activated)</td>  
  </tr>
</table>

<h3> Using a AND Gate</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Fluid Sim</th>
        <td style="border: 1px solid #ddd; padding: 8px;">In fluid sim we can make an AND gate by putting components in series, this means that we take the output of one component and connect it to the input of another component. For example, we can take the output of a NO contact and connect it to the input of another NO contact. This means that both NO contacts must be activated for the signal to flow through the circuit and activate the output.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Lab Bench</th>
        <td style="border: 1px solid #ddd; padding: 8px;">On the lab benches, we have sets of festo relay boxes. We can use these boxes to create an AND gate by connecting two NO contacts in series. This means that both NO contacts must be activated for the output to be activated. For example, we can connect the output of the first NO contact to the input of the second NO contact. This way, when both NO contacts are activated, the circuit is completed and the output is activated.</td>
    </tr>
</table>

<h3>Example Video</h3>

<div class="gif-row">
  <figure>
    <img src="https://engineeringshare.github.io/engineering-resources/gifs/Relays/AND Gate Fluid Sim.gif"
         alt="AND Gate Example">
    <figcaption>AND gate in a fluid sim. Both NO contacts (right) are connected to relay R1 and R2 respectively. R1 and R2 are triggered by button presses in the simulation, which energizes the relay coils and closes the NO contacts, completing the circuit. If both contacts are activated, the output is activated.</figcaption>
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
