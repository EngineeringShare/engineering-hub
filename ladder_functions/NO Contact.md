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

<!-- === NO Contact Simulator — single-rung, correct return at coil === -->
<style>
  .ladder-sim{--bg:#fff;--rail:#0f172a;--wire:#cbd5e1;--text:#0b1324;--muted:#64748b;--active:#16a34a;--accent:#2563eb;
    max-width:780px;margin:1.25rem auto;background:var(--bg);border:1px solid #e5e7eb;border-radius:14px;padding:1rem 1.25rem;
    box-shadow:0 6px 22px rgba(2,6,23,.06);font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
  .ladder-sim .hdr{display:flex;align-items:center;justify-content:space-between;gap:.75rem;flex-wrap:wrap;margin-bottom:.5rem}
  .kv{color:var(--muted);font-size:.95rem}.kv b{color:var(--text)}
  .switch{display:inline-flex;align-items:center;gap:.6rem;font-weight:600;color:var(--text)}
  .switch input{appearance:none;width:48px;height:28px;border-radius:999px;background:#e2e8f0;position:relative;cursor:pointer;transition:background .18s}
  .switch input:after{content:"";position:absolute;left:3px;top:3px;width:22px;height:22px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:left .18s}
  .switch input:checked{background:#bbf7d0}.switch input:checked:after{left:23px}
  .canvas{background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:.5rem}
  svg{width:100%;height:auto;display:block}
  .rail{stroke:var(--rail);stroke-width:7;stroke-linecap:round}
  .wire{stroke:var(--wire);stroke-width:4.5;fill:none;stroke-linecap:round}
  .contact-fixed{stroke:var(--wire);stroke-width:6;stroke-linecap:round}
  .contact-leaf{stroke:var(--wire);stroke-width:6;stroke-linecap:round;transition:transform .16s ease}
  .leaf-left{transform-origin:330px 80px}.leaf-right{transform-origin:360px 80px}
  .coil{stroke:var(--accent);stroke-width:5.5;fill:none}
  .terminal{stroke:var(--wire);stroke-width:4.5}
  .neon{fill:#fbbf24;opacity:.12;transition:opacity .18s;filter:url(#glow)}
  /* Active state */
  .ladder-sim.on .wire,.ladder-sim.on .contact-fixed,.ladder-sim.on .contact-leaf,.ladder-sim.on .coil,.ladder-sim.on .terminal{stroke:var(--active)}
  .ladder-sim.on .neon{opacity:.95}
  /* Flow only along the true path: top → contact → right → down at coil → bottom to rail */
  .flow{stroke:var(--active);stroke-width:4.5;fill:none;stroke-linecap:round;stroke-dasharray:10 12;opacity:0}
  .ladder-sim.on .flow{opacity:1;animation:flow 1.1s linear infinite}
  @keyframes flow{to{stroke-dashoffset:-22}}
  .ladder-sim.on .leaf-left{transform:rotate(8deg)}
  .ladder-sim.on .leaf-right{transform:rotate(-8deg)}
  .lbl{fill:var(--muted);font-size:12px;user-select:none}
  .caption{color:#334155;font-size:.95rem;margin:.5rem .25rem 0}
</style>

<div class="ladder-sim" id="noSim">
  <div class="hdr">
    <label class="switch"><input id="noSwitch" type="checkbox"> Input</label>
    <div class="kv"><span>Contact: <b id="stateContact">Open</b></span> &nbsp; <span>Output: <b id="stateOutput">OFF</b></span></div>
  </div>

  <div class="canvas">
    <svg viewBox="0 0 820 240" role="img" aria-label="Single-rung ladder: NO contact in series with coil">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Rails -->
      <line class="rail" x1="70"  y1="30" x2="70"  y2="210"/>
      <line class="rail" x1="750" y1="30" x2="750" y2="210"/>
      <text class="lbl" x="60" y="22">L (Power)</text>
      <text class="lbl" x="742" y="22">N</text>

      <!-- TOP RUNG: L -> contact -> to coil drop -->
      <path class="wire" d="M70 80 H 260"/>
      <!-- NO contact (gap closes) -->
      <line class="contact-fixed" x1="285" y1="80" x2="305" y2="80"/>
      <line class="contact-fixed" x1="355" y1="80" x2="375" y2="80"/>
      <line class="contact-leaf leaf-left"  x1="305" y1="80" x2="330" y2="80"/>
      <line class="contact-leaf leaf-right" x1="350" y1="80" x2="355" y2="80"/>
      <text class="lbl" x="300" y="110">NO Contact</text>

      <!-- Continue top wire to coil location -->
      <path class="wire" d="M375 80 H 610"/>

      <!-- VERTICAL DROP AT THE COIL (this is the 'missing' vertical) -->
      <line class="terminal" x1="610" y1="80" x2="610" y2="160"/>

      <!-- BOTTOM RETURN WIRE -->
      <path class="wire" d="M70 160 H 750"/>

      <!-- Coil connected top-to-bottom at the drop -->
      <!-- short top terminal into coil -->
      <line class="terminal" x1="610" y1="100" x2="640" y2="100"/>
      <ellipse class="coil" cx="670" cy="120" rx="28" ry="42"/>
      <ellipse class="coil" cx="704" cy="120" rx="28" ry="42"/>
      <!-- short bottom terminal back to the drop/bottom wire -->
      <line class="terminal" x1="640" y1="140" x2="610" y2="140"/>
      <circle class="neon" cx="687" cy="120" r="18"/>
      <text class="lbl" x="652" y="190">Output Coil (Q)</text>

      <!-- Animated current path (only along the correct series route) -->
      <path class="flow" d="M70 80 H 375"/>
      <path class="flow" d="M375 80 H 610"/>
      <path class="flow" d="M610 80 V 160"/>
      <path class="flow" d="M610 160 H 750"/>
    </svg>
  </div>

  <p class="caption">
    Toggle <em>Input</em> to close the NO contact. With the contact closed, the series path is:
    <strong>L → contact → coil drop → bottom return → N</strong>. The coil energizes when the path is complete.
  </p>
</div>

<script>
  (function(){
    const wrap=document.getElementById('noSim');
    const sw=document.getElementById('noSwitch');
    const c=document.getElementById('stateContact');
    const o=document.getElementById('stateOutput');
    function render(){const on=sw.checked;wrap.classList.toggle('on',on);
      c.textContent=on?'Closed':'Open';o.textContent=on?'ON':'OFF';}
    sw.addEventListener('change',render);render();
  })();
</script>
<!-- === /NO Contact Simulator === -->


<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
