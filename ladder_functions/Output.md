---
title: "Output Coil"
permalink: /PLC-Ladder-Logic/Output/
---

<style>
  .content-wrap{
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem 1.25rem;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    line-height: 1.6;
    color: #0b1324;
  }
  .content-wrap h2{ margin-top: 1.25rem; }
  .hero-img{ text-align:center; margin: .5rem 0 1rem; }
  .hero-img img{ max-width: 220px; height:auto; }

  /* Table polish */
  table{
    width:100%;
    border-collapse: collapse;
    margin: .5rem 0 1rem;
    font-size: 0.98rem;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
  }
  th, td{ padding: .6rem .75rem; text-align: left; }
  thead th{ background:#f3f4f6; color:#111827; font-weight:600; border-bottom:1px solid #e5e7eb; }
  tbody tr:nth-child(even){ background:#fafafa; }
  tbody td{ border-top:1px solid #f1f5f9; }
  code{ background:#f3f4f6; padding:.05rem .35rem; border-radius:6px; }

  /* Simulator styles (same “nice” layout as NC page) */
  .ladder-rung{--rail:#0f172a;--wire:#cbd5e1;--text:#0b1324;--muted:#64748b;--active:#16a34a;--coil:#2563eb;
    max-width:760px;margin:1rem auto;border:1px solid #e5e7eb;border-radius:14px;padding:1rem;background:#fff;
    box-shadow:0 6px 20px rgba(2,6,23,.06);}
  .ladder-rung .top{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem;gap:.75rem;flex-wrap:wrap}
  .kv{color:var(--muted)} .kv b{color:var(--text)}
  .switch{display:inline-flex;align-items:center;gap:.6rem;font-weight:600;color:var(--text)}
  .switch input{appearance:none;width:48px;height:28px;border-radius:999px;background:#e2e8f0;position:relative;cursor:pointer;transition:background .18s}
  .switch input:after{content:"";position:absolute;left:3px;top:3px;width:22px;height:22px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:left .18s}
  .switch input:checked{background:#bbf7d0}.switch input:checked:after{left:23px}
  .panel{background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:.5rem}
  svg{width:100%;height:auto;display:block}
  .rail{stroke:var(--rail);stroke-width:7;stroke-linecap:round}
  .wire{stroke:var(--wire);stroke-width:5;fill:none;stroke-linecap:round}
  .contact-post{stroke:var(--wire);stroke-width:6}       /* NO posts (no slash) */
  .contact-bridge{stroke:var(--wire);stroke-width:6;stroke-linecap:round;opacity:.2;transition:opacity .12s}
  .coil{stroke:var(--coil);stroke-width:6;fill:none}
  .lamp{fill:#fbbf24;opacity:.15;transition:opacity .18s;filter:url(#glow)}
  .flow{stroke:var(--active);stroke-width:5;fill:none;stroke-linecap:round;stroke-dasharray:10 12;opacity:0}
  .on .wire,.on .contact-post,.on .coil{stroke:var(--active)}
  .on .contact-bridge{opacity:1}
  .on .flow{opacity:1;animation:flow 1.05s linear infinite}
  .on .lamp{opacity:.95}
  @keyframes flow{to{stroke-dashoffset:-22}}
  .lbl{fill:var(--muted);font-size:12px}
  .actuator .cyl-body{fill:none;stroke:var(--wire);stroke-width:5 ;stroke-linecap:round;}
  .actuator .rod line{stroke:var(--wire);stroke-width:5;stroke-linecap:round;}
  .actuator .rod circle{fill:var(--wire);stroke:var(--wire);stroke-width:2;}
  .actuator .rod{transform:translateX(0);transform-box:fill-box;transform-origin:center;transition:transform .18s ease-out;}
  .ladder-rung.on .actuator .rod{transform:translateX(32px);}


</style>

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/Output.png" alt="Output Coil Symbol" style="max-width: 200px; height: auto;">

</div>

<h2>Output Coil</h2>
<p> 
    An Output Coil is a fundamental component in PLC Ladder Logic Programming. It represents an output device that is activated when the conditions leading to it in the ladder logic are met. When the logic flow reaches the output coil and the conditions are true, the coil energizes, triggering the associated output device, such as a motor, light, or valve. Output coils are essential for controlling various actuators and devices in industrial automation systems.
</p>

<p>
    Note that an output coil only outputs when its recieving a signal from the left side of the rung. If that signal stops for any reason, the output coil will de-energize and turn off the connected device.
</p>

<h3>Behavior Table</h3>
The below table summarizes the behavior of an Output Coil:

<table>
    <tr>
        <th>Input Condition</th>
        <th>Coil State</th>
        <th>Output State</th>
    </tr>
    <tr>
        <td>False (No Signal)</td>
        <td>De-energized</td>
        <td>Device Off</td>
    </tr>
    <tr>
        <td>True (Signal Present)</td>
        <td>Energized</td>
        <td>Device On</td>
    </tr>
</table>

<!-- === NO Contact — coil with cylinder branch directly underneath === -->
<div class="ladder-rung" id="pistonRung">
  <div class="top">
    <label class="switch" aria-label="Toggle input">
      <input id="pistonInput" type="checkbox"> Input (I0.0)
    </label>
    <div class="kv">
      Contact: <b id="pistonCState">Open</b> &nbsp; | &nbsp;
      Output: <b id="pistonOState">OFF</b> &nbsp; | &nbsp;
      Cylinder: <b id="pistonAState">Retracted</b>
    </div>
  </div>

  <div class="panel">
    <svg viewBox="0 0 820 260"
         role="img"
         aria-label="Single rung: left rail, NO contact, coil with cylinder actuator branch underneath">

      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge>
            <feMergeNode in="b"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Rails -->
      <line class="rail" x1="70"  y1="20" x2="70"  y2="230"/>
      <line class="rail" x1="750" y1="20" x2="750" y2="230"/>
      <text class="lbl" x="58"  y="14">L (Power)</text>
      <text class="lbl" x="742" y="14">N</text>

      <!-- Main rung -->
      <path class="wire" d="M70 100 H 240" />

      <!-- NO contact -->
      <line class="contact-post" x1="260" y1="80" x2="260" y2="120"/>
      <line class="contact-post" x1="320" y1="80" x2="320" y2="120"/>
      <path class="wire" d="M240 100 H 260" />
      <path class="wire" d="M320 100 H 520" />
      <line class="contact-bridge" x1="260" y1="100" x2="320" y2="100" />
      <text class="lbl" x="245" y="70">NO Contact (I0.0)</text>

      <!-- Coil -->
      <ellipse class="coil" cx="580" cy="100" rx="26" ry="40"/>
      <ellipse class="coil" cx="614" cy="100" rx="26" ry="40"/>
      <circle class="lamp" cx="597" cy="100" r="18" />
      <path class="wire" d="M520 100 H 554" />
      <path class="wire" d="M640 100 H 750" />
      <text class="lbl" x="558" y="160">Output Coil (Q0.0)</text>

      <!-- Branch legs under coil: || -->
      <!-- Left leg from main rung down -->
      <path class="wire" d="M574 120 V 175" />
      <!-- Right leg from main rung down -->
      <path class="wire" d="M646 120 V 175" />

      <!-- Cylinder between the two legs -->
      <g class="actuator" transform="translate(574,175)">
        <!-- Cylinder body spans between the two legs -->
        <rect class="cyl-body" x="0" y="-12" width="72" height="30" rx="6" ry="6" />
        <!-- Moving rod extending to the right -->
        <g class="rod">
          <line x1="72" y1="3" x2="122" y2="3" />
          <circle cx="122" cy="3" r="5" />
        </g>
        <text class="lbl" x="-8" y="40">Cylinder</text>
      </g>

      <!-- Current flow animation (main rung only) -->
      <path class="flow" d="M70 100 H 750" />
    </svg>
  </div>
</div>

<script>
(function(){
  const wrap   = document.getElementById('pistonRung');
  const sw     = document.getElementById('pistonInput');
  const cState = document.getElementById('pistonCState');
  const oState = document.getElementById('pistonOState');
  const aState = document.getElementById('pistonAState');

  function render(){
    const on = sw.checked;
    wrap.classList.toggle('on', on);       // hooks into your existing .on styles
    cState.textContent = on ? 'Closed'   : 'Open';
    oState.textContent = on ? 'ON'       : 'OFF';
    aState.textContent = on ? 'Extended' : 'Retracted';
  }

  sw.addEventListener('change', render);
  render();
})();
</script>
<!-- === /NO Contact — coil with cylinder branch directly underneath === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
