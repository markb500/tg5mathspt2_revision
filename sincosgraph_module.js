var sumarrsincos = [];
function sincosgraph(ctx2) {
  let sum, sumq = "", suma = "", ang1, ang2, trigRatio, sin, cos, tan;
  sumarrsincos = QLimitRepeats(sumarrsincos, 29);   //Ensures no repeat question until at least 50% of questions shown
  sum = sumarrsincos[sumarrsincos.length - 1];
  // sum = 40;
  switch(sum) {
    case 1:
      sumq += "Sketch the graph of y = Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(ysinx, 0, 0, 600, 600);
      break;
    case 2:
      sumq += "Sketch the graph of y = -Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(yminussinx, 0, 0, 600, 600);
      break;
    case 3:
      sumq += "Sketch the graph of y = 2Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(y2sinx, 0, 0, 600, 600);
      break;
    case 4:
      sumq += "Sketch the graph of y = -2Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(yminus2sinx, 0, 0, 600, 600);
      break;
    case 5:
      sumq += "Sketch the graph of y = 1.5Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(y1_5sinx, 0, 0, 600, 600);
      break;
    case 6:
      sumq += "Sketch the graph of y = -1.5Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(yminus1_5sinx, 0, 0, 600, 600);
      break;
    case 7:
      sumq += "Sketch the graph of y = 0.75Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(y0_75sinx, 0, 0, 600, 600);
      break;
    case 8:
      sumq += "Sketch the graph of y = -0.75Sin(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(yminus0_75sinx, 0, 0, 600, 600);
      break;
    case 9:
      sumq += "Sketch the graph of y = Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(ycosx, 0, 0, 600, 600);
      break;
    case 10:
      sumq += "Sketch the graph of y = -Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(yminuscosx, 0, 0, 600, 600);
      break;
    case 11:
      sumq += "Sketch the graph of y = 2Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(y2cosx, 0, 0, 600, 600);
      break;
    case 12:
      sumq += "Sketch the graph of y = -2Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(yminus2cosx, 0, 0, 600, 600);
      break;
    case 13:
      sumq += "Sketch the graph of y = 1.5Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(y1_5cosx, 0, 0, 600, 600);
      break;
    case 14:
      sumq += "Sketch the graph of y = -1.5Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(yminus1_5cosx, 0, 0, 600, 600);
      break;
    case 15:
      sumq += "Sketch the graph of y = 0.75Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(y0_75cosx, 0, 0, 600, 600);
      break;
    case 16:
      sumq += "Sketch the graph of y = -0.75Cos(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
      ctx2.drawImage(yminus0_75cosx, 0, 0, 600, 600);
      break;
      case 17:
        sumq += "Sketch the graph of y = Tan(&theta;) from 0<sup>O</sup> to 360<sup>O</sup>";
        ctx2.drawImage(ytanx, 0, 0, 600, 600);
        break;
    case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29:  //Examples of finding all angles 0 to 360 using CAST
      ctx2.drawImage(CAST, 0, 0, 600, 600);
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
          suma += "Sin^{-1}(" + -sin + ")&=" + (ang1 - 180) + "^o\\\\[5pt]";
          suma += "180+" + (ang1 - 180) + "&=" + ang1 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "360-" + (ang1 - 180) + "&=" + ang2 + "^o\\\\[5pt]";
        } else {
          ang2 = 180 + (360 - ang1);
          suma += "$$\\begin{aligned}\\text{Sin(&theta;) is negative in quadrants 3 and 4 so:}\\\\[5pt]";
          suma += "Sin^{-1}(" + -sin + ")&=" + (ang2 - 180) + "^o\\\\[5pt]";
          suma += "180+" + (ang2 - 180) + "&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "360-" + (ang2 - 180) + "&=" + ang1 + "^o\\\\[5pt]";
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
          ang2 = 270 - (ang1 - 90);
          suma += "$$\\begin{aligned}\\text{Cos(&theta;) is negative in quadrants 2 and 3 so:}\\\\[5pt]";
          suma += "Cos^{-1}(" + -cos + ")&=" + (ang1 - 90) + "^o\\\\[5pt]";
          suma += "90+" + (ang1 - 90) + "&=" + ang1 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "270-" + (ang1 - 90) + "&=" + ang2 + "^o\\\\[5pt]";
        } else if (ang1 > 180 && ang1 < 270) {
          ang2 = 90 + (270 - ang1);
          suma += "$$\\begin{aligned}\\text{Cos(&theta;) is negative in quadrants 2 and 3 so:}\\\\[5pt]";
          suma += "Cos^{-1}(" + -cos + ")&=" + (ang2 - 90) + "^o\\\\[5pt]";
          suma += "90+" + (ang2 - 90) + "&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "270-" + (ang2 - 90) + "&=" + ang1 + "^o\\\\[5pt]";
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
          suma += "Tan^{-1}(" + -tan + ")&=" + (ang1 - 90) + "^o\\\\[5pt]";
          suma += "90+" + (ang1 - 90) + "&=" + ang1 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "270+" + (ang1 - 90) + "&=" + ang2 + "^o\\\\[5pt]";
        } else if (ang1 > 180 && ang1 < 270) {
          ang2 = ang1 - 180;
          suma += "$$\\begin{aligned}\\text{Tan(&theta;) is positive in quadrants 1 and 3 so:}\\\\[5pt]";
          suma += "Tan^{-1}(" + tan + ")&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "180+" + ang2 + "&=" + ang1 + "^o\\\\[5pt]";
        } else {
          ang2 = ang1 - 180;
          suma += "$$\\begin{aligned}\\text{Tan(&theta;) is negative in quadrants 2 and 4 so:}\\\\[5pt]";
          suma += "Tan^{-1}(" + -tan + ")&=" + (ang2 - 90) + "^o\\\\[5pt]";
          suma += "90+" + (ang2 - 90) + "&=" + ang2 + "^o\\\\[5pt]";
          suma += "\\text{and}\\\\[5pt]";
          suma += "270+" + (ang2 - 90) + "&=" + ang1 + "^o\\\\[5pt]";
        }
      }
      suma += "\\end{aligned}$$";
      break;
  }
  var notesLink = "images/"
  var sumArray = [sumq, suma, notesLink];
  return sumArray;
}