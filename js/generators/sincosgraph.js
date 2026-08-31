// js/generators/sincosgraph.js
// Converted from TG5 Maths pt II sincosgraph_module.js — behaviour preserved
import { QLimitRepeats, dp, images, rndgen } from '../utils.js';

var sumarrsincos = [];
export function generate() {
  let y;
  let notesLink = 'images/';
  let sumq = '';
  let suma = '';
const off = document.createElement('canvas');
  off.width = 600;
  off.height = 600;
  const ctx = off.getContext('2d');
  const ctx2 = ctx;

  let sum, ang1, ang2, trigRatio, sin, cos, tan; sumq = ""; suma = "";
  sumarrsincos = QLimitRepeats(sumarrsincos, 29);   //Ensures no repeat question until at least 50% of questions shown
  sum = sumarrsincos[sumarrsincos.length - 1];
  switch(sum) {
    case 1:
      sumq += "Sketch the graph of y = Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.ysinx, 0, 0, 600, 600);
      break;
    case 2:
      sumq += "Sketch the graph of y = -Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.yminussinx, 0, 0, 600, 600);
      break;
    case 3:
      sumq += "Sketch the graph of y = 2Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.y2sinx, 0, 0, 600, 600);
      break;
    case 4:
      sumq += "Sketch the graph of y = -2Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.yminus2sinx, 0, 0, 600, 600);
      break;
    case 5:
      sumq += "Sketch the graph of y = 1.5Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.y1_5sinx, 0, 0, 600, 600);
      break;
    case 6:
      sumq += "Sketch the graph of y = -1.5Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.yminus1_5sinx, 0, 0, 600, 600);
      break;
    case 7:
      sumq += "Sketch the graph of y = 0.75Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.y0_75sinx, 0, 0, 600, 600);
      break;
    case 8:
      sumq += "Sketch the graph of y = -0.75Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.yminus0_75sinx, 0, 0, 600, 600);
      break;
    case 9:
      sumq += "Sketch the graph of y = Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.ycosx, 0, 0, 600, 600);
      break;
    case 10:
      sumq += "Sketch the graph of y = -Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.yminuscosx, 0, 0, 600, 600);
      break;
    case 11:
      sumq += "Sketch the graph of y = 2Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.y2cosx, 0, 0, 600, 600);
      break;
    case 12:
      sumq += "Sketch the graph of y = -2Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.yminus2cosx, 0, 0, 600, 600);
      break;
    case 13:
      sumq += "Sketch the graph of y = 1.5Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.y1_5cosx, 0, 0, 600, 600);
      break;
    case 14:
      sumq += "Sketch the graph of y = -1.5Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.yminus1_5cosx, 0, 0, 600, 600);
      break;
    case 15:
      sumq += "Sketch the graph of y = 0.75Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.y0_75cosx, 0, 0, 600, 600);
      break;
    case 16:
      sumq += "Sketch the graph of y = -0.75Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.yminus0_75cosx, 0, 0, 600, 600);
      break;
    case 17:
      sumq += "Sketch the graph of y = Tan(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(images.ytanx, 0, 0, 600, 600);
      break;
    case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29:  //Examples of finding all angles 0 to 360 using CAST
      ctx2.drawImage(images.CAST, 0, 0, 600, 600);
      do {
        ang1 = rndgen(0, 360, 0, 5, -1);
      } while (ang1 === 0 || ang1 === 90 || ang1 === 180 || ang1 === 270 || ang1 === 360);
      
      trigRatio = rndgen(1, 3, 0, 1, -1);   //1 = Sin, 2 = Cos, 3 = Tan
      if (trigRatio === 1) {  //Sin
        sin = dp(Math.sin(ang1 * (Math.PI / 180)), 4, -1);
        sumq += "Find all possible angles, rounded to the nearest whole number, between 0&deg and 360&deg if Sin(&theta;) = " + sin;
        if (ang1 > 0 && ang1 < 90) {
          ang2 = 180 - ang1;
          suma += "$$\\begin{aligned}\\text{Sin(&theta;) is positive in quadrants 1 and 2 so:}\\\\[5pt]";
          suma += "Sin^{-1}(" + sin + ")&=" + ang1 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "180-" + ang1 + "&=" + ang2 + "^o\\\\[5pt]";
        } else if (ang1 > 90 && ang1 < 180) {
          ang2 = 0 + (180 - ang1);
          suma += "$$\\begin{aligned}\\text{Sin(&theta;) is positive in quadrants 1 and 2 so:}\\\\[5pt]";
          suma += "Sin^{-1}(" + sin + ")&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "180-" + ang2 + "&=" + ang1 + "^o\\\\[5pt]";
        } else if (ang1 > 180 && ang1 < 270) {
          ang2 = 360 - (ang1 - 180);
          suma += "$$\\begin{aligned}\\text{Sin(&theta;) is negative in quadrants 3 and 4 so:}\\\\[5pt]";
          suma += "Sin^{-1}(" + sin + ")&=" + (180 - ang1) + "^o\\\\[5pt]";
          suma += "&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "180+" + (ang1 - 180) + "&=" + ang1 + "^o\\\\[5pt]";
        } else {
          ang2 = 180 + (360 - ang1);
          suma += "$$\\begin{aligned}\\text{Sin(&theta;) is negative in quadrants 3 and 4 so:}\\\\[5pt]";
          suma += "Sin^{-1}(" + sin + ")&=" + (180 - ang2) + "^o\\\\[5pt]";
          suma += "&=" + ang1 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "180+" + (ang2 - 180) + "&=" + ang2 + "^o\\\\[5pt]";
        }
      } else if (trigRatio === 2) {  //Cos
        cos = dp(Math.cos(ang1 * (Math.PI / 180)), 4, -1);
        sumq += "Find all possible angles, rounded to the nearest whole number, between 0&deg and 360&deg if Cos(&theta;) = " + cos;
        if (ang1 > 0 && ang1 < 90) {
          ang2 = 360 - ang1;
          suma += "$$\\begin{aligned}\\text{Cos(&theta;) is positive in quadrants 1 and 4 so:}\\\\[5pt]";
          suma += "Cos^{-1}(" + cos + ")&=" + ang1 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "360-" + ang1 + "&=" + ang2 + "^o\\\\[5pt]";
        } else if (ang1 > 90 && ang1 < 180) {
          ang2 = 360 - ang1;
          suma += "$$\\begin{aligned}\\text{Cos(&theta;) is negative in quadrants 2 and 3 so:}\\\\[5pt]";
          suma += "Cos^{-1}(" + cos + ")&=" + ang1 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "360-" + ang1 + "&=" + ang2 + "^o\\\\[5pt]";
        } else if (ang1 > 180 && ang1 < 270) {
          ang2 = 360 - ang1;
          suma += "$$\\begin{aligned}\\text{Cos(&theta;) is negative in quadrants 2 and 3 so:}\\\\[5pt]";
          suma += "Cos^{-1}(" + cos + ")&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "360-" + ang2 + "&=" + ang1 + "^o\\\\[5pt]";
        } else {
          ang2 = 0 + (360 - ang1);
          suma += "$$\\begin{aligned}\\text{Cos(&theta;) is positive in quadrants 1 and 4 so:}\\\\[5pt]";
          suma += "Cos^{-1}(" + cos + ")&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "360-" + ang2 + "&=" + ang1 + "^o\\\\[5pt]";
        }
      } else if (trigRatio === 3) {  //Tan
        tan = dp(Math.tan(ang1 * (Math.PI / 180)), 4, -1);
        sumq += "Find all possible angles, rounded to the nearest whole number, between 0&deg and 360&deg if Tan(&theta;) = " + tan;
        if (ang1 > 0 && ang1 < 90) {
          ang2 = ang1 + 180;
          suma += "$$\\begin{aligned}\\text{Tan(&theta;) is positive in quadrants 1 and 3 so:}\\\\[5pt]";
          suma += "Tan^{-1}(" + tan + ")&=" + ang1 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "180+" + ang1 + "&=" + ang2 + "^o\\\\[5pt]";
        } else if (ang1 > 90 && ang1 < 180) {
          ang2 = ang1 + 180;
          suma += "$$\\begin{aligned}\\text{Tan(&theta;) is negative in quadrants 2 and 4 so:}\\\\[5pt]";
          suma += "Tan^{-1}(" + tan + ")&=" + (ang1 - 180) + "^o\\\\[5pt]";
          suma += "180-" + (180 - ang1) + "&=" + ang1 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "180+" + ang1 + "&=" + ang2 + "^o\\\\[5pt]";
        } else if (ang1 > 180 && ang1 < 270) {
          ang2 = ang1 - 180;
          suma += "$$\\begin{aligned}\\text{Tan(&theta;) is positive in quadrants 1 and 3 so:}\\\\[5pt]";
          suma += "Tan^{-1}(" + tan + ")&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "180+" + ang2 + "&=" + ang1 + "^o\\\\[5pt]";
        } else {
          ang2 = ang1 - 180;
          suma += "$$\\begin{aligned}\\text{Tan(&theta;) is negative in quadrants 2 and 4 so:}\\\\[5pt]";
          suma += "Tan^{-1}(" + tan + ")&=" + (ang2 - 180) + "^o\\\\[5pt]";
          suma += "180-" + (180 - ang2) + "&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "180+" + ang2 + "&=" + ang1 + "^o\\\\[5pt]";
        }
      }
      suma += "\\end{aligned}$$";
      break;
  }
  notesLink = "images/20200505-MathsBook9SinCosGraphsv1_3-APO.pdf#page=3";

  let diagramDescription;
  if (sum === 29) {
    diagramDescription =
      'Diagram (shown with the solution): CAST diagram for finding angles between 0° and 360°.';
  } else {
    // Equation only — not "from 0° to 360°"
    let title = sumq
      .replace(/<[^>]+>/g, '')
      .replace(/&theta;/gi, 'θ')
      .replace(/&Theta;/gi, 'θ');
    const titleMatch = title.match(/y\s*=\s*.+?(?=\s+from\s+|$)/i);
    title = titleMatch ? titleMatch[0].trim() : 'y = Sin(θ)';

    const isTan = /Tan/i.test(title);
    const isCos = /Cos/i.test(title);
    const isNeg = /=\s*-/.test(title);
    const ampMatch = title.match(/=\s*-?\s*([\d.]+)\s*(Sin|Cos|Tan)/i);
    const amp = ampMatch ? Number(ampMatch[1]) : 1;
    const periodMatch = title.match(/(Sin|Cos|Tan)\s*\(\s*([\d.]+)\s*θ\s*\)/i);
    const periodFactor = periodMatch ? Number(periodMatch[2]) : 1;
    const signWord = isNeg ? 'negative' : 'positive';

    function cyclePhrase(n) {
      const rounded = Math.round(n * 100) / 100;
      if (rounded === 1) return 'One cycle';
      if (rounded === 1.5) return 'One and a half cycles';
      if (rounded === 2) return 'Two cycles';
      if (rounded === 2.5) return 'Two and a half cycles';
      if (rounded === 3) return 'Three cycles';
      if (Number.isInteger(rounded)) {
        const words = { 4: 'Four', 5: 'Five', 6: 'Six' };
        return (words[rounded] || String(rounded)) + ' cycles';
      }
      return rounded + ' cycles';
    }

    if (isTan) {
      // Tan has vertical asymptotes; y is unbounded (sketch typically shows about −5 to 5)
      let cycleNote = cyclePhrase(periodFactor) + ' of a ' + signWord + ' Tangent curve is shown';
      if (periodFactor !== 1) {
        cycleNote += ' (argument ' + periodFactor + 'θ)';
      }
      cycleNote += ', with vertical asymptotes where cos(θ) = 0 (for example at 90° and 270° for y = Tan(θ)).';
      diagramDescription =
        'Diagram showing the graph of ' + title + '. ' +
        'The horizontal axis shows angle in degrees from 0° to 360°. ' +
        'The vertical axis is the function value (unbounded; the sketch shows a typical range around the origin). ' +
        cycleNote;
    } else {
      const waveName = isCos ? 'Cosine' : 'Sine';
      const yMax = amp;
      const yMin = -amp;
      let cycleNote = cyclePhrase(periodFactor) + ' of a ' + signWord + ' ' + waveName + ' curve is shown';
      if (amp !== 1) cycleNote += ' (amplitude ' + amp + ')';
      cycleNote += '.';
      diagramDescription =
        'Diagram showing the graph of ' + title + '. ' +
        'The horizontal axis shows angle in degrees from 0° to 360°. ' +
        'The vertical axis is the function value between ' + yMax + ' and ' + yMin + '. ' +
        cycleNote;
    }
  }

  const _result = {
      question: sumq,
      solution: suma,
      notesLink: notesLink
    };
    if (typeof off !== 'undefined') {
      _result.canvas = {
        width: off.width,
        height: off.height,
        withSolution: true,
        description: diagramDescription,
        solutionDescription: diagramDescription,
        questionDraw: (c) => { try { c.drawImage(off, 0, 0); } catch (e) {} },
        draw: (c) => { try { c.drawImage(off, 0, 0); } catch (e) {} }
      };
    }
    return _result;
}
