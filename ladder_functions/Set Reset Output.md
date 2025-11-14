---
title: "Set & Reset Output (S)/(R)"
permalink: /PLC-Ladder-Logic/Set-Reset-Output/
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

<h2> Set & Reset Output (S)/(R)</h2>
<p> 
    The Set & Reset Output functions, commonly referred to as S/R or Latch/Unlatch, are essential components in PLC Ladder Logic Programming. These functions allow for the control of output states based on specific input conditions. The Set function (S) is used to turn an output on (energize) when the associated input condition is true, while the Reset function (R) is used to turn the output off (de-energize) when its input condition is true. This latching mechanism enables outputs to maintain their state even after the input conditions change, making them useful for applications such as motor starters, alarms, and other control systems where maintaining an output state is necessary.
</p>

<p>
    When the Set input condition is met, the output coil is energized and remains on until the Reset input condition is met, which de-energizes the coil. This allows for more complex control strategies within the ladder logic program.
</p>

<p>
    Set and Reset are also essential for sequential control processes, where certain operations need to be maintained until a specific condition is met to stop them.
</p>

<h3>Using Set & Reset Outputs</h3>
<p>
    To use Set and Reset outputs in ladder logic, you typically have two separate rungs: one for the Set function and another for the Reset function. Each rung will have its own input conditions that determine when the output coil is set or reset. For example, a push button can be used to set an output, while another button can be used to reset it. Once the output is set, it will remain energized until the reset condition is activated, regardless of the state of the set input.
</p>

<h3> 

<h3>Behavior Table</h3>
The below table summarizes the behavior of Set & Reset outputs:

<table>
    <tr>
        <th>Set Condition</th>
        <th>Reset Condition</th>
        <th>Output State</th>
    </tr>
    <tr>
        <td>True (Activated)</td>
        <td>False (Not Activated)</td>
        <td>Energized (ON)</td>
    </tr>
    <tr>
        <td>False (Not Activated)</td>
        <td>True (Activated)</td>
        <td>De-energized (OFF)</td>
    </tr>
    <tr>
        <td>False (Not Activated)</td>
        <td>False (Not Activated)</td>
        <td>Maintains Previous State</td>
    </tr>

<a href="https://engineeringshare.github.io/engineering-hub/2025/10/20/PLC-Ladder-Logic-Functions.html">🔙 Back to Ladder Logic Functions</a>
