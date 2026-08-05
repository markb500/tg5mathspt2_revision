// js/generators/graph.js
// Converted from TG5 Maths pt II graph_module.js — behaviour preserved
// TG5 graph fix 2026-08-05: module ltr labels + withSolution + textBaseline
import { QLimitRepeats, cfchk, dp, images, rndgen } from '../utils.js';

// Axis labels — module scope so scaleDraw can read them
var ltr1 = 'x', ltr2 = 'y', ltr1txt = 'x', ltr2txt = 'y';


function scaleDraw(ctx2, xpositive, ypositive, xscale, yscale) {
  //Use in Simultaneous Module to draw the graph axis
    var xfigs, yfigs, xposn, yposn, xoffset, yoffset, xtxtalign, ytxtalign, xscaleposn, yscaleposn;

    ctx2.font = "15px Comic Sans MS";
    ctx2.lineWidth = 3;
    ctx2.beginPath();
    if (xpositive && ypositive) {
        xposn = 350;
        yposn = 50;
        xoffset = 10;
        yoffset = -10;
        xtxtalign = 'top';
        ytxtalign = 'right';
        xscaleposn = [100, 150, 200, 250, 300, 350];
        yscaleposn = [300, 250, 200, 150, 100, 50];
        xfigs = [1 * xscale, 2 * xscale, 3 * xscale, 4 * xscale, 5 * xscale];
        yfigs = [1 * yscale, 2 * yscale, 3 * yscale, 4 * yscale, 5 * yscale];
        ctx2.moveTo(40, xposn);
        ctx2.lineTo(350, xposn);    //x axis
        ctx2.moveTo(yposn, 360);
        ctx2.lineTo(yposn, 50);     //y axis
    } else if (!xpositive && ypositive) {
        xposn = 350;
        yposn = 350;
        xoffset = 10;
        yoffset = 10;
        xtxtalign = 'top';
        ytxtalign = 'left';
        xscaleposn = [300, 250, 200, 150, 100, 50];
        yscaleposn = [300, 250, 200, 150, 100, 50];
        xfigs = [1 * -xscale, 2 * -xscale, 3 * -xscale, 4 * -xscale, 5 * -xscale];
        yfigs = [1 * yscale, 2 * yscale, 3 * yscale, 4 * yscale, 5 * yscale];
        ctx2.moveTo(50, xposn);
        ctx2.lineTo(360, xposn);    //x axis
        ctx2.moveTo(yposn, 360);
        ctx2.lineTo(yposn, 50);     //y axis
    } else if (xpositive && !ypositive) {
        xposn = 50;
        yposn = 50;
        xoffset = -10;
        yoffset = -10;
        xtxtalign = 'bottom';
        ytxtalign = 'right';
        xscaleposn = [100, 150, 200, 250, 300, 350];
        yscaleposn = [100, 150, 200, 250, 300, 350];
        xfigs = [1 * xscale, 2 * xscale, 3 * xscale, 4 * xscale, 5 * xscale];
        yfigs = [1 * -yscale, 2 * -yscale, 3 * -yscale, 4 * -yscale, 5 * -yscale];
        ctx2.moveTo(40, xposn);
        ctx2.lineTo(350, xposn);    //x axis
        ctx2.moveTo(yposn, 350);
        ctx2.lineTo(yposn, 40);     //y axis
    } else {
        xposn = 50;
        yposn = 350;
        xoffset = -10;
        yoffset = 10;
        xtxtalign = 'bottom';
        ytxtalign = 'left';
        xscaleposn = [300, 250, 200, 150, 100, 50];
        yscaleposn = [100, 150, 200, 250, 300, 350];
        xfigs = [1 * -xscale, 2 * -xscale, 3 * -xscale, 4 * -xscale, 5 * -xscale];
        yfigs = [1 * -yscale, 2 * -yscale, 3 * -yscale, 4 * -yscale, 5 * -yscale];
        ctx2.moveTo(50, xposn);
        ctx2.lineTo(360, xposn);    //x axis
        ctx2.moveTo(yposn, 350);
        ctx2.lineTo(yposn, 40);     //y axis
    }

    for (let i = 0; i < 5; i++) {
        ctx2.moveTo(xscaleposn[i], xposn);
        ctx2.lineTo(xscaleposn[i], xposn + xoffset);   //x scale marks
        ctx2.textAlign = "center";
        ctx2.textBaseline = (xtxtalign === 'top' || xtxtalign === 'bottom') ? xtxtalign : 'alphabetic';
        ctx2.fillText(xfigs[i], xscaleposn[i], xposn + 3 * xoffset);   //x scale digits
        ctx2.moveTo(yposn, yscaleposn[i]);
        ctx2.lineTo(yposn + yoffset, yscaleposn[i]);   //y scale marks
        ctx2.textAlign = (ytxtalign === 'left' || ytxtalign === 'right' || ytxtalign === 'center') ? ytxtalign : 'left';
        ctx2.textBaseline = 'middle';
        ctx2.fillText(yfigs[i], yposn + 1.5 * yoffset, yscaleposn[i] + 5);     //y scale digits
    }
    ctx2.textAlign = "center";
    ctx2.textBaseline = (xtxtalign === 'top' || xtxtalign === 'bottom') ? xtxtalign : 'alphabetic';
    ctx2.fillText('0', yposn + 1.5 * yoffset, xposn + 3 * xoffset);     //origin digit
    ctx2.font = "30px Comic Sans MS";
    ctx2.fillText(ltr1txt, xscaleposn[5], xposn + 3 * xoffset);    //x scale label
    ctx2.textAlign = (ytxtalign === 'left' || ytxtalign === 'right' || ytxtalign === 'center') ? ytxtalign : 'left';
    ctx2.textBaseline = 'middle';
    ctx2.fillText(ltr2txt, yposn + 1.5 * yoffset, yscaleposn[5]);  //y scale label
    ctx2.stroke();
    for (let i = 0; i < 5; i++) {
        ctx2.lineWidth = 0.4;
        ctx2.moveTo(xscaleposn[i], xposn);
        ctx2.lineTo(xscaleposn[i], yscaleposn[5]);
        ctx2.moveTo(yposn, yscaleposn[i]);
        ctx2.lineTo(xscaleposn[5], yscaleposn[i]);
    }
    ctx2.stroke();
    for (let i = 0; i < 5; i++) {
        ctx2.lineWidth = 0.1;
        if (xpositive) {
            ctx2.moveTo(xscaleposn[i] - 40, xposn);
            ctx2.lineTo(xscaleposn[i] - 40, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] - 30, xposn);
            ctx2.lineTo(xscaleposn[i] - 30, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] - 20, xposn);
            ctx2.lineTo(xscaleposn[i] - 20, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] - 10, xposn);
            ctx2.lineTo(xscaleposn[i] - 10, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] + 10, xposn);
            ctx2.lineTo(xscaleposn[i] + 10, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] + 20, xposn);
            ctx2.lineTo(xscaleposn[i] + 20, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] + 30, xposn);
            ctx2.lineTo(xscaleposn[i] + 30, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] + 40, xposn);
            ctx2.lineTo(xscaleposn[i] + 40, yscaleposn[5]);
        } else {
            ctx2.moveTo(xscaleposn[i] + 40, xposn);
            ctx2.lineTo(xscaleposn[i] + 40, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] + 30, xposn);
            ctx2.lineTo(xscaleposn[i] + 30, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] + 20, xposn);
            ctx2.lineTo(xscaleposn[i] + 20, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] + 10, xposn);
            ctx2.lineTo(xscaleposn[i] + 10, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] - 10, xposn);
            ctx2.lineTo(xscaleposn[i] - 10, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] - 20, xposn);
            ctx2.lineTo(xscaleposn[i] - 20, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] - 30, xposn);
            ctx2.lineTo(xscaleposn[i] - 30, yscaleposn[5]);
            ctx2.moveTo(xscaleposn[i] - 40, xposn);
            ctx2.lineTo(xscaleposn[i] - 40, yscaleposn[5]);
        }
        if (ypositive) {
            ctx2.moveTo(yposn, yscaleposn[i] - 10);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] - 10);
            ctx2.moveTo(yposn, yscaleposn[i] - 20);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] - 20);
            ctx2.moveTo(yposn, yscaleposn[i] - 30);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] - 30);
            ctx2.moveTo(yposn, yscaleposn[i] - 40);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] - 40);
            ctx2.moveTo(yposn, yscaleposn[i] + 10);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] + 10);
            ctx2.moveTo(yposn, yscaleposn[i] + 20);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] + 20);
            ctx2.moveTo(yposn, yscaleposn[i] + 30);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] + 30);
            ctx2.moveTo(yposn, yscaleposn[i] + 40);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] + 40);
        } else {
            ctx2.moveTo(yposn, yscaleposn[i] + 10);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] + 10);
            ctx2.moveTo(yposn, yscaleposn[i] + 20);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] + 20);
            ctx2.moveTo(yposn, yscaleposn[i] + 30);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] + 30);
            ctx2.moveTo(yposn, yscaleposn[i] + 40);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] + 40);
            ctx2.moveTo(yposn, yscaleposn[i] - 10);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] - 10);
            ctx2.moveTo(yposn, yscaleposn[i] - 20);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] - 20);
            ctx2.moveTo(yposn, yscaleposn[i] - 30);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] - 30);
            ctx2.moveTo(yposn, yscaleposn[i] - 40);
            ctx2.lineTo(xscaleposn[5], yscaleposn[i] - 40);
        }
    }
    ctx2.stroke();
}

