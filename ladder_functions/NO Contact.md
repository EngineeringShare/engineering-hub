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

<p>
    A NO contact can be used to read physical input devices, such as push buttons or sensors. For this we can use an address assigned to that input within the PLC (e.g., I0.0 for the first digital input). When the physical device is activated, the NO contact in the ladder logic will close, allowing current to flow and enabling subsequent logic operations.
</p>

<p>
    Each input block is 8 bits wide, meaning it can read the state of 8 individual digital inputs. Each bit within the byte corresponds to a specific input channel on the PLC. For example, bit 0 (I0.0) represents the first input, bit 1 (I0.1) represents the second input, and so on up to bit 7 (I0.7) for the eighth input. This allows for efficient reading and processing of multiple digital inputs using a single input address in the ladder logic program. After (I0.7), the next input address would be (I1.0), representing the ninth input channel on the PLC.
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

<!-- === NO Contact — single rung with coil lamp === -->
<style>
  .ladder-rung{--rail:#0f172a;--wire:#cbd5e1;--text:#0b1324;--muted:#64748b;--active:#16a34a;--coil:#2563eb;
    max-width:760px;margin:1rem auto;border:1px solid #e5e7eb;border-radius:14px;padding:1rem;background:#fff;
    box-shadow:0 6px 20px rgba(2,6,23,.06);font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
  .ladder-rung .top{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}
  .kv{color:var(--muted)} .kv b{color:var(--text)}
  .switch{display:inline-flex;align-items:center;gap:.6rem;font-weight:600;color:var(--text)}
  .switch input{appearance:none;width:48px;height:28px;border-radius:999px;background:#e2e8f0;position:relative;cursor:pointer;transition:background .18s}
  .switch input:after{content:"";position:absolute;left:3px;top:3px;width:22px;height:22px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:left .18s}
  .switch input:checked{background:#bbf7d0}.switch input:checked:after{left:23px}
  .panel{background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:.5rem}
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
</style>

<div class="ladder-rung" id="noRung">
  <div class="top">
    <label class="switch"><input id="noInput" type="checkbox"> Input</label>
    <div class="kv">Contact: <b id="cState">Open</b> &nbsp; | &nbsp; Output: <b id="oState">OFF</b></div>
  </div>

  <div class="panel">
    <svg viewBox="0 0 820 200" role="img" aria-label="Single rung: left rail, NO contact, coil, right rail">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <!-- Rails -->
      <line class="rail" x1="70"  y1="20" x2="70"  y2="180"/>
      <line class="rail" x1="750" y1="20" x2="750" y2="180"/>
      <text class="lbl" x="58"  y="14">L (Power)</text>
      <text class="lbl" x="742" y="14">N</text>

      <!-- Horizontal rung -->
      <path class="wire" d="M70 100 H 240" />

      <!-- NO contact -->
      <line class="contact-post" x1="260" y1="80" x2="260" y2="120"/>
      <line class="contact-post" x1="320" y1="80" x2="320" y2="120"/>
      <path class="wire" d="M240 100 H 260" />
      <path class="wire" d="M320 100 H 520" />
      <line class="contact-bridge" x1="260" y1="100" x2="320" y2="100" />
      <text class="lbl" x="260" y="70">NO Contact</text>

      <!-- Coil -->
      <ellipse class="coil" cx="600" cy="100" rx="26" ry="40"/>
      <ellipse class="coil" cx="634" cy="100" rx="26" ry="40"/>
      <!-- Glow lamp -->
      <circle class="lamp" cx="617" cy="100" r="20" />
      <!-- terminals -->
      <path class="wire" d="M520 100 H 574" />
      <path class="wire" d="M660 100 H 750" />
      <text class="lbl" x="592" y="160">Output Coil (Q)</text>

      <!-- Animated current flow -->
      <path class="flow" d="M70 100 H 750" />
    </svg>
  </div>
</div>

<script>
  (function(){
    const wrap=document.getElementById('noRung');
    const sw=document.getElementById('noInput');
    const c=document.getElementById('cState');
    const o=document.getElementById('oState');
    function render(){
      const on=sw.checked;
      wrap.classList.toggle('on',on);
      c.textContent=on?'Closed':'Open';
      o.textContent=on?'ON':'OFF';
    }
    sw.addEventListener('change',render);
    render();
  })();
</script>
<!-- === /NO Contact — single rung with lamp === -->

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
