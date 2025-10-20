---
title: "PLC Programming - Ladder Logic Symbols and Functions"
date: 2025-10-20
tags: ["PLC", "Programming", "Rungs", "NO", "NC", "Timers", "Counters"]
subject: "PLCs"
units: ["T-Level Unit 09", "BTEC Unit 19", "HTQ Unit 4015"]
---

<head>
  <style>
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .card-link {
      text-decoration: none;
    }

    .card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      height: 100%;
      text-align: center;
      min-height: 250px; /* ensures even card height */
    }

    .card:hover {
      transform: scale(1.03);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .card-image {
      width: 100%;
      height: 120px; /* fixed height for consistency */
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-bottom: 0.75rem;
    }

    .card img {
      max-width: 80%;
      max-height: 100%;
      object-fit: contain;
      display: block;
    }

    .card h3 {
      color: #1f2937;
      margin: 0.5rem 0 0;
      font-size: 1rem;
      line-height: 1.3;
    }

    h1 {
      font-size: 2rem;
      margin-top: 2rem;
    }

    p {
      font-size: 1.1rem;
    }
  </style>
</head>

# 🪜 PLC Programming - Ladder Logic Symbols and Functions

---

<div class="projects">

  <a class="card-link" href="/PLC-Ladder-Logic/NO-Contact/">
    <div class="card">
      <div class="card-image">
        <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/NO_Contact.png" alt="Normally Open Contact Symbol">
      </div>
      <h3>Normally Open Contact (NO)</h3>
    </div>
  </a>

  <a class="card-link" href="#">
    <div class="card">
      <div class="card-image">
        <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/NC_Contact.png" alt="Normally Closed Contact Symbol">
      </div>
      <h3>Normally Closed Contact (NC)</h3>
    </div>
  </a>

  <a class="card-link" href="#">
    <div class="card">
      <div class="card-image">
        <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/Output.png" alt="Output Coil Symbol">
      </div>
      <h3>Output Coil</h3>
    </div>
  </a>

  <a class="card-link" href="#">
    <div class="card">
      <div class="card-image">
        <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/Set_Output.png" alt="Set Output Symbol">
      </div>
      <h3>Set Output (S)</h3>
    </div>
  </a>

  <a class="card-link" href="#">
    <div class="card">
      <div class="card-image">
        <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/Reset_Output.png" alt="Reset Output Symbol">
      </div>
      <h3>Reset Output (R)</h3>
    </div>
  </a>

  <a class="card-link" href="#">
    <div class="card">
      <div class="card-image">
        <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/TON_Timer.png" alt="Timer Symbol">
      </div>
      <h3>Timer (TON / TOF)</h3>
    </div>
  </a>

  <a class="card-link" href="#">
    <div class="card">
      <div class="card-image">
        <img src="https://EngineeringShare.github.io/engineering-hub/images/PLC-Icons/CTU_Counter.png" alt="Counter Symbol">
      </div>
      <h3>Counter (CTU / CTD)</h3>
    </div>
  </a>

</div>

---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
