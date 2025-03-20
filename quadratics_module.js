var sumarrquadratics = [], a, b, c, d, x1, x2;
function quadratics(ctx2) {
//Produces quadratic expression of form x^2 + bx + c = 0 to be solved by factorisation.
//x^2 always has coefficient of 1 and solutions are always integers.
  let arr = [];
  let comdenom;
  sumq = "";
  suma = "";
  sumarrquadratics = QLimitRepeats(sumarrquadratics, 3);   //Ensures no repeat question until at least 50% of questions shown
  sum = sumarrquadratics[sumarrquadratics.length - 1];
  // sum = 3;
  switch(sum) {
    case 1:
      do {
        a = 1;
        b = rndgen(-30, 30, 0, 1, -1);  //int -30 to 30
        c = rndgen(-30, 30, 0, 1, -1);  //int -30 to 30
        if(b**2 - 4 * a * c >= 0) {                           //avoid sqrt of -ve
          x1 = (-b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
          x2 = (-b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a);
        } else {
          x1 = 0;
          x2 = 0;
        }
      }
      while(!Number.isInteger(x1) ||
            !Number.isInteger(x2) ||
            x1 * x2 === 0 ||
            Math.abs(x1) === 1 ||
            Math.abs(x2) === 1)
      sumq += "Factorise the following and find the values of x.<br />"
      if (b === 0) {
        sumq += "$$x^2" + cfchk(c, "", 1, 0) + "=0$$";
      } else {
        sumq += "$$x^2" + cfchk(b, "x", 1, 0) + cfchk(c, "", 1, 0) + "=0$$<br />"
      }
              
      suma += "$$\\begin{aligned}(x" + cfchk(-1 * x1, "", 1, 0) + ")(x" + cfchk(-1 * x2, "", 1, 0) + 
              ")&=0 \\\\[15pt] (x" + cfchk(-1 * x1, "", 1, 0) + ")&=0 \\ \\ \\ \\ so\\  x=" + x1;
      if (x1 !== x2) {
        suma += "  \\\\[5pt] or\\ (x" + cfchk(-1 * x2, "", 1, 0) + ")&=0 \\ \\ \\ \\ so\\  x=" + x2 + "\\end{aligned}$$";
      } else {
        suma += "\\end{aligned}$$";
      }
      break;
    case 2:
      do {
        a = rndgen(-9, 9, 0, 1, -1);
        b = rndgen(-9, 9, 0, 1, -1);
        c = rndgen(-9, 9, 0, 1, -1);
      } while (a * c > 0 || a * b * c === 0);   //Ensures a & c have different signs and none are zero.
      x1 = dp((-b+Math.sqrt(Math.pow(b, 2)-4 * a * c)) / (2 * a), 2, 2);
      x2 = dp((-b-Math.sqrt(Math.pow(b, 2)-4 * a * c)) / (2 * a), 2, 2);

      sumq += "Using the quadratic formula,";
      sumq += "$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$";
      sumq += "calculate the values of x that satisfy the following equation. Round your answers to 2 decimal places.";
      sumq += "$$" + cfchk(a, "x^2", 1, 1) + "" + cfchk(b, "x", 1, 0) + cfchk(c, "", 0, 0) + "=0$$";
      suma += "$$\\begin{aligned}a&=" + a + "\\\\[5pt]";
      suma += "b&=" + b + "\\\\[5pt]";
      suma += "c&=" + c + "\\\\[5pt]";
      suma += "x&=\\frac{" + (b * -1) + "\\pm\\sqrt{" + b + "^2-4\\times" + a + "\\times" + c + "}}{2\\times" + a + "}\\\\[5pt]";
      suma += "x&=\\underline{\\mathbf{" + x1 + "}}\\ (2\\ dp)\\ or\\ x=\\underline{\\mathbf{" + x2 + "}}\\ (2\\ dp)\\\\[5pt]";
      suma += "\\end{aligned}$$";
      break;
    case 3:
      //To solve by magic X. Generates (ax + b)(cx + d), then produces quadratic from this. Ensures factors are integers.
      do {
        a = rndgen(1, 9, 0, 1, -1);
        b = rndgen(-9, 9, 0, 1, -1);
        c = rndgen(1, 9, 0, 1, -1);
        d = rndgen(-9, 9, 0, 1, -1);
      } while (a * c <= 1 || Math.abs(a * b * c * d) > 100 || a * b * c * d === 0 || 
          gcd([(a * c), ((b * c) + (a * d)), (b * d)]) !== 1);
                        //Ensures coefficient of x^2 > 1, top figure in magic x is manageable, none are zero & quadratic can't be further factorized.
      if (a === 1) {
        x1 = -b;
      } else if (a === -1) {
        x1 = b;
      } else if (a < 0) {
        if (a * b < 0) {
          x1 = "\\frac{" + b + "}{" + -a + "}"
        } else {
          x1 = "-\\frac{" + -b + "}{" + -a + "}"
        }
      } else {
        if (a * b < 0) {
          x1 = "\\frac{" + -b + "}{" + a + "}"
        } else {
          x1 = "-\\frac{" + b + "}{" + a + "}"
        }
      }
      if (c === 1) {
        x2 = -d;
      } else if (c === -1) {
        x2 = d;
      } else if (c < 0) {
        if (c * d < 0) {
          x2 = "\\frac{" + d + "}{" + -c + "}"
        } else {
          x2 = "-\\frac{" + -d + "}{" + -c + "}"
        }
      } else {
        if (c * d < 0) {
          x2 = "\\frac{" + -d + "}{" + c + "}"
        } else {
          x2 = "-\\frac{" + d + "}{" + c + "}"
        }
      }
      ctx2.font = "20px Comic Sans MS";
      ctx2.lineWidth = 3;
      ctx2.beginPath();
      ctx2.moveTo(50, 50);
      ctx2.lineTo(250, 250);
      ctx2.moveTo(250, 50);
      ctx2.lineTo(50, 250);
      ctx2.textAlign = "center";
      ctx2.fillText(a * b * c * d, 150, 70);
      ctx2.fillText(a * d + b * c, 150, 230);
      ctx2.moveTo(50, 150);
      ctx2.lineTo(70, 150);
      ctx2.fillText(b * c, 60, 145);
      ctx2.fillText(a * c, 60, 170);
      ctx2.moveTo(210, 150);
      ctx2.lineTo(230, 150);
      ctx2.fillText(a * d, 220, 145);
      ctx2.fillText(a * c, 220, 170);
      if (Math.abs(gcd2(b * c, a * c)) !== 1) {
        comdenom = Math.abs(gcd2(b * c, a * c));
        ctx2.moveTo(90, 150);
        ctx2.lineTo(110, 150);
        ctx2.fillText("=", 80, 160);
        ctx2.fillText(dp((b * c) / comdenom, 0, -1), 100, 145);
        ctx2.fillText(dp((a * c) / comdenom, 0, -1), 100, 170);
      }
      if (Math.abs(gcd2(a * d, a * c)) !== 1) {
        comdenom = Math.abs(gcd2(a * d, a * c));
        ctx2.moveTo(250, 150);
        ctx2.lineTo(270, 150);
        ctx2.fillText("=", 240, 160);
        ctx2.fillText(dp((a * d) / comdenom, 0, -1), 260, 145);
        ctx2.fillText(dp((a * c) / comdenom, 0, -1), 260, 170);
      }
      ctx2.stroke();
      
      sumq += "Factorize the equation and find the values of x that satisfy the equation."
      sumq += "$$" + cfchk(a * c, "x^2", 1, 1) + cfchk(b * c + a * d, "x", 1, 0) + cfchk(b * d, "", 0, 0) + "=0$$";
      suma += "$$(" + cfchk(a, "x", 1, 1) + cfchk(b, "", 0, 0) + ")(" + cfchk(c, "x", 1, 1) + cfchk(d, "", 0, 0) + ")=0$$";
      suma += "$$x=" + x1 + "\\ or\\ x=" + x2 + "$$";
      break;
}
 
  var notesLink = "images/20200504-MathsBook5AlgebraicOpsv1_3-APO.pdf#page=15"
  var sumArray = [sumq, suma, notesLink];
  return sumArray;
}