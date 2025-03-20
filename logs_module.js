var sumarrlogs1 = [], sumq, suma, a, b;
function logs() {
    sumq = "";
    suma = "";
    let comdenom;
    sumarrlogs1 = QLimitRepeats(sumarrlogs1, 11);   //Ensures no repeat question until at least 50% of questions shown
    var sum = sumarrlogs1[sumarrlogs1.length - 1];
    // sum = 11;
    switch(sum) {
        case 1:
            do {
                a = rndgen(1, 9, 0, 1, -1);
                b = rndgen(1, 9, 0, 1, -1);
            } while (a === b);
            sumq += "Simplify the following.";
            sumq += "$$log_b" + a + "+log_b" + b + "$$";
            suma += "$$\\begin{aligned}&=log_b(" + a + "\\times" + b + ")\\\\[5pt]";
            suma += "&=log_b" + (a * b) + "\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;

        case 2:
            do {
                a = rndgen(1, 9, 0, 1, -1);
                b = rndgen(1, 9, 0, 1, -1);
            } while (a === b);
            comdenom = gcd2(a, b);
            sumq += "Simplify the following.";
            sumq += "$$log_b" + a + "-log_b" + b + "$$";
            suma += "$$\\begin{aligned}&=log_b\\left(\\frac{" + a + "}{" + b + "}\\right)\\\\[5pt]";
            if (comdenom !== 1) {
                suma += "&=log_b\\left(\\frac{" + (a / comdenom) + "}{" + (b / comdenom) + "}\\right)\\\\[5pt]";
            }
            if ((b / comdenom) === 1) {
                suma += "&=log_b" + (a / comdenom) + "\\\\[5pt]";
            }
            suma += "\\end{aligned}$$";
            break;

        case 3:
            a = rndgen(2, 9, 0, 1, -1);
            sumq += "Simplify the following.";
            sumq += "$$log_b\\left(\\frac{1}{" + a + "}\\right)$$";
            suma += "$$\\begin{aligned}&=log_b" + a + "^{-1}\\\\[5pt]";
            suma += "&=-log_b" + a + "\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;

        case 4:
            sumq += "Transpose the following to make n the subject.";
            sumq += "$$log(x^n)=log(y)$$";
            suma += "$$\\begin{aligned}nlog(x)&=log(y)\\\\[5pt]";
            suma += "n&=\\frac{log(y)}{log(x)}\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;

        case 5:
            sumq += "Transpose the following to make n the subject.";
            sumq += "$$log(a)+log(b)=log(c^n)$$";
            suma += "$$\\begin{aligned}log(ab)&=nlog(c)\\\\[5pt]";
            suma += "\\frac{log(ab)}{log(c)}&=n\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;

        case 6:
            sumq += "Transpose the following to make n the subject.";
            sumq += "$$10^{2n}=40$$";
            suma += "$$\\begin{aligned}log(10^{2n})&=log(40)\\\\[5pt]";
            suma += "2nlog(10)&=log(40)\\\\[5pt]"
            suma += "2n&=log(40)\\\\[5pt]";
            suma += "n&=\\frac{log(40)}{2}\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;

        case 7:
            sumq += "Transpose the following to make n the subject.";
            sumq += "$$log(a^n)-log(b)=log(c)$$";
            suma += "$$\\begin{aligned}log(a^n)&=log(c)+log(b)\\\\[5pt]";
            suma += "nlog(a)&=log(bc)\\\\[5pt]"
            suma += "n&=\\frac{log(bc)}{log(a)}\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;

        case 8:
            sumq += "Find the value of x in the following equation, rounding your answer to 3 decimal places where appropriate.";
            do {
                a = rndgen(1, 9, 0, 1, -1);
                b = rndgen(-9, 9, 0, 1, -1);
            } while (Math.pow(a, b) < 0.01);
            sumq += "$$log_" + a + "(x)=" + b + "$$";
            suma += "$$\\begin{aligned}x&=" + a + "^{" + b + "}\\\\[5pt]";
            suma += "&=" + thouSep(dp(Math.pow(a, b), 3, -1), "\\ ") + "\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;

        case 9:
            sumq += "Find the value of x in the following equation, rounding your answer to 3 decimal places where appropriate.";
            do {
                a = rndgen(1, 9, 0, 1, -1);
                b = rndgen(-9, 9, 0, 1, -1);
            } while (Math.pow(10, (b / a)) < 0.01);
            comdenom = Math.abs(gcd2(b, a));
            sumq += "$$" + a + "log_{\\tiny 10}x=" + b + "$$";
            suma += "$$\\begin{aligned}log_{\\tiny 10}x&=\\frac{" + b + "}{" + a + "}\\\\[5pt]";
            if (a === 1) {
                suma += "x&=10^{" + b + "}\\\\[5pt]";
            } else if (b === 0) {
                suma += "x&=10^{" + b + "}\\\\[5pt]";
            // } else if (a === Math.abs(b)) {
            //     suma += "x&=10^{" + (a / b) + "}\\\\[5pt]";
            } else if ((a / comdenom) === 1) {
                suma += "x&=10^{" + (b / comdenom) + "}\\\\[5pt]";
            } else {
                suma += "x&=10^{\\frac{" + (b / comdenom) + "}{" + (a / comdenom) + "}}\\\\[5pt]";
            }
            suma += "&=" + thouSep(dp(Math.pow(10, (b / a)), 3, -1), "\\ ") + "\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;

        case 10:
            a = rndgen(1, 9, 0, 1, -1);
            b = rndgen(2, 9, 0, 1, -1);
            sumq += "Find the value of x in the following equation, rounding your answer to 3 decimal places where appropriate.";
            sumq += "$$" + a + "^{3x}=" + b + "$$";
            suma += "$$\\begin{aligned}log(" + a + ")^{3x}&=log(" + b + ")\\\\[5pt]";
            suma += "3xlog(" + a + ")&=log(" + b + ")\\\\[5pt]";
            suma += "x&=\\frac{log(" + b + ")}{3log(" + a + ")}\\\\[5pt]";
            suma += "&=" + dp((Math.log10(b)) / (3 * Math.log10(a)), 3, -1) + "\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;

        case 11:
            a = rndgen(1, 9, 0, 1, -1);
            b = rndgen(1, 9, 0, 1, -1);
            sumq += "Find the value of x in the following equation, rounding your answer to 3 decimal places where appropriate.";
            sumq += "$$log(20^x)=log(" + a + ")+log(" + b + ")$$";
            suma += "$$\\begin{aligned}xlog(20)&=log(" + a + "\\times" + b + ")\\\\[5pt]";
            suma += "x&=\\frac{log(" + (a * b) + ")}{log(20)}\\\\[5pt]";
            suma += "&=" + dp((Math.log10(a * b)) / Math.log10(20), 3, -1) + "\\\\[5pt]";
            suma += "\\end{aligned}$$";
            break;
    }
    var notesLink = "images/20240924-TG5MathsBook2-AlgebraV1_0-APO.pdf#page=27"
    var sumArray = [sumq, suma, notesLink];
    return sumArray;
}