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
</style>

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/Output.png" alt="Output Coil Symbol" style="max-width: 200px; height: auto;">

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

<img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/TON_&_TOF_GRAPH.png" alt="Output Coil Symbol" style="max-width: 200px; height: auto;">

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

<!-- === TON Timer Example (I0.0 -> T37 -> Q0.0) === -->
<div class="ladder-rung" id="timerRung">
  <div class="top">
    <label class="switch" aria-label="Timer enable I0.0">
      <input id="timerInput" type="checkbox"> Enable (I0.0)
    </label>
    <div class="kv">
      ET: <b id="timerET">0.0</b> / <span id="timerPT">5.0</span> s &nbsp; | &nbsp;
      T37.Q: <b id="timerQState">OFF</b> &nbsp; | &nbsp;
      Q0.0: <b id="timerOState">OFF</b>
    </div>
  </div>

  <div class="panel">
    <div class="timer-info">
      On-delay timer: when <code>I0.0</code> is true, <code>T37</code> starts timing.
      After the preset time (PT) has elapsed, <code>T37.Q</code> turns ON and energises <code>Q0.0</code>.
      <div class="timer-bar">
        <div class="timer-fill" id="timerBarFill"></div>
      </div>
    </div>

    <svg viewBox="0 0 820 260"
         role="img"
         aria-label="Two-rung TON example: I0.0 to T37, then T37.Q to Q0.0">

      <!-- Rails -->
      <line class="rail" x1="70"  y1="20" x2="70"  y2="240"/>
      <line class="rail" x1="750" y1="20" x2="750" y2="240"/>
      <text class="lbl" x="58"  y="14">L (Power)</text>
      <text class="lbl" x="742" y="14">N</text>

      <!-- === RUNG 1: I0.0 -> TON T37 === -->
      <!-- Main wire -->
      <path class="wire" d="M70 80 H 240" />

      <!-- NO contact I0.0 -->
      <line class="contact-post" x1="260" y1="60" x2="260" y2="100"/>
      <line class="contact-post" x1="320" y1="60" x2="320" y2="100"/>
      <path class="wire" d="M240 80 H 260" />
      <path class="wire" d="M320 80 H 520" />
      <line class="contact-bridge" x1="260" y1="80" x2="320" y2="80" />
      <text class="lbl" x="245" y="50">NO (I0.0)</text>

      <!-- TON box -->
      <rect class="timer-box" x="520" y="50" width="140" height="60" rx="8" ry="8" />
      <text class="timer-text" x="590" y="66" text-anchor="middle">TON</text>
      <text class="timer-text" x="590" y="86" text-anchor="middle">T37</text>
      <text class="timer-text" x="665" y="66">PT 5s</text>
      <text class="timer-text" x="665" y="86">Q</text>
      <!-- Wire from timer to right rail -->
      <path class="wire" d="M660 80 H 750" />

      <!-- === RUNG 2: T37.Q -> Q0.0 === -->
      <!-- Main wire -->
      <path class="wire" d="M70 180 H 240" />

      <!-- NO contact T37.Q -->
      <line class="contact-post" x1="260" y1="160" x2="260" y2="200"/>
      <line class="contact-post" x1="320" y1="160" x2="320" y2="200"/>
      <path class="wire" d="M240 180 H 260" />
      <path class="wire" d="M320 180 H 520" />
      <line class="contact-bridge" x1="260" y1="180" x2="320" y2="180" />
      <text class="lbl" x="240" y="150">NO (T37.Q)</text>

      <!-- Output coil Q0.0, bracket style ----( )---- -->
      <!-- Left bracket arc -->
      <path class="coil" d="M597 158 A30 22 0 0 0 597 202" />
      <!-- Right bracket arc -->
      <path class="coil" d="M597 202 A30 22 0 0 0 597 158" />

      <!-- Lamp for Q0.0 -->
      <circle class="lamp" cx="597" cy="180" r="18" />

      <!-- Wires to coil -->
      <path class="wire" d="M520 180 H 567" />
      <path class="wire" d="M627 180 H 750" />

      <text class="lbl" x="548" y="232">Output Coil (Q0.0)</text>
    </svg>
  </div>
</div>

<script>
(function(){
  const wrap   = document.getElementById('timerRung');
  const input  = document.getElementById('timerInput');
  const etSpan = document.getElementById('timerET');
  const ptSpan = document.getElementById('timerPT');
  const qSpan  = document.getElementById('timerQState');
  const oSpan  = document.getElementById('timerOState');
  const bar    = document.getElementById('timerBarFill');

  const PT = 5.0;       // preset time in seconds
  ptSpan.textContent = PT.toFixed(1);

  let et = 0;           // elapsed time
  let done = false;
  let lastTime = null;

  function render(){
    etSpan.textContent = et.toFixed(1);
    const frac = Math.max(0, Math.min(1, et / PT));
    bar.style.width = (frac * 100).toFixed(1) + '%';

    qSpan.textContent = done ? 'ON' : 'OFF';
    oSpan.textContent = done ? 'ON' : 'OFF';

    // Use .on to drive coil / lamp colour
    wrap.classList.toggle('on', done);
  }

  function step(timestamp){
    if (lastTime === null) lastTime = timestamp;
    const dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    if (input.checked){
      // TON behaviour: accumulate up to PT
      et = Math.min(PT, et + dt);
      if (et >= PT) done = true;
    } else {
      // input false: reset
      et = 0;
      done = false;
    }

    render();
    window.requestAnimationFrame(step);
  }

  render();
  window.requestAnimationFrame(step);
})();
</script>
<!-- === /TON Timer Example === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
