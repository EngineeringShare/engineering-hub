---
title: "AC Circuit Analysis"
date: 2025-03-26
tags: ["Sinusoidal", "Power", "Circuit", "RLC", "AC"]
subject: "electronics"
units:
  - unit: "HTQ Unit 4019"
    lo: "LO2 - AC Circuits"
  - unit: "BTEC Unit 56"
    lo: "LO4 - AC Circuits"
  - unit: "T-Level Unit 08"
    lo: "5 - (8.1) AC Circuits"
---

## Intro:

## Lesson materials

Select a tab to switch between the presentation, worked example and formulae reference sheet.

<div class="da-resource-tabs" id="da-resource-tabs">
  <div class="da-tab-list" role="tablist" aria-label="Dimensional analysis lesson materials">
    <button type="button" class="da-tab" id="da-tab-presentation" role="tab" aria-controls="da-panel-presentation" aria-selected="true" tabindex="0">Presentation</button>
    <button type="button" class="da-tab" id="da-tab-example" role="tab" aria-controls="da-panel-example" aria-selected="false" tabindex="-1">Worked Example</button>
  </div>

  <section class="da-panel" id="da-panel-presentation" role="tabpanel" aria-labelledby="da-tab-presentation" tabindex="0">
    <p>Follow along with the lesson slides.</p>
    <!-- Replace the HTML URL if you export the presentation under a different folder name. -->
    <div class="da-pdf-shell">
      <iframe id="da-html-presentation" title="AC Circuit Analysis" src="https://engineeringshare.github.io/engineering-resources/presentations/AC-Circuit-Analysis/index.html" loading="lazy" allow="fullscreen" allowfullscreen></iframe>
    </div>
  </section>

  <section class="da-panel" id="da-panel-example" role="tabpanel" aria-labelledby="da-tab-example" tabindex="0" hidden>
    <p>A worked example applying AC circuit analysis techniques.</p>
    <div class="da-pdf-shell">
      <iframe id="da-pdf-example" title="Worked AC circuit analysis example PDF" src="https://engineeringshare.github.io/engineering-resources/worked_examples/Example AC Circuit Analysis.pdf" loading="lazy" allow="fullscreen" allowfullscreen></iframe>
    </div>
    <div class="da-resource-actions">
      <button type="button" class="da-fullscreen" data-frame="da-pdf-example" aria-label="View worked example in fullscreen">⛶ Fullscreen</button>
    </div>
    <p class="da-pdf-link"><a href="https://engineeringshare.github.io/engineering-resources/worked_examples/Example AC Circuit Analysis.pdf" target="_blank" rel="noopener noreferrer">Open worked example PDF in a new tab ↗</a></p>
  </section>

</div>

## Example Solved Problem:

<div id="example-container" style="position: relative; width: 100%; height: 0; padding-top: 75%;">
    <iframe 
        id="example-frame"
        src="https://engineeringshare.github.io/engineering-resources/worked_examples/Example AC Circuit Analysis.pdf" 
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen>
    </iframe>

    <!-- Fullscreen button -->
    <button 
        onclick="openFullscreen()" 
        style="position:absolute; top:10px; right:10px; z-index:10; padding:6px 12px; border:none; background:#243040; color:white; border-radius:6px; cursor:pointer;">
        ⛶ Fullscreen
    </button>
</div>

<script>
    function openFullscreen() {
        const elem = document.getElementById("example-frame");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // Safari
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE11
            elem.msRequestFullscreen();
        }
    }
</script>

## Other Materials:
* [Youtube: AC Analysis: Series/Parallel RLC Circuit](https://youtu.be/s3Daf4GC_u4?si=kmnGRi-z6lBIl9oi)
* [Youtube: Series RLC Circuits, Resonant Frequency, Inductive Reactance & Capacitive Reactance - AC Circuits](https://www.youtube.com/watch?v=2GvqQvohP2k)

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
