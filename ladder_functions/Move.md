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

  .ladder-rung{
    --rail:#0f172a;
    --wire:#cbd5e1;
    --text:#0b1324;
    --muted:#64748b;
    --active:#16a34a;
    --coil:#2563eb;
    max-width:760px;
    margin:1rem auto;
    border:1px solid #e5e7eb;
    border-radius:14px;
    padding:1rem;
    background:#fff;
    box-shadow:0 6px 20px rgba(2,6,23,.06);
  }
  .ladder-rung .top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:.5rem;
    gap:.75rem;
    flex-wrap:wrap
  }
  .kv{color:var(--muted)}
  .kv b{color:var(--text)}
  .switch{
    display:inline-flex;
    align-items:center;
    gap:.6rem;
    font-weight:600;
    color:var(--text)
  }
  .switch input{
    appearance:none;
    width:48px;
    height:28px;
    border-radius:999px;
    background:#e2e8f0;
    position:relative;
    cursor:pointer;
    transition:background .18s
  }
  .switch input:after{
    content:"";
    position:absolute;
    left:3px;
    top:3px;
    width:22px;
    height:22px;
    border-radius:50%;
    background:#fff;
    box-shadow:0 1px 2px rgba(0,0,0,.25);
    transition:left .18s
  }
  .switch input:checked{background:#bbf7d0}
  .switch input:checked:after{left:23px}

  .panel{
    background:#f8fafc;
    border:1px solid #e5e7eb;
    border-radius:12px;
    padding:.5rem
  }
  svg{width:100%;height:auto;display:block}
  .rail{stroke:var(--rail);stroke-width:7;stroke-linecap:round}
  .wire{stroke:var(--wire);stroke-width:5;fill:none;stroke-linecap:round}
  .contact-post{stroke:var(--wire);stroke-width:6}
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
  .switch-row{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;}
  .timer-box{stroke:var(--wire);stroke-width:4;fill:#f8fafc}
  .timer-text{fill:var(--muted);font-size:12px;}
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

<!-- === MOVE + TON Multi-Rung Example === -->
<div class="ladder-rung" id="moveTonSim">
  <div class="top">
    <div class="switch-row">
      <label class="switch">
        <input id="modeShort" type="checkbox">
        <span>Short Mode</span>
      </label>

      <label class="switch">
        <input id="modeMedium" type="checkbox" checked>
        <span>Medium Mode</span>
      </label>

      <label class="switch">
        <input id="modeLong" type="checkbox">
        <span>Long Mode</span>
      </label>

      <label class="switch">
        <input id="startTimer" type="checkbox">
        <span>Start Timer</span>
      </label>

      <button id="resetMoveTon" type="button" style="padding:.45rem .8rem;border:1px solid #cbd5e1;border-radius:8px;background:#fff;cursor:pointer;">
        Reset
      </button>
    </div>

    <div class="kv">
      Active Mode: <b id="activeModeText">Medium</b> &nbsp;|&nbsp;
      T1.PT: <b id="presetTextTop">5000 ms</b> &nbsp;|&nbsp;
      T1.ET: <b id="accTextTop">0 ms</b> &nbsp;|&nbsp;
      T1.DN: <b id="doneTextTop">OFF</b>
    </div>
  </div>

  <div class="panel">
    <svg viewBox="0 0 980 520" role="img" aria-label="Multi-rung PLC example showing move instructions on separate rungs feeding a timer preset">

      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Rails -->
      <line class="rail" x1="70" y1="20" x2="70" y2="500"/>
      <line class="rail" x1="910" y1="20" x2="910" y2="500"/>
      <text class="lbl" x="58" y="14">L (Power)</text>
      <text class="lbl" x="902" y="14">N</text>

      <!-- ================= RUNG 1 SHORT ================= -->
      <text class="lbl" x="80" y="55">Rung 1</text>
      <path class="wire" d="M70 90 H 150" />
      <line class="contact-post" x1="150" y1="60" x2="150" y2="120"/>
      <line class="contact-post" x1="190" y1="60" x2="190" y2="120"/>
      <line class="contact-bridge" id="bridgeShort" x1="150" y1="90" x2="190" y2="90"/>
      <text class="lbl" x="140" y="50">Short</text>
      <path class="wire" d="M190 90 H 270" />
      <path class="wire" d="M480 90 H 910" />
      <path class="flow" id="flowShort" d="M70 90 H 910" />
      <rect class="timer-box" x="270" y="45" width="210" height="90" rx="8" ry="8"/>
      <text class="timer-text" x="375" y="68" text-anchor="middle" style="font-weight:bold;">MOVE</text>
      <text class="timer-text" x="375" y="92" text-anchor="middle">2000 → T1.PT</text>
      <text class="timer-text" id="moveShortState" x="375" y="116" text-anchor="middle">Instruction idle</text>

      <!-- ================= RUNG 2 MEDIUM ================= -->
      <text class="lbl" x="80" y="155">Rung 2</text>
      <path class="wire" d="M70 190 H 150" />
      <line class="contact-post" x1="150" y1="160" x2="150" y2="220"/>
      <line class="contact-post" x1="190" y1="160" x2="190" y2="220"/>
      <line class="contact-bridge" id="bridgeMedium" x1="150" y1="190" x2="190" y2="190"/>
      <text class="lbl" x="130" y="150">Medium</text>
      <path class="wire" d="M190 190 H 270" />
      <path class="wire" d="M480 190 H 910" />
      <path class="flow" id="flowMedium" d="M70 190 H 910" />
      <rect class="timer-box" x="270" y="145" width="210" height="90" rx="8" ry="8"/>
      <text class="timer-text" x="375" y="168" text-anchor="middle" style="font-weight:bold;">MOVE</text>
      <text class="timer-text" x="375" y="192" text-anchor="middle">5000 → T1.PT</text>
      <text class="timer-text" id="moveMediumState" x="375" y="216" text-anchor="middle">Instruction executed</text>

      <!-- ================= RUNG 3 LONG ================= -->
      <text class="lbl" x="80" y="255">Rung 3</text>
      <path class="wire" d="M70 290 H 150" />
      <line class="contact-post" x1="150" y1="260" x2="150" y2="320"/>
      <line class="contact-post" x1="190" y1="260" x2="190" y2="320"/>
      <line class="contact-bridge" id="bridgeLong" x1="150" y1="290" x2="190" y2="290"/>
      <text class="lbl" x="145" y="250">Long</text>
      <path class="wire" d="M190 290 H 270" />
      <path class="wire" d="M480 290 H 910" />
      <path class="flow" id="flowLong" d="M70 290 H 910" />
      <rect class="timer-box" x="270" y="245" width="210" height="90" rx="8" ry="8"/>
      <text class="timer-text" x="375" y="268" text-anchor="middle" style="font-weight:bold;">MOVE</text>
      <text class="timer-text" x="375" y="292" text-anchor="middle">8000 → T1.PT</text>
      <text class="timer-text" id="moveLongState" x="375" y="316" text-anchor="middle">Instruction idle</text>

      <!-- ================= DATA ARROW TO TIMER ================= -->
      <path d="M520 190 C600 190, 650 190, 650 360"
            stroke="#94a3b8" stroke-width="4" fill="none" stroke-dasharray="8 8"/>
      <polygon points="644,355 656,355 650,368" fill="#94a3b8"/>
      <text class="lbl" x="560" y="180">Data written to T1.PT</text>

      <!-- ================= RUNG 4 TIMER ================= -->
      <text class="lbl" x="80" y="355">Rung 4</text>
      <path class="wire" d="M70 390 H 150" />
      <line class="contact-post" x1="150" y1="360" x2="150" y2="420"/>
      <line class="contact-post" x1="190" y1="360" x2="190" y2="420"/>
      <line class="contact-bridge" id="bridgeStart" x1="150" y1="390" x2="190" y2="390"/>
      <text class="lbl" x="145" y="350">Start</text>
      <path class="wire" d="M190 390 H 260" />

      <rect class="timer-box" x="260" y="340" width="270" height="100" rx="8" ry="8"/>
      <text class="timer-text" x="395" y="365" text-anchor="middle" style="font-weight:bold;">TON T1</text>
      <text class="timer-text" id="timerPreText" x="395" y="390" text-anchor="middle">PT: 5000 ms</text>
      <text class="timer-text" id="timerAccText" x="395" y="412" text-anchor="middle">ET: 0 ms</text>
      <text class="timer-text" id="timerDnText" x="395" y="434" text-anchor="middle">DN: OFF</text>

      <!-- Wire to coil -->
      <path class="wire" d="M530 390 H 720" />

      <!-- Output coil -->
      <path class="coil" d="M790 368 A30 22 0 0 0 790 412" />
      <path class="coil" d="M790 412 A30 22 0 0 0 790 368" />
      <circle class="lamp" cx="790" cy="390" r="18" />

      <!-- Final wires -->
      <path class="wire" d="M720 390 H 760" />
      <path class="wire" d="M820 390 H 910" />

      <text class="lbl" x="760" y="430">Q0.0</text>

      <!-- Split flow -->
      <path class="flow" id="flowTimerIn" d="M70 390 H 260" />
      <path class="flow" id="flowTimerOut" d="M530 390 H 910" />
    </svg>
  </div>

  <p style="margin:.75rem 0 0;">
    Each mode rung contains its own <code>MOVE</code> instruction. The active mode writes a different preset value into <code>T1.PT</code>. The timer itself is on a separate rung, and the output only energises when <code>T1.DN</code> becomes true.
  </p>
</div>

<script>
(function(){
  const sim = document.getElementById('moveTonSim');

  const modeShort = document.getElementById('modeShort');
  const modeMedium = document.getElementById('modeMedium');
  const modeLong = document.getElementById('modeLong');
  const startTimer = document.getElementById('startTimer');
  const resetBtn = document.getElementById('resetMoveTon');

  const activeModeText = document.getElementById('activeModeText');
  const presetTextTop = document.getElementById('presetTextTop');
  const accTextTop = document.getElementById('accTextTop');
  const doneTextTop = document.getElementById('doneTextTop');

  const moveShortState = document.getElementById('moveShortState');
  const moveMediumState = document.getElementById('moveMediumState');
  const moveLongState = document.getElementById('moveLongState');

  const timerPreText = document.getElementById('timerPreText');
  const timerAccText = document.getElementById('timerAccText');
  const timerDnText = document.getElementById('timerDnText');

  const bridgeShort = document.getElementById('bridgeShort');
  const bridgeMedium = document.getElementById('bridgeMedium');
  const bridgeLong = document.getElementById('bridgeLong');
  const bridgeStart = document.getElementById('bridgeStart');

  const flowShort = document.getElementById('flowShort');
  const flowMedium = document.getElementById('flowMedium');
  const flowLong = document.getElementById('flowLong');
  const flowTimerIn = document.getElementById('flowTimerIn');
  const flowTimerOut = document.getElementById('flowTimerOut');

  let timerPT = 5000;
  let timerET = 0;
  let timerDN = false;
  let lastTime = null;

  function setExclusiveMode(selected){
    modeShort.checked = selected === 'short';
    modeMedium.checked = selected === 'medium';
    modeLong.checked = selected === 'long';
  }

  function getActiveMode(){
    if(modeShort.checked) return 'short';
    if(modeLong.checked) return 'long';
    return 'medium';
  }

  function executeMoveFromMode(){
    const mode = getActiveMode();

    if(mode === 'short'){
      timerPT = 2000;
    } else if(mode === 'medium'){
      timerPT = 5000;
    } else {
      timerPT = 8000;
    }

    if(timerET > timerPT){
      timerET = timerPT;
    }
    if(timerET < timerPT){
      timerDN = false;
    }
  }

  function formatMs(v){
    return `${Math.round(v)} ms`;
  }

  function render(){
    const mode = getActiveMode();

    bridgeShort.style.opacity = modeShort.checked ? '1' : '0.2';
    bridgeMedium.style.opacity = modeMedium.checked ? '1' : '0.2';
    bridgeLong.style.opacity = modeLong.checked ? '1' : '0.2';
    bridgeStart.style.opacity = startTimer.checked ? '1' : '0.2';

    flowShort.style.opacity = modeShort.checked ? 1 : 0;
    flowMedium.style.opacity = modeMedium.checked ? 1 : 0;
    flowLong.style.opacity = modeLong.checked ? 1 : 0;
    flowTimerIn.style.opacity = startTimer.checked ? 1 : 0;
    flowTimerOut.style.opacity = timerDN ? 1 : 0;

    moveShortState.textContent = mode === 'short' ? 'Instruction executed' : 'Instruction idle';
    moveMediumState.textContent = mode === 'medium' ? 'Instruction executed' : 'Instruction idle';
    moveLongState.textContent = mode === 'long' ? 'Instruction executed' : 'Instruction idle';

    activeModeText.textContent =
      mode === 'short' ? 'Short' :
      mode === 'medium' ? 'Medium' : 'Long';

    presetTextTop.textContent = formatMs(timerPT);
    accTextTop.textContent = formatMs(timerET);
    doneTextTop.textContent = timerDN ? 'ON' : 'OFF';

    timerPreText.textContent = `PT: ${formatMs(timerPT)}`;
    timerAccText.textContent = `ET: ${formatMs(timerET)}`;
    timerDnText.textContent = `DN: ${timerDN ? 'ON' : 'OFF'}`;

    sim.classList.toggle('on', timerDN);
  }

  function resetAll(){
    startTimer.checked = false;
    timerET = 0;
    timerDN = false;
    lastTime = null;
    executeMoveFromMode();
    render();
  }

  modeShort.addEventListener('change', () => {
    if(modeShort.checked){
      setExclusiveMode('short');
      executeMoveFromMode();
      timerET = 0;
      timerDN = false;
      render();
    } else if(!modeMedium.checked && !modeLong.checked){
      setExclusiveMode('medium');
      executeMoveFromMode();
      render();
    }
  });

  modeMedium.addEventListener('change', () => {
    if(modeMedium.checked){
      setExclusiveMode('medium');
      executeMoveFromMode();
      timerET = 0;
      timerDN = false;
      render();
    } else if(!modeShort.checked && !modeLong.checked){
      setExclusiveMode('medium');
      executeMoveFromMode();
      render();
    }
  });

  modeLong.addEventListener('change', () => {
    if(modeLong.checked){
      setExclusiveMode('long');
      executeMoveFromMode();
      timerET = 0;
      timerDN = false;
      render();
    } else if(!modeShort.checked && !modeMedium.checked){
      setExclusiveMode('medium');
      executeMoveFromMode();
      render();
    }
  });

  startTimer.addEventListener('change', () => {
    lastTime = null;
    render();
  });

  resetBtn.addEventListener('click', resetAll);

  function tick(timestamp){
    if(startTimer.checked && !timerDN){
      if(lastTime === null) lastTime = timestamp;
      const dt = timestamp - lastTime;
      lastTime = timestamp;

      timerET += dt;
      if(timerET >= timerPT){
        timerET = timerPT;
        timerDN = true;
      }
    } else {
      lastTime = timestamp;
    }

    render();
    requestAnimationFrame(tick);
  }

  setExclusiveMode('medium');
  executeMoveFromMode();
  render();
  requestAnimationFrame(tick);
})();
</script>
<!-- === /MOVE + TON Multi-Rung Example === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>