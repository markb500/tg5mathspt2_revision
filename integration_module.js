var sumarrintegration = [], arra = [], arrn = [], a, n, adenom, ndenom, denom1, n1, n2, n3, a1, lwr, upr;
var sFuncq1, sFuncq2, sFunca, TrigRatio, x, y, b, c, d, e;

function integration() {
    sumq = "";
    suma = "";
    sumarrintegration = QLimitRepeats(sumarrintegration, 6);   //Ensures no repeat question until at least 50% of questions shown
    sum = sumarrintegration[sumarrintegration.length - 1];
    // sum = 3;
    switch (sum) {
        case 1:         //Double case to weight sum selection over single case options
        case 2:
            // y = nx^a  integral = nx^a+1 / a+1
            do {
                n = rndgen(-9, 9, 0, 1, -1);
            } while (n === 0 || arrn.includes(n))
            arrn.push(n);
            if (arrn.length > Math.ceil(9)) {
              arrn.shift();
            }
            do {
                a = rndgen(-5, 5, 0, 1, -1)
            } while (a === 0 || arra.includes(a));
            arra.push(a);
            if (arra.length > Math.ceil(5)) {
              arra.shift();
            }
            var denom = gcd2(Math.abs(n), Math.abs(a + 1));
            sumq += "$$\\text{Given that the integral of } ax^n \\text{ is } \\frac{ax^{n+1}}{n+1}+C$$";
            sumq += "$$\\text{and the integral of } nx^{-1} \\text{ is } nlog_e x+C$$";
            if (n === 1) {
                if (a === 1) {
                    sumq += "$$\\text{calculate }\\int x\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    suma += "&=\\mathbf{\\frac{x^{" + (a + 1) + "}}{" + (a + 1) + "}+C}\\\\[5pt]";
                } else if (a === -1) {
                    sumq += "$$\\text{calculate }\\int x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\underline{\\mathbf{log_ex+C}}\\\\[5pt]";
                } else if (a === -2) {
                    sumq += "$$\\text{calculate }\\int x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    suma += "&=\\frac{x^{" + (a + 1) + "}}{" + (a + 1) + "}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                } else if (a > 1) {
                    sumq += "$$\\text{calculate }\\int x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    suma += "&=\\mathbf{\\frac{x^{" + (a + 1) + "}}{" + (a + 1) + "}+C}\\\\[5pt]";
                } else {
                    sumq += "$$\\text{calculate }\\int x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    suma += "&=\\frac{x^{" + (a + 1) + "}}{" + (a + 1) + "}+C\\\\[5pt]";
                    suma += "&=\\mathbf{\\frac{-x^{" + (a + 1) + "}}{" + Math.abs(a + 1) + "}+C}\\\\[5pt]";
                }
            } else if (n === -1) {
                if (a === 1) {
                    sumq += "$$\\text{calculate }\\int -x\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{-x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    suma += "&=\\mathbf{\\frac{-x^{" + (a + 1) + "}}{" + (a + 1) + "}+C}\\\\[5pt]";
                } else if (a === -1) {
                    sumq += "$$\\text{calculate }\\int -x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\underline{\\mathbf{-log_ex+C}}\\\\[5pt]";
                } else if (a === -2) {
                    sumq += "$$\\text{calculate }\\int -x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{-x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    suma += "&=\\frac{-x^{" + (a + 1) + "}}{" + (a + 1) + "}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                } else if (a > 1) {
                    sumq += "$$\\text{calculate }\\int -x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{-x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    suma += "&=\\mathbf{\\frac{-x^{" + (a + 1) + "}}{" + (a + 1) + "}+C}\\\\[5pt]";
                } else {        //a < -2
                    sumq += "$$\\text{calculate }\\int -x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{-x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    suma += "&=\\frac{-x^{" + (a + 1) + "}}{" + (a + 1) + "}\\\\[5pt]";
                    suma += "&=\\mathbf{\\frac{x^{" + (a + 1) + "}}{" + Math.abs(a + 1) + "}+C}\\\\[5pt]";
                }
            } else {
                if (a === 1) {
                    sumq += "$$\\text{calculate }\\int " + n + "x\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{" + n + "x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    if (denom === 1) {
                        suma += "&=\\mathbf{\\frac{" + n + "x^{" + (a + 1) + "}}{" + (a + 1) + "}+C}\\\\[5pt]";
                    } else {
                        suma += "&=\\frac{" + n + "x^{" + (a + 1) + "}}{" + (a + 1) + "}\\\\[5pt]";
                    }
                } else if (a === -1) {
                    sumq += "$$\\text{calculate }\\int " + n + "x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\underline{\\mathbf{" + n + "log_ex+C}}\\\\[5pt]";
                } else if (a === -2) {
                    sumq += "$$\\text{calculate }\\int " + n + "x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{" + n + "x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    suma += "&=\\frac{" + n + "x^{" + (a + 1) + "}}{" + (a + 1) + "}\\\\[5pt]";
                    if (n > 1) {
                        suma += "&=\\underline{\\mathbf{-" + n + "x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                    } else {
                        suma += "&=\\underline{\\mathbf{" + Math.abs(n) + "x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                    }
                } else {
                    sumq += "$$\\text{calculate }\\int " + n + "x^{" + a + "}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{" + n + "x^{" + a + "+1}}{" + a + "+1}\\\\[5pt]";
                    if (n < 0 && a < 0 && denom === 1) {
                        suma += "&=\\frac{" + n + "x^{" + (a + 1) + "}}{" + (a + 1) + "}\\\\[5pt]";
                        suma += "&=\\mathbf{\\frac{" + Math.abs(n) + "x^{" + (a + 1) + "}}{" + Math.abs(a + 1) + "}+C}\\\\[5pt]";
                    } else if (n > 0 && a < 0 && denom === 1) {
                        suma += "&=\\frac{" + n + "x^{" + (a + 1) + "}}{" + (a + 1) + "}\\\\[5pt]";
                        suma += "&=\\mathbf{\\frac{" + (-1 * n) + "x^{" + (a + 1) + "}}{" + Math.abs(a + 1) + "}+C}\\\\[5pt]";
                    } else if (denom === 1) {
                        suma += "&=\\mathbf{\\frac{" + n + "x^{" + (a + 1) + "}}{" + (a + 1) + "}+C}\\\\[5pt]";
                    } else {
                        suma += "&=\\frac{" + n + "x^{" + (a + 1) + "}}{" + (a + 1) + "}\\\\[5pt]";
                    }
                }
            }
            if (denom !== 1) {
                ndenom = n / denom;
                adenom = (a + 1) / denom;
                if (adenom === 1) {
                    if (ndenom === 1) {
                        suma += "&=\\underline{\\mathbf{x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                    } else if (ndenom === -1) {
                        suma += "&=\\underline{\\mathbf{-x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                    } else {
                        suma += "&=\\underline{\\mathbf{" + ndenom + "x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                    }
                } else if (adenom === -1) {
                    if (ndenom === 1) {
                        suma += "&=\\frac{x^{" + (a + 1) + "}}{" + adenom + "}\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{-x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                    } else if (ndenom === -1) {
                        suma += "&=\\frac{" + ndenom + "x^{" + (a + 1) + "}}{" + adenom + "}\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                    } else {
                        suma += "&=\\frac{" + ndenom + "x^{" + (a + 1) + "}}{" + adenom + "}\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + (-1 * ndenom) + "x^{" + (a + 1) + "}+C}}\\\\[5pt]";
                    }
                } else if (adenom > 0) {
                    if (ndenom === 1) {
                        suma += "&=\\mathbf{\\frac{x^{" + (a + 1) + "}}{" + adenom + "}+C}\\\\[5pt]";
                    } else if (ndenom === -1) {
                        suma += "&=\\mathbf{\\frac{-x^{" + (a + 1) + "}}{" + adenom + "}+C}\\\\[5pt]";
                    } else {
                        suma += "&=\\mathbf{\\frac{" + ndenom + "x^{" + (a + 1) + "}}{" + adenom + "}+C}\\\\[5pt]";
                    }
                } else if (adenom < 0) {
                    if (ndenom === 1) {
                        suma += "&=\\frac{x^{" + (a + 1) + "}}{" + adenom + "}\\\\[5pt]";
                        suma += "&=\\mathbf{\\frac{-x^{" + (a + 1) + "}}{" + Math.abs(adenom) + "}+C}\\\\[5pt]";
                    } else if (ndenom === -1) {
                        suma += "&=\\frac{-x^{" + (a + 1) + "}}{" + adenom + "}\\\\[5pt]";
                        suma += "&=\\mathbf{\\frac{x^{" + (a + 1) + "}}{" + Math.abs(adenom) + "}+C}\\\\[5pt]";
                    } else {
                        suma += "&=\\frac{" + ndenom + "x^{" + (a + 1) + "}}{" + adenom + "}\\\\[5pt]";
                        suma += "&=\\mathbf{\\frac{" + (-1 * ndenom) + "x^{" + (a + 1) + "}}{" + Math.abs(adenom) + "}+C}\\\\[5pt]";
                    }
                }
            }
            suma += "\\end{aligned}$$";
            notesLink = "images/20240924-TG5MathsBook1-NumeracyV1_0-APO.pdf#page=14";
            break;
        case 3:         //Double case to weight sum selection over single case options
        case 4:
            //y = ne^ax  integral = ne^ax / a
            do {
                n = rndgen(-9, 9, 0, 1, -1);
            } while (n === 0 || arrn.includes(n))
            arrn.push(n);
            if (arrn.length > Math.ceil(9)) {
                arrn.shift();
            }
            do {
                a = rndgen(-5, 5, 0, 1, -1)
            } while (a === 0 || arra.includes(a));
            arra.push(a);
            if (arra.length > Math.ceil(5)) {
                arra.shift();
            }
            // n = 2;
            // a = -2;
            var denom = gcd2(Math.abs(n), Math.abs(a));
            sumq += "$$\\text{Given that the integral of } ne^{ax} \\text{ is } \\frac{ne^{ax}}{a}+C$$";
            if (n === 1) {
                if (a === 1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int e^x\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\underline{\\mathbf{e^x+C}}\\\\[5pt]";
                } else if (a === -1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int e^{-x}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{e^{-x}}{-1}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-e^{-x}+C}}\\\\[5pt]";
                } else {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int e^{" + a + "x}\\ dx$$";
                    if (a < 0) {
                        suma += "$$\\begin{aligned}&=\\frac{e^{" + a + "x}}{" + a + "}\\\\[5pt]";
                        suma += "&=\\mathbf{\\frac{-e^{" + a + "x}}{" + Math.abs(a) + "}+C}\\\\[5pt]";
                    } else {
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{e^{" + a + "x}}{" + a + "}+C}\\\\[5pt]";
                    }
                }
            } else if (n === -1) {
                if (a === 1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int -e^x\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\underline{\\mathbf{-e^x+C}}\\\\[5pt]";
                } else if (a === -1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int -e^{-x}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{-e^{-x}}{-1}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{e^{-x}+C}}\\\\[5pt]";
                } else {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int -e^{" + a + "x}\\ dx$$";
                    if (a < 0) {
                        suma += "$$\\begin{aligned}&=\\frac{-e^{" + a + "x}}{" + a + "}\\\\[5pt]";
                        suma += "&=\\mathbf{\\frac{e^{" + a + "x}}{" + Math.abs(a) + "}+C}\\\\[5pt]";
                    } else {
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{-e^{" + a + "x}}{" + a + "}+C}\\\\[5pt]";
                    }
                }
            } else if (n > 1) {
                if (a === 1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int " + n + "e^x\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\underline{\\mathbf{" + n + "e^x+C}}\\\\[5pt]";
                } else if (a === -1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int " + n + "e^{-x}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{" + n + "e^{-x}}{-1}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{-" + n + "e^{-x}+C}}\\\\[5pt]";
                } else if (a > 1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int " + n + "e^{" + a + "x}\\ dx$$";
                    if (denom === 1) {
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{" + n + "e^{" + a + "x}}{" + a + "}+C}\\\\[5pt]";
                    } else {
                        ndenom = n / denom;
                        adenom = a / denom;
                        suma += "$$\\begin{aligned}&=\\frac{" + n + "e^{" + a + "x}}{" + a + "}\\\\[5pt]";
                        if (ndenom > 1 && adenom > 1) {
                            suma += "&=\\mathbf{\\frac{" + ndenom + "e^{" + a + "x}}{" + adenom + "}+C}\\\\[5pt]";
                        } else if (ndenom === 1 && adenom > 1) {
                            suma += "&=\\mathbf{\\frac{e^{" + a + "x}}{" + adenom + "}+C}\\\\[5pt]";
                        } else if (ndenom > 1 && adenom === 1) {
                            suma += "&=\\mathbf{" + ndenom + "e^{" + a + "x}+C}\\\\[5pt]";
                        }
                    }
                } else if (a < -1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int " + n + "e^{" + a + "x}\\ dx$$";
                    if (denom === 1) {
                        suma += "$$\\begin{aligned}&=\\frac{" + n + "e^{" + a + "x}}{" + a + "}\\\\[5pt]";
                        suma += "&=\\mathbf{\\frac{" + (-1 * n) + "e^{" + a + "x}}{" + Math.abs(a) + "}+C}\\\\[5pt]";
                    } else {
                        ndenom = n / denom;
                        adenom = a / denom;
                        suma += "$$\\begin{aligned}&=\\frac{" + n + "e^{" + a + "x}}{" + a + "}\\\\[5pt]";
                        if (ndenom > 1 && adenom < -1) {
                            suma += "&=\\frac{" + ndenom + "e^{" + a + "x}}{" + adenom + "}\\\\[5pt]";
                            suma += "&=\\mathbf{\\frac{" + (-1 * ndenom) + "e^{" + a + "x}}{" + Math.abs(adenom) + "}+C}\\\\[5pt]";
                        } else if (ndenom === 1 && adenom < -1) {
                            suma += "&=\\frac{e^{" + a + "x}}{" + adenom + "}\\\\[5pt]";
                            suma += "&=\\mathbf{\\frac{-e^{" + a + "x}}{" + Math.abs(adenom) + "}+C}\\\\[5pt]";
                        } else if (ndenom > 1 && adenom === -1) {
                            suma += "&=\\frac{" + ndenom + "e^{" + a + "x}}{-1}\\\\[5pt]";
                            suma += "&=\\mathbf{" + (-1 * ndenom) + "e^{" + a + "x}+C}\\\\[5pt]";
                        } else if (ndenom === 1 && adenom === -1) {
                            suma += "&=\\frac{" + ndenom + "e^{" + a + "x}}{-1}\\\\[5pt]";
                            suma += "&=\\mathbf{-e^{" + a + "x}+C}\\\\[5pt]";}
                    }
                }
            } else if (n < -1) {
                if (a === 1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int " + n + "e^x\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\underline{\\mathbf{" + n + "e^x+C}}\\\\[5pt]";
                } else if (a === -1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int " + n + "e^{-x}\\ dx$$";
                    suma += "$$\\begin{aligned}&=\\frac{" + n + "e^{-x}}{-1}\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + Math.abs(n) + "e^{-x}+C}}\\\\[5pt]";
                } else if (a > 1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int " + n + "e^{" + a + "x}\\ dx$$";
                    if (denom === 1) {
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{" + n + "e^{" + a + "x}}{" + a + "}+C}\\\\[5pt]";
                    } else {
                        ndenom = n / denom;
                        adenom = a / denom;
                        suma += "$$\\begin{aligned}&=\\frac{" + n + "e^{" + a + "x}}{" + a + "}\\\\[5pt]";
                        if (ndenom < -1 && adenom > 1) {
                            suma += "&=\\mathbf{\\frac{" + ndenom + "e^{" + a + "x}}{" + adenom + "}+C}\\\\[5pt]";
                        } else if (ndenom === -1 && adenom > 1) {
                            suma += "&=\\mathbf{\\frac{-e^{" + a + "x}}{" + adenom + "}+C}\\\\[5pt]";
                        } else if (ndenom < -1 && adenom === 1) {
                            suma += "&=\\underline{\\mathbf{" + ndenom + "e^{" + a + "x}+C}}\\\\[5pt]";
                        } else if (ndenom === -1 && adenom === 1) {
                            suma += "&=\\underline{\\mathbf{-e^{" + a + "x}+C}}\\\\[5pt]";
                        }
                    }
                } else if (a < -1) {
                    sumq += "$$\\text{Use the standard integral to calculate }\\int " + n + "e^{" + a + "x}\\ dx$$";
                    if (denom === 1) {
                        suma += "$$\\begin{aligned}&=\\frac{" + n + "e^{" + a + "x}}{" + a + "}\\\\[5pt]";
                        suma += "&=\\mathbf{\\frac{" + Math.abs(n) + "e^{" + a + "x}}{" + Math.abs(a) + "}+C}\\\\[5pt]";
                    } else {
                        ndenom = n / denom;
                        adenom = a / denom;
                        suma += "$$\\begin{aligned}&=\\frac{" + n + "e^{" + a + "x}}{" + a + "}\\\\[5pt]";
                        if (ndenom < -1 && adenom < -1) {
                            suma += "&=\\frac{" + ndenom + "e^{" + a + "x}}{" + adenom + "}\\\\[5pt]";
                            suma += "&=\\mathbf{\\frac{" + Math.abs(ndenom) + "e^{" + a + "x}}{" + Math.abs(adenom) + "}+C}\\\\[5pt]";
                        } else if (ndenom === -1 && adenom < -1) {
                            suma += "&=\\frac{-e^{" + a + "x}}{" + adenom + "}\\\\[5pt]";
                            suma += "&=\\mathbf{\\frac{e^{" + a + "x}}{" + Math.abs(adenom) + "}+C}\\\\[5pt]";
                        } else if (ndenom < -1 && adenom === -1) {
                            suma += "&=\\frac{" + ndenom + "e^{" + a + "x}}{-1}\\\\[5pt]";
                            suma += "&=\\mathbf{" + Math.abs(ndenom) + "e^{" + a + "x}+C}\\\\[5pt]";
                        } else if (ndenom === -1 && adenom === -1) {
                            suma += "&=\\frac{-e^{" + a + "x}}{-1}\\\\[5pt]";
                            suma += "&=\\underline{\\mathbf{e^{" + a + "x}+C}}\\\\[5pt]";
                        }
                    }
                }
            }
            suma += "\\end{aligned}$$";
            notesLink = "images/20240924-TG5MathsBook1-NumeracyV1_0-APO.pdf#page=14";
            break;
        case 5:
            //Integrate Sin, Cos & Sec^2 functions. nCosax -> nSinax/a. nSinax -> -nCosax/a. nsec^2ax -> nTanax/a
            do {
                n = rndgen(-9, 9, 0, 1, -1);
            } while (n === 0 || arrn.includes(n))
            arrn.push(n);
            if (arrn.length > Math.ceil(9)) {
                arrn.shift();
            }
            do {
                a = rndgen(1, 5, 0, 1, -1)
            } while (a === 0 || arra.includes(a));
            arra.push(a);
            if (arra.length > Math.ceil(3)) {
                arra.shift();
            }
            var denom = gcd2(Math.abs(n), Math.abs(a));
            TrigRatio = rndgen(1, 3, 0, 1, -1);     //1 = Cos -> Sin, 2 = Sin -> -Cos, 3 = Sec^2 -> Tan
            if (TrigRatio === 1) {
                sumq += "$$\\text{Given that the integral of } nCosax \\text{ is } \\frac{nSinax}{a}+C$$";
                if (n === 1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int Cos\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{Sin\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int Cos\\ " + a + "x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{Sin\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                    }
                } else if (n === -1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int -Cos\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{-Sin\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int -Cos\\ " + a + "x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{-Sin\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                    }
                } else if (n > 1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Cos\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{" + n + "Sin\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Cos\\ " + a + "x\\ dx$$";
                        if (denom === 1) {
                            suma += "$$\\begin{aligned}&=\\mathbf{\\frac{" + n + "Sin\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                        } else {
                            ndenom = n / denom;
                            adenom = a / denom;
                            suma += "$$\\begin{aligned}&=\\frac{" + n + "Sin\\ " + a + "x}{" + a + "}\\\\[5pt]";
                            if (ndenom === 1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{Sin\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom > 1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{" + ndenom + "Sin\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom === 1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{Sin\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            } else if (ndenom > 1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{" + ndenom + "Sin\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            }
                        }
                    }
                } else if (n < -1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Cos\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{" + n + "Sin\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Cos\\ " + a + "x\\ dx$$";
                        if (denom === 1) {
                            suma += "$$\\begin{aligned}&=\\mathbf{\\frac{" + n + "Sin\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                        } else {
                            ndenom = n / denom;
                            adenom = a / denom;
                            suma += "$$\\begin{aligned}&=\\frac{" + n + "Sin\\ " + a + "x}{" + a + "}\\\\[5pt]";
                            if (ndenom === -1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{-Sin\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom < -1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{" + ndenom + "Sin\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom === -1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{-Sin\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            } else if (ndenom < -1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{" + ndenom + "Sin\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            }
                        }
                    }
                }
            } else if (TrigRatio === 2) {
                sumq += "$$\\text{Given that the integral of } nSinax \\text{ is } \\frac{-nCosax}{a}+C$$";
                if (n === 1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int Sin\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{-Cos\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int Sin\\ " + a + "x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{-Cos\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                    }
                } else if (n === -1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int -Sin\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{Cos\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int -Sin\\ " + a + "x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{Cos\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                    }
                } else if (n > 1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Sin\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{" + (-1 * n) + "Cos\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Sin\\ " + a + "x\\ dx$$";
                        if (denom === 1) {
                            suma += "$$\\begin{aligned}&=\\mathbf{\\frac{" + (-1 * n) + "Cos\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                        } else {
                            ndenom = n / denom;
                            adenom = a / denom;
                            suma += "$$\\begin{aligned}&=\\frac{" + (-1 * n) + "Cos\\ " + a + "x}{" + a + "}\\\\[5pt]";
                            if (ndenom === 1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{-Cos\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom > 1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{" + (-1 * ndenom) + "Cos\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom === 1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{-Cos\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            } else if (ndenom > 1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{" + (-1 * ndenom) + "Cos\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            }
                        }
                    }
                } else if (n < -1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Sin\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{" + Math.abs(n) + "Cos\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Sin\\ " + a + "x\\ dx$$";
                        if (denom === 1) {
                            suma += "$$\\begin{aligned}&=\\mathbf{\\frac{" + Math.abs(n) + "Cos\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                        } else {
                            ndenom = n / denom;
                            adenom = a / denom;
                            suma += "$$\\begin{aligned}&=\\frac{" + Math.abs(n) + "Cos\\ " + a + "x}{" + a + "}\\\\[5pt]";
                            if (ndenom === -1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{Cos\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom < -1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{" + Math.abs(ndenom) + "Cos\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom === -1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{Cos\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            } else if (ndenom < -1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{" + Math.abs(ndenom) + "Cos\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            }
                        }
                    }
                }
            } else if (TrigRatio === 3) {
                sumq += "$$\\text{Given that the integral of } nSec^2ax \\text{ is } \\frac{nTanax}{a}+C$$";
                if (n === 1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int Sec^2\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{Tan\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int Sec^2\\ " + a + "x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{Tan\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                    }
                } else if (n === -1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int -Sec^2\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{-Tan\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int -Sec^2\\ " + a + "x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\mathbf{\\frac{-Tan\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                    }
                } else if (n > 1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Sec^2\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{" + n + "Tan\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Sec^2\\ " + a + "x\\ dx$$";
                        if (denom === 1) {
                            suma += "$$\\begin{aligned}&=\\mathbf{\\frac{" + n + "Tan\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                        } else {
                            ndenom = n / denom;
                            adenom = a / denom;
                            suma += "$$\\begin{aligned}&=\\frac{" + n + "Tan\\ " + a + "x}{" + a + "}\\\\[5pt]";
                            if (ndenom === 1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{Tan\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom > 1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{" + ndenom + "Tan\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom === 1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{Tan\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            } else if (ndenom > 1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{" + ndenom + "Tan\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            }
                        }
                    }
                } else if (n < -1) {
                    if (a === 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Sec^2\\ x\\ dx$$";
                        suma += "$$\\begin{aligned}&=\\underline{\\mathbf{" + n + "Tan\\ x+C}}\\\\[5pt]";
                    } else if (a > 1) {
                        sumq += "$$\\text{calculate }\\int " + n + "Sec^2\\ " + a + "x\\ dx$$";
                        if (denom === 1) {
                            suma += "$$\\begin{aligned}&=\\mathbf{\\frac{" + n + "Tan\\ " + a + "x}{" + a + "}+C}\\\\[5pt]";
                        } else {
                            ndenom = n / denom;
                            adenom = a / denom;
                            suma += "$$\\begin{aligned}&=\\frac{" + n + "Tan\\ " + a + "x}{" + a + "}\\\\[5pt]";
                            if (ndenom === -1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{-Tan\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom < -1 && adenom === 1) {
                                suma += "&=\\underline{\\mathbf{" + ndenom + "Tan\\ " + a + "x+C}}\\\\[5pt]";
                            } else if (ndenom === -1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{-Tan\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            } else if (ndenom < -1 && adenom > 1) {
                                suma += "&=\\mathbf{\\frac{" + ndenom + "Tan\\ " + a + "x}{" + adenom + "}+C}\\\\[5pt]";
                            }
                        }
                    }
                }
            }
            suma += "\\end{aligned}$$";
            notesLink = "images/20240924-TG5MathsBook1-NumeracyV1_0-APO.pdf#page=14";
            break;
        case 6:
            n1 = rndgen(2, 8, 0, 1, -1);
            a1 = rndgen(2, 5, 0, 1, -1);
            n2 = rndgen(2, 9, 0, 1, -1);
            n3 = rndgen(2, 9, 0, 1, -1);
            lwr = rndgen(2, 5, 0, 1, -1);
            upr = rndgen(lwr + 1, 9, 0, 1, -1);
            denom1 = gcd2(n1, a1 + 1);
            sumq += "$$\\text{Given that the integral of } ax^n \\text{ is } \\frac{ax^{n+1}}{n+1}+C$$";
            sumq += "$$\\text{find the definite integral of the function }$$";
            sumq += "$$y=" + n1 + "x^{" + a1 + "}+" + n2 + "x+" + n3 + "$$";
            sumq += "$$\\text{between the limits " + upr + " and " + lwr + "}$$";
            suma += "$$\\begin{aligned}&\\int_" + lwr + "^" + upr + n1 + "x^{" + a1 + "}+" + n2 + "x+" + n3 + "\\ dx\\\\[5pt]";
            suma += "&=\\left[\\frac{" + n1 + "x^" + (a1 + 1) + "}{" + (a1 + 1) + "}+\\frac{" + n2 + "x^2}{2}+" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
            if (n2 % 2 !== 0) {
                if (denom1 !== 1) {
                    if (n1 === (a1 + 1)) {
                        suma += "&=\\left[x^" + (a1 + 1) + "+\\frac{" + n2 + "x^{2}}{2}+" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(" + upr + "^" + (a1 + 1) + 
                                "+\\frac{" + n2 + "\\times" + upr + "^2}{2}+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(" + lwr + "^" + (a1 + 1) + 
                                "+\\frac{" + n2 + "\\times" + lwr + "^2}{2}+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp(((Math.pow(upr, a1 + 1)) + (n2 * Math.pow(upr, 2)) / 2 + n3 * upr) - 
                                        ((Math.pow(lwr, a1 + 1)) + (n2 * Math.pow(lwr, 2)) / 2 + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    } else if (n1 / denom1 === 1) {
                        suma += "&=\\left[\\frac{x^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + "}+\\frac{" + n2 + "x^{2}}{2}+" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(\\frac{" + upr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+\\frac{" + n2 + "\\times" + upr + "^2}{2}+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(\\frac{" + lwr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+\\frac{" + n2 + "\\times" + lwr + "^2}{2}+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp(((Math.pow(upr, a1 + 1)) / ((a1 + 1) / denom1) + (n2 * Math.pow(upr, 2)) / 2 + n3 * upr) - 
                                        ((Math.pow(lwr, a1 + 1)) / ((a1 + 1) / denom1) + (n2 * Math.pow(lwr, 2)) / 2 + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    } else if ((a1 + 1) / denom1 === 1) {
                        suma += "&=\\left[" + (n1 / denom1) + "x^" + (a1 + 1) + "+\\frac{" + n2 + "x^{2}}{2}+" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(" + (n1 / denom1) + "\\times" + upr + "^" + (a1 + 1) + 
                                "+\\frac{" + n2 + "\\times" + upr + "^2}{2}+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(" + (n1 / denom1) + "\\times" + lwr + "^" + (a1 + 1) + 
                                "+\\frac{" + n2 + "\\times" + lwr + "^2}{2}+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp((((n1 / denom1) * Math.pow(upr, a1 + 1)) + (n2 * Math.pow(upr, 2)) / 2 + n3 * upr) - 
                                        (((n1 / denom1) * Math.pow(lwr, a1 + 1)) + (n2 * Math.pow(lwr, 2)) / 2 + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    } else {
                        suma += "&=\\left[\\frac{" + (n1 / denom1) + "x^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + "}+\\frac{" + n2 + "x^{2}}{2}+" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(\\frac{" + (n1 / denom1) + "\\times" + upr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+\\frac{" + n2 + "\\times" + upr + "^2}{2}+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(\\frac{" + (n1 / denom1) + "\\times" + lwr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+\\frac{" + n2 + "\\times" + lwr + "^2}{2}+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp((((n1 / denom1) * Math.pow(upr, a1 + 1)) / ((a1 + 1) / denom1) + (n2 * Math.pow(upr, 2)) / 2 + n3 * upr) - 
                                        (((n1 / denom1) * Math.pow(lwr, a1 + 1)) / ((a1 + 1) / denom1) + (n2 * Math.pow(lwr, 2)) / 2 + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    }
                } else {
                    suma += "&=\\left(\\frac{" + n1 + "\\times" + upr + "^" + (a1 + 1) + "}{" + (a1 + 1) + 
                            "}+\\frac{" + n2 + "\\times" + upr + "^2}{2}+" + n3 + "\\times" + upr + 
                            "+C\\right)-\\left(\\frac{" + n1 + "\\times" + lwr + "^" + (a1 + 1) + "}{" + (a1 + 1) + 
                            "}+\\frac{" + n2 + "\\times" + lwr + "^2}{2}+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + thouSep(dp(((n1 * Math.pow(upr, a1 + 1)) / (a1 + 1) + (n2 * Math.pow(upr, 2)) / 2 + n3 * upr) - 
                                    ((n1 * Math.pow(lwr, a1 + 1)) / (a1 + 1) + (n2 * Math.pow(lwr, 2)) / 2 + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                }
            } else if (n2 === 2) {
                if (denom1 !== 1) {
                    if (n1 === (a1 + 1)) {
                        suma += "&=\\left[x^" + (a1 + 1) + "+x^2+" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(" + upr + "^" + (a1 + 1) + 
                                "+" + upr + "^2+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(" + lwr + "^" + (a1 + 1) + 
                                "+" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp(((Math.pow(upr, a1 + 1)) + (Math.pow(upr, 2)) + n3 * upr) - 
                                        ((Math.pow(lwr, a1 + 1)) + (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    } else if (n1 / denom1 === 1) {
                        suma += "&=\\left[\\frac{x^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + "}+x^2 +" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(\\frac{" + upr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+" + upr + "^2+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(\\frac{" + lwr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp(((Math.pow(upr, a1 + 1)) / ((a1 + 1) / denom1) + (Math.pow(upr, 2)) + n3 * upr) - 
                                        ((Math.pow(lwr, a1 + 1)) / ((a1 + 1) / denom1) + (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    } else if ((a1 + 1) / denom1 === 1) {
                        suma += "&=\\left[" + (n1 / denom1) + "x^" + (a1 + 1) + "+x^2 +" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(" + (n1 / denom1) + "\\times" + upr + "^" + (a1 + 1) + 
                                "+" + upr + "^2+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(" + (n1 / denom1) + "\\times" + lwr + "^" + (a1 + 1) + 
                                "+" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp((((n1 / denom1) * Math.pow(upr, a1 + 1)) + (Math.pow(upr, 2)) + n3 * upr) - 
                                        (((n1 / denom1) * Math.pow(lwr, a1 + 1)) + (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    } else {
                        suma += "&=\\left[\\frac{" + (n1 / denom1) + "x^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + "}+x^2 +" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(\\frac{" + (n1 / denom1) + "\\times" + upr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+" + upr + "^2+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(\\frac{" + (n1 / denom1) + "\\times" + lwr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp((((n1 / denom1) * Math.pow(upr, a1 + 1)) / ((a1 + 1) / denom1) + (Math.pow(upr, 2)) + n3 * upr) - 
                                        (((n1 / denom1) * Math.pow(lwr, a1 + 1)) / ((a1 + 1) / denom1) + (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    }
                } else {
                    suma += "&=\\left[\\frac{" + n1 + "x^{" + (a1 + 1) + "}}{" + (a1 + 1) + "}+x^2 +" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                    suma += "&=\\left(\\frac{" + n1 + "\\times" + upr + "^" + (a1 + 1) + "}{" + (a1 + 1) + 
                            "}+" + upr + "^2+" + n3 + "\\times" + upr + 
                            "+C\\right)-\\left(\\frac{" + n1 + "\\times" + lwr + "^" + (a1 + 1) + "}{" + (a1 + 1) + 
                            "}+" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + thouSep(dp(((n1 * Math.pow(upr, a1 + 1)) / (a1 + 1) + (Math.pow(upr, 2)) + n3 * upr) - 
                                    ((n1 * Math.pow(lwr, a1 + 1)) / (a1 + 1) + (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                }
            } else if (n2 % 2 === 0) {
                if (denom1 !== 1) {
                    if (n1 === (a1 + 1)) {
                        suma += "&=\\left[x^" + (a1 + 1) + "+" + (n2 / 2) + "x^2+" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(" + upr + "^" + (a1 + 1) + 
                                "+" + (n2 / 2) + "\\times" + upr + "^2+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(" + lwr + "^" + (a1 + 1) + 
                                "+" + (n2 / 2) + "\\times" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp(((Math.pow(upr, a1 + 1)) + (n2 / 2) * (Math.pow(upr, 2)) + n3 * upr) - 
                                        ((Math.pow(lwr, a1 + 1)) + (n2 / 2) * (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    } else if (n1 / denom1 === 1) {
                        suma += "&=\\left[\\frac{x^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + "}+" + (n2 / 2) + "x^2 +" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(\\frac{" + upr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+" + (n2 / 2) + "\\times" + upr + "^2+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(\\frac{" + lwr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+" + (n2 / 2) + "\\times" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp(((Math.pow(upr, a1 + 1)) / ((a1 + 1) / denom1) + (n2 / 2) * (Math.pow(upr, 2)) + n3 * upr) - 
                                        ((Math.pow(lwr, a1 + 1)) / ((a1 + 1) / denom1) + (n2 / 2) * (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    } else if ((a1 + 1) / denom1 === 1) {
                        suma += "&=\\left[" + (n1 / denom1) + "x^" + (a1 + 1) + "+" + (n2 / 2) + "x^2 +" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(" + (n1 / denom1) + "\\times" + upr + "^" + (a1 + 1) + 
                                "+" + (n2 / 2) + "\\times" + upr + "^2+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(" + (n1 / denom1) + "\\times" + lwr + "^" + (a1 + 1) + 
                                "+" + (n2 / 2) + "\\times" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp((((n1 / denom1) * Math.pow(upr, a1 + 1)) + (n2 / 2) * (Math.pow(upr, 2)) + n3 * upr) - 
                                        (((n1 / denom1) * Math.pow(lwr, a1 + 1)) + (n2 / 2) * (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    } else {
                        suma += "&=\\left[\\frac{" + (n1 / denom1) + "x^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + "}+" + (n2 / 2) + "x^2 +" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                        suma += "&=\\left(\\frac{" + (n1 / denom1) + "\\times" + upr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+" + (n2 / 2) + "\\times" + upr + "^2+" + n3 + "\\times" + upr + 
                                "+C\\right)-\\left(\\frac{" + (n1 / denom1) + "\\times" + lwr + "^" + (a1 + 1) + "}{" + ((a1 + 1) / denom1) + 
                                "}+" + (n2 / 2) + "\\times" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                        suma += "&=\\underline{\\mathbf{" + thouSep(dp((((n1 / denom1) * Math.pow(upr, a1 + 1)) / ((a1 + 1) / denom1) + (n2 / 2) * (Math.pow(upr, 2)) + n3 * upr) - 
                                        (((n1 / denom1) * Math.pow(lwr, a1 + 1)) / ((a1 + 1) / denom1) + (n2 / 2) * (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                    }
                } else {
                    suma += "&=\\left[\\frac{" + n1 + "x^{" + (a1 + 1) + "}}{" + (a1 + 1) + "}+" + (n2 / 2) + "x^2 +" + n3 + "x+C\\right]_" + lwr + "^" + upr + "\\\\[5pt]";
                    suma += "&=\\left(\\frac{" + n1 + "\\times" + upr + "^" + (a1 + 1) + "}{" + (a1 + 1) + 
                            "}+" + (n2 / 2) + "\\times" + upr + "^2+" + n3 + "\\times" + upr + 
                            "+C\\right)-\\left(\\frac{" + n1 + "\\times" + lwr + "^" + (a1 + 1) + "}{" + (a1 + 1) + 
                            "}+" + (n2 / 2) + "\\times" + lwr + "^2+" + n3 + "\\times" + lwr + "+C\\right)\\\\[5pt]";
                    suma += "&=\\underline{\\mathbf{" + thouSep(dp(((n1 * Math.pow(upr, a1 + 1)) / (a1 + 1) + (n2 / 2) * (Math.pow(upr, 2)) + n3 * upr) - 
                                    ((n1 * Math.pow(lwr, a1 + 1)) / (a1 + 1) + (n2 / 2) * (Math.pow(lwr, 2)) + n3 * lwr), 2, -1), "\\ ") + "}}\\\\[5pt]";
                }
            }
            suma += "\\end{aligned}$$";
            notesLink = "images/20240924-TG5MathsBook1-NumeracyV1_0-APO.pdf#page=14";
            break;
    }
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}