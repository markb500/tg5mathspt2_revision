var sumarrstats = [], sumq, suma;
function stats(ctx) {
    //Produces randomly selected problems in statistics & probability.
    var sum, a, b, c, d, e, j, colspan;
    sumq = "";
    suma = "";
    let arr = [], arr2 = [];
    let mean;
    let sumvar;
    sumarrstats = QLimitRepeats(sumarrstats, 5);   //Ensures no repeat question until at least 50% of questions shown
    sum = sumarrstats[sumarrstats.length - 1];
    // sum = 5;
    switch(sum) {
        case 1:
            do{
                a = rndgen(2, 36, 0, 1, -1);
                b = rndgen(2, 36, 0, 1, -1);
                c = rndgen(2, 36, 0, 1, -1);
                d = rndgen(2, 36, 0, 1, -1);
                e = rndgen(2, 36, 0, 1, -1);
            }while (a === b || a === c || a === d || a === e || b === c || b === d || b === e || c === d || c === e || d === e || 
                        dp(360 / (a + b + c + d + e), 0, -1) !== (360 / (a + b + c + d + e)));

            var startx = 250;
            var starty =250;
            var x, y;
            radius = 100;
            var angleScale = 360 / (a + b + c + d + e);
            var angles = [["Crisps", a * angleScale, a / 2 * angleScale * Math.PI / 180], 
                        ["Peanuts", b * angleScale, (a * angleScale + (b / 2) * angleScale) * Math.PI / 180], 
                        ["Choc bar", c * angleScale, ((a + b) * angleScale + (c / 2) * angleScale) * Math.PI / 180], 
                        ["Apple", d * angleScale, ((a + b + c) * angleScale + (d / 2) * angleScale) * Math.PI / 180], 
                        ["Banana", e * angleScale, ((a + b + c + d) * angleScale + (e / 2) * angleScale) * Math.PI / 180]];
                            //Labels, sector angles in degrees, angle from zero to each sector centre in radians
            sumq += "The favourite snacks of " + (a + b + c + d + e) + " students are shown in the pie chart below. From the chart<br>";
            sumq += "a. How many students prefer peanuts.<br>b. How many students prefer a chocolate bar.";
            suma += "<br>".repeat(9);
            suma += "$$\\begin{aligned}a. \\frac{360}{" + (a + b + c + d + e) + "}=" + angleScale + "\\ degrees\\ per\\ student.\\\\[5pt]";
            suma += "For\\ peanuts,\\ \\frac{" + angles[1][1] + "}{" + angleScale + "}&=\\underline{\\mathbf{" + (angles[1][1] / angleScale) + 
                        "\\ students\\ prefer\\ peanuts}}\\\\[5pt]";
            suma += "b.\\frac{360-(" + angles[0][1] + "+" + angles[1][1] + "+" + angles[3][1] + "+" + angles[4][1] + ")}{" + angleScale + 
                        "}&=\\underline{\\mathbf{" + c + "\\ students\\ prefer\\ a\\ chocolate\\ bar.}}\\\\[5pt]";
            suma += "\\end{aligned}$$";
            ctx.strokeStyle = '#0000ff';
            ctx.arc(startx, starty, radius, 0, 2 * Math.PI);
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos(0 * (Math.PI / 180)), 
                            starty + radius * Math.sin(0 * (Math.PI / 180)));
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos((a * angleScale) * (Math.PI / 180)), 
                            starty + radius * Math.sin((a * angleScale) * (Math.PI / 180)));
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos(((a + b) * angleScale) * (Math.PI / 180)), 
                            starty + radius * Math.sin(((a + b) * angleScale) * (Math.PI / 180)));
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos(((a + b + c) * angleScale) * (Math.PI / 180)), 
                            starty + radius * Math.sin(((a + b + c) * angleScale) * (Math.PI / 180)));
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos(((a + b + c + d) * angleScale) * (Math.PI / 180)), 
                            starty + radius * Math.sin(((a + b + c + d ) * angleScale) * (Math.PI / 180)));
            ctx.stroke();
            ctx.font = "20px Comic Sans MS";
            ctx.textAlign = "left";
            for (let i = 0; i < 5; i++) {
                x = startx + (radius + 20) * Math.cos(angles[i][2]);
                y = starty + (radius + 20) * Math.sin(angles[i][2]);
                if (Math.cos(angles[i][2]) > 0) {
                    ctx.textAlign = "left";
                } else {
                    ctx.textAlign = "right";
                }
                if (i === 2) {
                    ctx.fillText(angles[i][0], x, y);
                } else {
                    ctx.fillText(angles[i][0] + " = " + angles[i][1] + "\xB0", x, y);
                }
                ctx.stroke();
            }
            break;
        case 2:
            do{
                a = rndgen(2, 36, 0, 1, -1);
                b = rndgen(2, 36, 0, 1, -1);
                c = rndgen(2, 36, 0, 1, -1);
                d = rndgen(2, 36, 0, 1, -1);
                e = rndgen(2, 36, 0, 1, -1);
            }while (a === b || a === c || a === d || a === e || b === c || b === d || b === e || c === d || c === e || d === e || 
                        dp(360 / (a + b + c + d + e), 0, -1) !== (360 / (a + b + c + d + e)));

            var startx = 250;
            var starty =250;
            var x, y;
            radius = 100;
            var angleScale = 360 / (a + b + c + d + e);
            var angles = [["Crisps", a * angleScale, a / 2 * angleScale * Math.PI / 180], 
                        ["Peanuts", b * angleScale, (a * angleScale + (b / 2) * angleScale) * Math.PI / 180], 
                        ["Choc bar", c * angleScale, ((a + b) * angleScale + (c / 2) * angleScale) * Math.PI / 180], 
                        ["Apple", d * angleScale, ((a + b + c) * angleScale + (d / 2) * angleScale) * Math.PI / 180], 
                        ["Banana", e * angleScale, ((a + b + c + d) * angleScale + (e / 2) * angleScale) * Math.PI / 180]];
                            //Labels, sector angles in degrees, angle from zero to each sector centre in radians
            sumq += "The favourite snacks of a group of students are shown in the pie chart below. ";
            sumq += "If " + a + " students prefer crisps, calculate how many students prefer a chocolate bar.";
            suma += "<br>".repeat(9);
            suma += "$$\\begin{aligned}1\\ student = \\frac{" + angles[0][1] + "}{" + a + "}=" + angleScale + "^o\\\\[5pt]";
            suma += "\\frac{360-(" + angles[0][1] + "+" + angles[1][1] + "+" + angles[3][1] + "+" + angles[4][1] + ")}{" + angleScale + 
                        "}&=\\underline{\\mathbf{" + c + "\\ students\\ prefer\\ a\\ chocolate\\ bar.}}\\\\[5pt]";
            suma += "\\end{aligned}$$";
            ctx.strokeStyle = '#0000ff';
            ctx.arc(startx, starty, radius, 0, 2 * Math.PI);
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos(0 * (Math.PI / 180)), 
                            starty + radius * Math.sin(0 * (Math.PI / 180)));
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos((a * angleScale) * (Math.PI / 180)), 
                            starty + radius * Math.sin((a * angleScale) * (Math.PI / 180)));
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos(((a + b) * angleScale) * (Math.PI / 180)), 
                            starty + radius * Math.sin(((a + b) * angleScale) * (Math.PI / 180)));
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos(((a + b + c) * angleScale) * (Math.PI / 180)), 
                            starty + radius * Math.sin(((a + b + c) * angleScale) * (Math.PI / 180)));
            ctx.moveTo(startx, starty);
            ctx.lineTo(startx + radius * Math.cos(((a + b + c + d) * angleScale) * (Math.PI / 180)), 
                            starty + radius * Math.sin(((a + b + c + d ) * angleScale) * (Math.PI / 180)));
            ctx.stroke();
            ctx.font = "20px Comic Sans MS";
            ctx.textAlign = "left";
            for (let i = 0; i < 5; i++) {
                x = startx + (radius + 20) * Math.cos(angles[i][2]);
                y = starty + (radius + 20) * Math.sin(angles[i][2]);
                if (Math.cos(angles[i][2]) > 0) {
                    ctx.textAlign = "left";
                } else {
                    ctx.textAlign = "right";
                }
                if (i === 2) {
                    ctx.fillText(angles[i][0], x, y);
                } else {
                    ctx.fillText(angles[i][0] + " = " + angles[i][1] + "\xB0", x, y);
                }
                ctx.stroke();
            }
            break;
            case 3:
                sumq += "A snooker table has 15 red balls and 1 each of yellow, brown, green, blue, pink and black balls. If the balls are placed in ";
                sumq += "a bag and 1 ball is selected at random, calculate the probability of selecting:<br>a. a blue ball.<br>b. a red ball<br>c. a non-red ball.";
                suma += "$$Total\\ number\\ of\\ balls = 21$$";
                suma += "$$\\begin{aligned}a&.\\ Probability\\ of\\ selecting\\ blue=\\frac{1}{21}\\\\[5pt]";
                suma += "b&.\\ Probability\\ of\\ selecting\\ red=\\frac{15}{21}=\\frac{5}{7}\\\\[5pt]";
                suma += "c&.\\ Probability\\ of\\ selecting\\ a\\ ball\\ that\\ isn't\\ red=\\frac{21-15}{21}=\\frac{6}{21}=\\frac{2}{7}";
                suma += "\\end{aligned}$$";
                break;
            case 4:
                j = rndgen(6, 12, 0, 1, -1);    //Varies number of elements.
                for (let i = 0; i < j; i++) {
                    arr[i] = rndgen(1, 6, 0, 1, -1);
                }
                var mode = FindMode(arr);
                sumq += "Find the mean, mode or modes & median of the following list: <br>";
                for (let i = 0; i < arr.length - 1; i++) {
                    sumq += arr[i] + ", ";
                }
                sumq += arr[arr.length - 1];
                mean = FindMean(arr);
                if (mean === dp(mean, 0, -1)) {
                    suma += "The mean is " + mean + "<br>";
                } else {
                    suma += "The mean is " + dp(FindMean(arr), 2, -1) + " (2 dp)<br>";
                }
                if (mode.length === 1) {
                    suma += "The mode is " + mode + "<br>";
                } else {
                    suma += "The modes are " + mode + "<br>";
                }
                suma += "The median is " + FindMedian(arr);
                break;
            case 5:
                arr = [];
                arr2 = [];
                j = rndgen(5, 7, 0, 1, -1);    //Varies number of elements.
                do {
                    for (let i = 0; i < j; i++) {
                        arr[i] = rndgen(6, 19, 1, 0.1, -1);
                    }
                    mean = dp(FindMean(arr), 8, -1);
                    colspan = j + 1;
                    for (let i = 0; i < j; i++) {
                        arr2[i] = dp(Math.pow(arr[i] - mean, 2), 8, -1);
                    }
                    sumvar = dp(arr2.reduce((partialSum, a) => partialSum + a, 0), 8, -1);
                } while (dp(mean, 2, -1) !== mean || dp(sumvar / arr.length, 4, -1) !== (sumvar / arr.length));
                sumq += "Find the variance and standard deviation (&sigma;) for the following data.<br>";
                for (let i = 0; i < arr.length - 1; i++) {
                    sumq += arr[i] + ", ";
                }
                sumq += arr[arr.length - 1];
                suma += "<div class='row'><table><tr><th>x</th>";
                for (let i of arr) {
                    suma += "<td>" + i + "</td>";
                }
                suma += "</tr>";
                suma += "<tr><th>Quantity&nbsp;(n)</th><td colspan = '" + (colspan - 1) + "'>" + arr.length + "</td></tr>";
                suma += "<tr><th>x&#772;</th><td colspan = '" + (colspan - 2) + "'><u> &Sigma;x </u><br>n</td><td>" + mean + "</td></tr>";
                suma += "<tr><th>(x - x&#772;)<sup>2</sup></th>";
                for (let i of arr2) {
                    suma += "<td>" + i + "</td>";
                }
                suma += "</tr>";
                suma += "<tr><th>&Sigma;(x - x&#772;)<sup>2</sup></th><td colspan = '" + colspan + "'>" + sumvar + "</td></tr>";
                suma += "</table>";
                suma += "$$\\begin{aligned}Variance&=\\frac{\\sum(x-\\bar{x})^2}{n}\\\\[5pt]";
                suma += "&=\\frac{" + sumvar + "}{" + arr.length + "}\\\\[5pt]";
                suma += "&=\\underline{\\mathbf{" + (sumvar / arr.length) + "}}\\\\[5pt]";
                suma += "Standard\\ Deviation\\ (\\sigma)&=\\sqrt{Variance}\\\\[5pt]";
                suma += "&=\\sqrt{" + (sumvar / arr.length) + "}\\\\[5pt]";
                suma += "&=\\underline{\\mathbf{" + dp((Math.pow(sumvar / arr.length, 0.5)), 4, 4) + "\\ (4\\ dp)}}\\\\[5pt]";
                suma += "\\end{aligned}$$";
                break;
    }
    var notesLink = "images/20230706-MathsBook08Proportionv1_6-APO.pdf#page=4";
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}