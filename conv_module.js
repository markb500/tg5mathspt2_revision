var sumarrconv = [], sumq, suma, m, v, merr, mmax, vmax, verr, ke, keerr, qdata, sel, qty, rd;
function conv() {
    //Produces randomly selected problems in either error calculation or conversion
    var sum;
    sumq = "";
    suma = "";
    arrRads = [];
//     sumarrconv = QLimitRepeats(sumarrconv, 7);   //Ensures no repeat question until at least 50% of questions shown
//     sum = sumarrconv[sumarrconv.length - 1];
sum = 8;
    switch(sum) {
        case 1:     //Absolute & relative error - Kinetic Energy
            var notesLink = "images/20200504-MathsBook6ErrConvv1_3-APO.pdf#page=3";
            m = rndgen(10, 30, 0, 1, -1);
            v = rndgen(2, 8, 0, 1, -1);
            merr = rndgen(2, 8, 0, 1, -1);
            verr = rndgen(2, 10, 0, 1, -1);
            mmax = dp(m * (1 + merr / 100), 3, -1);
            vmax = dp(v * (1 + verr / 100), 3, -1);
            ke = dp(0.5 * m * Math.pow(v, 2), 3, -1);
            keerr = dp(0.5 * (m * (1 + merr / 100)) * Math.pow(v * (1 + verr / 100), 2), 3, -1);
            sumq += "Kinetic Energy can be calculated using the formula KE=&#189mv<sup>2</sup><br>";
            sumq += "where m = mass (kg) and v = velocity (m/s).<br>";
            sumq += "If the mass of " + m + " kg is known with an accuracy of &#177 " + merr + 
                    " % and the velocity of " + v + " m/s is known with an accuracy of &#177 " + verr + 
                    " %, calculate the maximum possible absolute error and the maximum possible relative error " + 
                    "percentage of the kinetic energy, rounding each to 2 decimal places.";
            
            suma += "$$\\begin{aligned}Expected\\ KE&=\\frac{1}{2}mv^2\\\\[5pt]";
            suma += "&=\\frac{1}{2}\\times" + m + "\\times" + v + "^2\\\\[5pt]";
            suma += "&=" + ke + "\\ J\\\\[25pt]";
            suma += "Max\\ value\\ mass&=" + m + "\\times\\left(1+\\frac{" + merr + "}{100}\\right)=" + 
                    mmax + "\\ kg\\\\[5pt]";
            suma += "Max\\ value\\ velocity&=" + v + "\\times\\left(1+\\frac{" + verr + "}{100}\\right)=" + 
                    vmax + "\\ m/s\\\\[5pt]";
            suma += "Max\\ possible\\ KE&=\\frac{1}{2}mv^2=\\frac{1}{2}\\times" + mmax + "\\times" + 
                    vmax + "^2=" + keerr + "\\ J\\\\[25pt]";
            suma += "Absolute\\ error&=Actual-Expected=" + keerr + "-" + ke + "=\\underline{\\mathbf{" + 
                    dp(keerr-ke, 2, 2) + "\\ J\\ (2\\ dp)}}\\\\[10pt]";
            suma += "Relative\\ error&=\\frac{Actual-Expected}{Expected}\\times100=\\frac{" + 
                    keerr + "-" + ke + "}{" + ke + "}\\times100=\\underline{\\mathbf{" + 
                    dp(((keerr-ke)/ke)*100, 2, 2) + "\\ \\%\\ (2\\ dp)}}\\end{aligned}$$";
            break;
        case 2: //Absolute & relative error - Power
            var notesLink = "images/20200504-MathsBook6ErrConvv1_3-APO.pdf#page=3";
            var I = rndgen(2, 13, 0, 1, -1);
            var R = rndgen(50, 100, 0, 5, -1);
            var Ierr = rndgen(2, 8, 0, 1, -1);
            var Rerr = rndgen(3, 12, 0, 1, -1);
            var Imax = dp(I * (1 + Ierr / 100), 3, -1);
            var Rmax = dp(R * (1 + Rerr / 100), 3, -1);
            var P = dp(Math.pow(I, 2) * R, 3, -1);
            var Perr = dp(Math.pow(Imax, 2) * Rmax, 3, -1);
            sumq += "Power in an electrical circuit can be calculated<br>using the formula P=I<sup>2</sup>R<br>";
            sumq += "where I is current in Amps (A) and R is resistance in Ohms (&Omega;). ";
            sumq += "If the current of " + I + " A is known with an accuracy of &#177; " + Ierr + 
                        " % and the resistance of " + R + " &Omega; is known with an accuracy of &#177; " + Rerr + 
                        " %, calculate the maximum possible absolute error and the maximum possible relative error " + 
                        "percentage of the power, rounding each to 2 decimal places.";
            suma += "$$\\begin{aligned}Expected\\ P&=I^2R\\\\[5pt]";
            suma += "&=" + I + "^2\\times" + R + "\\\\[5pt]";
            suma += "&=" + thouSep(P, "\\ ") + "\\ W\\\\[25pt]";
            suma += "Max\\ value\\ I&=" + I + "\\times\\left(1+\\frac{" + Ierr + "}{100}\\right)=" + Imax + "\\ A\\\\[5pt]";
            suma += "Max\\ value\\ R&=" + R + "\\times\\left(1+\\frac{" + Rerr + "}{100}\\right)=" + Rmax + "\\ \\Omega\\\\[5pt]";
            suma += "Max\\ possible\\ P&=I^2R=" + Imax + "^2\\times" + Rmax + "=" + thouSep(Perr, "\\ ") + "\\ W\\\\[25pt]";
            suma += "Absolute\\ error&=Actual-Expected=" + thouSep(Perr, "\\ ") + "-" + thouSep(P, "\\ ") + "=\\underline{\\mathbf{" + dp(Perr - P, 2, 2) + "\\ W\\ (2\\ dp)}}\\\\[10pt]";
            suma += "Relative\\ error&=\\frac{Actual-Expected}{Expected}\\times100=\\frac{" + thouSep(Perr, "\\ ") + "-" + thouSep(P, "\\ ") + "}{" + thouSep(P, "\\ ") + "}\\times100=\\underline{\\mathbf{" + 
                        dp(((Perr-P)/P)*100, 2, 2) + "\\ \\%\\ (2\\ dp)}}";
            suma += "\\end{aligned}$$";
            break;
        case 3:     //Conversion, quantity to mass, mass to quantity, mass to mass or quantity to quantity
        case 4:
        case 5:
        case 6:
        case 7:
            qdata = [   //Units convert from, units convert to, min qty, max qty, conversion factor, rd role in calc
                ["Gallons (UK)", "Pounds", 500, 1500, 10.02, "mult"],
                ["Pounds", "Gallons (UK)", 4000, 12000, 0.0998, "divide"],
                ["Gallons (UK)", "kg", 500, 1500, 4.545, "mult"],
                ["kg", "Gallons (UK)", 1800, 5500, 0.22, "divide"],
                ["Gallons (US)", "Pounds", 500, 1500, 8.345, "mult"],
                ["Pounds", "Gallons (US)", 3300, 10000, 0.1198, "divide"],
                ["Gallons (US)", "kg", 500, 1500, 3.785, "mult"],
                ["kg", "Gallons (US)", 1500, 4500, 0.2642, "divide"],
                ["Gallons (UK)", "Gallons (US)", 500, 1500, 1.2, "nil"],
                ["Gallons (US)", "Gallons (UK)", 600, 1800, 0.833, "nil"],
                ["Gallons (UK)", "Litres", 500, 1500, 4.545, "nil"],
                ["Litres", "Gallons (UK)", 2200, 6800, 0.22, "nil"],
                ["Gallons (US)", "Litres", 500, 1500, 3.785, "nil"],
                ["Litres", "Gallons (US)", 1900, 5700, 0.2642, "nil"],
                ["Pounds", "kg", 500, 1500, 0.4536, "nil"],
                ["kg", "Pounds", 200, 700, 2.205, "nil"]
            ];
            var notesLink = "images/20200504-MathsBook6ErrConvv1_3-APO.pdf#page=9";
            sel = rndgen(0, 15, 0, 1, -1);      //Selects row of qdata to use for question
            qty = rndgen(qdata[sel][2], qdata[sel][3], 0, 1, -1);
            rd = rndgen(0.78, 0.82, 2, 0.01, -1);
            sumq += "Convert " + thouSep(qty, " ") + " " + qdata[sel][0] + 
                    " of fuel with a specific gravity (relative density) of " + rd + " to " + qdata[sel][1] + 
                    " given that the conversion factor is " + qdata[sel][4] + " Round your answer to 1 decimal place.";

            if(qdata[sel][5] === "mult") {      //qty to mass
                suma += "$$\\begin{aligned}quantity\\times conversion\\ factor\\times relative\\ density&=\\\\[5pt]";
                suma += thouSep(qty, "\\ ") + "\\times" + qdata[sel][4] + "\\times" + rd + "&=\\\\[5pt]";
                suma += "\\underline{\\mathbf{" + thouSep(dp(qty * qdata[sel][4] * rd, 1, 1), "\\ ") + "\\ " + 
                        qdata[sel][1] + "\\ (1\\ dp)}}\\end{aligned}$$";
            } else if(qdata[sel][5] === "divide") {     //mass to qty
                suma += "$$\\begin{aligned}quantity\\times conversion\\ factor\\div relative\\ density&=\\\\[5pt]";
                suma += thouSep(qty, "\\ ") + "\\times" + qdata[sel][4] + "\\div" + rd + "&=\\\\[5pt]";
                suma += "\\underline{\\mathbf{" + thouSep(dp(qty * qdata[sel][4] / rd, 1, 1), "\\ ") + "\\ " + 
                        qdata[sel][1] + "\\ (1\\ dp)}}\\end{aligned}$$";
            } else if(qdata[sel][5] === "nil") {    //mass to mass or qty to qty
                suma += "$$\\begin{aligned}quantity\\times conversion\\ factor&=\\\\[5pt]";
                suma += thouSep(qty, "\\ ") + "\\times" + qdata[sel][4] + "&=\\\\[5pt]";
                suma += "\\underline{\\mathbf{" + thouSep(dp(qty * qdata[sel][4], 1, 1), "\\ ") + "\\ " + 
                        qdata[sel][1] + "\\ (1\\ dp)}}\\end{aligned}$$";
            }
            break;
        case 8:     //Convert degrees <--> radians
            arrRads = [
                ["10", "\\frac{&pi;}{18}"], 
                ["20", "\\frac{&pi;}{9}"], 
                ["30", "\\frac{&pi;}{6}"], 
                ["40", "\\frac{2&pi;}{9}"], 
                ["50", "\\frac{5&pi;}{18}"], 
                ["60", "\\frac{&pi;}{3}"], 
                ["70", "\\frac{7&pi;}{18}"], 
                ["80", "\\frac{4&pi;}{9}"], 
                ["90", "\\frac{&pi;}{2}"], 
                ["100", "\\frac{5&pi;}{9}"], 
                ["110", "\\frac{11&pi;}{18}"], 
                ["120", "\\frac{2&pi;}{3}"], 
                ["130", "\\frac{13&pi;}{18}"], 
                ["140", "\\frac{7&pi;}{9}"], 
                ["150", "\\frac{5&pi;}{6}"], 
                ["160", "\\frac{8&pi;}{9}"], 
                ["170", "\\frac{17&pi;}{18}"], 
                ["180", "&pi;"], 
                ["190", "\\frac{19&pi;}{18}"], 
                ["200", "\\frac{10&pi;}{9}"], 
                ["210", "\\frac{7&pi;}{6}"], 
                ["220", "\\frac{11&pi;}{9}"], 
                ["230", "\\frac{23&pi;}{18}"], 
                ["240", "\\frac{4&pi;}{3}"], 
                ["250", "\\frac{25&pi;}{18}"], 
                ["260", "\\frac{13&pi;}{9}"], 
                ["270", "\\frac{3&pi;}{2}"], 
                ["280", "\\frac{14&pi;}{9}"], 
                ["290", "\\frac{29&pi;}{18}"], 
                ["300", "\\frac{5&pi;}{3}"], 
                ["310", "\\frac{31&pi;}{18}"], 
                ["320", "\\frac{16&pi;}{9}"], 
                ["330", "\\frac{11&pi;}{6}"], 
                ["340", "\\frac{17&pi;}{9}"], 
                ["350", "\\frac{35&pi;}{18}"], 
                ["360", "2&pi;"], 
            ];
            let i = rndgen(0, arrRads.length - 1, 0, 1, -1);    //Random index to select from arrRads
            switch(rndgen(1, 2, 0, 1, -1)) {
                case 1:     //degs to rads
                    sumq += "$$\\text{Convert }" + arrRads[i][0] + "\xB0\\text{ to radians.}$$";
                    suma += "$$\\begin{aligned}&=" + arrRads[i][0] + "\\times\\frac{&pi;}{180}\\\\[5pt]";
                    suma += "&=" + arrRads[i][1] + "\\end{aligned}$$";
                    break;
                case 2:     //rads to degs
                    sumq += "$$\\text{Convert }" + arrRads[i][1] + "\\text{ rads to degrees.}$$";
                    suma += "$$\\begin{aligned}&=" + arrRads[i][1] + "\\times\\frac{180}{&pi;}\\\\[5pt]";
                    suma += "&=" + arrRads[i][0] + "^o\\end{aligned}$$";
                    break;
            }
    }
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}