---
title: "Limit Switch"
permalink: /Sensors-and-Actuators/Limit-Switch/
---

<a href="https://engineeringshare.github.io/engineering-hub/2026/01/21/Sensors-and-Actuators.html">🔙 Back to Sensors and Actuators</a>

<div style="text-align: center;">
    <img src="https://EngineeringShare.github.io/engineering-hub/images/Sensors-Actuators-Icons/Limit_Switch.png" alt="Limit Switch" style="max-width: 200px; height: auto;">
</div>

<h2>Limit Switch Overview</h2>
<p> 
    Limit switches are electromechanical devices used to detect the presence or absence of an object, or to monitor the position of a moving part. They consist of a mechanical actuator (such as a lever, plunger, or roller) that is physically triggered by the movement of an object. When the actuator is engaged, it changes the state of an electrical contact, which can be used to control machinery, signal an alarm, or provide feedback to a control system.
</p>

<h3>How it Works</h3>
<p>
    When an object presses against the actuator of the limit switch it either completes or breaks an electrical circuit. This change in the circuit can be used to stop a machine, start a process, or trigger an alarm. For example, in a conveyor system, a limit switch can be placed at the end of the conveyor to detect when an item has reached the end and stop the conveyor belt to prevent items from falling off.
</p>

<h3>Breakdown Table</h3>

<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Name</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Limit Switch</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Sensor/Actuator</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Sensor</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Description</th>
        <td style="border: 1px solid #ddd; padding: 8px;">A device that detects the presence or position of an object by physical contact, changing the state of an electrical circuit.</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Signal/Power Type</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Electrical (ON/OFF)</td>
    </tr>
    <tr>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;">Common Applications</th>
        <td style="border: 1px solid #ddd; padding: 8px;">Industrial machinery, conveyor systems, safety interlocks, robotics.</td>
    </tr>
</table>

<h3>Limit Switch – Interactive Simulator</h3>

<p>
This simulator shows how a limit switch responds when its <strong>mechanical actuator is pressed</strong>,
and how that action affects the <strong>electrical contact state</strong>.
You can switch between <strong>Normally Open (NO)</strong> and <strong>Normally Closed (NC)</strong> behaviour.
</p>

<ul>
    <li><strong>NO (Normally Open):</strong> Contact is open until the actuator is pressed</li>
    <li><strong>NC (Normally Closed):</strong> Contact is closed until the actuator is pressed</li>
</ul>

<div id="limitSwitchSim" style="max-width: 720px; margin: 1rem auto; padding: 1rem; border: 1px solid #ddd; border-radius: 10px; background: #fafafa;">

    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">

        <label style="font-weight: 600;">
            <input type="checkbox" id="lsPressed">
            Actuator pressed
        </label>

        <label style="font-weight: 600;">
            Contact type:
            <select id="lsType">
                <option value="NO">NO</option>
                <option value="NC">NC</option>
            </select>
        </label>

        <div>
            Input state:
            <strong id="lsState">OFF</strong>
        </div>
    </div>

    <svg viewBox="0 0 720 160" style="width: 100%; margin-top: 1rem;">
        <!-- Rails -->
        <line x1="40" y1="30" x2="40" y2="130" stroke="#333" stroke-width="6"/>
        <line x1="680" y1="30" x2="680" y2="130" stroke="#333" stroke-width="6"/>

        <!-- Wiring -->
        <line id="wireLeft" x1="40" y1="80" x2="260" y2="80" stroke="#aaa" stroke-width="4"/>
        <line id="wireRight" x1="360" y1="80" x2="680" y2="80" stroke="#aaa" stroke-width="4"/>

        <!-- Contact -->
        <line x1="260" y1="55" x2="260" y2="105" stroke="#aaa" stroke-width="5"/>
        <line x1="360" y1="55" x2="360" y2="105" stroke="#aaa" stroke-width="5"/>
        <line id="contactBridge" x1="260" y1="80" x2="360" y2="80" stroke="#16a34a" stroke-width="5" opacity="0"/>

        <!-- Labels -->
        <text x="230" y="45" font-size="12" fill="#555">Limit switch</text>
        <text x="520" y="45" font-size="12" fill="#555">PLC input</text>
    </svg>

    <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #555;">
        When the contact closes, the input becomes <strong>ON</strong>.
        When it opens, the input becomes <strong>OFF</strong>.
    </p>
</div>

<script>
(function () {
    const pressed = document.getElementById("lsPressed");
    const type = document.getElementById("lsType");
    const state = document.getElementById("lsState");
    const bridge = document.getElementById("contactBridge");

    function update() {
        const isPressed = pressed.checked;
        const mode = type.value;

        const contactClosed =
            (mode === "NO" && isPressed) ||
            (mode === "NC" && !isPressed);

        bridge.style.opacity = contactClosed ? 1 : 0;
        state.textContent = contactClosed ? "ON" : "OFF";
    }

    pressed.addEventListener("change", update);
    type.addEventListener("change", update);
    update();
})();
</script>


<a href="https://engineeringshare.github.io/engineering-hub/2026/01/21/Sensors-and-Actuators.html">🔙 Back to Sensors and Actuators</a>
