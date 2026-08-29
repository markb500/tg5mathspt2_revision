# TG5 Maths Part II Revision Aid

Modular ES-module revision app for TG5 Maths Part II, aligned with Maths / Science / Radar / TG5 Part I.

## Topics

Indices, HCF/LCM, Transposition I & II, Algebra (solve), Quadratics, Simultaneous Equations, Logarithms, Straight & Exponential Graphs, RA / Non-RA Triangle Trigonometry, Conversions, Sin/Cos Graphs, Surface Area & Volume, Differentiation, Integration, Statistics.

## Quick start

```bash
cd TG5_Maths_pt_II
npx serve .
```

## Structure

Same pattern as Part I: `js/registry.js`, `js/generators/*.js`, Test Designer, SolnWin (`chpz`), notes PDFs under `images/`.


## Usability notes (aligned with Maths Revision)

- **Separate solution window** button (legacy key sequence `chpz` still works)
- SolnWin shows diagrams only when `withSolution` is true; overlays when both question and solution figures exist
- Background colour applies to an open SolnWin
- Test Designer supports keyboard reorder (Up/Down, Alt+arrows)
- Accessibility statement: `accessibility.html` (complete placeholders before publishing)
- Canvas topics include text diagram descriptions
