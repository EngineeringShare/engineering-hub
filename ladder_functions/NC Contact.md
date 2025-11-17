---
title: "NC Contact"
permalink: /PLC-Ladder-Logic/NC-Contact/
---

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>

<div style="text-align:center;">
  <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/NC_Contact.png"
       alt="Normally Closed Contact Symbol" style="max-width:200px;height:auto;">
</div>

<h2>Normally Closed Contact (NC)</h2>
<p>
  A Normally Closed (NC) contact is a key part of PLC Ladder Logic programming. It represents a switch or relay contact
  that is closed (conducting) in its default state. When the associated input condition becomes true (for example, when a
  button is pressed or a sensor is activated), the contact opens, breaking the circuit and stopping the signal from
  flowing. NC contacts are often used for emergency stop circuits, guard interlocks, and safety-related inputs where a
  loss of power or broken wire should turn the system off.
</p>

<p>
  In simple terms, a Normally Closed contact is “on” by default and turns “off” when activated (when the input condition
  is true). You can use NC contacts to read inputs such as normally closed push buttons or limit switches, which are held closed until an action causes them to open.
</p>

<h3>Using a NC Contact</h3>

<p>
  Like NO contacts, NC contacts are linked to specific input addresses within the PLC, such as <code>I0.0</code> for the
  first digital input. Each input byte can read eight individual bits (from <code>I0.0</code> to <code>I0.7</code>), each
  representing one input channel. After <code>I0.7</code>, the next byte begins at <code>I1.0</code> for the next group
  of eight inputs.
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

<p>
  Normally Closed contacts are useful in fail-safe designs, because if the input device or wiring fails, the contact will
  open in the ladder logic — de-energising the output and putting the system into a safe state. This is why NC devices are
  commonly used for emergency stops and guard circuits.
</p>

<!-- === NC Contact — single rung with slash symbol === -->
<style>
  .nc-sim{--rail:#0f172a;--wire:#cbd5e1;--text:#0b1324;--muted:#64748b;--active:#16a34a;--coil:#2563eb;
    max-width:760px;margin:1rem auto;border:1px solid #e5e7eb;border-radius:14px;padding:1rem;background:#fff;
    box-shadow:0 6px 20px rgba(2,6,23,.06);font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
  .nc-sim .top{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}
  .kv{color:var(--muted)} .kv b{color:var(--text)}
  .switch{display:inline-flex;align-items:center;gap:.6rem;font-weight:600;color:var(--text)}
  .switch input{appearance:none;width:48px;height:28px;border-radius:999px;background:#e2e8f0;position:relative;cursor:pointer;transition:background .18s}
  .switch input:after{content:"";position:absolute;left:3px;top:3px;width:22px;height:22px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:left .18s}
  .switch input:checked{background:#fecaca}.switch input:checked:after{left:23px}
  .panel{background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:.5rem}
  svg{width:100%;height:auto;display:block}
  .rail{stroke:var(--rail);stroke-width:7;stroke-linecap:round}
  .wire{stroke:var(--wire);stroke-width:5;fill:none;stroke-linecap:round}
  .contact-post{stroke:var(--wire);stroke-width:6}
  .contact-bridge{stroke:var(--wire);stroke-width:6;stroke-linecap:round;opacity:.2;transition:opacity .12s}
  .contact-slash{stroke:var(--wire);stroke-width:4;stroke-linecap:round;opacity:.4}
  .coil{stroke:var(--coil);stroke-width:6;fill:none}
  .lamp{fill:#fbbf24;opacity:.15;transition:opacity .18s;filter:url(#glow)}
  .flow{stroke:var(--active);stroke-width:5;fill:none;stroke-linecap:round;stroke-dasharray:10 12;opacity:0}
  .lbl{fill:var(--muted);font-size:12px}

  /* Energised when input is FALSE (NC closed) */
  .nc-sim:not(.on) .wire,
  .nc-sim:not(.on) .contact-post,
  .nc-sim:not(.on) .coil { stroke: var(--active); }
  .nc-sim:not(.on) .contact-bridge { opacity: 1; }
  .nc-sim:not(.on) .flow { opacity: 1; animation: flow 1.05s linear infinite; }
  .nc-sim:not(.on) .lamp { opacity: .95; }

  @keyframes flow{to{stroke-dashoffset:-22}}
</style>

<div class="nc-sim" id="ncRung">
  <div class="top">
    <label class="switch"><input id="ncInput" type="checkbox"> Input (I0.0)</label>
    <div class="kv">Contact: <b id="ncContact">Closed</b> &nbsp; | &nbsp; Output: <b id="ncOutput">ON</b></div>
  </div>

  <div class="panel">
    <svg viewBox="0 0 820 200" role="img" aria-label="Single rung: left rail, NC contact, coil, right rail">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Rails -->
      <line class="rail" x1="70"  y1="20" x2="70"  y2="180"/>
      <line class="rail" x1="750" y1="20" x2="750" y2="180"/>
      <text class="lbl" x="58"  y="14">L (Power)</text>
      <text class="lbl" x="742" y="14">N</text>

      <!-- Horizontal rung -->
      <path class="wire" d="M70 100 H 240" />

      <!-- NC contact -->
      <line class="contact-post" x1="260" y1="80" x2="260" y2="120"/>
      <line class="contact-post" x1="320" y1="80" x2="320" y2="120"/>
      <line class="contact-slash" x1="255" y1="80" x2="325" y2="120"/> <!-- diagonal slash -->
      <path class="wire" d="M240 100 H 260" />
      <path class="wire" d="M320 100 H 520" />
      <line class="contact-bridge" x1="260" y1="100" x2="320" y2="100" />
      <text class="lbl" x="262" y="70">NC Contact (I0.0)</text>

      <!-- Coil (TIA-style ----( )---- ) -->
  
      <!-- Left bracket arc -->
      <path class="coil" d="M597 78 A30 22 0 0 0 597 122" />
  
      <!-- Right bracket arc -->
      <path class="coil" d="M597 122 A30 22 0 0 0 597 78" />
  
      <!-- Lamp (kept as-is) -->
      <circle class="lamp" cx="597" cy="100" r="18" />
  
      <!-- Wires -->
      <path class="wire" d="M520 100 H 567" />
      <path class="wire" d="M627 100 H 750" />
  
      <text class="lbl" x="558" y="160">Output Coil (Q0.0)</text>

      <!-- Animated current flow -->
      <path class="flow" d="M70 100 H 750" />
    </svg>
  </div>
</div>

<script>
  (function(){
    const wrap = document.getElementById('ncRung');
    const sw   = document.getElementById('ncInput');
    const cTxt = document.getElementById('ncContact');
    const oTxt = document.getElementById('ncOutput');

    function render(){
      const inputTrue = sw.checked;
      wrap.classList.toggle('on', inputTrue);
      cTxt.textContent = inputTrue ? 'Open' : 'Closed';
      oTxt.textContent = inputTrue ? 'OFF' : 'ON';
    }
    sw.addEventListener('change', render);
    render();
  })();
</script>
<!-- === /NC Contact — single rung with slash symbol === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
