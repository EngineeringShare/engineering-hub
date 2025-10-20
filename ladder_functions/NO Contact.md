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

<!-- === NO Contact Simulator — polished === -->
<style>
  .ladder-sim {
    --bg:#ffffff; --panel:#f8fafc; --rail:#0f172a; --wire:#cbd5e1;
    --text:#0b1324; --muted:#64748b; --active:#16a34a; --accent:#2563eb;
    max-width: 780px; margin: 1.25rem auto; background:var(--bg);
    border:1px solid #e5e7eb; border-radius:14px; padding:1rem 1.25rem 1rem;
    box-shadow: 0 6px 22px rgba(2,6,23,.06);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  }
  .ladder-sim .hdr {
    display:flex; align-items:center; justify-content:space-between; gap:.75rem; flex-wrap:wrap;
    margin-bottom:.5rem;
  }
  .ladder-sim .group { display:flex; align-items:center; gap:1rem; }
  .ladder-sim .kv { color:var(--muted); font-size:.95rem; }
  .ladder-sim .kv b { color:var(--text); }

  /* Toggle (accessible, no libs) */
  .ladder-sim .switch { display:inline-flex; align-items:center; gap:.6rem; font-weight:600; color:var(--text); }
  .ladder-sim .switch input { appearance:none; width:48px; height:28px; border-radius:999px; background:#e2e8f0;
    position:relative; outline:none; cursor:pointer; transition:background .18s ease; }
  .ladder-sim .switch input:after{
    content:""; position:absolute; inset:3px auto auto 3px; width:22px; height:22px; border-radius:50%;
    background:#fff; box-shadow:0 1px 2px rgba(0,0,0,.25); transition:left .18s ease;
  }
  .ladder-sim .switch input:checked{ background:#bbf7d0; }
  .ladder-sim .switch input:checked:after{ left:23px; }

  /* Canvas */
  .ladder-sim .canvas { background:var(--panel); border:1px solid #e5e7eb; border-radius:12px; padding:.5rem; }
  .ladder-sim svg { width:100%; height:auto; display:block; }

  .rail { stroke:var(--rail); stroke-width:7; stroke-linecap:round; }
  .wire { stroke:var(--wire); stroke-width:4.5; fill:none; stroke-linecap:round; }
  .tap  { stroke:var(--wire); stroke-width:4.5; fill:none; stroke-linecap:round; }
  .contact-fixed { stroke:var(--wire); stroke-width:6; stroke-linecap:round; }
  .contact-leaf { stroke:var(--wire); stroke-width:6; stroke-linecap:round; transform-origin:330px 80px; transition:transform .16s ease; }
  .leaf-right { transform-origin:360px 80px; }
  .coil { stroke:var(--accent); stroke-width:5.5; fill:none; }
  .neon { fill:#fbbf24; opacity:.12; transition:opacity .18s ease; filter:url(#glow); }

  /* Active highlights */
  .ladder-sim.on .wire, .ladder-sim.on .tap, .ladder-sim.on .contact-fixed, .ladder-sim.on .contact-leaf, .ladder-sim.on .coil {
    stroke:var(--active);
  }
  .ladder-sim.on .neon { opacity:.95; }

  /* Flow animation (overlaid dashed path shown only when ON) */
  .flow { stroke:var(--active); stroke-width:4.5; fill:none; stroke-linecap:round;
          stroke-dasharray:10 12; stroke-dashoffset:0; opacity:0; }
  .ladder-sim.on .flow { opacity:1; animation:flow 1.1s linear infinite; }
  @keyframes flow { to { stroke-dashoffset:-22; } }

  /* Contact motion: close a small gap */
  .ladder-sim.on .leaf-left  { transform:rotate(8deg); }
  .ladder-sim.on .leaf-right { transform:rotate(-8deg); }

  .lbl { fill:var(--muted); font-size:12px; user-select:none; }
  .lbl-strong { fill:#334155; font-weight:600; }
  .caption { color:#334155; font-size:.95rem; margin:.5rem .25rem 0; }
</style>

<div class="ladder-sim" id="noSim">
  <div class="hdr">
    <div class="group">
      <label class="switch" aria-label="Toggle input">
        <input id="noSwitch" type="checkbox" />
        Input
      </label>
    </div>
    <div class="group kv">
      <span>Contact: <b id="stateContact">Open</b></span>
      <span>Output: <b id="stateOutput">OFF</b></span>
    </div>
  </div>

  <div class="canvas">
    <svg viewBox="0 0 820 240" role="img" aria-label="Ladder rung: Normally Open contact feeding a coil">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Rails -->
      <line class="rail" x1="70"  y1="28" x2="70"  y2="212"/>
      <line class="rail" x1="750" y1="28" x2="750" y2="212"/>

      <!-- Labels -->
      <text class="lbl" x="60"  y="20">L (Power)</text>
      <text class="lbl" x="742" y="20">N</text>
      <text class="lbl" x="290" y="110">NO Contact</text>
      <text class="lbl" x="650" y="190">Output Coil (Q)</text>

      <!-- Top wire to contact -->
      <path class="wire" d="M70 80 H 260" />

      <!-- Contact: two fixed posts and two moving leaves (gap closes on ON) -->
      <line class="contact-fixed" x1="285" y1="80" x2="305" y2="80"/>
      <line class="contact-fixed" x1="355" y1="80" x2="375" y2="80"/>
      <line class="contact-leaf leaf-left"  x1="305" y1="80" x2="330" y2="80"/>
      <line class="contact-leaf leaf-right" x1="350" y1="80" x2="355" y2="80"/>

      <!-- Wire to coil and drop to return -->
      <path class="wire" d="M375 80 H 545" />
      <path class="tap"  d="M545 80 V 160" />
      <path class="wire" d="M70 160 H 750" />

      <!-- Coil + subtle lamp -->
      <ellipse class="coil" cx="660" cy="120" rx="30" ry="44"/>
      <ellipse class="coil" cx="698" cy="120" rx="30" ry="44"/>
      <circle class="neon" cx="679" cy="120" r="20"/>

      <!-- Animated flow overlay from L -> contact -> tap -> return (only when ON) -->
      <path class="flow" d="M70 80 H 375" />
      <path class="flow" d="M375 80 H 545" />
      <path class="flow" d="M545 80 V 160" />
      <path class="flow" d="M70 160 H 750" />
    </svg>
  </div>

  <p class="caption">
    Toggle <em>Input</em> to close the NO contact. When closed, the current path is highlighted and the coil energizes.
  </p>
</div>

<script>
  (function(){
    const wrap = document.getElementById('noSim');
    const sw   = document.getElementById('noSwitch');
    const cTxt = document.getElementById('stateContact');
    const oTxt = document.getElementById('stateOutput');
    function render(){
      const on = sw.checked;
      wrap.classList.toggle('on', on);
      cTxt.textContent = on ? 'Closed' : 'Open';
      oTxt.textContent = on ? 'ON' : 'OFF';
    }
    sw.addEventListener('change', render);
    render();
  })();
</script>
<!-- === /NO Contact Simulator — polished === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
