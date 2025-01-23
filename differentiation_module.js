var sumarrdifferentiation = [], a, n, n1, n2, n3, a1, sFuncq1, sFuncq2, sFunca, TrigRatio, x, y, b, c, d, e;

function differentiation() {
    sumq = "";
    suma = "";
    sumarrdifferentiation = QLimitRepeats(sumarrdifferentiation, 7);   //Ensures no repeat question until at least 50% of questions shown
    sum = sumarrdifferentiation[sumarrdifferentiation.length - 1];
    switch (sum) {
        case 1:         //Double case to weight sum selection over single case options
        case 2:
            // y = nx^a  dy / dx = anx^a-1
            if (rndgen(1, 2, 0, 1, -1) === 1) {
                x = "x";
                y = "y";
            } else {
                x = "t";
                y = "v";
            }
            if (rndgen(1, 2, 0, 1, -1) === 1) {
                sFuncq1 = "Leibniz's notation";
                sFuncq2 = "y";
                sFunca = "\\frac{d" + y + "}{d" + x + "}";
            } else {
                sFuncq1 = "functional notation";
                sFuncq2 = "f(" + x + ")";
                sFunca = "f'(" + x + ")";
            }
            a = rndgen(-5, 5, 0, 1, -1);
            do {
                n = rndgen(-9, 9, 0, 1, -1);
            }while (n === 0);
            if (a === 1) {
                if (n === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + x + "$$";
                } else if (n === -1) {
                    sumq += "$$Using\\ " + sFuncq1 + ",\\ differentiate " + sFuncq2 + "=-" + x + "$$";
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + " " + x + "$$";
                }
                suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + " " + x + "^{" + a + "-1}\\\\[5pt]";
                suma += "&=\\underline{\\mathbf{" + (a * n) + "}}\\\\[5pt]";
            } else if (a === 2) {
                if (n === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + x + "^2$$";
                } else if (n === -1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-" + x + "^2$$";
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "" + x + "^2$$";
                }
                suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + " " + x + "^{" + a + "-1}\\\\[5pt]";
                suma += "&=\\underline{\\mathbf{" + (a * n) + "" + x + "}}\\\\[5pt]";
            } else if (a === 0) {
                sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "$$";
                suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + " " + x + "^{" + a + "-1}\\\\[5pt]";
                suma += "&=\\underline{\\mathbf{0}}\\\\[5pt]";
            } else {
                if (n === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + x + "^{" + a + "}$$";
                } else if (n === -1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-" + x + "^{" + a + "}$$";
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + " " + x + "^{" + a + "}$$";
                }
                suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + " " + x + "^{" + a + "-1}\\\\[5pt]";
                if (a === -1 && n === -1) {
                    suma += "&=\\underline{\\mathbf{" + x + "^{" + (a - 1) + "}}}\\\\[5pt]";
                } else {
                    suma += "&=\\underline{\\mathbf{" + (a * n) + " " + x + "^{" + (a - 1) + "}}}\\\\[5pt]";
                }
                if ((a - 1) < 0) {
                    suma += "&=\\mathbf{\\frac{" + (a * n) + "}{" + x + "^{" + Math.abs(a - 1) + "}}}\\\\[5pt]";
                    suma += "&(both\\ forms\\ of\\ the\\ solution\\ are\\ acceptable.\\\\[5pt]";
                }
            }
            suma += "\\end{aligned}$$";
            notesLink = "images/20240924-TG5MathsBook1-NumeracyV1_0-APO.pdf#page=14";
            break;
        case 3:         //Double case to weight sum selection over single case options
        case 4:
            //y = e^ax  dy / dx = ae^ax
            if (rndgen(1, 2, 0, 1, -1) === 1) {
                sFuncq1 = "Leibniz's notation";
                sFuncq2 = "y";
                sFunca = "\\frac{dy}{dx}";
            } else {
                sFuncq1 = "functional notation";
                sFuncq2 = "f(x)";
                sFunca = "f'(x)";
            }
            do {
                a = rndgen(-5, 5, 0, 1, -1);
            } while (a === 0);
            do {
                n = rndgen(-9, 9, 0, 1, -1);
            }while (n === 0);
            if (a === 1) {
                if (n === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=e^x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=1 \\times1e^x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{e^x}}";
                } else if (n === -1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-e^x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=1\\times-1e^x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-e^x}}";
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "e^x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=1\\times " + n + "e^x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + n + "e^x}}";
                }
            } else if (a === -1) {
                if (n === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=e^{-x}$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "e^{-x}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-e^{-x}}}\\\\[5pt]";
                    suma += "&=\\mathbf{\\frac{-1}{e^x}}\\\\[5pt]";
                    suma += "&(both\\ forms\\ of\\ the\\ solution\\ are\\ acceptable.\\\\[5pt]";
                } else if (n === -1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-e^{-x}$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=-1\\times-1e^{-x}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{e^{-x}}}\\\\[5pt]";
                    suma += "&=\\mathbf{\\frac{1}{e^x}}\\\\[5pt]";
                    suma += "&(both\\ forms\\ of\\ the\\ solution\\ are\\ acceptable.\\\\[5pt]";
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "e^{-x}$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "e^{-x}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "e^{-x}}}\\\\[5pt]";
                    suma += "&=\\mathbf{\\frac{" + (a * n) + "}{e^x}}\\\\[5pt]";
                    suma += "&(both\\ forms\\ of\\ the\\ solution\\ are\\ acceptable.\\\\[5pt]";
                }
            } else {
                if (n === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=e^{" + a + "x}$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times1e^{" + a + "x}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + a + "e^{" + a + "x}}}\\\\[5pt]";
                    if (a < 0) {
                        suma += "&=\\mathbf{\\frac{" + a + "}{e^{" + Math.abs(a) + "x}}}\\\\[5pt]";
                        suma += "&(both\\ forms\\ of\\ the\\ solution\\ are\\ acceptable.";
                    }
                } else if (n === -1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-e^{" + a + "x}$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times-1e^{" + a + "x}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "e^{" + a + "x}}}\\\\[5pt]";
                    if (a < 0) {
                        suma += "&=\\mathbf{\\frac{" + (a * n) + "}{e^{" + Math.abs(a) + "x}}}\\\\[5pt]";
                        suma += "&(both\\ forms\\ of\\ the\\ solution\\ are\\ acceptable.";
                    }
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "e^{" + a + "x}$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "e^{" + a + "x}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "e^{" + a + "x}}}\\\\[5pt]";
                    if (a < 0) {
                        suma += "&=\\mathbf{\\frac{" + (a * n) + "}{e^{" + Math.abs(a) + "x}}}\\\\[5pt]";
                        suma += "&(both\\ forms\\ of\\ the\\ solution\\ are\\ acceptable.";
                    }
                }
            }
            suma += "\\end{aligned}$$";
            notesLink = "images/20240924-TG5MathsBook1-NumeracyV1_0-APO.pdf#page=14";
            break;
        case 5:
            //Differentiate Sin, Cos & Tan functions. nSinax -> anCosax. nCosax -> -anSinax. nTanax -> ansec^2ax
            if (rndgen(1, 2, 0, 1, -1) === 1) {
                sFuncq1 = "Leibniz's notation";
                sFuncq2 = "y";
                sFunca = "\\frac{dy}{dx}";
            } else {
                sFuncq1 = "functional notation";
                sFuncq2 = "f(x)";
                sFunca = "f'(x)";
            }
            // a = rndgen(1, 5, 0, 1, -1);
            a = 3;
            do {
                // n = rndgen(-5, 5, 0, 1, -1);
                n = -2;
            } while (n === 0)
            // TrigRatio = rndgen(1, 3, 0, 1, -1);
            TrigRatio = 3;
            if (n > 0 && TrigRatio === 1) {         //Sin
                if (n === 1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=Sinx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Cosx\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{Cosx}}";
                } else if (n > 1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Sinx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Cosx\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Cosx}}";
                } else if (n > 1 && a > 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Sin" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Cos" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Cos" + a + "x}}";
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=Sin" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Cos" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Cos" + a + "x}}";
                }
            } else if (n > 0 && TrigRatio === 2) {          //Cos
                if (n === 1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=Cosx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times-" + n + "Sinx\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-Sinx}}";
                } else if (n > 1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Cosx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times-" + n + "Sinx\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-" + (a * n) + "Sinx}}";
                } else if (n > 1 && a > 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Cos" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times-" + n + "Sin" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-" + (a * n) + "Sin" + a + "x}}";
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=Cos" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times-" + n + "Sin" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-" + (a * n) + "Sin" + a + "x}}";
                }
            } else if (n < 0 && TrigRatio === 1) {          //-Sin
                if (n === -1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-Sinx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Cosx\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-Cosx}}";
                } else if (n < -1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Sinx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Cosx\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Cosx}}";
                } else if (n < -1 && a > 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Sin" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Cos" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Cos" + a + "x}}";
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-Sin" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Cos" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Cos" + a + "x}}";
                }
            } else if (n < 0 && TrigRatio === 2) {          //-Cos
                if (n === -1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-Cosx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + Math.abs(n) + "Sinx\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{Sinx}}";
                } else if (n < -1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Cosx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + Math.abs(n) + "Sinx\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * Math.abs(n)) + "Sinx}}";
                } else if (n < -1 && a > 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Cos" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + Math.abs(n) + "Sin" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * Math.abs(n)) + "Sin" + a + "x}}";
                } else {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-Cos" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + Math.abs(n) + "Sin" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * Math.abs(n)) + "Sin" + a + "x}}";
                }
            } else if (TrigRatio === 3) {           //Tan & -Tan
                if (n === 1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=Tanx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Sec^2x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{Sec^2x}}";
                } else if (n === 1 && a > 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=Tan" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Sec^2" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Sec^2" + a + "x}}";
                } else if (n === -1 && a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-Tanx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Sec^2x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-Sec^2x}}";
                } else if (n === -1 && a > 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-Tan" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Sec^2" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Sec^2" + a + "x}}";
                } else if (a === 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Tanx$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Sec^2x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Sec^2x}}";
                } else if (a > 1) {
                    sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Tan" + a + "x$$";
                    suma += "$$\\begin{aligned}" + sFunca + "&=" + a + "\\times" + n + "Sec^2" + a + "x\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + (a * n) + "Sec^2" + a + "x}}";
                } 
            }
            suma += "\\end{aligned}$$";
            notesLink = "images/20240924-TG5MathsBook1-NumeracyV1_0-APO.pdf#page=14";
            break;
        case 6:
            //y = nLogeax  dy / dx = n / x
            if (rndgen(1, 2, 0, 1, -1) === 1) {
                sFuncq1 = "Leibniz's notation";
                sFuncq2 = "y";
                sFunca = "\\frac{dy}{dx}";
            } else {
                sFuncq1 = "functional notation";
                sFuncq2 = "f(x)";
                sFunca = "f'(x)";
            }
            do {
                a = rndgen(1, 5, 0, 1, -1);
                do {
                    n = rndgen(-5, 5, 0, 1, -1);
                } while (n === 0)
            } while (a === n)
            if (n ===1 && a === 1) {
                sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=Log_ex$$";
            } else if (n === 1 && a > 1) {
                sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=Log_e" + a + "x$$";
            } else if (n === -1 && a === 1) {
                sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-Log_ex$$";
            } else if (n === -1 && a > 1) {
                sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=-Log_e" + a + "x$$";
            } else if (a === 1) {
                sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Log_ex$$";
            } else {
                sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n + "Log_e" + a + "x$$";
            }
            suma += "$$" + sFunca + "\\mathbf{=\\frac{" + n + "}{x}}$$"
            notesLink = "images/20240924-TG5MathsBook1-NumeracyV1_0-APO.pdf#page=14";
            break;
        case 7:
            //y = n1x^a1 + n2x + n3  dy / dx = a1*n1x^a1-1 + n2
            if (rndgen(1, 2, 0, 1, -1) === 1) {
                sFuncq1 = "Leibniz's notation";
                sFuncq2 = "y";
                sFunca = "\\frac{dy}{dx}";
            } else {
                sFuncq1 = "functional notation";
                sFuncq2 = "f(x)";
                sFunca = "f'(x)";
            }
            do {
                do {
                    n1 = rndgen(-9, 9, 0, 1, -1);
                } while (n1 > -2 && n1 < 2)     //Not -1, 0 or 1
                do {
                    n2 = rndgen(-9, 9, 0, 1, -1);
                } while (n2 > -2 && n2 < 2)     //Not -1, 0 or 1
                do {
                    n3 = rndgen(-9, 9, 0, 1, -1);
                } while (n3 > -2 && n3 < 2)     //Not -1, 0 or 1
            } while (n1 === n2 || n1 === n3 || n2 === n3)
            do {
                a1 = rndgen(-5, 5, 0, 1, -1);
            } while (a1 > -2 && a1 < 2)     //Not -1, 0 or 1
            sumq += "$$\\text{Using " + sFuncq1 + ", differentiate }" + sFuncq2 + "=" + n1 + "x^{" + a1 + "}" + (n2 < 0?"-":"+") + 
                                                                        Math.abs(n2) + "x" + (n3 < 0?"-":"+") + Math.abs(n3) + "$$";
            suma += "$$\\begin{aligned}" + sFunca + "&=" + a1 + "\\times" + n1 + "x^{" + a1 + "-1}" + (n2 < 0?"-":"+") + "1\\times" + 
                                            Math.abs(n2) + "x^{1-1}" + (n3 < 0?"-":"+") + "0 \\times" + Math.abs(n3) + "x^{0-1}\\\\[5pt]";
            if (a1 === 2) {
                suma += "&=" + (a1 * n1) + "x" + (n2 < 0?"-":"+") + Math.abs(n2) + "\\\\[5pt]";
            } else {
                suma += "&=\\underline{\\mathbf{" + (a1 * n1) + "x^{" + (a1 - 1) + "}" + (n2 < 0?"-":"+") + Math.abs(n2) + "}}\\\\[5pt]";
            }
            if (a1 < 0) {
                suma += "&=\\mathbf{\\frac{" + (a1 * n1) + "}{" + "x^{" + Math.abs(a1 - 1) + "}}" + (n2 < 0?"-":"+") + Math.abs(n2) + "}\\\\[5pt]";
                suma += "&(both\\ forms\\ of\\ the\\ solution\\ are\\ acceptable.";
            }
            suma += "\\end{aligned}$$";
            notesLink = "images/20240924-TG5MathsBook1-NumeracyV1_0-APO.pdf#page=14";
            break;
    }
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}