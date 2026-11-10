# Engineering Share Presentation Converter — v1 prototype

A static browser-based tool to convert a PowerPoint `.pptx` and its matching exported `.pdf` into an HTML slide viewer.

## Deploy

1. Extract `EngineeringShare_Converter.zip`.
2. Upload the **entire** `EngineeringShare_Converter` directory to your GitHub Pages repository (e.g. `tools/presentation-converter/`).
3. Open its `index.html` through your GitHub Pages HTTPS address. Do not open the file directly from your computer; the JavaScript module and viewer template need to be served over HTTP(S).
4. Export a PowerPoint to PDF using Adobe, retaining all slides in the same order.
5. Choose both files in the converter, inspect the slide previews, then click **Convert & download ZIP**.
6. Extract the generated ZIP and upload its inner folder to the `presentations/` directory of your Engineering Share resources repository. The converter displays a ready-made iframe snippet.

## Student viewer

- Continuous scroll by default
- Optional presentation mode with keyboard and button navigation
- Original animated GIFs placed over PDF slide backgrounds
- Reading overlays: none, yellow, blue, green, pink, peach; adjustable strength
- Fullscreen and original PDF download
- Works for presentations without GIFs

## Implementation

- `index.html` — converter interface
- `converter.js` — reads PPTX ZIP/XML, extracts embedded GIFs, reads and rasterises PDF pages, generates ZIP
- `viewer-template.html` — standalone student viewer placed in each generated ZIP
- `vendor/jszip.min.js` — local JSZip library
- PDF.js v4.10.38 is loaded from cdnjs (the converter requires an internet connection and permission to access cdnjs.cloudflare.com). Generated presentations are self-contained and do not require that CDN.

## Limitations and important checks

- The PPTX and PDF must have the same number and order of slides.
- The PDF controls the visual appearance of slides. Export from Adobe for best consistency with PowerPoint.
- GIFs are extracted from PowerPoint picture elements. Some uncommon layouts (grouped pictures, complex masks, special effects, embedded videos, non-GIF animations, SmartArt, 3D transformations) may not align or animate correctly.
- If a GIF appears behind a foreground object in PowerPoint, the overlay may cover that object in the HTML version. Preview those slides.
- PowerPoint click animations and transitions are not converted, by design.
- The tool does not compress large GIFs. A deck with large animations can generate a large ZIP and require significant browser memory. Try the 1280 px resolution if needed.
- Generated slide backgrounds are images rather than selectable text; original PDF is included.
- For privacy, files are processed in the browser. The code makes no upload requests, but PDF.js is fetched from a third-party CDN.

## Tests performed

Static file inspection and matching-PDF slide-count checks were completed for five supplied PowerPoints. Results are in `test-results.json`. These are **not** a full interactive browser conversion test; verify GIF placement and export on your college browser before production rollout.
