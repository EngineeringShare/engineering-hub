---
title: "Vectors and Coordinates #4"
date: 2025-09-12
tags: ["Vectors", "Coordinates", "Scalars", "2D", "Addition", "Subtraction", "Magnitude", "Direction", "Cartesian", "Polar", "imaginary", "complex", "real", "i", "j", "k", "3D", "Normalisation", "Dot Product", "Angle between Vectors", "Cross Product"]
subject: "Science"
units:
  - unit: "HTQ Unit 4002"
    lo: "LO3 - Sinusoidals and Vectors"
  - unit: "T-Level Unit 05"
    lo: "(5.2) Vectors and Coordinates"
---

## Intro:

This is the final lesson in the series on vectors and coordinates, focusing on advanced topics such as the angle between vectors and the cross product. We will explore how to calculate the angle between two vectors using the dot product and how to determine the cross product of two vectors in three-dimensional space. By the end of this lesson, you will have a comprehensive understanding of vector operations and their applications in physics and engineering.

## Lesson materials

Select a tab to switch between the presentation, worked example and formulae reference sheet.

<div class="da-resource-tabs" id="da-resource-tabs">
  <div class="da-tab-list" role="tablist" aria-label="Dimensional analysis lesson materials">
    <button type="button" class="da-tab" id="da-tab-presentation" role="tab" aria-controls="da-panel-presentation" aria-selected="true" tabindex="0">Presentation</button>
    <button type="button" class="da-tab" id="da-tab-example" role="tab" aria-controls="da-panel-example" aria-selected="false" tabindex="-1">Worked Example</button>
  </div>

  <section class="da-panel" id="da-panel-presentation" role="tabpanel" aria-labelledby="da-tab-presentation" tabindex="0">
    <p>Follow along with the lesson slides.</p>
    <div class="da-pdf-shell">
      <iframe id="da-pdf-presentation" title="Vectors and Coordinates presentation PDF" src="https://engineeringshare.github.io/engineering-resources/presentations/Vectors%20and%20Coordinates%204.pdf" loading="lazy" allow="fullscreen" allowfullscreen></iframe>
      <button type="button" class="da-fullscreen" data-frame="da-pdf-presentation" aria-label="View presentation in fullscreen">⛶ Fullscreen</button>
    </div>
    <p class="da-pdf-link"><a href="https://engineeringshare.github.io/engineering-resources/presentations/Vectors%20and%20Coordinates%204.pdf" target="_blank" rel="noopener noreferrer">Open presentation PDF in a new tab ↗</a></p>
  </section>

  <section class="da-panel" id="da-panel-example" role="tabpanel" aria-labelledby="da-tab-example" tabindex="0" hidden>
    <p>A worked example applying cross product concepts to a vector problem.</p>
    <div class="da-pdf-shell">
      <iframe id="da-pdf-example" title="Worked dimensional analysis example PDF" src="https://engineeringshare.github.io/engineering-resources/worked_examples/Example%20Cross%20Product.pdf" loading="lazy" allow="fullscreen" allowfullscreen></iframe>
      <button type="button" class="da-fullscreen" data-frame="da-pdf-example" aria-label="View worked example in fullscreen">⛶ Fullscreen</button>
    </div>
    <p class="da-pdf-link"><a href="https://engineeringshare.github.io/engineering-resources/worked_examples/Example%20Cross%20Product.pdf" target="_blank" rel="noopener noreferrer">Open worked example PDF in a new tab ↗</a></p>
  </section>
</div>

