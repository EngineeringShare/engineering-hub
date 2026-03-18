---
title: "OR Gate"
permalink: /Relay/OR-Gate/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/02/19/Relay-Symbols.html">🔙 Back to Relay Symbols and Functions</a>

<div style="text-align:center;">
  <img src="https://EngineeringShare.github.io/engineering-hub/images/Relay-Icons/OR_Gate.png"
       alt="OR Gate Symbol" style="max-width:200px;height:auto;">
</div>

<h2>OR Gate</h2>
<p>
    To build an OR Gate from relays, we put two parts in parallel. These parts can either be individual gates or larger combinations of gates. The key point is that only one part needs to be activated for the output to be activated. This means that if either part is activated, the output will be activated. In a relay-based OR gate, we can use normally open (NO) contacts for both parts. When either NO contact is closed (activated), the circuit is completed and the output is activated. If both NO contacts are open (not activated), the circuit remains incomplete and the output is not activated. This configuration allows us to implement the logical OR function using relays.
</p>

<h3>How it Works</h3>
<p>
    The OR gate works by requiring at least one input to be true (activated) for the output to be true (activated). In a relay-based OR gate, we can use two normally open (NO) contacts in parallel. When either NO contact is closed (activated), the circuit is completed and the output is activated. If both NO contacts are open (not activated), the circuit remains incomplete and the output is not activated. This behavior allows us to implement the logical OR function using relays, where the output is activated when at least one input is activated.
</p>

<h3>Behavior Table</h3>
The table below shows how a OR Gate behaves:

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
    <td>True (Activated)</td>
  </tr>
  <tr>
    <td>True (Activated)</td>
    <td>False (Not Activated)</td>
    <td>True (Activated)</td>  
  </tr>
  <tr>
    <td>True (Activated)</td>
    <td>True (Activated)</td>
    <td>True (Activated)</td>  
  </tr>
</table>

<h3> Using a OR Gate</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Fluid Sim</th>
        <td style="border: 1px solid #ddd; padding: 8px;">In fluid sim we can make an OR gate by putting components in parallel, this means that we take the output of one component and connect it to the input of another component. For example, we can take the output of a NO contact and connect it to the input of another NO contact. This means that either NO contact can be activated for the signal to flow through the circuit and activate the output.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Lab Bench</th>
        <td style="border: 1px solid #ddd; padding: 8px;">On the lab benches, we have sets of festo relay boxes. We can use these boxes to create an OR gate by connecting two NO contacts in parallel. This means that either NO contact can be activated for the output to be activated. For example, we can connect the output of the first NO contact to the input of the second NO contact. This way, when either NO contact is activated, the circuit is completed and the output is activated.</td>
    </tr>
</table>

<h3>Example Video</h3>

<div class="gif-row">
  <figure>
    <img src="https://engineeringshare.github.io/engineering-resources/gifs/Relays/OR Gate Fluid Sim.gif"
         alt="OR Gate Example">
    <figcaption>OR gate in a fluid sim. Both NO contacts (right) are connected to relay R1 and R2 respectively. R1 and R2 are triggered by button presses in the simulation, which energizes the relay coils and closes the NO contacts, completing the circuit. If either contact is activated, the output is activated.</figcaption>
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
