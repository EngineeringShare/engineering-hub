# Ladder Logic Engineer — Factory Lab V4.3

## Deploy
Copy the whole `factory-lab/` directory into a static website such as Engineering Share (GitHub Pages). Link to `factory-lab/` or `factory-lab/index.html`. Keep `assets/` and `levels/` next to the HTML. No build step, CDN, backend or dependencies are required.

For local testing, open a terminal in the directory containing `factory-lab` and run `python -m http.server 8000`; visit `http://localhost:8000/factory-lab/`. On Windows, use `py -m http.server 8000` if needed. Double-clicking the HTML may fail because browsers typically restrict file:// JSON requests.

## File structure
- `index.html`: menu and game layout.
- `assets/factory-lab.css`: themes, responsive layout, ladder styling and animation.
- `assets/factory-lab.js`: PLC scan engine, editor, commissioning tests, graphics, storage and JSON loader.
- `levels/index.json`: ordered groups and mission IDs.
- `levels/<id>.json`: mission content, tag map, optional faulty starter program, hints and test cases. ID should match the filename.
- `levels/sandbox.json`: open lab configuration.

## Add a new mission
1. Copy a similar level JSON, give it a new filename and unique `id`.
2. Edit the title, brief, requirements, objective, tags, hints and tests.
3. Insert its ID into a group's `levels` array in `levels/index.json`. The menu and sequential unlocking are generated from that array. Never change a published ID unless you intentionally want to break its saved-program association.
4. Reload via HTTP(S), build a reference solution and run every commissioning case. Test initial conditions, release/restart, invalid inputs and timing boundaries as appropriate.

### Tags
`ins`, `outs`, `mem` are lists of tag objects. Example Boolean input `{ "a": "%I0.0", "n": "Start_PB", "d": false }`; INT memory `{ "a": "%MW10", "n": "Sequence_Step", "kind": "INT", "d": 0 }`; INT input `{ "a": "%IW2", "n": "Level_Percent", "kind": "INT", "d": 0, "min": 0, "max": 100 }`. Use non-overlapping addresses; the simulator is tag-based and does not model overlapping bit/word memory. BOOL is default. INT is signed 16-bit. Inputs are read-only to the student's program.

### Commissioning scenarios
Each test begins from a reset virtual CPU. Each checkpoint changes only the specified inputs (`in`), executes `ms` milliseconds in 100 ms scans, then compares every listed output/memory tag against `expect`. Omitted input values persist until the next checkpoint. `expect` must use numbers for INTs and true/false or 0/1 for BOOLs. Use multiples of 100 for ms. Example:

```json
{"name":"Basic switching","steps":[
  {"label":"Initially stopped","in":{},"ms":100,"expect":{"%Q0.0":false}},
  {"label":"Request on","in":{"%I0.0":true},"ms":100,"expect":{"%Q0.0":true}}
]}
```
These are behavioural checkpoint tests, not a formal proof of equivalent PLC behaviour. They accept alternate solutions that pass all listed cases. They are intentionally scripted independently of live plant feedback, to remain deterministic.

### Sequence display and graphics
For a sequential mission, provide `sequence` as an array of `{ "value": 10, "label": "Feed" }` entries. Optional `sequenceTag` selects the INT being watched (default `%MW10`). Monitor is read-only: the student must write the transition logic. `kind` selects a built-in SVG scene: `conveyor`, `reverse`, `batch`, `fan`, `pack`, `pump`, `staged`, `alarm`, `panel`, `tank`, `traffic`, `crossing`, `filling`, `production`. Graphics and sensor logic are engine-side; a totally new physical process needs a new scene in JS. Optional `plant` enables built-in feedback for `cylinder`, `filling`, `production`; these assume the same I/O mapping as their respective level files. Toggle automatic feedback off for manual sensor override/fault injection. Sensors are simplified virtual position/timing feedback, not physical simulation.

### Supported LAD instructions
NO/NC; rising/falling operand edge contacts (tracked per instruction); coil, set, reset; TON, TOF, TP, CTU; INT ==, <>, >, >=, <, <=; MOVE, ADD, SUB (signed 16-bit). Math instructions write on a true rung. A later network reads the updated tag immediately. Named IEC instances have `.Q` contacts. A step snapshot can prevent unintended cascade transitions. No hardware, no safety-rated controls, no real road controller code, no TIA project export. Fixed mission and sandbox tag tables; new tags can be added in JSON by the author.

### Progress
Stable level IDs are used in V4 browser localStorage. The game attempts to migrate V1–V3 programs/passes by ID. New inserted levels must be completed before later levels unlock; migrated later programs are retained. Storage is origin-specific and local to the browser. Hints, tests and code are all client-side; this is a practice environment, not a secure assessment system.


## Multiple outputs (V4.3)
The editor now supports multiple **parallel coil outputs** from the same network, and **path-ending coils** in contact branches. Coils do not create series logic; a coil on a branch **terminates** that path, so it cannot inadvertently bypass downstream conditions. When two or more paths without branch coils continue, they still rejoin using OR logic. Main output slots retain support for IEC timers, counters, and INT operations; additional parallel outputs accept COIL/SET/RESET.

In the editor, click **+ Parallel coil** below the main output to add another coil driven by the final rung result. Click **+ Coil** at the end of an existing parallel contact path to give only that branch its own output. Branch-end output coils can be edited or removed without deleting their contacts. Commissioning tests and run/step/monitor functions include all outputs.

Mission starter programs and older saved programs still work with `net.out`. Optional new starter-program properties on a network are:

```json
{
  "groups": [[[ {"type":"NO","a":"%I0.0"} ], [ {"type":"NO","a":"%I0.1"} ]]],
  "out": {"type":"COIL","a":"%Q0.0"},
  "branchOutputs": {"0:1":{"type":"COIL","a":"%Q0.1"}},
  "parallelOutputs": [{"type":"COIL","a":"%Q0.2"}]
}
```

Here `branchOutputs["0:1"]` means the *second path* of the *first group*. If it has a coil, that path no longer feeds the main output; only non-terminated paths can pass signal to subsequent series groups. `parallelOutputs` is a list of additional coils driven by the same completed network condition as `out`. The editor maintains branch-output attachments when groups and paths are added/removed. For clarity, use a single write instruction per output tag where practical; multiple writes to the same output bit depend on execution order and produce compiler warnings.

The network editor is a teaching-oriented LAD subset, not a byte-for-byte replica of TIA Portal's placement validation. **No series coils**: multiple coils on a completed rung are drawn as parallel endpoints.
