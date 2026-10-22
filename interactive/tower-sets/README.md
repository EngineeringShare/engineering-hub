# Brain Defence question banks

Place these files in the Engineering Share repository:

    interactive/Brain-Defence.html
    interactive/tower-sets/index.json
    interactive/tower-sets/arithmetic.json
    interactive/tower-sets/algebra.json
    interactive/tower-sets/percentages.json
    interactive/tower-sets/electronics-basics.json

The HTML is standalone: all graphics, CSS and game logic are embedded. When
hosted, it tries to load the question list from:

https://raw.githubusercontent.com/EngineeringShare/engineering-hub/refs/heads/main/interactive/tower-sets/index.json

Each listed set is then loaded from the same remote directory. If that fails,
the HTML also tries the relative path "tower-sets/[filename]". Basic maths
banks are embedded as an offline fallback for opening the HTML directly.
Remote data can take a few seconds to update after a GitHub push.

## Add a new question set

1. Create "interactive/tower-sets/circuits.json" (or another safe filename
   containing letters, digits, hyphens and underscores).
2. Add its details to the "sets" array in index.json:

    {
      "id": "circuits",
      "name": "Electrical Circuits",
      "description": "Voltage, current and resistance",
      "category": "electronics",
      "difficulty": "Level 3",
      "difficultyRank": 1,
      "file": "circuits.json"
    }

3. The HTML will show the set in its category automatically after the JSON
   files are published. No HTML edit is needed for static question banks.

## Question library categories and favourites

The question-set dropdown has been replaced by **OPEN QUESTION LIBRARY**.
The library pauses the waves, enemy movement and answer cooldowns until it
is closed. Students can browse categories, search names/descriptions, sort
by name or difficulty and mark any set as a favourite (star button). Favourites
are saved in the student's browser using localStorage, so they persist when
the student returns on the same browser/profile. This does not sync between
devices and can be erased by clearing site data.

The index.json file owns the list of available sets and their categories:

    "categories": [
      { "id": "mathematics", "name": "Mathematics", "icon": "∑" },
      { "id": "science", "name": "Science", "icon": "⚗" },
      { "id": "electronics", "name": "Electronics", "icon": "⚡" },
      { "id": "mechatronics", "name": "Mechatronics", "icon": "⚙" }
    ]

Every set should specify a "category" matching one of those IDs. Additional
categories can be declared in that same array. The four standard categories
always appear, even when empty. Older indexes without "category" fields
still work, with known electronics/mechatronics/science names inferred and
everything else treated as Mathematics for backwards compatibility.

The optional "difficultyRank" controls difficulty sorting (1 = easiest,
5 = hardest); the visible "difficulty" label can be whatever suits your
students. Missing ranks use a best-effort ordering from labels like Starter,
Intermediate and Advanced.

## Question set schema

    {
      "version": 1,
      "id": "circuits",
      "name": "Electrical Circuits",
      "description": "Apply Ohm's law.",
      "reward": 30,
      "questions": [
        {
          "prompt": "A 4 Ω resistor carries 2 A. What is its voltage in V?",
          "answer": 8,
          "explanation": "V = I × R = 2 × 4"
        },
        {
          "prompt": "Which quantity is measured in amperes?",
          "choices": ["Current", "Voltage", "Resistance", "Power"],
          "answer": "Current"
        },
        {
          "prompt": "Calculate 3.3 / 2. What is the result?",
          "answer": 1.65,
          "tolerance": 0.01
        }
      ],
      "generators": [
        { "type": "multiplication", "min": 2, "max": 12 }
      ]
    }

Each set needs at least one valid fixed question or generator.

- All questions appear as clickable multiple-choice answers in the game.
- Numeric answers automatically receive four choices: the correct value and
  plausible distractors based on unit scaling or common calculation errors.
  The default checking tolerance is 0.000001, or override with tolerance.
- Questions with a choices array display the correct answer and up to three
  supplied distractors in a random order. For a string answer, the choices
  array is required and must contain the correct answer (ignoring case).
- Answers are shuffled each time. Wrong answers trigger a 3-second cooldown.
- Question explanation is reserved for future feedback enhancements.
- The set's reward defaults to 25 and is capped between 5 and 100 coins.
- If both questions and generators exist, about 20% of questions come from
  the fixed pool; the rest are generated.
- Generated questions are local, repeatable maths types with new random values,
  not fetched from an AI service. Adding brand-new generator **types** will
  require a JavaScript handler in the HTML; adding fixed engineering questions
  does not.

Supported generator types:

| Type | JSON options | Result |
| --- | --- | --- |
| addition | min, max | Add two integers |
| subtraction | min, max, nonNegative | Subtract two integers |
| multiplication | min, max | Multiply two integers |
| division | min, max | Whole-number division |
| linear | minX, maxX, minA, maxA, minB, maxB | Solve ax + b = c |
| substitution | Same as linear | Evaluate ax + b with supplied x |
| percentage | percentages, minBase, maxBase | Percentage of a quantity |
| square | min, max | Square an integer |

All answer checking happens locally in the student's browser. This is a
practice game rather than a secured assessment: students can inspect the
JSON answers, and the game does not submit results to a teacher or server.
