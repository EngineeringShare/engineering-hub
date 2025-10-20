---
title: "NC Contact"
permalink: /PLC-Ladder-Logic/NC-Contact/
---

<div style="text-align:center;">
  <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/NC_Contact.png"
       alt="Normally Closed Contact Symbol" style="max-width:200px;height:auto;">
</div>

<h2>Normally Closed Contact (NC)</h2>
<p>
  A Normally Closed (NC) contact conducts in its default state (contact closed). When the associated input condition is
  <em>true</em> (e.g., a button is pressed or a sensor is active), the contact <strong>opens</strong> and interrupts the
  rung. NC contacts are commonly used for E-Stops, guard switches, and fail-safe inputs where a broken wire or power loss
  should de-energize the output.
</p>

<p>
  Practically: NC behaves like a switch that is <em>on by default</em> and turns <em>off</em> when activated.
  You can use NC to read physical inputs (e.g., <code>I0.0</code>) or internal bits. With a physical NC device wired to
  <code>I0.0</code>, the PLC bit is typically <code>1</code> when healthy/at rest, and goes <code>0</code> when pressed,
  tripped, or the circuit is broken.
</p>

<h3>Behavior Table</h3>
<table>
  <tr><th>Input Condition</th><th>Contact State</th><th>Output State</th></tr>
  <tr><td>False (Not Activated)</td><td>Closed</td><td>Signal Flows</td></tr>
  <tr><td>True (Activated)</td><td>Open</td><td>No Signal Flows</td></tr>
</table>

<p>
  NC is useful for fail-safe design: if a wire breaks or a device loses power, the PLC sees the input as false-to-true
  change (depending on wiring) that <em>opens the contact</em> and de-energizes the output, placing the system in a safe state.
</p>

<!-- === NC Contact — single rung with coil lamp (energized when input is FALSE) === -->
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
  .coil{stroke:var(--coil);stroke-width:6;fill:none}
  .lamp{fill:#fbbf24;opacity:.15;transition:opacity .18s;filter:url(#glow)}
  .flow{stroke:var(--active);stroke-width:5;fill:none;stroke-linecap:round;stroke-dasharray:10 12;opacity:0}
  .lbl{fill:var(--muted);font-size:12px}

  /* ENERGIZED state for NC is when input is FALSE -> container does NOT have .on */
  .nc-sim:not(.on) .wire,
  .nc-sim:not(.on) .contact-post,
  .nc-sim:not(.on) .coil { stroke: var(--active); }
  .nc-sim:not(.on) .contact-bridge { opacity: 1; }       /* bridge present when closed */
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

      <!-- NC contact: two posts; bridge is present by default and disappears when input TRUE -->
      <line class="contact-post" x1="260" y1="80" x2="260" y2="120"/>
      <line class="contact-post" x1="320" y1="80" x2="320" y2="120"/>
      <path class="wire" d="M240 100 H 260" />
      <path class="wire" d="M320 100 H 520" />
      <line class="contact-bridge" x1="260" y1="100" x2="320" y2="100" />
      <text class="lbl" x="262" y="70">NC Contact (I0.0)</text>

      <!-- Coil -->
      <ellipse class="coil" cx="600" cy="100" rx="26" ry="40"/>
      <ellipse class="coil" cx="634" cy="100" rx="26" ry="40"/>
      <circle class="lamp" cx="617" cy="100" r="20" />
      <path class="wire" d="M520 100 H 574" />
      <path class="wire" d="M660 100 H 750" />
      <text class="lbl" x="592" y="160">Output Coil (Q)</text>

      <!-- Animated current flow (visible only when input is FALSE) -->
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
      const inputTrue = sw.checked;     // input TRUE opens NC
      wrap.classList.toggle('on', inputTrue);
      cTxt.textContent = inputTrue ? 'Open' : 'Closed';
      oTxt.textContent = inputTrue ? 'OFF' : 'ON';
    }
    sw.addEventListener('change', render);
    render(); // default: input FALSE -> NC closed -> output ON
  })();
</script>
<!-- === /NC Contact — single rung with lamp === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
