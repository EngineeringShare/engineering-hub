---
title: "Timer"
permalink: /PLC-Ladder-Logic/Timer/
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
  .timer-info{margin:.5rem 0 .75rem;font-size:.9rem;color:var(--muted);}
  .timer-bar{width:100%;height:10px;border-radius:999px;background:#e5e7eb;overflow:hidden;margin-top:.25rem;}
  .timer-fill{height:100%;width:0%;background:var(--active);transition:width .1s linear;}
  .timer-box{stroke:var(--wire);stroke-width:4;fill:none;}
  .timer-text{fill:var(--muted);font-size:12px;}
    /* TOF-specific: only colour the right side when Q is on */
  #tofRung.tof-on .coil {stroke: var(--active);}
  #tofRung.tof-on .lamp {opacity: .95;}
  #tofRung.tof-on .flow-out {opacity: 1;animation: flow 1.05s linear infinite;}
</style>

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/TON_Timer.png" alt="TON Timer Symbol" style="max-width: 200px; height: auto;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/TOF_Timer.png" alt="TOF Timer Symbol" style="max-width: 200px; height: auto;">
</div>

<h2>Timer</h2>
<p> 
    A Timer in PLC ladder logic is a function that measures time intervals and is used to create delays or time-based control actions within a PLC program. Timers can be configured to operate in different modes, such as ON-delay, OFF-delay, or retentive timing, depending on the specific requirements of the application.
</p>

<p>
    There are two main types of timers commonly used in PLC programming:
</p>

<ul>
    <li><strong>ON-Delay Timer (TON):</strong> This timer starts counting when the input condition is true. After the preset time elapses, the timer's output becomes true. If the input condition goes false before the time elapses, the timer resets.</li>
    <li><strong>OFF-Delay Timer (TOF):</strong> This timer starts counting when the input condition goes false. The timer's output remains true for the preset time after the input condition goes false, and then it becomes false.</li>
</ul>

<p>
    This can be seen in the below graphs:
</p>

<img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/TON_&_TOF_GRAPH.png" alt="TON & TOF Graphs" style="max-width: 700px; height: auto;">

<h3>Using an Output Coil</h3>

<p>
    There are two main values associated with a timer:
</p>

<ul>
    <li><strong>Preset Time (PT):</strong> This is the time duration that the timer is set to count before changing its output state.</li>
    <li><strong>Elapsed Time (ET):</strong> This is the current time that has elapsed since the timer started counting.</li>
</ul>

<p>
    Timers are used in various applications, such as controlling the timing of processes, creating delays for safety interlocks, and managing sequential operations in industrial automation systems.
</p>

<h3>Behavior Table</h3>
The below table summarizes the behavior of an Output Coil:

<table>
    <tr>
        <th>Input Condition</th>
        <th>Timer State</th>
        <th>Output State</th>
    </tr>
    <tr>
        <td>False (No Signal)</td>
        <td>Not Timing</td>
        <td>Output Off</td>
    </tr>
    <tr>
        <td>True (Signal Present)</td>
        <td>Timing</td>
        <td>Output On after PT</td>
    </tr>
</table>

<!-- === SINGLE-RUNG TON Example === -->
<div class="ladder-rung" id="tonRung">
  <div class="top">
    <label class="switch">
      <input id="tonInput" type="checkbox"> Input (I0.0)
    </label>

    <div class="kv">
      ET: <b id="tonET">0.0</b> / <span id="tonPT">5.0</span> s &nbsp;|&nbsp;
      T1.Q: <b id="tonQState">OFF</b> &nbsp;|&nbsp;
      Q0.0: <b id="tonOState">OFF</b>
    </div>
  </div>

  <div class="panel">
    <div class="timer-bar">
      <div class="timer-fill" id="tonFill"></div>
    </div>

    <svg viewBox="0 0 820 160">

      <!-- Rails -->
      <line class="rail" x1="70"  y1="20" x2="70"  y2="140"/>
      <line class="rail" x1="750" y1="20" x2="750" y2="140"/>
      <text class="lbl" x="58"  y="14">L</text>
      <text class="lbl" x="742" y="14">N</text>

      <!-- Main rung -->
      <path class="wire" d="M70 80 H 240" />

      <!-- NO Contact -->
      <line class="contact-post" x1="260" y1="60" x2="260" y2="100"/>
      <line class="contact-post" x1="320" y1="60" x2="320" y2="100"/>
      <path class="wire" d="M240 80 H 260" />
      <path class="wire" d="M320 80 H 420" />
      <line class="contact-bridge" x1="260" y1="80" x2="320" y2="80" />
      <text class="lbl" x="245" y="50">NO (I0.0)</text>

      <!-- TON timer -->
      <rect class="timer-box" x="420" y="50" width="120" height="60" rx="8" ry="8"/>
      <text class="timer-text" x="480" y="68" text-anchor="middle">TON</text>
      <text class="timer-text" x="480" y="88" text-anchor="middle">T1 (5s)</text>
      <path class="wire" d="M540 80 H 560" />

      <!-- Output Coil ----( )---- -->
      <!-- Left bracket arc -->
      <path class="coil" d="M597 58 A30 22 0 0 0 597 102" />
      <!-- Right bracket arc -->
      <path class="coil" d="M597 102 A30 22 0 0 0 597 58" />

      <circle class="lamp" cx="597" cy="80" r="18" />

      <!-- Wires to coil -->
      <path class="wire" d="M560 80 H 567" />
      <path class="wire" d="M627 80 H 750" />

      <text class="lbl" x="540" y="130">Output Coil (Q0.0)</text>

      <!-- Flow BEFORE timer (I0.0 true) -->
      <path class="flow" id="tonFlowIn"  d="M70 80 H 420" />
      <!-- Flow AFTER timer (Q true) -->
      <path class="flow" id="tonFlowOut" d="M540 80 H 750" />
    </svg>
  </div>
</div>

<script>
(function(){
  const wrap  = document.getElementById("tonRung");
  const input = document.getElementById("tonInput");

  const etSpan = document.getElementById("tonET");
  const ptSpan = document.getElementById("tonPT");
  const qSpan  = document.getElementById("tonQState");
  const oSpan  = document.getElementById("tonOState");
  const fill   = document.getElementById("tonFill");

  const flowIn  = document.getElementById("tonFlowIn");
  const flowOut = document.getElementById("tonFlowOut");

  const PT = 5.0;
  ptSpan.textContent = PT.toFixed(1);

  let et = 0;
  let done = false;
  let last = null;

  function render(){
    etSpan.textContent = et.toFixed(1);
    fill.style.width = ((et / PT) * 100).toFixed(1) + "%";

    qSpan.textContent = done ? "ON" : "OFF";
    oSpan.textContent = done ? "ON" : "OFF";

    // Green flow INTO the timer whenever I0.0 is true
    flowIn.style.opacity  = input.checked ? 1 : 0;
    // Green flow OUT of the timer only when TON is done
    flowOut.style.opacity = done ? 1 : 0;

    // Use .on to colour the coil/lamp when the timer is done
    wrap.classList.toggle("on", done);
  }

  function tick(t){
    if (last === null) last = t;
    const dt = (t - last) / 1000;
    last = t;

    if (input.checked){
      et = Math.min(PT, et + dt);
      if (et >= PT) done = true;
    } else {
      et = 0;
      done = false;
    }

    render();
    requestAnimationFrame(tick);
  }

  render();
  requestAnimationFrame(tick);
})();
</script>
<!-- === /SINGLE-RUNG TON Example === -->

<!-- === SINGLE-RUNG TOF Example (updated) === -->
<div class="ladder-rung" id="tofRung">
  <div class="top">
    <label class="switch">
      <input id="tofInput" type="checkbox"> Input (I0.0)
    </label>

    <div class="kv">
      ET: <b id="tofET">0.0</b> / <span id="tofPT">5.0</span> s &nbsp;|&nbsp;
      T2.Q: <b id="tofQState">OFF</b> &nbsp;|&nbsp;
      Q0.1: <b id="tofOState">OFF</b>
    </div>
  </div>

  <div class="panel">
    <div class="timer-bar">
      <div class="timer-fill" id="tofFill"></div>
    </div>

    <svg viewBox="0 0 820 160">
      <!-- Rails -->
      <line class="rail" x1="70"  y1="20" x2="70"  y2="140"/>
      <line class="rail" x1="750" y1="20" x2="750" y2="140"/>
      <text class="lbl" x="58"  y="14">L</text>
      <text class="lbl" x="742" y="14">N</text>

      <!-- Main rung -->
      <path class="wire" d="M70 80 H 240" />

      <!-- NO Contact I0.0 -->
      <line class="contact-post" x1="260" y1="60" x2="260" y2="100"/>
      <line class="contact-post" x1="320" y1="60" x2="320" y2="100"/>
      <path class="wire" d="M240 80 H 260" />
      <path class="wire" d="M320 80 H 420" />
      <line class="contact-bridge" x1="260" y1="80" x2="320" y2="80" />
      <text class="lbl" x="245" y="50">NO (I0.0)</text>

      <!-- TOF timer T2 -->
      <rect class="timer-box" x="420" y="50" width="120" height="60" rx="8" ry="8"/>
      <text class="timer-text" x="480" y="68" text-anchor="middle">TOF</text>
      <text class="timer-text" x="480" y="88" text-anchor="middle">T2 (5s)</text>
      <path class="wire" d="M540 80 H 560" />

      <!-- Output Coil Q0.1, bracket style ----( )---- -->
      <!-- Left bracket arc -->
      <path class="coil" d="M597 58 A30 22 0 0 0 597 102" />
      <!-- Right bracket arc -->
      <path class="coil" d="M597 102 A30 22 0 0 0 597 58" />

      <circle class="lamp" cx="597" cy="80" r="18" />

      <!-- Wires to coil -->
      <path class="wire" d="M560 80 H 567" />
      <path class="wire" d="M627 80 H 750" />

      <text class="lbl" x="540" y="130">Output Coil (Q0.1)</text>

      <!-- Flow BEFORE timer (into TOF) -->
      <path class="flow flow-in"  id="tofFlowIn"  d="M70 80 H 420" />
      <!-- Flow AFTER timer (out to coil) -->
      <path class="flow flow-out" id="tofFlowOut" d="M540 80 H 750" />
    </svg>
  </div>
</div>

<script>
(function(){
  const wrap  = document.getElementById("tofRung");
  const input = document.getElementById("tofInput");

  const etSpan = document.getElementById("tofET");
  const ptSpan = document.getElementById("tofPT");
  const qSpan  = document.getElementById("tofQState");
  const oSpan  = document.getElementById("tofOState");
  const fill   = document.getElementById("tofFill");

  const flowIn  = document.getElementById("tofFlowIn");
  const flowOut = document.getElementById("tofFlowOut");

  const PT = 5.0;
  ptSpan.textContent = PT.toFixed(1);

  let et = 0;           // elapsed time during OFF delay
  let done = false;     // T2.Q / Q0.1 state
  let last = null;
  let prevInput = false;
  let timing = false;

  function render(){
    etSpan.textContent = et.toFixed(1);
    const frac = Math.max(0, Math.min(1, et / PT));
    fill.style.width = (frac * 100).toFixed(1) + "%";

    qSpan.textContent = done ? "ON" : "OFF";
    oSpan.textContent = done ? "ON" : "OFF";

    // LEFT side: only green when input is ON
    flowIn.style.opacity = input.checked ? 1 : 0;

    // RIGHT side: green whenever Q is ON (input ON or off-delay active)
    flowOut.style.opacity = done ? 1 : 0;

    // Colour coil + lamp using TOF-specific class, not global .on
    wrap.classList.toggle("tof-on", done);
  }

  function tick(t){
    if (last === null) last = t;
    const dt = (t - last) / 1000;
    last = t;

    const nowInput = input.checked;

    if (nowInput){
      // Input ON: TOF output is immediately ON, timer idle
      done   = true;
      timing = false;
      et     = 0;
    } else {
      // Input OFF
      if (prevInput && !nowInput){
        // Just transitioned ON -> OFF: start off-delay
        timing = true;
        et     = 0;
      }

      if (timing){
        et = Math.min(PT, et + dt);
        if (et >= PT){
          done   = false;   // output turns off after PT
          timing = false;
        }
      }
    }

    prevInput = nowInput;
    render();
    requestAnimationFrame(tick);
  }

  render();
  requestAnimationFrame(tick);
})();
</script>
<!-- === /SINGLE-RUNG TOF Example === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