function coordCalc(x, y, xscale, yscale, xpositive, ypositive) {
  //Used in Simultaneous Module to calc coords for graphical solution
    var xcoord, ycoord;
    if (xpositive && ypositive) {           //x +ve y +ve
        xcoord = 50 * ((x / xscale) + 1);
        ycoord = 400 - 50 * ((y / yscale) + 1);
    } else if (xpositive && !ypositive) {    //x +ve y -ve
        xcoord = 50 * ((x / xscale) + 1);
        ycoord = 50 * ((y / -yscale) + 1);
    } else if (!xpositive && ypositive) {    //x -ve y +ve
        xcoord = 400 - 50 * ((x / -xscale) + 1);
        ycoord = 400 - 50 * ((y / yscale) + 1);
    } else {                        //x -ve y -ve
        xcoord = 400 - 50 * ((x / -xscale) + 1);
        ycoord = 50 * ((y / -yscale) + 1);
    }
    return {x: xcoord, y: ycoord};
}

function scaleSet(x, y) {
  var xpositive, ypositive, xscale, yscale;
  if (x > 0) {
      xpositive = true;
  } else {
      xpositive = false;
  }
  if (y > 0) {
      ypositive = true;
  } else {
      ypositive = false;
  }
  if (Math.abs(x) < 4) {
      xscale = 1;
  } else if (Math.abs(x) < 9) {
      xscale = 2;
  } else if (Math.abs(x) < 21) {
      xscale = 5;
  } else if (Math.abs(x) < 41) {
      xscale = 10;
  } else {
      xscale = 20;
  }
  if (Math.abs(y) < 6) {
      yscale = 1;
  } else if (Math.abs(y) < 13) {
      yscale = 2;
  } else if (Math.abs(y) < 30) {
      yscale = 5;
  } else if (Math.abs(y) < 60) {
      yscale = 10;
  } else {
      yscale = 20;
  }
  return {xptve: xpositive, yptve: ypositive, x: xscale, y: yscale};
}

