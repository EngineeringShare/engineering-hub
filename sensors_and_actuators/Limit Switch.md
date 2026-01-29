---
title: "Limit Switch"
permalink: /Sensors-and-Actuators/Limit-Switch/
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

<h2>Comparator Functions Overview</h2>
<p> 
    Comparators are specialized functions in PLC ladder logic that compare two values and determine their relationship. They are essential for decision-making processes in automation systems, allowing the PLC to respond based on specific conditions.
</p>

<p>
    The most common comparator functions include:
</p>

<ul>
    <li><strong>Equal To (==):</strong> Checks if two values are equal.</li>
    <li><strong>Not Equal To (!=):</strong> Checks if two values are not equal.</li>
    <li><strong>Greater Than (&gt;):</strong> Checks if the first value is greater than the second.</li>
    <li><strong>Less Than (&lt;):</strong> Checks if the first value is less than the second.</li>
</ul>

<h3>Using a Comparator</h3>

<p>
    Comparators are used in ladder logic to evaluate conditions based on the values of variables, inputs, or constants. When the comparison condition is met, the comparator outputs a true signal, allowing the logic flow to continue or activate subsequent functions.
</p>

<p>
    Each comparator function typically takes two input values and produces a single output. The output is true (energized) if the comparison condition is satisfied and false (de-energized) otherwise. This output can then be used to control other elements in the ladder logic, such as coils or other contacts.
</p>

<p>
    The most common applications of comparators are checking sensor values and making integer sequential programs.
</p>

<h3>Behavior Table</h3>
The below table summarizes the behavior of an Output Coil:

<table>
    <tr>
        <th>Comparator Type</th>
        <th>Input A</th>
        <th>Input B</th>
        <th>Output State</th>
    </tr>
    <tr>
        <td>Equal To (==)</td>
        <td>5</td>
        <td>5</td>
        <td>True (Signal Flows)</td>
    </tr>
    <tr>
        <td>Not Equal To (!=)</td>
        <td>5</td>
        <td>3</td>
        <td>True (Signal Flows)</td>
    </tr>
    <tr>
        <td>Greater Than (&gt;)</td>
        <td>7</td>
        <td>4</td>
        <td>True (Signal Flows)</td>
    </tr>
    <tr>
        <td>Less Than (&lt;)</td>
        <td>2</td>
        <td>6</td>
        <td>True (Signal Flows)</td>
    </tr>
</table>

<!-- === Comparator Example (A ? B -> Q0.4) === -->
<div class="ladder-rung" id="cmpRung">
  <div class="top">
    <div class="switch-row">
      <label>
        A:
        <input id="cmpA" type="number" value="10" style="width:4rem;">
      </label>
      <label>
        B:
        <input id="cmpB" type="number" value="10" style="width:4rem;">
      </label>
      <label>
        Operator:
        <select id="cmpOp">
          <option value=">">&gt;</option>
          <option value="<">&lt;</option>
          <option value=">=">&ge;</option>
          <option value="<=">&le;</option>
          <option value="==">==</option>
          <option value="!=">!=</option>
        </select>
      </label>
    </div>
    <div class="kv">
      Condition: <b id="cmpExpr">10 == 10</b> &nbsp;|&nbsp;
      Result Q: <b id="cmpQState">ON</b>
    </div>
  </div>

  <div class="panel">
    <svg viewBox="0 0 820 160"
         role="img"
         aria-label="Comparator block comparing A and B to drive an output coil">

      <!-- Rails -->
      <line class="rail" x1="70"  y1="20" x2="70"  y2="140"/>
      <line class="rail" x1="750" y1="20" x2="750" y2="140"/>
      <text class="lbl" x="58"  y="14">L (Power)</text>
      <text class="lbl" x="742" y="14">N</text>

      <!-- Main rung wire -->
      <path class="wire" d="M70 80 H 260" />

      <!-- Comparator block -->
      <rect class="timer-box" x="260" y="40" width="200" height="80" rx="8" ry="8" />
      <!-- Internal Siemens-style layout -->
      <text class="timer-text" id="cmpALabel"  x="360" y="58" text-anchor="middle">A=10</text>
      <text class="timer-text" id="cmpOpLabel" x="360" y="78" text-anchor="middle">==</text>
      <text class="timer-text" id="cmpBLabel"  x="360" y="98" text-anchor="middle">B=10</text>

      <!-- Output wire from CMP Q -->
      <path class="wire" d="M460 80 H 520" />

      <!-- Output Coil Q0.4, bracket style ----( )---- -->
      <!-- Left bracket arc -->
      <path class="coil" d="M600 58 A30 22 0 0 0 600 102" />
      <!-- Right bracket arc -->
      <path class="coil" d="M600 102 A30 22 0 0 0 600 58" />

      <circle class="lamp" cx="600" cy="80" r="18" />

      <!-- Wires to coil -->
      <path class="wire" d="M520 80 H 570" />
      <path class="wire" d="M630 80 H 750" />

      <text class="lbl" x="560" y="130">Output Coil (Q0.4)</text>

      <!-- Flow up to the comparator (always powered) -->
      <path class="flow" id="cmpFlowIn"  d="M70 80 H 260" />
      <!-- Flow through CMP to coil (only when true) -->
      <path class="flow" id="cmpFlowOut" d="M460 80 H 750" />
    </svg>
  </div>
</div>

<script>
(function(){
  const wrap    = document.getElementById('cmpRung');
  const aInput  = document.getElementById('cmpA');
  const bInput  = document.getElementById('cmpB');
  const opSel   = document.getElementById('cmpOp');

  const exprEl  = document.getElementById('cmpExpr');
  const qEl     = document.getElementById('cmpQState');
  const opLabel = document.getElementById('cmpOpLabel');
  const aLabel  = document.getElementById('cmpALabel');
  const bLabel  = document.getElementById('cmpBLabel');

  const flowIn  = document.getElementById('cmpFlowIn');
  const flowOut = document.getElementById('cmpFlowOut');

  function evalOp(a, b, op){
    switch(op){
      case '>':  return a >  b;
      case '<':  return a <  b;
      case '>=': return a >= b;
      case '<=': return a <= b;
      case '==': return a === b;
      case '!=': return a !== b;
      default:   return false;
    }
  }

  function render(){
    const a  = parseFloat(aInput.value || '0');
    const b  = parseFloat(bInput.value || '0');
    const op = opSel.value;

    const result = evalOp(a, b, op);

    // Texts
    exprEl.textContent  = `${a} ${op} ${b}`;
    qEl.textContent     = result ? 'ON' : 'OFF';
    opLabel.textContent = op;
    aLabel.textContent  = `A=${a}`;
    bLabel.textContent  = `B=${b}`;

    // Flows:
    //  - up to CMP always green
    //  - out of CMP only when true
    flowIn.style.opacity  = 1;
    flowOut.style.opacity = result ? 1 : 0;

    // Coil highlighting driven by result
    wrap.classList.toggle('on', result);
  }

  aInput.addEventListener('input', render);
  bInput.addEventListener('input', render);
  opSel.addEventListener('change', render);

  // Initialise (default A=10, B=10, ==)
  opSel.value = '==';
  render();
})();
</script>
<!-- === /Comparator Example === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
