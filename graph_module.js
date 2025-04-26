var sumarrgraph = [], x, y, a, b, xcf1, xcf2, ycf1, ycf2, c1, c2, ltr1, ltr2, xcross1, xcross2, ycross1, ycross2, xouter1, xouter2, youter1, youter2;
var xcross1status, xcross2status, ycross1status, ycross2status, xouter1status, xouter2status, youter1status, youter2status, bottom, left, upper, right;
var ymin, ymax, ycoord, yscale, yaxiscoord;
function graph(ctx2) {
    var scale, tab;
    sumq = "";
    suma = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br>";  //So starts below canvas
    sumarrgraph = QLimitRepeats(sumarrgraph, 2);   //Ensures no repeat question until at least 50% of questions shown
    sum = sumarrgraph[sumarrgraph.length - 1];
    switch (sum) {
        case 1:
            switch(rndgen(1, 4, 0, 1, -1)) {
                case 1:
                    ltr1 = ltr1txt = "x";
                    ltr2 = ltr2txt = "y";
                    break;
                case 2:
                    ltr1 = ltr1txt = "s";
                    ltr2 = ltr2txt = "t";
                    break;
                case 3:
                    ltr1 = ltr1txt = "a";
                    ltr2 = ltr2txt = "b";
                    break;
                case 4:
                    ltr1 = "&#969"; //omega
                    ltr1txt = '\u03c9';
                    ltr2 = "&#0949"; //epsilon
                    ltr2txt = '\u03b5';
                    break;
            }
            do {
                do {
                    xcf1 = rndgen(-3, 3, 0, 1, -1)
                }while (xcf1 === 0)
                c1 = rndgen(0, 25, 0, 1, -1);
            }while (xcf1*4+c1 < 0 || xcf1*4+c1 > 25);
            sumq += "Using x axis range limits of 1 to 4,<br>a. complete a table of coordinates and sketch the graph of<br>";
            sumq += "$$" + ltr2 + "=" + cfchk(xcf1, ltr1, 1, 1) + cfchk(c1, "", 0, 0) + "$$";
            sumq += "b. prove that the graph is correct for this equation using the general equation form, y = mx + c";
            scale = scaleSet(3, Math.max(xcf1*4+c1, c1));
            scaleDraw(ctx2, scale.xptve, scale.yptve, scale.x, scale.y);

            //Used to get coords at either end of line for drawing graph
            xcross1 = -c1 / xcf1;   //x when y = 0
            ycross1 = c1;   //y when x = 0
            xouter1 = ((6 * scale.y) - c1) / xcf1;  //x when y = 6
            youter1 = xcf1 * 6 * scale.x + c1;    //y when x = 6

            tab = coordTab(xcf1, c1);

            suma += "a. <div class='row'><table><tr><td colspan='5' style='color:#0000ff'>" + ltr2 + "=" + cfchk(xcf1, ltr1, 1, 1) + cfchk(c1, "", 0, 0) + "</td></tr>";
            suma += "<tr><th>" + ltr1 + "</th><td>" + tab.x11 + "</td><td>" + tab.x12 + "</td><td>" + tab.x13 + "</td><td>" + tab.x14 + "</td></tr>";
            suma += "<tr><th>" + ltr2 + "</th><td>" + tab.y11 + "</td><td>" + tab.y12 + "</td><td>" + tab.y13 + "</td><td>" + tab.y14 + "</td></tr></table>";
            suma += "$$\\begin{aligned}b.\\ \\ General\\ equation\\ form:\\ y&=mx+c\\\\[5pt]";
            suma += "c &=" + ltr2 + "\\ intercept.\\ From\\ graph = " + c1 + "\\\\[5pt]";
            suma += "m&=\\frac{\\Delta y}{\\Delta x}\\ using\\ coordinates\\ (" + tab.x11 + ",\\ " + tab.y11 + ")\\ and\\ (" + tab.x14 + ",\\ " + tab.y14 + ")\\\\[5pt]";
            suma += "&=\\frac{" + tab.y14 + "-" + tab.y11 + "}{" + tab.x14 + "-" + tab.x11 + "}\\\\[5pt]";
            suma += "&=\\frac{" + (tab.y14-tab.y11) + "}{" + (tab.x14-tab.x11) + "}\\\\[5pt]";
            suma += "&=" + (tab.y14-tab.y11)/(tab.x14-tab.x11) + "\\\\[5pt]";
            suma += "\\therefore\\ " + ltr2 + "&=" + cfchk(xcf1, ltr1, 1, 1) + cfchk(c1, "", 0, 0)
            suma += "\\end{aligned}$$";

            xcross1status = xcross2status = ycross1status = ycross2status = false;
            xouter1status = xouter2status = youter1status = youter2status = false;

            if (((xcross1 >= 0 && scale.xptve) || (xcross1 <= 0 && !scale.xptve)) && Math.abs(xcross1) < (6 * scale.x)) {    //xcross within x axis
                xcross1status = true;
            }
            if (((xcross2 >= 0 && scale.xptve) || (xcross2 <= 0 && !scale.xptve)) && Math.abs(xcross2) < (6 * scale.x)) {
                xcross2status = true;
            }
            if (((ycross1 > 0 && scale.yptve) || (ycross1 < 0 && !scale.yptve)) && Math.abs(ycross1) < (6 * scale.y)) {    //ycross within x axis
                ycross1status = true;
            }
            if (((ycross2 > 0 && scale.yptve) || (ycross2 < 0 && !scale.yptve)) && Math.abs(ycross2) < (6 * scale.y)) {
                ycross2status = true;
            }
            if (((xouter1 >= 0 && scale.xptve) || (xouter1 <= 0 && !scale.xptve)) && Math.abs(xouter1) < (6 * scale.x)) {    //xouter within x axis
                xouter1status = true;
            }
            if (((xouter2 >= 0 && scale.xptve) || (xouter2 <= 0 && !scale.xptve)) && Math.abs(xouter2) < (6 * scale.x)) {
                xouter2status = true;
            }
            if (((youter1 > 0 && scale.yptve) || (youter1 < 0 && !scale.yptve)) && Math.abs(youter1) < (6 * scale.y)) {    //youter within x axis
                youter1status = true;
            }
            if (((youter2 > 0 && scale.yptve) || (youter2 < 0 && !scale.yptve)) && Math.abs(youter2) < (6 * scale.y)) {
                youter2status = true;
            }

            if (xcross1status) {
                x11coord = xcross1;
                y11coord = 0;
                if (ycross1status) {            //xcross and ycross
                    x12coord = 0;
                    y12coord = ycross1;
                } else if (xouter1status) {     //xcross and xouter
                    x12coord = xouter1;
                    if (scale.yptve) {
                        y12coord = 6 * scale.y;
                    } else {
                        y12coord = -6 * scale.y;
                    }
                } else {                        //xcross and youter
                    if (scale.xptve) {
                        x12coord = 6 * scale.x;
                    } else {
                        x12coord = -6 * scale.x;
                    }
                    y12coord = youter1;
                }
            } else if (ycross1status) {
                x11coord = 0;
                y11coord = ycross1;
                if (xouter1status) {            //ycross and xouter
                    x12coord = xouter1;
                    if (scale.yptve) {
                        y12coord = 6 * scale.y;
                    } else {
                        y12coord = -6 * scale.y;
                    }
                } else {                        //ycross and youter
                    if (scale.xptve) {
                        x12coord = 6 * scale.x;
                    } else {
                        x12coord = -6 * scale.x;
                    }
                    y12coord = youter1;
                }
            } else {                            //xouter and youter
                x11coord = xouter1;
                if (scale.yptve) {
                    y11coord = 6 * scale.y;
                } else {
                    y11coord = -6 * scale.y;
                }
                if (scale.xptve) {
                    x12coord = 6 * scale.x;
                } else {
                    x12coord = -6 * scale.x;
                }
                y12coord = youter1;
            }

            var coord11 = coordCalc(x11coord, y11coord, scale.x, scale.y, scale.xptve, scale.yptve);
            var coord12 = coordCalc(x12coord, y12coord, scale.x, scale.y, scale.xptve, scale.yptve);

            ctx2.lineWidth = 1;
            ctx2.strokeStyle = '#0000ff';
            ctx2.beginPath();
            ctx2.moveTo(coord11.x, coord11.y);
            ctx2.lineTo(coord12.x, coord12.y);
            ctx2.stroke();
            
            var coordxtab11 = coordCalc(tab.x11, tab.y11, scale.x, scale.y, scale.xptve, scale.yptve);
            var coordxtab12 = coordCalc(tab.x12, tab.y12, scale.x, scale.y, scale.xptve, scale.yptve);
            var coordxtab13 = coordCalc(tab.x13, tab.y13, scale.x, scale.y, scale.xptve, scale.yptve);
            var coordxtab14 = coordCalc(tab.x14, tab.y14, scale.x, scale.y, scale.xptve, scale.yptve);
            ctx2.font = "20px Comic Sans MS";
            ctx2.textAlign = "center";
            ctx2.textBaseline = 'middle';
            ctx2.fillText('x', coordxtab11.x, coordxtab11.y);
            ctx2.fillText('x', coordxtab12.x, coordxtab12.y);
            ctx2.fillText('x', coordxtab13.x, coordxtab13.y);
            ctx2.fillText('x', coordxtab14.x, coordxtab14.y);
            break;
        case 2:
            upper = 50;
            bottom = 350;
            left = 50;
            right = 350;
            a = rndgen(1, 9, 0, 1, -1);
            b = rndgen(0.1, 0.9, 1, 0.1, -1);
            ymin = dp((a * Math.exp(b * 0)), 2, -1);
            ymax = dp((a * Math.exp(b * 5)), 2, -1);
            scale = 300 / ymax + 50;
            sumq += "Using x axis range limits of 0 to 5, complete a table of coordinates and sketch the graph of the following equation";
            if (a === 1) {
                sumq += "$$y=e^{" + b + "x}$$";
                suma += "<div class='row'><table><tr><td colspan='7' style='color:#0000ff'>y=e<sup>" + b + "x</sup></td></tr>";
            } else {
                sumq += "$$y=" + a + "e^{" + b + "x}$$";
                suma += "<div class='row'><table><tr><td colspan='7'>y=" + a + "e<sup>" + b + "x</sup></td></tr>";
            }
            suma += "<tr><th>x</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>";
            suma += "<tr><th>y</th><td>" + dp((a * Math.exp(b * 0)), 2, -1) + 
                                "</td><td>" + dp((a * Math.exp(b * 1)), 2, -1) + 
                                "</td><td>" + dp((a * Math.exp(b * 2)), 2, -1) + 
                                "</td><td>" + dp((a * Math.exp(b * 3)), 2, -1) + 
                                "</td><td>" + dp((a * Math.exp(b * 4)), 2, -1) + 
                                "</td><td>" + dp((a * Math.exp(b * 5)), 2, -1) + 
                                "</td></tr></table>";

            ctx2.lineWidth = 1;     //Draw axes
            ctx2.moveTo(left - 5, bottom);
            ctx2.lineTo(right, bottom);
            ctx2.moveTo(left, bottom + 5);
            ctx2.lineTo(left, upper);
            ctx2.font = "20px Comic Sans MS";
            ctx2.textAlign = "center";
            ctx2.textBaseline = 'middle';
            ctx2.fillText("0", left - 10, bottom + 15);

            for (let i = 60; i < 360; i += 60) {     //x axis scale
                ctx2.fillText(i / 60, left + i, bottom + 20);
            }

            if (Math.floor(ymax) < 10) {      //y axis scale
                yaxiscoord = Math.floor(ymax) * (-scale + 50) + 350;
                ctx2.fillText(Math.floor(ymax), left - 20, yaxiscoord);
                ctx2.fillText((Math.floor(ymax)) / 2, left - 20, (yaxiscoord + 350) / 2);
            } else if (Math.floor(ymax) < 100) {
                yaxiscoord = (Math.floor(ymax / 10) * 10) * (-scale + 50) + 350;
                ctx2.fillText(Math.floor(ymax / 10) * 10, left - 20, yaxiscoord);
                ctx2.fillText((Math.floor(ymax / 10) * 10) / 2, left - 20, (yaxiscoord + 350) / 2);
            } else {
                yaxiscoord = (Math.floor(ymax / 100) * 100) * (-scale + 50) + 350;
                ctx2.fillText(Math.floor(ymax / 100) * 100, left - 20, yaxiscoord);
                ctx2.fillText((Math.floor(ymax / 100) * 100) / 2, left - 20, (yaxiscoord + 350) / 2);
            }

            ctx2.fillText("x", right + 20, bottom);     //Axis labels
            ctx2.fillText("y", left, upper - 20);
            ctx2.stroke();

            ctx2.lineWidth = 2;     //Draw curve
            ctx2.strokeStyle = '#ff0000';
            ctx2.beginPath();
            ctx2.moveTo(left, ymin * (-scale + 50) + 350);
            for (let i = 0; i < right - 50; i+=10) {
                ctx2.lineTo(left + i, ((a * Math.exp(b * (i / 60))) * (-scale + 50) + 350));
            }
            ctx2.stroke();
            break;
    }        

    var notesLink = "images/20240924-TG5MathsBook3-GraphsStatsV1_0-APO.pdf#page=4";
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}