function coordTab(xcf1, c1) {
  //Used in Straight Line Graphs Module. Creates the coordinates for the coord table
  let xtab11, xtab12, xtab13, xtab14, ytab11, ytab12, ytab13, ytab14;
  xtab11 = 1;
  xtab12 = 2;
  xtab13 = 3;
  xtab14 = 4;
  ytab11 = dp(xcf1 * xtab11 + c1, 1, -1);
  ytab12 = dp(xcf1 * xtab12 + c1, 1, -1);
  ytab13 = dp(xcf1 * xtab13 + c1, 1, -1);
  ytab14 = dp(xcf1 * xtab14 + c1, 1, -1);
  return {x11: xtab11, x12: xtab12, x13: xtab13, x14: xtab14, y11: ytab11, y12: ytab12, y13: ytab13, y14: ytab14};
}

var sumarrgraph = [], x, y, a, b, xcf1, xcf2, ycf1, ycf2, c1, c2, ltr1, ltr2, xcross1, xcross2, ycross1, ycross2, xouter1, xouter2, youter1, youter2, x11coord, y11coord, x12coord, y12coord, x21coord, y21coord, x22coord, y22coord;
var xcross1status, xcross2status, ycross1status, ycross2status, xouter1status, xouter2status, youter1status, youter2status, bottom, left, upper, right;
var ymin, ymax, ycoord, yscale, yaxiscoord;
export function generate() {
  let sum;
  ltr1 = 'x'; ltr2 = 'y'; ltr1txt = 'x'; ltr2txt = 'y';
  let notesLink = 'images/';
  let sumq = '';
  let suma = '';
const off = document.createElement('canvas');
  off.width = 400;
  off.height = 400;
  const ctx = off.getContext('2d');
  const ctx2 = ctx;

    var scale, tab;
    sumq = "";
    suma = "";  // canvas provides spacing
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

    notesLink = "images/20240924-TG5MathsBook3-GraphsStatsV1_0-APO.pdf#page=4";
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
        questionDraw: (c) => { try { c.drawImage(off, 0, 0); } catch (e) {} },
        draw: (c) => { try { c.drawImage(off, 0, 0); } catch (e) {} }
      };
    }
    return _result;
}