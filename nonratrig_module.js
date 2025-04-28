var units, unitsmath;
function nonratrig(ctx) {
    //Draws a non-right angled triangle in approx correct scale for randomly generated dimensions.
    //Randomly selects question form, giving various combinations of sides and angles.
    var left, right, top, bottom, mid;
    sumq = "";
    suma = "";
    switch(rndgen(1, 3, 0, 1, -1)) {      //1=m 2=cm 3=mm
        case 1:
            units = "&nbsp;m";
            unitsmath = "\\ m";
            break;
        case 2:
            units = "&nbsp;cm";
            unitsmath = "\\ cm";
            break;
        case 3:
            units = "&nbsp;mm";
            unitsmath = "\\ mm";
            break;
    }
            do {
                var A = rndgen(30, 89, 0, 1, -1);
                var B = rndgen(30, 89, 0, 1, -1);
                var C = 180 - A - B;
            } while (A === 45 || A === 60 || B === 45 || B === 60 || C === 45 || C === 60 || A === B || A === C || B === C || C < 25);
            var a = rndgen(10, 150, 2, 0.01, -1);
            var b = dp((a * Math.sin(B * Math.PI / 180)) / Math.sin(A * Math.PI / 180), 2, -1);
            var c = dp((a * Math.sin(C * Math.PI / 180)) / Math.sin(A * Math.PI / 180), 2, -1);
            top = 50;
            left = 50;
            right = 275;
            var ht = c * Math.cos((90 - A) * Math.PI / 180);
            if (ht > b) {
                scale = 275 / ht;
            } else {
                scale = 200 / b;
            }
            bottom = top + (c * Math.cos((90 - A) * Math.PI / 180) * scale);
            mid = left + (c * Math.sin((90 - A) * Math.PI / 180) * scale);
            ctx.lineWidth = 3;
            ctx.moveTo(left, bottom);
            ctx.lineTo(mid, top);
            ctx.lineTo(right, bottom);
            ctx.lineTo(left, bottom);
            ctx.moveTo(left + 20, bottom);
            ctx.stroke();
            ctx.lineWidth = 1;
            ctx.font = "25px Comic Sans MS";
            ctx.arc(left, bottom, 30, 0, 2 * Math.PI - (A * Math.PI / 180), 1);
            ctx.moveTo(right - 30, bottom);
            ctx.arc(right, bottom, 30, Math.PI, Math.PI + ((C - 3) * Math.PI / 180), 0);
            ctx.moveTo(mid, top);
            ctx.arc(mid, top, 30, Math.PI - (A * Math.PI / 180), ((C) * Math.PI / 180), 1);
            ctx.fillText("A", left - 25, bottom + 10);
            ctx.fillText("B", mid - 5, top - 10);
            ctx.fillText("C", right + 10, bottom + 10);
            ctx.fillText("a", mid + 10 + (right - mid) / 2, top + (bottom - top) / 2);
            ctx.fillText("b", left + (right - left) / 2, bottom + 25);
            ctx.fillText("c", left - 20 + (mid - left) / 2, top + (bottom - top) / 2);
            ctx.stroke();
            suma += "<br>".repeat(8);
            switch(8) {
                case 1: //A, B & a
                    sumq += "Solve the triangle shown, given that A&nbsp;=&nbsp;" + A + "\xB0 B&nbsp;=&nbsp;" + B + "\xB0 and a&nbsp;=&nbsp;" + a + units + ". ";
                    sumq += "Give angles to the nearest whole number and round lengths to 2 decimal places.";
                    suma += "$$\\begin{aligned}C&=180 - " + A + "-" + B + "\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + C + "^o}}\\\\[20pt]";
                    suma += "\\frac{c}{Sin(C)}&=\\frac{a}{Sin(A)}\\\\[5pt]";
                    suma += "c&=\\frac{aSin(C)}{Sin(A)}\\\\[5pt]";
                    suma += "&=\\frac{" + a + "\\times Sin(" + C + ")}{Sin(" + A + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + c + unitsmath + "\\ (2\\ dp)}}\\\\[20pt]";
                    suma += "\\frac{b}{Sin(B)}&=\\frac{a}{Sin(A)}\\\\[5pt]";
                    suma += "b&=\\frac{aSin(B)}{Sin(A)}\\\\[5pt]";
                    suma += "&=\\frac{" + a + "\\times Sin(" + B + ")}{Sin(" + A + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + b + unitsmath + "\\ (2\\ dp)}}\\\\[5pt]";
                    suma += "\\end{aligned}$$";
                    break;
                case 2: //A, B & c
                    sumq += "Solve the triangle shown, given that A&nbsp;=&nbsp;" + A + "\xB0 B&nbsp;=&nbsp;" + B + "\xB0 and c&nbsp;=&nbsp;" + c + units + ". ";
                    sumq += "Give angles to the nearest whole number and round lengths to 2 decimal places.";
                    suma += "$$\\begin{aligned}C&=180 - " + A + "-" + B + "\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + C + "^o}}\\\\[20pt]";
                    suma += "\\frac{a}{Sin(A)}&=\\frac{c}{Sin(C)}\\\\[5pt]";
                    suma += "a&=\\frac{cSin(A)}{Sin(C)}\\\\[5pt]";
                    suma += "&=\\frac{" + c + "\\times Sin(" + A + ")}{Sin(" + C + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + a + unitsmath + "\\ (2\\ dp)}}\\\\[20pt]";
                    suma += "\\frac{b}{Sin(B)}&=\\frac{c}{Sin(C)}\\\\[5pt]";
                    suma += "b&=\\frac{cSin(B)}{Sin(C)}\\\\[5pt]";
                    suma += "&=\\frac{" + c + "\\times Sin(" + B + ")}{Sin(" + C + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + b + unitsmath + "\\ (2\\ dp)}}\\\\[5pt]";
                    suma += "\\end{aligned}$$";
                    break;
                case 3: //B, C & b
                    sumq += "Solve the triangle shown, given that B&nbsp;=&nbsp;" + B + "\xB0 C&nbsp;=&nbsp;" + C + "\xB0 and b&nbsp;=&nbsp;" + b + units + ". ";
                    sumq += "Give angles to the nearest whole number and round lengths to 2 decimal places.";
                    suma += "$$\\begin{aligned}A&=180 - " + B + "-" + C + "\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + A + "^o}}\\\\[20pt]";
                    suma += "\\frac{a}{Sin(A)}&=\\frac{b}{Sin(B)}\\\\[5pt]";
                    suma += "a&=\\frac{bSin(A)}{Sin(B)}\\\\[5pt]";
                    suma += "&=\\frac{" + b + "\\times Sin(" + A + ")}{Sin(" + B + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + a + unitsmath + "\\ (2\\ dp)}}\\\\[20pt]";
                    suma += "\\frac{c}{Sin(C)}&=\\frac{b}{Sin(B)}\\\\[5pt]";
                    suma += "c&=\\frac{bSin(C)}{Sin(B)}\\\\[5pt]";
                    suma += "&=\\frac{" + b + "\\times Sin(" + C + ")}{Sin(" + B + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + c + unitsmath + "\\ (2\\ dp)}}\\\\[5pt]";
                    suma += "\\end{aligned}$$";
                    break;
                case 4: //B, C & a
                    sumq += "Solve the triangle shown, given that B&nbsp;=&nbsp;" + B + "\xB0 C&nbsp;=&nbsp;" + C + "\xB0 and a&nbsp;=&nbsp;" + a + units + ". ";
                    sumq += "Give angles to the nearest whole number and round lengths to 2 decimal places.";
                    suma += "$$\\begin{aligned}A&=180 - " + B + "-" + C + "\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + A + "^o}}\\\\[20pt]";
                    suma += "\\frac{b}{Sin(B)}&=\\frac{a}{Sin(A)}\\\\[5pt]";
                    suma += "b&=\\frac{aSin(B)}{Sin(A)}\\\\[5pt]";
                    suma += "&=\\frac{" + a + "\\times Sin(" + B + ")}{Sin(" + A + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + b + unitsmath + "\\ (2\\ dp)}}\\\\[20pt]";
                    suma += "\\frac{c}{Sin(C)}&=\\frac{a}{Sin(A)}\\\\[5pt]";
                    suma += "c&=\\frac{aSin(C)}{Sin(A)}\\\\[5pt]";
                    suma += "&=\\frac{" + a + "\\times Sin(" + C + ")}{Sin(" + A + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + c + unitsmath + "\\ (2\\ dp)}}\\\\[5pt]";
                    suma += "\\end{aligned}$$";
                    break;
                case 5: //a, b & C
                    sumq += "Solve the triangle shown, given that a&nbsp;=&nbsp;" + a + units + ", b&nbsp;=&nbsp;" + b + units + " and C&nbsp;=&nbsp;" + C + "\xB0. ";
                    sumq += "Give angles to the nearest whole number and round lengths to 2 decimal places.";
                    suma += "$$\\begin{aligned}c^2&=a^2+b^2-2abCosC\\\\[5pt]";
                    suma += "c&=\\sqrt{a^2+b^2-2abCosC}\\\\[5pt]";
                    suma += "&=\\sqrt{" + a + "^2+" + b + "^2-2\\times" + a + "\\times" + b + "\\times Cos(" + C + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + c + unitsmath + "\\ (2\\ dp)}}\\\\[20pt]";
                    suma += "\\frac{b}{Sin(B)}&=\\frac{c}{Sin(C)}\\\\[5pt]";
                    suma += "\\frac{Sin(B)}{b}&=\\frac{Sin(C)}{c}\\\\[5pt]";
                    suma += "Sin(B)&=\\frac{bSin(C)}{c}\\\\[5pt]";
                    suma += "B&=Sin^{-1}\\left(\\frac{bSin(C)}{c}\\right)\\\\[5pt]";
                    suma += "&=Sin^{-1}\\left(\\frac{" + b + "\\times Sin(" + C + ")}{" + c + "}\\right)\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + B + "^o}}\\\\[20pt]";
                    suma += "A&=180 - " + B + "-" + C + "\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + A + "^o}}\\\\[5pt]";
                    suma += "\\end{aligned}$$";
                    break;
                case 6: //b, c & A
                    sumq += "Solve the triangle shown, given that b&nbsp;=&nbsp;" + b + units + ", c&nbsp;=&nbsp;" + c + units + " and A&nbsp;=&nbsp;" + A + "\xB0. ";
                    sumq += "Give angles to the nearest whole number and round lengths to 2 decimal places.";
                    suma += "$$\\begin{aligned}a^2&=b^2+c^2-2bcCosA\\\\[5pt]";
                    suma += "a&=\\sqrt{b^2+c^2-2bcCosA}\\\\[5pt]";
                    suma += "&=\\sqrt{" + b + "^2+" + c + "^2-2\\times" + b + "\\times" + c + "\\times Cos(" + A + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + a + unitsmath + "\\ (2\\ dp)}}\\\\[20pt]";
                    suma += "\\frac{b}{Sin(B)}&=\\frac{a}{Sin(A)}\\\\[5pt]";
                    suma += "\\frac{Sin(B)}{b}&=\\frac{Sin(A)}{a}\\\\[5pt]";
                    suma += "Sin(B)&=\\frac{bSin(A)}{a}\\\\[5pt]";
                    suma += "B&=Sin^{-1}\\left(\\frac{bSin(A)}{a}\\right)\\\\[5pt]";
                    suma += "&=Sin^{-1}\\left(\\frac{" + b + "\\times Sin(" + A + ")}{" + a + "}\\right)\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + B + "^o}}\\\\[20pt]";
                    suma += "C&=180 - " + B + "-" + A + "\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + C + "^o}}\\\\[5pt]";
                    suma += "\\end{aligned}$$";
                    break;
                case 7: //a, c & B
                    sumq += "Solve the triangle shown, given that a&nbsp;=&nbsp;" + a + units + ", c&nbsp;=&nbsp;" + c + units + " and B&nbsp;=&nbsp;" + B + "\xB0. ";
                    sumq += "Give angles to the nearest whole number and round lengths to 2 decimal places.";
                    suma += "$$\\begin{aligned}b^2&=a^2+c^2-2acCosB\\\\[5pt]";
                    suma += "b&=\\sqrt{a^2+c^2-2acCosB}\\\\[5pt]";
                    suma += "&=\\sqrt{" + a + "^2+" + c + "^2-2\\times" + a + "\\times" + c + "\\times Cos(" + B + ")}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + b + unitsmath + "\\ (2\\ dp)}}\\\\[20pt]";
                    suma += "\\frac{a}{Sin(A)}&=\\frac{b}{Sin(B)}\\\\[5pt]";
                    suma += "\\frac{Sin(A)}{a}&=\\frac{Sin(B)}{b}\\\\[5pt]";
                    suma += "Sin(A)&=\\frac{aSin(B)}{b}\\\\[5pt]";
                    suma += "A&=Sin^{-1}\\left(\\frac{aSin(B)}{b}\\right)\\\\[5pt]";
                    suma += "&=Sin^{-1}\\left(\\frac{" + a + "\\times Sin(" + B + ")}{" + b + "}\\right)\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + A + "^o}}\\\\[20pt]";
                    suma += "C&=180 - " + A + "-" + B + "\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + C + "^o}}\\\\[5pt]";
                    suma += "\\end{aligned}$$";
                    break;
                case 8: //a, b and c
                    sumq += "Solve the triangle shown, given that a&nbsp;=&nbsp;" + a + units + ", b&nbsp;=&nbsp;" + b + units + " and c&nbsp;=&nbsp;" + c + units + ". ";
                    sumq += "Give angles to the nearest whole number.";
                    suma += "$$\\begin{aligned}a^2&=b^2+c^2-2bcCosA\\\\[5pt]";
                    suma += "2bcCosA&=b^2+c^2-a^2\\\\[5pt]";
                    suma += "CosA&=\\frac{b^2+c^2-a^2}{2bc}\\\\[5pt]";
                    suma += "A&=Cos^{-1}\\left(\\frac{b^2+c^2-a^2}{2bc}\\right)\\\\[5pt]";
                    suma += "&=Cos^{-1}\\left(\\frac{" + b + "^2+" + c + "^2-" + a + "^2}{2\\times" + b + "\\times" + c + "}\\right)\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + A + "^o}}\\\\[20pt]";
                    suma += "\\frac{b}{Sin(B)}&=\\frac{a}{Sin(A)}\\\\[5pt]";
                    suma += "\\frac{Sin(B)}{b}&=\\frac{Sin(A)}{a}\\\\[5pt]";
                    suma += "Sin(B)&=\\frac{bSin(A)}{a}\\\\[5pt]";
                    suma += "B&=Sin^{-1}\\left(\\frac{bSin(A)}{a}\\right)\\\\[5pt]";
                    suma += "&=Sin^{-1}\\left(\\frac{" + b + "\\times Sin(" + A + ")}{" + a + "}\\right)\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + B + "^o}}\\\\[20pt]";
                    suma += "C&=180-" + A + "-" + B + "\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + C + "^o}}\\\\[5pt]";
                    suma += "\\end{aligned}$$";
                    break;
            }
    var notesLink = "images/20200504-MathsBook7Pythagv1_3-APO.pdf#page=5";
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}
