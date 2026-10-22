# Brain Defence question banks

Place these files in the Engineering Share repository:

    interactive/Brain-Defence.html
    interactive/tower-sets/index.json
    interactive/tower-sets/arithmetic.json
    interactive/tower-sets/algebra.json
    interactive/tower-sets/percentages.json

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
      "difficulty": "Level 3",
      "file": "circuits.json"
    }

3. The HTML will show the new option automatically after the JSON files
   are published. No HTML edit is needed for static question banks.

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

- Numeric answers use a free-text field. Students can type negative or decimal
  answers. The default tolerance is 0.000001, or override with tolerance.
- String answers are compared without case sensitivity.
- Questions with a choices array show multiple-choice buttons. The answer
  must match one of the choices exactly (ignoring case).
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