<style>
  /* Scoped to this post so the site's existing navigation and styles are unaffected. */
  .da-resource-tabs {
    margin: 1.25rem 0 1.75rem;
    background: #fff;
    border: 1px solid #d9e1ea;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 3px 14px rgba(20, 35, 50, 0.06);
  }

  .da-resource-tabs .da-tab-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.35rem;
    padding: 0.45rem;
    background: #edf2f7;
    border-bottom: 1px solid #d9e1ea;
  }

  .da-resource-tabs .da-tab {
    appearance: none;
    width: 100%;
    padding: 0.8rem 0.55rem;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: #26384b;
    font: inherit;
    font-weight: 600;
    line-height: 1.3;
    cursor: pointer;
  }

  .da-resource-tabs .da-tab:hover:not([aria-selected="true"]) {
    background: #dce6f0;
  }

  .da-resource-tabs .da-tab[aria-selected="true"] {
    background: #243040;
    color: #fff;
    box-shadow: 0 2px 6px rgba(20, 35, 50, 0.15);
  }

  .da-resource-tabs .da-tab:focus-visible,
  .da-resource-tabs .da-fullscreen:focus-visible,
  .da-resource-tabs .da-pdf-link a:focus-visible {
    outline: 3px solid #2b7fc1;
    outline-offset: 2px;
  }

  .da-resource-tabs .da-panel {
    padding: 1rem 1.15rem 0.8rem;
  }

  .da-resource-tabs .da-panel[hidden] {
    display: none !important;
  }

  .da-resource-tabs .da-panel > p:first-child {
    margin-top: 0;
  }

  .da-resource-tabs .da-pdf-shell {
    position: relative;
    height: clamp(420px, 70vh, 780px);
    border: 1px solid #d9e1ea;
    border-radius: 8px;
    overflow: hidden;
    background: #e9eef3;
  }

  .da-resource-tabs .da-pdf-shell iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .da-resource-tabs .da-fullscreen {
    position: absolute;
    top: 0.65rem;
    right: 0.65rem;
    z-index: 1;
    padding: 0.45rem 0.7rem;
    border: 0;
    border-radius: 6px;
    background: #243040;
    color: #fff;
    font: inherit;
    font-size: 0.85rem;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
  }

  .da-resource-tabs .da-fullscreen:hover {
    background: #394e65;
  }

  .da-resource-tabs .da-pdf-link {
    margin: 0.7rem 0 0;
    font-size: 0.95rem;
  }

  @media (max-width: 620px) {
    .da-resource-tabs .da-tab-list {
      display: flex;
      overflow-x: auto;
    }

    .da-resource-tabs .da-tab {
      flex: 1 0 auto;
      width: auto;
      padding: 0.7rem 0.8rem;
      font-size: 0.88rem;
      white-space: nowrap;
    }

    .da-resource-tabs .da-panel {
      padding: 0.75rem;
    }

    .da-resource-tabs .da-pdf-shell {
      height: 65vh;
      min-height: 390px;
    }
  }
</style>

<script>
  (function () {
    const root = document.getElementById('da-resource-tabs');
    if (!root) return;

    const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
    const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));

    function activateTab(activeTab, moveFocus) {
      tabs.forEach((tab, index) => {
        const selected = tab === activeTab;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        panels[index].hidden = !selected;
      });
      if (moveFocus) activeTab.focus();
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activateTab(tab, false));
      tab.addEventListener('keydown', (event) => {
        let nextIndex;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = tabs.length - 1;
        else return;

        event.preventDefault();
        activateTab(tabs[nextIndex], true);
      });
    });

    root.querySelectorAll('.da-fullscreen').forEach(button => {
      button.addEventListener('click', () => {
        const frame = document.getElementById(button.dataset.frame);
        if (!frame) return;
        const request = frame.requestFullscreen || frame.webkitRequestFullscreen;
        if (request) {
          try {
            const result = request.call(frame);
            if (result && typeof result.catch === 'function') {
              result.catch(() => { window.open(frame.src, '_blank', 'noopener,noreferrer'); });
            }
          } catch (_) {
            window.open(frame.src, '_blank', 'noopener,noreferrer');
          }
        } else {
          window.open(frame.src, '_blank', 'noopener,noreferrer');
        }
      });
    });
  })();
</script>

## Interactive Tools:

## Other Materials:

## ---

<a href="https://engineeringshare.github.io/engineering-hub">🏠 Home</a>
