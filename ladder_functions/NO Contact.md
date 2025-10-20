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

<!-- === NO Contact Simulator (self-contained) === -->
<style>
  .no-sim { --rail:#1f2937; --wire:#9ca3af; --active:#10b981; --coil:#2563eb; --text:#111827; }
  .no-sim { max-width: 700px; margin: 1.5rem auto; padding: 1rem; border:1px solid #e5e7eb; border-radius:12px; background:#fff; box-shadow:0 2px 6px rgba(0,0,0,.04); }
  .no-sim .controls { display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-bottom:0.75rem; flex-wrap:wrap; }
  .no-sim .switch { display:inline-flex; align-items:center; gap:.5rem; font-weight:600; color:var(--text); }
  .no-sim .switch input { appearance:none; width:46px; height:26px; border-radius:999px; background:#e5e7eb; position:relative; outline:none; cursor:pointer; transition:background .15s ease; }
  .no-sim .switch input:after { content:""; position:absolute; left:3px; top:3px; width:20px; height:20px; background:#fff; border-radius:50%; box-shadow:0 1px 3px rgba(0,0,0,.2); transition:left .15s ease; }
  .no-sim .switch input:checked { background:#a7f3d0; }
  .no-sim .switch input:checked:after { left:23px; }

  .no-sim .state { font-size:0.95rem; color:#374151; display:flex; gap:1.25rem; flex-wrap:wrap; }
  .no-sim .state b { color:#111827; }

  .no-sim svg { width:100%; height:auto; display:block; }
  .no-sim .rail { stroke:var(--rail); stroke-width:6; }
  .no-sim .wire { stroke:var(--wire); stroke-width:4; fill:none; stroke-linecap:round; }
  .no-sim .contact { stroke:var(--wire); stroke-width:5; stroke-linecap:round; }
  .no-sim .coil { stroke:var(--coil); stroke-width:5; fill:none; }
  .no-sim .lamp { fill:#fbbf24; opacity:.15; transition:opacity .15s ease; }
  .no-sim .glow { filter:url(#glow); opacity:0; transition:opacity .15s ease; }

  /* Active state highlights current path + coil */
  .no-sim.on .wire, .no-sim.on .contact, .no-sim.on .coil { stroke:var(--active); }
  .no-sim.on .lamp { opacity:.95; }
  .no-sim.on .glow { opacity:1; }

  /* Contact gap animation */
  .no-sim .gap { transition:transform .12s ease; transform-origin:center; }
  .no-sim.on .gap.close-left { transform:translateX(5px); }
  .no-sim.on .gap.close-right { transform:translateX(-5px); }
</style>

<div class="no-sim" id="no-sim">
  <div class="controls">
    <label class="switch" aria-label="Toggle input switch">
      <input id="noSwitch" type="checkbox" />
      Input
    </label>
    <div class="state">
      <span>Contact: <b id="contactState">Open</b></span>
      <span>Output: <b id="outputState">OFF</b></span>
    </div>
  </div>

  <!-- Inline SVG rung: left/right rails, NO contact, coil -->
  <svg viewBox="0 0 820 240" role="img" aria-label="Ladder rung with Normally Open contact controlling a coil">
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <!-- Rails -->
    <line class="rail" x1="60" y1="30" x2="60" y2="210"/>
    <line class="rail" x1="760" y1="30" x2="760" y2="210"/>

    <!-- Top and bottom wires from rails to elements -->
    <path class="wire" d="M60 60 H 250" />
    <path class="wire" d="M420 60 H 760" />
    <path class="wire" d="M60 180 H 760" />

    <!-- Normally Open Contact (two short bars with a gap) -->
    <!-- Static contact posts -->
    <line class="contact" x1="280" y1="60" x2="305" y2="60"/>
    <line class="contact" x1="365" y1="60" x2="390" y2="60"/>
    <!-- Moving blades (animated to close) -->
    <line class="contact gap close-left"  x1="305" y1="60" x2="330" y2="60"/>
    <line class="contact gap close-right" x1="340" y1="60" x2="365" y2="60"/>

    <!-- Drop from contact to bottom wire -->
    <path class="wire" d="M390 60 V 180"/>

    <!-- Coil symbol on right -->
    <ellipse class="coil" cx="670" cy="120" rx="35" ry="45"/>
    <ellipse class="coil" cx="710" cy="120" rx="35" ry="45"/>
    <!-- Lamp fill behind coil (lights when ON) -->
    <circle class="lamp glow" cx="690" cy="120" r="22"/>

    <!-- Labels -->
    <text x="60" y="24" fill="#6b7280" font-size="12">L (Power)</text>
    <text x="742" y="24" fill="#6b7280" font-size="12">N</text>
    <text x="300" y="95" fill="#6b7280" font-size="12">NO Contact</text>
    <text x="655" y="190" fill="#6b7280" font-size="12">Output Coil (Q)</text>
  </svg>

  <p style="margin:.5rem 0 0; color:#374151; font-size:.95rem;">
    Toggle <em>Input</em> to close the NO contact. When closed, current flows (highlighted in green) and the coil energizes (lamp lights).
  </p>
</div>

<script>
  (function(){
    const wrap = document.getElementById('no-sim');
    const sw   = document.getElementById('noSwitch');
    const contactState = document.getElementById('contactState');
    const outputState  = document.getElementById('outputState');

    function render(){
      const on = sw.checked;
      wrap.classList.toggle('on', on);
      contactState.textContent = on ? 'Closed' : 'Open';
      outputState.textContent  = on ? 'ON' : 'OFF';
    }
    sw.addEventListener('change', render);
    render(); // initial
  })();
</script>
<!-- === /NO Contact Simulator === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
