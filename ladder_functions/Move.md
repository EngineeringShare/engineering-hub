---
title: "Data Move Function"
permalink: /PLC-Ladder-Logic/Move/
---

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>

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
  .switch-row{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;}
  .timer-box{stroke: var(--wire);stroke-width: 4;fill: #f8fafc;   /* or #ffffff, but not default/black */}
  .timer-text{fill:var(--muted);font-size:12px;}
  /* CTU-specific “on” styling (only right side / coil) */
  #ctuRung.ctu-on .coil{stroke:var(--active);}
  #ctuRung.ctu-on .lamp{opacity:.95;}
  #ctuRung.ctu-on .flow-out{opacity:1;animation:flow 1.05s linear infinite;}
  #ctdRung.ctd-on .coil{stroke: var(--active);}
  #ctdRung.ctd-on .lamp{opacity: .95;}
  #ctdRung.ctd-on .flow-out{opacity: 1;animation: flow 1.05s linear infinite;}
</style>

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/CMP_Equals.png" alt="Comparator Function Symbol" style="max-width: 200px; height: auto;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/CMP_Not_Equals.png" alt="Comparator Function Symbol" style="max-width: 200px; height: auto;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/CMP_Greater.png" alt="Comparator Function Symbol" style="max-width: 200px; height: auto;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/CMP_Lesser.png" alt="Comparator Function Symbol" style="max-width: 200px; height: auto;">
</div>

<h2>Data Move Function Overview</h2>
<p> 
    The data move function is used to transfer data from one location to another within the PLC. It is a fundamental operation in PLC programming, allowing for the manipulation and routing of data throughout the control system. The move function typically takes a source value and moves it to a destination address, which can be a memory location, an output, or another variable. This function is essential for tasks such as updating values, controlling outputs based on input conditions, facilitating communication between different parts of the program and controlling sequential operations.
</p>

<h3>Using a Move Function</h3>

<p>
    Move functions are used in many different scenarios, such as:
</p>
<ul>
    <li>Transferring sensor readings to a display or HMI.</li>
    <li>Updating the value of a timer or counter.</li>
    <li>Controlling outputs based on input conditions.</li>
    <li>Facilitating communication between different parts of the program.</li>
    <li>Controlling sequential operations in a process.</li>
</ul>

<p>
    Primarily we use move functions for integer sequential control, they are used alongside comparators to activate individual steps inside a sequence. For example, if we have a multi-step process and we want to move from step 1 to step 2 when a certain condition is met, we can use a move function to transfer the value representing the current step to the next step in the sequence.
</p>

<p>
    The move function also allows us to simplify repetitive code. For instance, if we have a process that requires the same operation to be performed but for varying amounts of time or under different conditions, we can use a move function to update the parameters of that operation without needing to rewrite the logic for each case.
</p>

<!-- === MOVE Function Example (select time -> move into timer preset) === -->
<div class="ladder-rung" id="moveRung">
  <div class="top">
    <div class="switch-row">
      <label>
        Mode:
        <select id="moveMode">
          <option value="2000">Short Cycle (2s)</option>
          <option value="5000" selected>Medium Cycle (5s)</option>
          <option value="8000">Long Cycle (8s)</option>
        </select>
      </label>

      <label class="switch">
        <input id="moveStart" type="checkbox">
        <span>Start Timer</span>
      </label>

      <button id="moveBtn" type="button" style="padding:.45rem .8rem;border:1px solid #cbd5e1;border-radius:8px;background:#fff;cursor:pointer;">
        MOVE Selected Time
      </button>

      <button id="moveReset" type="button" style="padding:.45rem .8rem;border:1px solid #cbd5e1;border-radius:8px;background:#fff;cursor:pointer;">
        Reset
      </button>
    </div>

    <div class="kv">
      Source: <b id="moveSource">5000 ms</b> &nbsp;|&nbsp;
      Timer Preset: <b id="movePreset">5000 ms</b> &nbsp;|&nbsp;
      Accumulated: <b id="moveAcc">0 ms</b> &nbsp;|&nbsp;
      Done Bit: <b id="moveDone">OFF</b>
    </div>
  </div>

  <div class="panel">
    <svg viewBox="0 0 980 180"
         role="img"
         aria-label="Move function sending a selected time value into a timer preset">

      <!-- Rails -->
      <line class="rail" x1="70"  y1="20" x2="70"  y2="160"/>
      <line class="rail" x1="910" y1="20" x2="910" y2="160"/>
      <text class="lbl" x="58"  y="14">L (Power)</text>
      <text class="lbl" x="902" y="14">N</text>

      <!-- Left wire -->
      <path class="wire" d="M70 90 H 150" />
      
      <!-- Start contact -->
      <line class="contact-post" x1="150" y1="60" x2="150" y2="120"/>
      <line class="contact-post" x1="190" y1="60" x2="190" y2="120"/>
      <line class="contact-bridge" id="moveContactBridge" x1="150" y1="90" x2="190" y2="90"/>
      <text class="lbl" x="142" y="50">Start</text>

      <!-- Wire to MOVE -->
      <path class="wire" d="M190 90 H 260" />

      <!-- MOVE block -->
      <rect class="timer-box" x="260" y="40" width="170" height="100" rx="8" ry="8" />
      <text class="timer-text" x="345" y="60" text-anchor="middle" style="font-weight:bold;">MOVE</text>
      <text class="timer-text" id="moveBlockSource" x="345" y="85" text-anchor="middle">IN: 5000 ms</text>
      <text class="timer-text" id="moveBlockDest" x="345" y="110" text-anchor="middle">OUT: T1.PRE</text>
      <text class="timer-text" x="345" y="128" text-anchor="middle">Copies selected time</text>

      <!-- Wire to timer -->
      <path class="wire" d="M430 90 H 500" />

      <!-- Timer block -->
      <rect class="timer-box" x="500" y="35" width="220" height="110" rx="8" ry="8" />
      <text class="timer-text" x="610" y="58" text-anchor="middle" style="font-weight:bold;">TON T1</text>
      <text class="timer-text" id="timerPresetText" x="610" y="83" text-anchor="middle">PRE: 5000 ms</text>
      <text class="timer-text" id="timerAccumText" x="610" y="106" text-anchor="middle">ACC: 0 ms</text>
      <text class="timer-text" id="timerStatusText" x="610" y="128" text-anchor="middle">DN: OFF</text>

      <!-- Wire to coil -->
      <path class="wire" d="M720 90 H 780" />

      <!-- Output coil -->
      <path class="coil" d="M840 68 A30 22 0 0 0 840 112" />
      <path class="coil" d="M840 112 A30 22 0 0 0 840 68" />
      <circle class="lamp" cx="840" cy="90" r="18" />
      <path class="wire" d="M780 90 H 810" />
      <path class="wire" d="M870 90 H 910" />
      <text class="lbl" x="812" y="140">Output Q0.0</text>

      <!-- Animated flow -->
      <path class="flow" id="moveFlow1" d="M70 90 H 260" />
      <path class="flow" id="moveFlow2" d="M430 90 H 720" />
      <path class="flow" id="moveFlow3" d="M720 90 H 910" />
    </svg>
  </div>

  <p style="margin:.75rem 0 0;">
    This example shows how a <code>MOVE</code> instruction can copy a selected time value into a timer preset.
    The timer logic does not change — only the preset value changes.
  </p>
</div>

<script>
(function(){
  const rung = document.getElementById('moveRung');
  const modeSel = document.getElementById('moveMode');
  const startSw = document.getElementById('moveStart');
  const moveBtn = document.getElementById('moveBtn');
  const resetBtn = document.getElementById('moveReset');

  const moveSource = document.getElementById('moveSource');
  const movePreset = document.getElementById('movePreset');
  const moveAcc = document.getElementById('moveAcc');
  const moveDone = document.getElementById('moveDone');

  const moveBlockSource = document.getElementById('moveBlockSource');
  const timerPresetText = document.getElementById('timerPresetText');
  const timerAccumText = document.getElementById('timerAccumText');
  const timerStatusText = document.getElementById('timerStatusText');

  const flow1 = document.getElementById('moveFlow1');
  const flow2 = document.getElementById('moveFlow2');
  const flow3 = document.getElementById('moveFlow3');
  const contactBridge = document.getElementById('moveContactBridge');

  let sourceValue = parseInt(modeSel.value, 10);
  let timerPreset = sourceValue;
  let acc = 0;
  let done = false;
  let lastTime = null;

  function formatMs(ms){
    return `${ms} ms`;
  }

  function updateModeDisplay(){
    sourceValue = parseInt(modeSel.value, 10);
    moveSource.textContent = formatMs(sourceValue);
    moveBlockSource.textContent = `IN: ${formatMs(sourceValue)}`;
  }

  function doMove(){
    timerPreset = sourceValue;
    movePreset.textContent = formatMs(timerPreset);
    timerPresetText.textContent = `PRE: ${formatMs(timerPreset)}`;
  }

  function resetTimer(){
    acc = 0;
    done = false;
    lastTime = null;
    startSw.checked = false;
    render();
  }

  function render(){
    moveAcc.textContent = formatMs(acc);
    moveDone.textContent = done ? 'ON' : 'OFF';
    timerAccumText.textContent = `ACC: ${formatMs(acc)}`;
    timerStatusText.textContent = `DN: ${done ? 'ON' : 'OFF'}`;

    const running = startSw.checked && !done;

    contactBridge.style.opacity = startSw.checked ? '1' : '0.2';

    flow1.style.opacity = startSw.checked ? 1 : 0;
    flow2.style.opacity = startSw.checked ? 1 : 0;
    flow3.style.opacity = done ? 1 : 0;

    rung.classList.toggle('on', done);
  }

  function tick(timestamp){
    if(startSw.checked && !done){
      if(lastTime === null) lastTime = timestamp;
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      acc += delta;
      if(acc >= timerPreset){
        acc = timerPreset;
        done = true;
      }
    } else {
      lastTime = timestamp;
    }

    render();
    requestAnimationFrame(tick);
  }

  modeSel.addEventListener('change', () => {
    updateModeDisplay();
  });

  moveBtn.addEventListener('click', () => {
    doMove();
    acc = 0;
    done = false;
    render();
  });

  resetBtn.addEventListener('click', resetTimer);

  startSw.addEventListener('change', () => {
    if(!startSw.checked){
      lastTime = null;
    }
    render();
  });

  updateModeDisplay();
  doMove();
  render();
  requestAnimationFrame(tick);
})();
</script>
<!-- === /MOVE Function Example === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
